import {useState, useEffect} from 'react';
import { GameCover } from '../../components/GameCover/GameCover'
import {useDispatch} from 'react-redux';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { deleteItemFromCart } from '../../redux/cart/reducer';

import './OrderItem.css';


export const OrderItem = ({game}) => {

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id));
    }
    return (
      <div className='order-item'>
        <div className="order-item__cover">
          <GameCover image={game.image} />
        </div>
        <div className="order-item__title">
          <span>{game.title}</span>
        </div>
        <div className="order-item__price">
            <span>{game.price} $</span>
            <AiOutlineCloseCircle 
              size="25"
              className="cart-item__delete-icon delete-icon-mod2"
              onClick={handleClick}
            />
        </div>
      </div>
    );
}