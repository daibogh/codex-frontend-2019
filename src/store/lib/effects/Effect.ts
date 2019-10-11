import Gain from "store/lib/gains/Gain";
import Volume from "store/lib/gains/Volume";
import CTX from "store/lib/CTX";


export default abstract class Effect {
    protected _destination: AudioDestinationNode;
    protected abstract _effect: AudioNode | null;

    abstract connect(): void;

    constructor(private _gain: Gain = new Volume()) {
        this._destination = CTX.context.destination;
        this.connect()
    }

    abstract get node(): AudioNode;
}

