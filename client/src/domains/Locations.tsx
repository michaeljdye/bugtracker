import React from 'react'
import styled from '@emotion/styled'

interface Venue {
        reasons: {},
        referralId: '',
        venue: {
            id: string,
            name: string
        }
    }

type Props = {
    venues: Venue[];
    showMarkerInfo: (id: string) => {};
}

const Locations: React.FC<Props> =  ({venues, showMarkerInfo}) => {
    return (
        <LocationsSection>
            <Venues>
                {venues.map(({venue: { id, name }}) => (
                <Venue key={id} onClick={() => showMarkerInfo(id)}>{name}</Venue>
                ))}
            </Venues>
        </LocationsSection>
    )
}

const LocationsSection = styled.div`
    padding: 20px;
`

const Venues = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const Venue = styled.li`
    cursor: pointer;
`

export default Locations
