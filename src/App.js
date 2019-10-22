import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GifSearch from './components/GifSearch';
import GifImages from './components/GifImages';



function handleSelection (search) {
  console.log(search)
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=Z2IU9ynLCIABokBbv8xQE3rzuwZHRWsW&q=${search}&limit=25&offset=0&rating=G&lang=en`)
  .then(res => res.json())
  .then(gifs => {
      this.setState({
        gifs,
        formError: undefined
      })
    })
    .catch(err => {
      this.setState({
        formError: err.error
      })
    })
}

class App extends Component {

  state = {
    gifs: [],
    formError: undefined
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Your React Gif Loader</h1>
          <p>
            Search for gifs here or checkout where
            <a href="https://giphy.com/" target="_blank" rel="noopener"> they come from</a>.
          </p>
          <GifSearch handleSubmit={handleSelection.bind(this)} />
          <GifImages gifs={this.state.gifs}/>
        </header>
      </div>

    )
  }
}
export default App;
