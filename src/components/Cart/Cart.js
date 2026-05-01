import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const CART_ITEMS = [{ id: 'c1', name: 'Sushi' }];

const Cart = (props) => {
  return (
    <Modal onClose={props.onCloseCart}>
      <ul className={classes['cart-items']}>
        {CART_ITEMS.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
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
