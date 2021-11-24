import {Link} from 'react-router-dom'

const ArtDescription = ({gallery}) => {
    console.log(gallery)
    return(
        <Link to={'/galleries'}>Back To Gallery</Link>
    )
}

export default ArtDescription
