import { useParams, Route } from 'react-router-dom'
import ArtImageTile from '../ArtImageTile';

const GalleryView = ({ galleries }) => {
    const {galleryId} = useParams();
    // console.log(galleries)
    const gallery = galleries.find((gal) => gal.id === +galleryId)
    // console.log(gallery)
    const images = gallery.objects
    const art = gallery.objects.map(gallery => gallery.images)
    console.log(art)
    return (
    <div>
        <h1>Hello from GalleryView</h1>
        <h2>{gallery.name}</h2>
        {gallery.objects.map(art => <ArtImageTile art={art} /> )}
        {/* <Route path=''>
            <ArtImageTile art={art} />
        </Route> */}
        {/* <h2>{gallery.labeltext}</h2> */}
    </div>
    )
}

export default GalleryView
