import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import CardPrincipal from '../CardPrincipal';
import SecondCard from '../SecondCard';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const {
      name, nickName, profilePicUrl, cards, followed
    } = this.props.user;
    const cardsBlock = (
      !name || !cards
    ) ? null : cards.map(card => (
      <CardPrincipal
        card={card}
        name={name}
        nickName={nickName}
        profilePicUrl={profilePicUrl}
      />
      ));
    return (
      <div className="App">
        <Header />
        <div className="columns" id="columns">
          <div className="column is-5 is-offset-3" id="cardPrincipal">
            {cardsBlock}
          </div>
          <div className="column is-2 is-fixed-top" id="secondCard">
            <SecondCard />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProp = state => ({
  user: state.user.user,
});

const mapDispachToProp = dispatch => ({
  fetchUser: dispatch.user.fetchUser,
});

export default connect(mapStateToProp, mapDispachToProp)(App);
