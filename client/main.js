import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

// Components
import App from './../imports/ui/App';

//===============================================
// start meteor
//===============================================
Meteor.startup( () => {

//-----------------------------
// Tracker
  Tracker.autorun( () => {
     ReactDOM.render(
       <App />,
       document.getElementById('app')
     );
  });

});
