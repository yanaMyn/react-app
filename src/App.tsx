// import Alert from "./components/alert";
import { useState } from "react";
import Alert from "./components/alert";
import Button from "./components/button";
// import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["New York", "Las Vegas", "Miami", "Washington"];

  // const onSelectItem = (item: String) => {
  //   console.log(item);
  // };

  const [alertVisibility, setAlertVisibility] = useState(true);

  function getAlert() {
    return (
      <Alert
        onDismiss={() => {
          setAlertVisibility(false);
        }}
      >
        Warning
      </Alert>
    );
  }

  return (
    <div>
      {alertVisibility && getAlert()}
      <Button
        color="danger"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My button
      </Button>
    </div>
  );
}

export default App;
