import { Link, useParams } from 'react-router-dom'
import {art} from '../GalleryView'

const ArtImageTile = ({art}) => {
    const pic = art.images[0]

return (pic ? (<img src={art.images[0].baseimageurl}></img>) : null)

}

export default ArtImageTile;
