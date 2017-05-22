import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectbook } from '../../action/booklist';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router'
import { StyleSheet, css } from 'aphrodite';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class Booklist extends Component {
    renderList(){
      return this.props.books.map((book) => {
        return(
          <GridTile
                key={book.img}
                title={book.title}
                onClick={() => this.props.selectbook(book)}
                subtitle={<span>by <b>{book.author}</b></span>}
                actionIcon={
                  <IconButton
                    onClick={() => this.props.selectbook(book)}
                  ><StarBorder color="white" /></IconButton>}
                >
                <img src={book.img} />
          </GridTile>
        );
      });
    }

    render(){
      return(
        <div style={styles.root}>
          <GridList
            cellHeight={180}
            style={styles.gridList}
          >
            <Subheader>My Current Booklist</Subheader>
            {this.renderList()}
          </GridList>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectbook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
