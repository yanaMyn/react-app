import { useState } from "react";

function ListGroup() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  let items = ["New York", "Las Vegas", "Miami", "Washington"];
  //   items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? `list-group-item active`
                : `list-group-item`
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
