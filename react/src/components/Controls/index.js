import { Loader } from "../";
import "./Controls.css";

const Controls = (props) => {
  return (
    <>
      <div
        className="burger_controls"
        onClick={(e) => {
          props.onHandleIngredientQuantity(e);
        }}
      >
        {props.loading && <Loader />}
        {props.burgerIngredients.map((burgerIngredient) => {
          const { ingredient, quantity } = burgerIngredient;
          return (
            <div key={ingredient} className="burger_control_item">
              <button
                data-ingre={ingredient}
                data-action="remove"
                className="rmv_ingr"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                data-ingre={ingredient}
                data-action="add"
                className="add_ingr"
              >
                +
              </button>
              <img
                src={require(`../../images/${ingredient}.png`)}
                alt={ingredient}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Controls;
