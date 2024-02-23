import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//
import { App } from 'components/App';
import { store } from './storeRedux/store';
//
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/goit-test-task">
      <App />
      <ToastContainer autoClose={2000} theme="dark" />
    </BrowserRouter>
  </Provider>
);
