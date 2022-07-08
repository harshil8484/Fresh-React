import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
};

export default App;

render(<App />, document.querySelector("#root"));

