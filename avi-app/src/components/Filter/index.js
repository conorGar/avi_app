import React from 'react'
import './FIlter.css'

class Filter extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='main-filter-container'>
                <div className='sortby-container'>
                    <p className='sortby-text'>Sort By:</p>
                    <div className='sorting-options'>
                        <div className='recommended'>
                            <p>Recommended</p>
                        </div>
                        <div className='highest-rated'>
                            <p>Highest Rated</p>
                        </div>
                    </div>

                </div>
                <div className='filterby-container'>
                    <p className='filterby-text'>Filter By:</p>
                    <div className='checkbox-container'>
                        <div className='checkbox-option'>
                        <input type="checkbox" name="filter-option1" value="vegan"/>
                            <label>Vegan</label>
                        </div>

                        <div className='checkbox-option'>
                        <input type="checkbox" name="filter-option2" value="vegetarian"/>
                        <label>Vegetarian</label>
                        </div>

                        <div className='checkbox-option'>

                        <input type="checkbox" name="filter-option3" value="pescetarian"/>
                        <label>Pescetarian</label>
                        </div>

                        <div className='checkbox-option'>

                        <input type="checkbox" name="filter-option4" value="lacto-vegetarian"/>
                        <label>Lacto-Vegetarian</label>
                        </div>
                        
                        <div className='checkbox-option'>

                        <input type="checkbox" name="filter-option5" value="lacto-ovo-vegetarian"/>
                        <label>Lacto-Ovo-Vegetarian</label>
                        </div>

                        <div className='checkbox-option'>

                        <input type="checkbox" name="filter-option6" value="lacto-ovo"/>
                        <label>Lacto-Ovo</label>
                        </div>

                        <div className='checkbox-option'>

                        <input type="checkbox" name="filter-option7" value="keto"/>
                        <label>Keto</label>
                        </div>

                        <div className='checkbox-option'>

                        <input type="checkbox" name="filter-option8" value="raw"/>
                        <label>Raw</label>
                        </div>

                        <div className='checkbox-option'>

                        <input type="checkbox" name="filter-option9" value="sugar-free"/>
                        <label>Sugar-Free</label>
                        </div>

                        <div className='checkbox-option'>

                        <input type="checkbox" name="filter-option10" value="carb-free"/>
                        <label>Carb-Free</label>
                        </div>

                        <div className='checkbox-option'>

                        <input type="checkbox" name="filter-option11" value="lactose-free"/>
                        <label>Lactose-Free</label>
                        </div>

                        <div className='checkbox-option'>

                        <input type="checkbox" name="filter-option12" value="gluten-free"/>
                        <label>Gluten-Free</label>
                        </div>

                        <div className='checkbox-option'>

                        <input type="checkbox" name="filter-option13" value="kosher"/>
                        <label>Kosher</label>
                        </div>

                        <div className='checkbox-option'>

                        <input type="checkbox" name="filter-option14" value="halal"/>
                        <label>Halal</label>
                        </div>

                 </div>
                </div>

                <div className='apply-button'>Apply</div>
            </div>
        )
    }
}


export default Filter;