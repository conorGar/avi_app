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
    let { alt } = event.currentTarget
    console.log(alt)
    if (this.state.bookmarkIsClicked === false) {
      this.setState({
        bookmark: bookmarkSelected,
        bookmarkIsClicked: true,
        alt
      })
    } else {
      this.setState({
        bookmark: bookmarkNotSelected,
        bookmarkIsClicked: false,
        alt
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
              alt={this.state.alt}
            />
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'row', height: `${25}px` }}
          >
            <img className="star" src={star} />
            <img className="star" src={star} />
            <img className="star" src={star} />
            <img className="star" src={star} />
            <img className="star" src={star} />

            <div className="review-count">(560)</div>
          </div>
        </div>
      )
    })
  }

  render() {
    // console.log(this.renderRecipes)
    return (
      <div>
        <div className="trending-categories-container">
          <p className="trending-categories">Trending Categories:</p>
          <p className="category">Breakfast</p>
          <p className="category">Food Prep</p>
          <p className="category">1 pot meals</p>
          <p className="category">Summer</p>
          <p className="category">Bowls</p>
        </div>
        <div className="recipe-list">{this.renderRecipes()}</div>
      </div>
    )
  }
}

export default FoodList
