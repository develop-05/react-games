import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { CartItem } from "../CartItem/CartItem";
import { calcTotalPrice } from "../utils";

import "./CartMenu.css";
export const CartMenu = ({ onClick }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.image}
                image={game.image}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Total:</span>
            <span>{calcTotalPrice(items)} $</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>Checkout</Button>
        </div>
      ) : null}
    </div>
  );
};

