export default function Modal(props) {
  const { content } = props;
  return (
    <div className="App">
      {content === "content1" && <h1>button1 content</h1>}
      {content === "content2" && <h1>button2 content</h1>}
    </div>
  );
}
