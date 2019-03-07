import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchBrands();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="columns">
          <div className="column is-5 is-offset-3">
            {JSON.stringify(this.props.brands)}
          </div>
          <div className="column">Auto</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  brands: state.brand.brands,
});

const mapDispachToProp = dispatch => ({
  fetchBrands: dispatch.brand.fetchBrands,
});

export default connect(mapStateToProps, mapDispachToProp)(App);
