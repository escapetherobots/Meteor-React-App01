import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import styled from 'styled-components';

const MyList = styled.ul`
  max-width: 50%;
  margin: auto;
`;

const MyListItem = styled.li`
  font-size: 1.5em;
  border: 1px solid darkblue;
  border-radius: 6px;
  margin: 4px;
  padding: 6px 10px;
  background-color: lightblue;
  color: white;
`;

const players = [
  {
    _id: 6465423135,
    name: "zach",
    score: 99
  },
  {
    _id: 7832121546,
    name: "joe",
    score: 70
  },
  {
    _id: 3214154456,
    name: "billy",
    score: 66
  },
];

const playerItems = players.map( (item) => {
  return (
    <MyListItem key={item._id}>{item.name}:: {item.score}</MyListItem>
  );
});




// start meteor
Meteor.startup( () => {
  let title = <h1>My First Component</h1>
  let name = "ZZZ";
  let component = (
    <div>
      {title}
      <p>Hello {name}</p>
      <p>Second paragraph</p>
      <MyList>
        {playerItems}
      </MyList>

    </div>
  );
  ReactDOM.render(
    component,
    document.getElementById('app')
  );
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
