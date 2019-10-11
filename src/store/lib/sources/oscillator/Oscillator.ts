import Source from "store/lib/sources/Source";
import noteInfo from "store/lib/sources/oscillator/OscillatorNotes";
import Effect from "store/lib/effects/Effect";
import CTX from "store/lib/CTX";


class Oscillator extends Source {
    private _note:string = "";
    public node: OscillatorNode;
    private _time: number = 0;
    constructor(){
        super();
        if(CTX.context === null){
            throw Error('ctx is not defined');
        }
        this.node = CTX.context.createOscillator();
        this.node.connect(this.volume.nodeToConnect);
        // this.node.start(CTX.context.currentTime);
    }
    set note(note: string){
        this._note = note;
        if (this.node !== undefined) {
               this.node.frequency.setValueAtTime(noteInfo(this.note).Hz, this._time);
               console.log('set note oscillator',this._time, noteInfo(this.note).Hz);
           }
    }
    setNote(note:string, _time:number){
        this._time = _time;
        this.note = note;
    }
    get note() {
        return this._note;
    }
    playByNote(note: string, startTime:number, duration: number): void {
        if (!this.isStarted){
            this.isStarted = true;
            this.node.start(startTime);
        }
        this.volume.soundUp(startTime);
        this.setNote(note, startTime);
        this.volume.soundDown(startTime + duration);
        console.log(startTime, duration);

    }
    stop(timeToStop:number){
        this.node.frequency.setValueAtTime(0, timeToStop);
        this.node.frequency.cancelScheduledValues(timeToStop);
        this.volume.node.gain.cancelScheduledValues(timeToStop);
        // this.volume.cancelScheduledValues(timeToStop);
    }
    // playNote(note: string, startTime: number, duration: number) {
    //     this.note = note;
    //     this.play(startTime,duration);
    // }

    addEffect(effect: Effect): void {
        this.nodeToConnect.connect(effect.node);
    }
}

export default Oscillator;
