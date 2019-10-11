import React from 'react';
import {observer} from "mobx-react";
import Track from "store/lib/tracks/Track";
import './style.css';
import {observable} from 'mobx';

interface ReactWrapperProps {
    trackInfo: [string, Track];
    switchPlay: (id: string, isPlay:boolean) => void;
}

@observer
class TrackWrapper extends React.Component<ReactWrapperProps> {
    @observable private isPlayed = false;
    switchPlayFunc() {
        const {
            switchPlay,
            trackInfo
        } = this.props;
        const trackId = trackInfo[0];
        this.isPlayed = !this.isPlayed;
        switchPlay(trackId, this.isPlayed);
    }

    render(): React.ReactNode {
        const {
            trackInfo,
        } = this.props;
        const trackDetails = trackInfo[1];
        let playButton: React.ReactNode;
        if (this.isPlayed) {
            playButton = <button className={'button-stop'} onClick={() => this.switchPlayFunc()}>Stop</button>
        } else {
            playButton = <button className={'button-play'} onClick={() => this.switchPlayFunc()}>Play</button>
        }
        const melodyInput = <input type='text'
                                   value={trackDetails._melody.rawMelody}
                                   onChange={(e) => trackDetails._melody.setMelody(e.target.value)}
        />;
        return <div className='row' children={[playButton, melodyInput]} />
    }
}

export default TrackWrapper;
