import React, { Component } from "react";
import CurrencyDisplay from "./CurrencyDisplay";

const withCurrency = BaseComponent =>
  class Currency extends Component {
    state = {
      currencyChosen: false,
      selectedCurrency: "Select Currency",
      amount: 0
    };

    handleAmountIncrease = () =>
      this.setState(prevState => {
        return {
          amount: (prevState.amount += 1)
        };
      });

    handleAmountDecrease = () =>
      this.setState(prevState => {
        return {
          amount: (prevState.amount -= 1)
        };
      });

    handleOptionSelect = e => {
      const userValue = e.target.value;
      this.setState(() => {
        return {
          selectedCurrency: userValue,
          currencyChosen: userValue === "Select Currency" ? false : true
        };
      });
    };

    render() {
      const currencyData = [
        { name: "Japanese Yen", symbol: "¥", rate: 113.6 },
        { name: "British Pound", symbol: "£", rate: 0.77 },
        { name: "Canadian Dollar", symbol: "CAD", rate: 1.32 },
        { name: "Mexican Peso", symbol: "Mex$", rate: 20.41 },
        { name: "Swiss Franc", symbol: "Fr.", rate: 1.01 }
      ];

      const currencyOptions = currencyData.map((currency, i) => (
        <option key={i} value={i}>
          {currency.name}
        </option>
      ));

      return (
        <div>
          <select onChange={this.handleOptionSelect} value={this.state.selectedCurrency}>
            <option value="Select Currency">
              Select Currency
            </option>
            {currencyOptions}
          </select>
          <div>
            <button onClick={this.handleAmountIncrease} className="add">
              +
            </button>
            <button onClick={this.handleAmountDecrease} className="minus">
              -
            </button>
          </div>
          {this.state.currencyChosen ? (
            <BaseComponent
              currency={currencyData[this.state.selectedCurrency]}
              amount={this.state.amount}
            />
          ) : (
            <p>Please Select Currency</p>
          )}
        </div>
      );
    }
  };

const ExchangedCurrency = withCurrency(CurrencyDisplay);

export default ExchangedCurrency;
