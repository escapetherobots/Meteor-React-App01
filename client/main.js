import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import styled from 'styled-components';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const MyList = styled.ul`
  max-width: 50%;
  margin: auto;
`;

const MyListItem = styled.li`
  &:hover ${MyListItem} {
    background-color: #006699;
  }

  &:nth-of-type(odd){
    background-color: #cccccc;

    &:hover ${MyListItem}{
      background-color: #666666;
    }
  }
  font-size: 1.5em;
  border: 1px solid #006699;
  border-radius: 6px;
  margin: 4px;
  padding: 6px 10px;
  background-color: #33ccff;
  color: white;
`;

// const players = [
//   {
//     _id: 6465423135,
//     name: "zach",
//     score: 99
//   },
//   {
//     _id: 7832121546,
//     name: "joe",
//     score: 70
//   },
//   {
//     _id: 3214154456,
//     name: "billy",
//     score: 66
//   },
//   {
//     _id: 3456255526,
//     name: "jimmy",
//     score: 72
//   },
// ];

const renderItems = (list) => {
  return list.map( (item) => {
    return (
      <MyListItem key={item._id}>{item.name}:: {item.score}</MyListItem>
    );
  });
}


const handleSubmit = e => {
  e.preventDefault();
  let playerName = e.target.playerName.value;
  let playerScore = e.target.playerScore.value;

  if(playerName){
    e.target.playerName.value = '';
    e.target.playerScore.value = 0;
    Players.insert({name: playerName, score: playerScore});
  }
}

// start meteor
Meteor.startup( () => {


  Tracker.autorun( () => {

     let players = Players.find().fetch();
     console.log('Client Players::');
     console.table(players);

     let title = <h1>My First Component</h1>
     let name = "ZZZ";
     let component = (
       <div>
         {title}
         <p>Hello {name}</p>
         <p>Second paragraph</p>
         <MyList>
           {renderItems(players)}
         </MyList>
         <form onSubmit={handleSubmit}>
           <input type="text" name="playerName" placeholder="Player Name" required="required" />
           <input type="number" name="playerScore" required="required" />
           <button>Add Player</button>
         </form>
       </div>
     );
     ReactDOM.render(
       component,
       document.getElementById('app')
     );
  });

});

// class myApp extends React.Component{
//   render(){
//     return (
//
//     );
//   }
// }
//
// export default myApp;
