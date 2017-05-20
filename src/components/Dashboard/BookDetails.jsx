import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { StyleSheet, css } from 'aphrodite';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class Booklist extends Component {
  render(){
    console.log(this.props)
    return(
      <div className="">
        <h3>Book details go here:</h3>
        {this.props.activebook ? <div>{this.props.activebook.title}</div> : 'you have not selected a book'}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    activebook: state.activebook
  }
}

export default connect(mapStateToProps)(Booklist);
