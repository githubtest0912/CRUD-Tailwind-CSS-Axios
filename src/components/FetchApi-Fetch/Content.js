
import ItemList from "./ItemList";

export default function Content({
  items,
  setItems,
  handleCheck,
  handleDelete
}) {
  return (
    <>
      {/* // ella item delete pannuna message 'your list is empty' ena varanum */}
      {items.length > 0 ? (
        <ItemList
          items={items}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>your list is empty</p>
      )}
    </>
  );
}
