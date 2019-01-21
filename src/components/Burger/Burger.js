import React from 'react';

import classes from './Burger.css';
import BurgerIngerdient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map( (_, i) => {
            return <BurgerIngerdient key={igKey + i} type={igKey} />;
        } )
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    console.log(transformedIngredients);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngerdient type="bread-top" />
            {transformedIngredients}
            <BurgerIngerdient type="bread-bottom" />
        </div>
    );
}

export default burger;