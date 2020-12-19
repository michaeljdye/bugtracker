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

type props = {
    venues: Venue[]
}

const Locations: React.FC<props> =  ({venues}) => {
    return (
        <LocationsSection>
            <Venues>
                {venues.map(({venue: { id, name }}) => (
                <li key={id}>{name}</li>
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

export default Locations
