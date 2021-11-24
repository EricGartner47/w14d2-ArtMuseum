import { Link, useParams } from 'react-router-dom'

const ArtImageTile = ({art}) => {
    const pic = art.images[0]
    // console.log(pic)
    if(!art.images[0]) return null
    //  pic ? (<img src={art.images[0].baseimageurl}></img>) : null
    return (
        <Link><img src={pic.baseimageurl}></img>
        </Link>
        )

}

export default ArtImageTile;
