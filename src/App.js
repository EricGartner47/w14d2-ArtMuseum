import { Route } from 'react-router-dom'

import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from './components/GalleryView'


function App() {

  return (
    <div className="page-wrapper">
      <Route path='/galleries/:galleryId'>
        <GalleryView galleries={harvardArt.records}/>
      </Route>
      <h1>Hello from App</h1>
      <GalleryNavigation galleries={harvardArt.records}/>
    </div>
    );
}

export default App;
