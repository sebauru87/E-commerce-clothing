import React from 'react';

import CustomButton from '../custom-button/custon-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>Go To Checkout</CustomButton>
    </div>
)

export default CartDropdown;