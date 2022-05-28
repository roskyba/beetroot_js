import { Loader } from "../";
import "./Prices.css";

const Prices = (props) => {
  console.log("props", props);
  return (
    <div className="burger_prices">
      {props.loading ? (
        <Loader />
      ) : (
        <>
          <h2>Our prices</h2>
          {props.ingredients.map((ingredient) => (
            <h3 key={ingredient.name}>
              {ingredient.name}: <span>{ingredient.price} ₴</span>
            </h3>
          ))}
        </>
      )}
    </div>
  );
};
export default Prices;
