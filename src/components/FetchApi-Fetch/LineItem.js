import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleCheck(item.id)}
        />
      </td>
      {/* // If you double click item you can activate check box */}
      <td>
        {/* // check box(true endral) select ahi irundhal item strike through ahum */}
        <label
          style={item.checked ? { textDecoration: "line-through" } : null}
          onDoubleClick={() => handleCheck(item.id)}
        >
          {item.item}
        </label>
      </td>
      <td>
        <FaTrashAlt
          role="button"
          tabIndex="0"
          onClick={() => handleDelete(item.id)}
          aria-label={`Delete ${item.item}`}
        />
      </td>
    </tr>
  );
};

export default LineItem;
