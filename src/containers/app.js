import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from '../components/table';
import Selector from '../components/selector';

import { fetchData } from '../actions';

import styles from './styles/main.scss';

const mapStateToProps = state => ({
  data: state.products.get('data'),
});

@connect(mapStateToProps, { fetchData })
class App extends Component {
  componentWillMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    return(
      <div className="container">
        <Selector />
        <Table />
      </div>
    )
  };
};

export default App;
