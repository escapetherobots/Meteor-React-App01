import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {PlayersData} from './../api/playersData';


//===============================================
//Styled Components
//===============================================
const MyListItem = styled.li`


  &:nth-of-type(odd){
    background-color: #e8e8e8;
  }

  list-style: none;
  font-size: 1.6rem;
  border: 1px solid #cccccc;
  border-radius: 6px;
  margin: 8px;
  padding: 6px 10px;
  background-color: #c9c9c9;
  color: #555555;
  transition: all 1s ease;

  &:hover ${MyListItem} {
    background-color: #444444;
    color: white;
  }
`;

const ListItemButton = styled.button`

    font-size: 1.6rem;

    &:hover ${ListItemButton} {

    }
`;





//===============================================
//Class
//===============================================
class Player extends React.Component{
  onIncrement(event){
    const targetId = event.currentTarget.dataset.id;
    PlayersData.update(targetId, {$inc: {score: 1}});
  }

  onDecrement(event){
    const targetId = event.currentTarget.dataset.id;
    PlayersData.update(targetId, {$inc: {score: -1}});
  }

  onRemove(event){
    PlayersData.remove({_id: event.currentTarget.dataset.id});
  }

  render() {
    let {_id, name, score, rank, position} = this.props.player;
    let itemClassName = `item item--position-${rank}`;
    return (
      <li key={_id} className={itemClassName}>
        <div className="player">
          <div className="player__details">
            <h3 className="player__name">{name}</h3>
            <p className="player__stats">
              {position} {score} Points
            </p>
          </div>
          <div className="player__actions">
            <ListItemButton className="button button--round" data-id={_id} onClick={this.onIncrement.bind(this)}>+</ListItemButton>
            <ListItemButton className="button button--round" data-id={_id} onClick={this.onDecrement.bind(this)}>-</ListItemButton>
            <ListItemButton className="button button--round" data-id={_id} onClick={this.onRemove.bind(this)}>x</ListItemButton>
          </div>
        </div>

      </li>
    );
  }
}


//===============================================
//Props
//===============================================
Player.propTypes = {
  player: PropTypes.object.isRequired
}


//===============================================
export default Player;
