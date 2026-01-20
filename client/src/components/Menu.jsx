import { useEffect, useState } from "react";
import Api from "../services/api.js";
import CartItem from "./CartItem";

const Menu = () => {

  const [pizzas , setPizzas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Api.get("/cart");
        setPizzas(JSON.parse(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="mt-8">
      <h1 className="text-4xl font-semibold text-center text-[#FE5F1E]">
        All Pizza
      </h1>

      <div className="flex items-center justify-center gap-7 flex-wrap mt-3">
        {pizzas.map((pizza) => {
          return <CartItem key={pizza.id} pizza={pizza} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
