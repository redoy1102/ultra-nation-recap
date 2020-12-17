import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation = totalPopulation + country.population;
    }
    return (
        <div>
            <h1>Country Added: {cart.length}</h1>
            <h1>Total Population: {totalPopulation}</h1>
        </div>
    );
};

export default Cart;