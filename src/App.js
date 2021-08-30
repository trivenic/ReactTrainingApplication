import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import LoginContextProvider from './component/context/LoginContextProvider';
import Home from './component/home/Home';
import {Provider as SetProvider} from 'react-redux'
import store from './component/store/store';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SetProvider store={store}>
      <LoginContextProvider>
        <Home/>
      </LoginContextProvider>
      </SetProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
