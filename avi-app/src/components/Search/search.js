import React from 'react'
import './search.css'


class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    handleInput = (event) => {
        event.preventDefault();
        this.props.updateSearch()
    }
      handleChange = (event) => {
          event.preventDefault();
          this.props.handleChange(event)
      }

    render(){
        return(
            <div className="banner-image">
            <div className="search">
            <h2 className="search-header">Looking for inspiration?</h2>
            <p className="search-sub-header">Search millions of delicious, quick, and healthy recipes...</p>
            <form className="search-form"  onSubmit={this.handleInput}>
            <input className='search-bar-text'placeholder='Search Recipes' type="text" onChange={this.handleChange}/>
            <input className="search-bar-button"  value='Search' type="submit"></input>
            </form>

            <form className="filter" onSubmit={this.handleSubmit}> 
                 <select  className="drop-down" onChange={this.handleChange} placeholder="filter" >
                 <option value="">See only the recipes right for you</option>
                  <option className="drop-down-option"value="vegan">Vegan</option>
                  <option className="drop-down-option" value="vegetarian">Vegetarian</option>
                  <option className="drop-down-option" value="keto">Keto</option>
                  <option className="drop-down-option" value="gluten-free">Gluten Free</option>
                  <option className="drop-down-option" value="paleo">Paleo</option>
                  <option className="drop-down-option" value="low-sodium">Low Sodium</option>
                  <option className="drop-down-option" value="dairy-free">Dairy Free</option>
             </select>
            </form>
        </div>
        <div className="inspire-box">
             <p className="inspire">Not sure what you are in the mood for? <button className="inspire-button">Inspire</button></p>
            </div>
        </div>
       
     
        
        )
    }
}

export default Search