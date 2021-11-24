import { useParams, Route } from 'react-router-dom'
import ArtImageTile from '../ArtImageTile';
import ArtDescription from '../ArtDescription';

const GalleryView = ({ galleries }) => {
    const {galleryId} = useParams();
    // console.log(galleries)
    const gallery = galleries.find((gal) => gal.id === +galleryId)
    // console.log(gallery.name)
    // const images = gallery.objects
    const art = gallery.objects.map(gallery => gallery.images)
    // console.log(art)
    return (
    <div>
        <h1>Hello from GalleryView</h1>
        <h2>{gallery.name}</h2>
        {gallery.objects.map(art => <ArtImageTile art={art} /> )}
        <Route path={'/galleries'}>
            <ArtDescription gallery/>
        </Route>
        {/* <Route path={`/galleries/${gallery.id}`}>
            <ArtImageTile />
        </Route> */}
        {/* <h2>{gallery.labeltext}</h2> */}
    </div>
    )
}

export default GalleryView
