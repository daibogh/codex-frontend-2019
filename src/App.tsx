import React from 'react';
import './App.css';
import {observer} from 'mobx-react';
import TracksContainer from "./components/TracksContainer";

@observer
class App extends React.Component {
  render(){
    return <>
      <div id="app">
        <TracksContainer/>
      </div>
    </>
  }
}

export default App;
