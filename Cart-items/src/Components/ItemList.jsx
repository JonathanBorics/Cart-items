import pizza from "../../public/pizza1.jpg";
import Cart from "./Cart";

const ItemList = () => {
  let adat = [
    {
      id: 1,
      name: "pizza",
      price: 100,
      img: pizza,
    },
  ];

  return (
    <div>
      <Cart adat={adat}></Cart>
      szia
    </div>
  );
};

export default ItemList;
