import React from 'react'
import './search.css'
import Filter from '../Filter/index'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showFilter: 'filter-container-hide'
        }
    }
    handleInput = (event) => {
        event.preventDefault();
        this.props.updateSearch()
    }
      handleChange = (event) => {
          event.preventDefault();
          this.setState({
              showFilter:'filter-container-hide'
          })
          this.props.handleChange(event)
      }

    handleFilterPopup = (event) => {
        event.preventDefault();
        if(this.setState.showFilter !== 'filter-container-show'){
            this.setState({
                showFilter: 'filter-container-show'
            })
        }

    }

    render(){
        return(
            <div className="banner-image">
            <Filter handleSubmit={this.handleChange} currentClass={this.state.showFilter} />

            <div className="search">
            <h2 className="search-header">Looking for inspiration?</h2>
            <p className="search-sub-header">Search millions of delicious, quick, and healthy recipes...</p>
            <form className="search-form"  onSubmit={this.handleInput}>
            <input className='search-bar-text'placeholder='Search Recipes' type="text" onChange={this.handleChange}/>
            <input className="search-bar-button"  value='Search' type="submit"></input>
            </form>

            <form className="filter" onSubmit={this.handleSubmit}> 
                 <div  className="drop-down" onClick={this.handleFilterPopup} placeholder="filter" >
                 See only the recipes right for you
                 {/* <option value="">See only the recipes right for you</option>
                  <option className="drop-down-option"value="vegan">Vegan</option>
                  <option className="drop-down-option" value="vegetarian">Vegetarian</option>
                  <option className="drop-down-option" value="keto">Keto</option>
                  <option className="drop-down-option" value="gluten-free">Gluten Free</option>
                  <option className="drop-down-option" value="paleo">Paleo</option>
                  <option className="drop-down-option" value="low-sodium">Low Sodium</option>
                  <option className="drop-down-option" value="dairy-free">Dairy Free</option> */}

             </div>
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