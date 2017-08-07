import React from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

import {PlayersData, calculatePlayerPositions} from './../api/playersData';


export default class App extends React.Component{
  render(){
    let players = PlayersData.find( {}, {sort: {score: -1}} ).fetch();
    let myTitle = "Super super awesome title";
    let positionedPlayers = calculatePlayerPositions(players);

    return (
        <div>
          <TitleBar title={myTitle} />
          <div className="wrapper">
              <PlayerList players={positionedPlayers}/>
            <AddPlayer />
          </div>
        </div>
    );
  }
}
