import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { StyleSheet, css } from 'aphrodite';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  container: {
    justifyContent: 'space-around',
    marginTop: '50px',
    paddingTop: '40px',
    backgroundColor: '#eee',
    minHeight: '500px',
    fontSize: '1.2em',
    textAlign: 'center'
  }
};

class Booklist extends Component {
  render(){
    if(!this.props.activebook){
      return (
        <div style={styles.container}>
          <h3>You have not selected a book.</h3>
        </div>
      );
    }
    return(
      <div style={styles.container}>
        <h3>Book Details:</h3>
        {this.props.activebook.title}
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
