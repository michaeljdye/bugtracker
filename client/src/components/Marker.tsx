import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

type Props = {
    lat: number;
    lng: number;
    isActive: boolean;
}

const Marker: React.FC<Props> = ({lat, lng, isActive}) => {
    return (
        <div>
            <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size='3x'
                color={isActive ? 'rebeccapurple' : 'black'}
            />
        </div>
    )
}

export default Marker
