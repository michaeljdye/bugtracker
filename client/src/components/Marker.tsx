import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import InfoWindow from './InfoWindow'

type Props = {
    lat: number;
    lng: number;
    isActive: boolean;
    name: string;
}

const Marker: React.FC<Props> = ({isActive, name}) => {
    return (
        <>
            {isActive && <InfoWindow>{name}</InfoWindow>}
            <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size='3x'
                color={isActive ? 'rebeccapurple' : 'black'}
            />
        </>
    )
}

const MarkerS = styled.div`
    position: relative
`

export default Marker
