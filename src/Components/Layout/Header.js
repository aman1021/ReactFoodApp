import React from 'react';
import MealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h2>Meals-The Food App</h2>
                <HeaderCartButton onClick = {props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage} alt='A table full of delicious food.'/>
            </div>
        </React.Fragment>
    )
}

export default Header;