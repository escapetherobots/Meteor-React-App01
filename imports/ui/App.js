import React from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

import {PlayersData} from './../api/playersData';


export default class App extends React.Component{
  render(){
    let players = PlayersData.find( {}, {sort: {score: -1}} ).fetch();
    let myTitle = "Super super awesome title";

    return (
        <div>
          <TitleBar title={myTitle} />
          <div className="wrapper">
            <PlayerList players={players}/>
            <AddPlayer />
          </div>
        </div>
    );
  }
}
