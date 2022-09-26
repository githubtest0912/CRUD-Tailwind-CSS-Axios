import { useState, useEffect } from "react";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";

export default function Main() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState(""); //add new item

  const [search, setSearch] = useState(""); // search

  // const [items, setItems] = useState([
  //   { id: 1, checked: true, item: "item1" },
  //   { id: 2, checked: false, item: "item2" },
  //   { id: 3, checked: true, item: "item3" }
  // ]);

  const API_URL = "http://localhost:3500/items";
  const fetchItem = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Did not received expected data");
      const listItems = await response.json();
      console.log(listItems);
      setItems(listItems);
    } catch (err) {
      console.log(err.message);
    }
  };

  // useEffect
  useEffect(() => {
    fetchItem();
  }, []);

  // you can change / access the checkbox from existing value and store the local storage also
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shopping list", JSON.stringify(listItems));
  };

  // delete
  const handleDelete = (id) => {
    const deleteItem = items.filter((item) => item.id !== id);
    setItems(deleteItem);
  };

  // add new item (post)

  //const [newItem, setNewItem] = useState("");

  const addItem = (item) => {
    const id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    localStorage.setItem("shopping list", JSON.stringify(listItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    // add item
    addItem(newItem);
    setNewItem("");
  };
  //---------------------------------------

  // search items ----------------------
  //const [search, setSearch] = useState("");
  //---------------------------

  return (
    <div>
      <Header title="Grocery list" />
      <br />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <br />
      <SearchItem search={search} setSearch={setSearch} />
      <br />

      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )} // search - search illa endral content la items={items} mattum varum
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

      <Footer length={items.length} />
    </div>
  );
}
