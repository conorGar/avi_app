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
    if (this.state.bookmarkIsClicked === false) {
      event.target.src = bookmarkSelected
      this.setState({ bookmarkIsClicked: true })
    } else {
      event.target.src = bookmarkNotSelected
      this.setState({ bookmarkIsClicked: false })
    }
  }

  renderRecipes = () => {
    return this.props.recipes.map((item, index) => {
      return (
        <div className="recipes" key={index}>
          <div className="img-container">
            <img src={item.recipe.image} alt="recipes" className="img" />
          </div>

          <div className="title-bookmark-container">
            <p className="title">{item.recipe.label}</p>{' '}
            <img
              className="bookmark"
              onClick={this.handleClick}
              src={this.state.bookmark}
              alt={index}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: `${25}px`,
              marginBottom: `${23}px`
            }}
          >
            <img className="star" src={star} alt="pic"/>
            <img className="star" src={star} alt="pic" />
            <img className="star" src={star}  alt="pic"/>
            <img className="star" src={star}  alt="pic"/>
            <img className="star" src={star} alt="pic" />

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
