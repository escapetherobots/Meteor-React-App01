import React from 'react';
import styled from 'styled-components';
import {PlayersData} from './../api/playersData';

//===============================================
//Class
//===============================================
class AddPlayer extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    let playerName = e.target.playerName.value;
    let playerScore = e.target.playerScore.value;

    if(playerName){
      e.target.playerName.value = '';
      e.target.playerScore.value = 0;
      e.target.playerName.focus();
      PlayersData.insert({name: playerName, score: Number(playerScore)});
    }
  }

  render(){
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" className="form__input" name="playerName" placeholder="Player Name" required="required" />
          <input type="number" name="playerScore" required="required" />
          <button className="button button--round5">Add Player</button>
        </form>
      </div>
    );
  }

}

//===============================================
export default AddPlayer;
