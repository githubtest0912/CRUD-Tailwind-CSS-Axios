import LineItem from "./LineItem";

const ItemList = ({ items, setItems, handleCheck, handleDelete }) => {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">checked</th>
          <th scope="col">item</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <>
              <LineItem
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default ItemList;
