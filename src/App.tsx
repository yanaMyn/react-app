import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Las Vegas", "Miami", "Washington"];

  const onSelectItem = (item: String) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="List"
        onSelectItem={onSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
