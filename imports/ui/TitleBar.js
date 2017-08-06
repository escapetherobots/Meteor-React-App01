import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//===============================================
//Styled Components
//===============================================
const TitleBarDiv = styled.div`
  background-color: #006699;
  height: 70px;
  width: 100%;
  padding: 0;
  margin: 0;
  top: -30px;
`;

const TitleBarH1 = styled.h1`
  color: white;
  font-weight: 100;
  text-transform: uppercase;
  text-align: center;
  padding-top: 0;
  margin-top: 0;
  font-size: 3.6rem;
`;



//===============================================
//Class
//===============================================
class TitleBar extends React.Component{
  render(){
    return (
      <TitleBarDiv className="title-bar">
        <div className="wrapper">
          <TitleBarH1>{this.props.title}</TitleBarH1>
        </div>
      </TitleBarDiv>
    );
  }
}


//===============================================
//Props
//===============================================
TitleBar.propTypes = {
  title: PropTypes.string.isRequired
}

TitleBar.defaultProps = {
  title: 'Super Lame Default Title'
}


//===============================================
export default TitleBar;
