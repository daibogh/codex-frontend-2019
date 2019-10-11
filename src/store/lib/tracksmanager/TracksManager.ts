import Track from "store/lib/tracks/Track";
import Melody from "store/lib/melody/Melody";
import CTX from "store/lib/CTX";
import {observable, computed, action} from "mobx";


export default class TracksManager {
    @observable private readonly tracksMap: Map<string, Track>;
    private count = 0;
    @computed get tracks() {
        console.log('tracks');
        console.log(++this.count);
        return Array.from(this.tracksMap.entries());
    }
    @action
    preconfigure(){
        // @ts-ignore
        window.tracksMap = this.tracksMap;
        if (!CTX.isApproved){
            CTX.setApproved(true);
        }
        this.tracksMap.set(
                'main', new Track(new Melody("A4 A4 C5 D5 D5 G4"))
        )
    }
    constructor() {
        this.tracksMap = new Map();
    }

    play(id: string) {
        const track = this.tracksMap.get(id);
        if (track)
            track.playByNotes();
    }

    playAll() {
        for (let id of this.tracksMap.keys()) {
            this.play(id);
        }
    }
    stop(id:string) {
        const track = this.tracksMap.get(id);
        if ( track ){
            track.setPause(true);
            track.isStopped = true;
        }

    }
    switchPlay(id: string, isPlay: boolean) {
        console.log('switch play to ',isPlay);
        if (isPlay) {

            this.play(id);
        }else{
            this.stop(id);
        }
    }


}
