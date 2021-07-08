/* =================================================================The App Component======================================================= */

/* import statement to be able to create React component */
import React from "react";

/* import statement to to use the Fetch API*/
/* import "isomorphic-fetch"; */



//importing Components
import Display from "./Display";
import Form from "./Form";

/* variable storing weather map API */
const apiKey = process.env.NEXT_PUBLIC_REACT_APP_L2TASK14_KEY;
const apiUrl = `http://api.openweathermap.org/data/2.5/find?lat=-26.195246&lon=28.034088&units=metric&cnt=50&appid=${apiKey}`;

/*=============================================================================class component */
class App extends React.Component {
  /* using constructor to initialize state of the App component */
  constructor() {
    super();
    /* state and its properties */
    this.state = {
      err: null,
      loaded: false,
      list: [],
      currentCity: "",
      cityData: {},
    };
  }

  /* ========================================================================ComponentDidMount=*/
  /* running fetch method here to get the data from the API when the page loads */

  componentDidMount() {
    fetch(apiUrl)
      //.then statement returning a promise with data that is parsed through the json method
      .then((res) => res.json())

      //.then statement to consume the promise above with two arguments: result for successful
      //fetch or err to handle errors
      .then(
        //successful fetch
        (result) => {
          /* data object to store the first city object in the list array */
          const data = result.list.find(
            (city) => city.name === result.list[0].name
          );
          /* updating state properties */
          this.setState({
            loaded: true,
            list: result.list,
            currentCity: result.list[0].name,
            cityData: data,
          });
        },

        // handling errors
        (err) => {
          /* updating state properties relevant to error data returned*/
          this.setState({
            loaded: true,
            err,
          });
        }
      );
  }

  /* =======================================================================Main Functionality */
  /* onChange event call function to update state */
  changeCity(selectedCity) {
    this.setState({ currentCity: selectedCity.target.value });
  }

  /* handleSubmitFunction */
  handleSubmit(selectedCity) {
    //prevent the default city from being returned
    selectedCity.preventDefault();

    /* newData object to store the city object in the list array that has the same name as the 
    currentCity state property*/
    const newData = this.state.list.find(
      (city) => city.name === this.state.currentCity
    );

    /* update the cityData state property*/
    this.setState({ cityData: newData });
  }

  /* =======================================================================The Render Method*/
  render() {
    /* deconstruction of code for better legibility */
    const { err, loaded, list, cityData } = this.state;

    /* check if fetch method returned an error */
    if (err) {
      return (
        /* if true the following is returned */
        <div className="App">
          <h1>Oops! Something went wrong...</h1> <p>{err.message}</p>
        </div>
      );

      //else if loaded is false the following is returned
    } else if (!loaded) {
      return (
        <div className="App">
          <img
            className="loading"
            src="https://media.giphy.com/media/W22b2eea2XxB6DiTWg/giphy.gif"
            alt="Loading"
          />
        </div>
      );

      /* else the App main div and its child components which have their props assigned 
      values and functionality determined*/
    } else {
      return (
        <div className="App">
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            crossorigin="anonymous"
          />

          <Display cityData={cityData} />

          <Form
            onSubmit={(e) => this.handleSubmit(e)}
            onChange={(e) => this.changeCity(e)}
            list={list}
          />
          <p className="text-dark">
            <strong>My Weather App</strong>
          </p>
        </div>
      );
    }
  }
}

export default App;
//exporting the App component so it can be imported
