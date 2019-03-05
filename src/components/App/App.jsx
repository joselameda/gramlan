import React from 'react';
import Api from '../../services/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [],
    };
  }

  componentDidMount() {
    const data = await Api.featchBrands();
    console.log(data);
    this.setState({ brands: data });
    console.log(this.state.brands);
  }

  render() {
    return (
      <div className="App">
        {JSON.stringify(this.state.brands)}
      </div>
    );
  }
}

export default App;
