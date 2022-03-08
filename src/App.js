import React, { Component } from "react";
import Search from "./components/Search";
import WeatherNow from "./components/WeatherNowItem";
import Weather24h from "./components/Weather24hItem";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Agag",
      data: []
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    let renderHTML = ()=>{
      if(this.state.data.length > 0){
      return (
       <>
        <WeatherNow data={this.state.data[0]}/>
        <Weather24h dataList={this.state.data} />  
       </>
      );}else{
        return(
          <div className="no-data" style={{height: "100vh"}}>
            <p>No data to show please search for a city</p>
          </div>
        )
      }
    }

    return (
      <div className="app">
       <Search getData={this.getFilteredData} />
       {renderHTML()}
      </div>
    );
  }

  getFilteredData = (arg) =>{
      console.log("arg" , arg);
      console.log(typeof arg)
      let {list} = arg;
      this.setState({data: list});
      console.log("myList state:" , list);
  }
}

export default App;
