import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { StyleSheet, css } from 'aphrodite';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Booklist from './Booklist';
import BookDetails from './BookDetails';

class Dashboard extends Component {
    render(){
      return(
      <div>
        <Booklist />
        <BookDetails />
      </div>
      );
    }
}

export default Dashboard;
