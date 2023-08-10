import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <PersistGate  persistor={persistor}>
      <App />
    </PersistGate>
   </Provider>
    <ToastContainer/>
  </React.StrictMode>
);

reportWebVitals();
