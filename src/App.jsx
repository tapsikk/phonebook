import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import HomePage from './components/homePage/HomePage';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomePage />
      </PersistGate>
    </Provider>
  );
}

export default App;
