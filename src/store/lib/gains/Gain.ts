import CTX from "store/lib/CTX";

export default class Gain {
	protected gainNode: GainNode;
	constructor(private _value: number = 1){
		this.gainNode = CTX.context.createGain();
	}
	get nodeToConnect(){
		return this.gainNode;
	}
	get node() {
		return this.nodeToConnect;
	}
	get value() {
		return this._value;
	}
}
