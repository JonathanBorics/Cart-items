/* eslint-disable react/prop-types */
const Cart = ({ adat }) => {
  console.log("a", adat);
  return (
    <div>
      {adat.map((item) => {
        <>
          <p>{item.name}</p>
        </>;
      })}
    </div>
  );
};

export default Cart;
