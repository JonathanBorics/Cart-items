/* eslint-disable react/prop-types */

const ItemList = ({ adat }) => {
  console.log("h", adat);
  return (
    <div>
      {adat.map((value) => {
        <p style={{ color: "black", fontSize: "30px" }} >
          <p>{value.author}</p>
          <p></p>
        </p>;
      })}
    </div>
  );
};

export default ItemList;
