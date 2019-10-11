import React from 'react';

interface Props {
    switchFunc: () => void
}

export default class Switch extends React.Component<Props> {
    render(): React.ReactNode {
        const {switchFunc} = this.props;
        return <div className="switch-container">
            <input type="checkbox" className="switch" id="switch-field" onChange={switchFunc}/>
            <label className="switch-label" htmlFor="switch-field" />
            </div>

    }
}
