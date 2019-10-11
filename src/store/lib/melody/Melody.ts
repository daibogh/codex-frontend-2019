import {computed, observable, action} from "mobx";


export default class Melody {
    @observable private _melody: string[] = [];
    private _noteIndex: number;
    @observable private _rawMelody:string
    constructor(_rawMelody: string){
        this._rawMelody = _rawMelody
        this.setMelody(this._rawMelody);
        this._noteIndex = 0;

    }
    @computed
    get melody(){
        return this._melody;
    }
    @computed
    get rawMelody(){
        return this._rawMelody;
    }
    @action
    setMelody(rawMelody:string){
        console.log('setmelody', rawMelody);
        this._rawMelody = rawMelody;
        this._melody = rawMelody.split(" ");
        console.log(this._melody);
    }
    get nextNote():string{
        const note = this.melody[this._noteIndex];
        this._noteIndex = this._noteIndex + 1 === this._melody.length ? 0 : ++this._noteIndex;
        console.log(note);
        return note;
    }



}
