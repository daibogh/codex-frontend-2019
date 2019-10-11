import {observable, action} from "mobx";
import Oscillator from "store/lib/sources/oscillator/Oscillator";
import Source from "store/lib/sources/Source";
import Effect from "store/lib/effects/Effect";
import NullEffect from "store/lib/effects/NullEffect";
import Melody from "store/lib/melody/Melody";
import CTX from "store/lib/CTX";
import {computed} from 'mobx';

export default class Track {
    @observable public _isPause: boolean = false;
    @observable private _interval: number = 1;
    @observable private configured: boolean = false;
    @observable private _source: Source;
    @observable private _effect: Effect;
    @observable public _melody: Melody;
    private _isStopped: boolean = false;
    constructor (melody: Melody, source?: Source, effect?: Effect){
        this._source = source ? source : new Oscillator();
        this._effect = effect ? effect : new NullEffect();
        this._melody = melody;
        this.configure();
    }

    @computed
    get isPause(){
        return this._isPause;
    }
    @action
    setPause(val:boolean){
        this._isPause = val;
    }
    configure() {
        this._source.addEffect(this._effect);
        this.configured = true;
    }

    @computed
    get interval (){
        return this._interval;
    }
    set interval (duration: number){
        this._interval = duration;
    }
    @action
    setInterval(interval:number) {
        this.interval = interval;
    }
    set isStopped(val: boolean) {
        this._isStopped = val;
        if (this._isStopped) {
            this._source.stop(CTX.context.currentTime);
        }
    }
    pause(){
        this.setPause(true);
    }
    playByNotes(){
        if (!this.configured)
            return;
        let time = CTX.context.currentTime;
        let count = 0;
        if (CTX.isApproved){
            this.setPause(false);
            while (!this.isPause){
                count++;
                if (count > 20) {
                    this.setPause(true);
                    break;
                }
                this._source.playByNote(this._melody.nextNote,
                                        time,
                                        this.interval);
                time += this.interval;
            }
            this._source.stop(time);
        }

    }

}
