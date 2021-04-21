import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ModalSignUp from './Components/ModalSignUp/ModalSignUp'
import Navigation from './Components/Navigation/Navigation';
import News from './Components/News/News';

function App() {
  return (
    <div className="App wrapper">
      <Navigation/>
      <div className="app-wrapper">
        <Switch>
          <Route exact path="/" component={Header}/>
          <Route path="/signup" component={ModalSignUp}/>
          <Route path="/news" component={News}/>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
