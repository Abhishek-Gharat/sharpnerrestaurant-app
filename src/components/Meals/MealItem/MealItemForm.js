import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor={`amount_${props.id}`}>Amount</label>
        <input
          id={`amount_${props.id}`}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
