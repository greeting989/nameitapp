//import BookList from "./Mini Bok Project/BookList";
import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Resultcontainer from "./components/Resultcontainer";
const name = require("@rstacruz/startup-name-generator");
class App extends Component {
  constructor() {
    super();
    this.state = {
      heading: "NameIt App",
      headerText: true,
      suggNames: [],
    };
  }
  handleInputChange = (inputtext) => {
    this.setState({
      headerText: !inputtext,
      suggNames: name(inputtext),
    });
  };
  render() {
    // console.log(name("cloud"));
    return (
      <>
        <Header
          heading={this.state.heading}
          headerText={this.state.headerText}
        />

        <SearchBox onInputChange={this.handleInputChange} />
        <Resultcontainer suggNames={this.state.suggNames} />
      </>
    );
  }
}

export default App;
