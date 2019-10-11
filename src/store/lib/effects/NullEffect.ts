import Effect from "store/lib/effects/Effect";


export default class NullEffect extends Effect {

    _effect:AudioNode|null = null;

    connect(): void {
    }

    get node(): AudioNode {
        return this._destination;
    }


}
