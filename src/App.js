import React, { Component } from 'react';
import './App.css';
import ExchangedCurrency from './Components/CurrencyConverter';

class App extends Component {
  render() {
    return (
        <>
        <h2>HOC</h2>
        <ExchangedCurrency/>
        </>
    );
  }
}

export default App;
