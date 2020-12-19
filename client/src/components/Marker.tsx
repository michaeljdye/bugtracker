import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

type props = {
    lat: number,
    lng: number
}

const Marker: React.FC<props> = ({lat, lng}) => {
    return (
        <div>
            <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size='3x'
                color='rebeccapurple'
            />
        </div>
    )
}

export default Marker
