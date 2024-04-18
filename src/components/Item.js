export default function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input
        type="checkBox"
        value={item.packed}
        onChange={(e) => onToggleItem(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
