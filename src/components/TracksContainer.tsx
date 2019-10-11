import React from "react";
import TracksHeader from "./TracksHeader";
import {observer} from 'mobx-react';
import Switch from "../components/Switch";
import TracksManager from "store/lib/tracksmanager/TracksManager";
import TrackWrapper from "./TrackWrapper";

@observer
export default class TracksContainer extends React.Component {
    private tracksManager = new TracksManager();

    render(): React.ReactNode {
        // console.log(this.tracksManager);
        // console.log(this.tracksManager.tracks);
        for (let i in this.tracksManager.tracks) {
            console.log(this.tracksManager.tracks[i]);
        }
        return <>
            <div className="tracks-container">
                <Switch switchFunc={() => this.tracksManager.preconfigure()}/>
                <TracksHeader/>
                {
                    this.tracksManager.tracks.map(
                        (val) => {
                            return <TrackWrapper trackInfo={val}
                                                 switchPlay={
                                                     (id: string, isPlay: boolean) => this.tracksManager.switchPlay(
                                                         id, isPlay)}/>
                        }
                    )
                }
            </div>
        </>;
    }
}
