export default function Stats({ items }) {
  const allItems = items.length;

  const packItems = items.filter((item) => item.packed).length;

  const procent = ((packItems / allItems) * 100).toFixed(0);
  console.log(procent);
  return (
    <footer className="stats">
      {packItems === allItems ? (
        <em>You got everything! Ready to go</em>
      ) : (
        <em>
          {" "}
          You have {allItems} items on your list, and you already packed{" "}
          {packItems}({procent} %){" "}
        </em>
      )}
    </footer>
  );
}
