import React from 'react';
import Player from './Player';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FlipMove from 'react-flip-move';

//===============================================
//Styled Components
//===============================================
const MyList = styled.ul`
  margin: auto;
`;


//===============================================
//Class
//===============================================
class PlayerList extends React.Component {

  renderPlayers(){
    let {players} = this.props;

    if(players.length > 0) {
      return players.map( (player) => {
        return (<Player key={player._id} player={player} />);
      });
    } else {
      return (
        <div className="item__message">
          <p>Please add a player</p>
        </div>
      );
    }




  }

  render() {
    return (
      <div className="item">
        <MyList>
          <FlipMove maintainContainerHeight={true}>
            {this.renderPlayers()}
          </FlipMove>
        </MyList>
      </div>
    );
  }
}


//===============================================
//Props
//===============================================
PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}

//===============================================
export default PlayerList
