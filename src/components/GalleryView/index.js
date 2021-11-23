import { useParams } from 'react-router-dom'

const GalleryView = ({ galleries }) => {
    const {galleryId} = useParams();
    // console.log(galleries)
    const gallery = galleries.find((gal) => gal.id === +galleryId)
    console.log(gallery)
    return (
    <div>
        <h1>Hello from GalleryView</h1>
        <h2>{gallery.name}</h2>
        {/* <h2>{gallery.labeltext}</h2> */}
    </div>
    )
}

export default GalleryView
