import React from 'react';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { ReactComponent as ShoopingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoopingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);