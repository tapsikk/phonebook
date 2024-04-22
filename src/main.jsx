import { createRoot } from 'react-dom/client'; // змінено імпорт
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './App';
import "./index.css";


createRoot(document.getElementById('root')).render( // виправлено виклик
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
