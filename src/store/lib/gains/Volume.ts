import Gain from "./Gain";


export default class Volume extends Gain{

    soundDown(_time:number){
        console.log('exponential sound down', _time);
        this.gainNode.gain.exponentialRampToValueAtTime(0.0000001, _time);
    }

    soundUp(_time:number){
        console.log('exponential sound up', _time);
        this.gainNode.gain.exponentialRampToValueAtTime(this.value, _time)
    }
}
