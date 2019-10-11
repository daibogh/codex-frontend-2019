import Volume from "store/lib/gains/Volume";
import Effect from "store/lib/effects/Effect";

export default abstract class Source {
	abstract get note(): string;
	abstract set note(val: string);
	protected isStarted = false;
	public abstract node: AudioNode;
	protected constructor(protected volume: Volume = new Volume()) {
	}

	// abstract play(startTime: number, duration: number): void;
	abstract stop(stopTime?:number):void;
	abstract addEffect(node: Effect): void;
	abstract setNote(note: string, _time: number):void;
	get nodeToConnect(){
		return this.volume.nodeToConnect;
	}
	abstract playByNote(note:string, startTime: number, duration: number) : void
	// {
		// if (!this.isStarted){
		// 	this.isStarted = true;
		// 	this.node.start(startTime);
		// }
		// this.volume.soundUp(startTime);
		// this.setNote(note, startTime);
		// this.volume.soundDown(startTime + duration/2)
		// this.play(startTime, duration);
	// }
}

