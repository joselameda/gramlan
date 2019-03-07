import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import CardPrincipal from '../CardPrincipal';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchBrands();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="columns">
          <div className="column is-5 is-offset-3" id="cardPrincipal">
            <CardPrincipal />
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
