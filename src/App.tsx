import { Provider } from 'react-redux';
import { store } from './store';
import AppRouter from './router';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white">
        <AppRouter />
      </div>
    </Provider>
  )
}

export default App
