import React from 'react'
import bookmarkIcon from '../../bookmark-not-selected.png'

import './RecipeTop.css'

function RecipeTop  (){

   

    return(
        <React.Fragment>
        <div className="search-form2" >
        <form >
        <input className='search-bar-text'placeholder='Search Recipes' type="text"/>
        <input className="search-bar-button"  value='GO!' type="submit"></input>
        </form>
        <form className="filter"> 
                 <div  className="drop-down"  placeholder="filter" >
                 Filter
             </div>
            </form>
        </div>
        <div className='recipe-container-top'>
            <div className='left-container'>
                <div className="photo-container">

                </div>
                <div className='left-below-photo-container'>
                    <div className = 'title-container'>
                        <h4>Crunchy Quinoa Salad</h4>
                    </div>
                    <div className='let-bookmark-container'>
                        <div>
                            <img
                                className="bookmark"
                                src={bookmarkIcon}
                                alt='bookmark'
                            />
                        </div>
                        <div className='left-info'>
                            <p className='title-info'>Yield: 6 servings</p>
                            <p className='title-info'>Prep Time: 30 Minutes</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className='right-container'>

                <div className='info-container'>
                    <div className='info-circle'>127</div>
                    <p className='info-category'>Calories</p>
                </div>

                <div className='info-container'>

                    <div className='info-circle'>2g</div>
                    <p className='info-category'>Total Fat</p>
                </div>

                <div className='info-container'>

                    <div className='info-circle'>23g</div>
                    <p className='info-category'>Carbs</p>
                </div>
                

                <div className='info-container'>

                    <div className='info-circle'>60mg</div>
                    <p className='info-category'>Sodium</p>
                </div>

                <div className='info-container'>

                    <div className='info-circle'>6g</div>
                    <p className='info-category'>Protein</p>
                </div>


            </div>

        </div>
        </React.Fragment>
        
    )
}


export default RecipeTop
