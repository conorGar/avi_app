import React from 'react'
import Axios from 'axios'
import './App.css'
import Search from './components/Search/search'
import FoodList from './components/FoodList'
import Header from './components/Header'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      homePage: 'healthy',
      recipes: [],
      bookmarks: [],
      isLoaded: false
    }
  }
  componentDidMount() {
    this.getData()
    this.setState({ isLoaded: true })
  }
  getData = async () => {
    try {
      const KEY = process.env.REACT_APP_TOKEN
      const ID = process.env.REACT_ID_TOKEN

      const apiUrl = `https://api.edamam.com/search?q=${this.state.homePage}&app_id=${ID}&app_key=${KEY}&from=0&to=12`
      const apiResponse = await Axios.get(apiUrl)
      const searchResult = apiResponse.data
      if (apiResponse.status === 200) {
        this.setState(prevState => ({
          recipes: searchResult.hits
        }))
      }
    } catch (error) {
      console.log(error)
    }
  }
  AddInput = async () => {
    try {
      const KEY = process.env.REACT_APP_TOKEN
      const ID = process.env.REACT_ID_TOKEN
      const apiUrl = `https://api.edamam.com/search?q=${this.state.input}&app_id=${ID}&app_key=${KEY}&from=0&to=12`
      const apiResponse = await Axios.get(apiUrl)
      const newSearchResult = apiResponse.data
      if (apiResponse.status === 200) {
        this.setState(prevState => ({
          recipes: newSearchResult.hits
        }))
      }
    } catch (error) {
      console.log(error)
    }
  }
  HandleChange = event => {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="">
          <Header />
        </div>
        <div className="banner">
          <Search
            updateSearch={this.AddInput}
            handleChange={this.HandleChange}
          />
        </div>

        {/* <FoodList
          handleClick={this.HandleClick}
          recipes={this.state.recipes}
          recipe={this.props.recipes}
          state={this.state}
        /> */}

        <div className="recipe-list-container">
          <FoodList
            recipes={this.state.recipes}
            recipe={this.props.recipes}
            state={this.state}
          />
        </div>
      </div>
    )
  }
}

export default App
