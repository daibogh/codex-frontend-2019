import React from 'react';
export default class TracksHeader extends React.Component {
    render(): React.ReactNode {

        return <div className="row header border-bottom">
            <div>Tracks</div>
            <div>Instrument</div>
            <div>Interval, ms</div>
            <div>Effect</div>
            <div>Effect gain</div>
            <div>Track volume</div>
        </div>;
    }
}
