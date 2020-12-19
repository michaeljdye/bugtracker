import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from '@emotion/styled'
import Marker from '../components/Marker'

interface Venue {
  reasons: {};
  referralId: '';
  venue: {
    id: string,
    name: string,
    location: {
      lat: number,
      lng: number
    }
  };
}

type Props = {
  venues: Venue[];
  activeMarker: string
}


const Map: React.FC<Props> = ({venues, activeMarker}) => {
  const center = {
    lat: 36.160834,
    lng: -86.856013,
  }

  const zoom = 15

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {venues.map(({venue: {id, location: { lat, lng }}}) => (
          <Marker    
            lat={lat}
            lng={lng}
            isActive={activeMarker === id ? true : false}
            />
          )
        )}
      </GoogleMapReact>
    </div>
  )
}

export default Map
