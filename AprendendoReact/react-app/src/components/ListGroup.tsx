import { useState } from "react";

// {items: []. geading: string}
interface Props {
  items: string[];
  heading: string;
  // (item:string) => void
  // onSelectItem = onClick
  onSelectItem: (item: string) => void;
}
//function ListGroup({ Props }: Props) {
function ListGroup({ items, heading, onSelectItem }: Props) {
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0]; variable (selectedIndex)
  //arr[1]; updater function

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      {/* {props.items.length === 0 && <p>No item found</p>} */}
      <ul className="list-group">
        {items.map((item, index) => (
          // {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
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
