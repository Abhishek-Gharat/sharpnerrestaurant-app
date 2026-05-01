import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  return (
    <Modal onClose={props.onCloseCart}>
      <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
          <li className={classes['cart-item']} key={item.id}>
            <span className={classes.name}>{item.name}</span>
            <span className={classes.meta}>
              {item.amount} x ${item.price.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
