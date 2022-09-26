import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  // always focus input box after pressed the +(add) button
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="addItem"> Add Item: </label>
      <input
        type="text"
        id="addItem"
        autoFocus
        // placeholder="Add Item"
        required
        value={newItem}
        ref={inputRef}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button type="submit" aria-label="Add Item" onClick={handleFocus}>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
