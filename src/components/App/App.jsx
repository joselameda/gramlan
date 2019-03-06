import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBrands();
  }

  render() {
    return (
      <div className="App">
        {JSON.stringify(this.props.brands)}
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
