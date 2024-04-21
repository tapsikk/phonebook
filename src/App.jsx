import { Provider } from "react-redux";
import { store } from "./redux/store";
import HomePage from "./components/homePage/HomePage";

function App() {

  return (
    <Provider store={store}>
    <HomePage/>
    </Provider>
  );
}

export default App;
