import React from 'react'

import './RecipeBottom.css'

function RecipeBottom () {

    return (
        <div className='recipe-container-bottom'>
            <div className='rating-container'>
                <h6 className='rating-title'>Rating: </h6>
                <div className='stars-container'>
                    <img className="star" src="https://cdn.pixabay.com/photo/2014/10/18/10/23/star-493057_960_720.png" alt="link"/>
                    <img className="star" src="https://cdn.pixabay.com/photo/2014/10/18/10/23/star-493057_960_720.png" alt="link"/>
                    <img className="star" src="https://cdn.pixabay.com/photo/2014/10/18/10/23/star-493057_960_720.png" alt="link"/>
                    <img className="star" src="https://cdn.pixabay.com/photo/2014/10/18/10/23/star-493057_960_720.png" alt="link"/>
                    <img className="star" src="https://cdn.pixabay.com/photo/2014/10/18/10/23/star-493057_960_720.png" alt="link"/>
                    <img className="star" src="https://cdn.pixabay.com/photo/2014/10/18/10/23/star-493057_960_720.png" alt="link"/>
                </div>

                <div className='rating-counter-container'>560</div>

            </div>

            <div className='ingredients-container'>
                <h3>INGREDIENTS</h3>
                <div className='food-container'>
                    <div className='food-left-container'>
                        <li>1 cup uncooked quinoa</li>
                        <li>2 cups vegetable broth</li>
                        <li>3 (2-inch) strips of lemon zest (see hints below)</li>
                        <li>1 1/2 cups asparagus, sliced into 1/2-inch pieces</li>
                        <li>1 cup snow peas, cut in half</li>
                        <li>1/2 cup kohlrabi, peeled and sliced into thin strips</li>
                        <li>1/3 cup radishes, thinly sliced</li>
                    </div>
                    <div className='food-right-container'>
                        <li>3 tablespoons lemon juice</li>
                        <li>2 tablespoons chopped fresh chives</li>
                        <li>2 tablespoons chopped fresh parsley</li>
                        <li>1 tablespoon chopped fresh cilantro</li>
                        <li>1 teaspoon chopped fresh mint</li>
                        <li>Fresh ground pepper</li>
                        <li>Dash sea salt</li>
                    </div>
                </div>
            </div>

            <div className='instructions-container'>
                <h3>PREPARATIONS</h3>
                <div className='step-container'>
                    <div className='each-step-container'>
                       <div className='step-header-title'> <h6>Step 1: </h6> </div>
                        <p className='step-content'>Rinse the quiona well and place it in a pot with the vegetable broth and bring to a boilReduce the heat, stir in the pieces of lemons zest, cover, and cook for 15 minutes</p>
                    </div>
                    <div className='each-step-container'>
                        <div className='step-header-title'> <h6>Step 2: </h6> </div>
                        <p className='step-content'>Remove the heat, stir, and remove and discard the pieces of lemon zest. Allow the quinoa to cool slightly</p>
                    </div>
                    <div className='each-step-container'>
                        <div className='step-header-title'> <h6>Step 3: </h6> </div>
                        <p className='step-content'>Meanwhile, put a large pot of water on the stove to boil, drop the asparagus and snow peas into the boiling water, and cook for 2 to 3 minutes, unitl crisp-tender (do not overcook; the vegetables should be slightly firm).</p>
                    </div>

                    <div className='each-step-container'>
                        <div className='step-header-title'> <h6>Step 4: </h6> </div>
                        <p className='step-content'>Remove from the pot with a slotted spoon and drop into a bowl of ice water. Drain.</p>
                    </div>
                    <div className='each-step-container'>
                        <div className='step-header-title'> <h6>Step 5: </h6> </div>
                        <p className='step-content'>Combine the cooked quinoa, asparagus, snow peas, kohlrabi, and radishes in a large bowl. Add the remaining ingredients and mix well. Season with freshly ground black pepper and sea salt, if desired</p>
                    </div>
                    <div className='each-step-container'>
                        <div className='step-header-title'> <h6>Step 6: </h6> </div>
                        <p className='step-content'>Chill 1 to 2 hours before serving to allow flavors to mingle.</p>
                    </div>
                </div>

            </div>

            <div className='comment-container'>
                <div className='box-container'>
                    <form>
                        <label className='comment-title' for="fname"> LEAVE A REVIEW</label>
                        <input type="text" id="fname" name="fname"></input>
                    </form>
                </div>
            </div>

            <div className='reviews-container'>
                <h3>REVIEWS</h3>
                <div className='individual-review-container'>
                    <p>This salad was a big hit at a pinic - fresh and light and spring-y. I took the other reviewr's suggestion and added a basic dressing of lemon, dijon, and olive oil.</p>
                    <h6>Rating: 
                        <div className='stars-container'></div>
                    </h6>
                    <h6>TracyAnn123</h6>
                    <div className='line-container'></div>
                </div>
                <div className='individual-review-container'>
                    <p>Being over run by snow peas and fresh herbs, I decided to give this a try. It is very easy but on the bland side. I added some olive oil and Dijon mustard</p>
                    <h6>Rating: 
                        <div className='stars-container'></div>
                    </h6>
                    <h6>HealthyEater4Life</h6>
                    <div className='line-container'></div>
                </div>
            </div>

            <div className='other-recipes-container'>

            </div>

        </div>
    )
}

export default RecipeBottom