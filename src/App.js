import { useState } from "react";
import Modal from "./Modal";
import "./styles.css";

export default function App() {
  const [modalState, setModalState] = useState(null);

  return (
    <div className="App">
      <button onClick={() => setModalState("content1")}>button1</button>
      <button onClick={() => setModalState("content2")}>button2</button>
      <Modal content={modalState} />
    </div>
  );
}
