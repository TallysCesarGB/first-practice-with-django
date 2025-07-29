import "./App.css";
import ResponsiveAppBar from "./components/AppBar";
import Home from "./screens/Home";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ResponsiveAppBar />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
