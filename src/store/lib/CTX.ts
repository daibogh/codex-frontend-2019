import {computed, observable, action} from 'mobx';
class CTX {

	@observable private ctx?: AudioContext;
	@observable private _isApproved: boolean = false;
	@action
	setApproved(ans: boolean) {
		this.isApproved = ans;
	}
	set isApproved(ans: boolean){
		this._isApproved = ans;
		if (this.isApproved){
			this.ctx = new AudioContext();
		}
	}
	@computed
	get isApproved() {
		return this._isApproved;
	}
	@computed
	get context():AudioContext {
		if (this.ctx)
			return this.ctx;
		else
			throw Error('ctx is not defined');

	}
}

export default new CTX();
