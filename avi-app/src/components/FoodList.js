import React from 'react'
import './FoodList.css'
import bookmarkNotSelected from './bookmark-not-selected.png'
import bookmarkSelected from './bookmark-selected.png'
import star from './star@2x.png'

class FoodList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bookmark: bookmarkNotSelected,
      bookmarkIsClicked: false
    }
    this.props = props
  }

  handleClick = event => {
    event.preventDefault()
    let { alt } = event.target
    console.log(alt)
    if (this.state.bookmarkIsClicked === false) {
      this.setState({
        bookmark: bookmarkSelected,
        bookmarkIsClicked: true
      })
    } else {
      this.setState({
        bookmark: bookmarkNotSelected,
        bookmarkIsClicked: false
      })
    }

    // this.state.bookmarkIsClicked === false ? this.setState({ bookmark })

  }

  renderRecipes = () => {
    return this.props.recipes.map((item, index) => {
      return (
        <div className="recipes" key={index}>
          <img src={item.recipe.image} alt="recipes" className="img" />
          <div className="title-bookmark-container">
            <p className="title">{item.recipe.label}</p>{' '}
            <img
              className="bookmark"
              onClick={this.handleClick}
              src={this.state.bookmark}
              alt={index}
            />
          </div>

          <img className="star" src={star} />
          <img className="star" src={star} />
          <img className="star" src={star} />
          <img className="star" src={star} />
          <img className="star" src={star} />
        </div>
      )
    })
  }

  render() {
    // console.log(this.renderRecipes)
    return <div className="recipe-list">{this.renderRecipes()}</div>
  }
}

export default FoodList
