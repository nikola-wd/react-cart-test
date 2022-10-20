import { Provider } from 'react-redux';

import { store } from './store';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Products />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
