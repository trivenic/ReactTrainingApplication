import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import LoginContextProvider from './component/context/LoginContextProvider';
import Home from './component/home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <LoginContextProvider>
        <Home/>
      </LoginContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
