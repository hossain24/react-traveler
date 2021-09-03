import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import GalleryPage from './components/Pages/GalleryPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/gallerypage' component={GalleryPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
