import { Route, Switch } from 'react-router-dom'

import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from './components/GalleryView'


function App() {

  return (
    <div className="page-wrapper">
      <Switch>
        <Route path='/galleries/:galleryId'>
          <GalleryView galleries={harvardArt.records}/>
        </Route>
        <Route exact path='/'>
          <h2>Harvard Museum</h2>
          <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
        </Route>
        <Route>
        <h1>404 Page Not Found</h1>
        </Route>
      </Switch>
      <GalleryNavigation galleries={harvardArt.records}/>
    </div>
    );
}

export default App;
