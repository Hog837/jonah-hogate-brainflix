import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage'


function App() {
  return(
  <div className='App'>
    <div className='app__container'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/video/:videoId' component={HomePage}/>
          <Route path='/upload' exact component={UploadPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;