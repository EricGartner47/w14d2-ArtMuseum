import {NavLink} from 'react-router-dom';
import './GalleryNavigation.css';

const GalleryNavigation = ({galleries}) => {
    // console.log(galleries)
    return(
       <nav>
           <h1><NavLink exact to="/">Home</NavLink></h1>
           {galleries.map(gallery=>(
               <h2 key={gallery.id}>
               <NavLink activeClassName="active" exact to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
           </h2>
           ))}
       </nav>
    )
}

export default GalleryNavigation
