import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { getVenues } from '../api/api.ts'
import Layout from '../components/Layout.tsx'
import Search from '../components/Search.tsx'
import Locations from '../components/Locations.tsx'
import GoogleMap from '../components/GoogleMap.tsx'

/**s
 * @description React class component - inits maps, gets venues,
 */
const Home = () => {
  const [venue, setVenue] = useState('')
  const [venues, setVenues] = useState([])
  const [map, setMap] = useState({})
  const [markers, setMarkers] = useState([])
  const [listItems, setListItems] = useState([])
  const [hasMap, setHasMap] = useState([])

  /**
   * @description Update state with retrieved venues.
   * If error, init map with stored venues and log error.
   */
  useEffect(() => {
    if (venues.length === 0) {
      getVenues()
        .then(res => {
          if (!res) return
          localStorage.setItem('venues', JSON.stringify(res))
          setVenues(res.data.response.groups[0].items)
          setListItems(res.data.response.groups[0].items)
          initMap()
        })
        .catch(() => {
          const storedVenues = JSON.parse(localStorage.getItem('venues'))

          setVenues(storedVenues.data.response.groups[0].items)
          setListItems(storedVenues.data.response.groups[0].items)

          console.log('Failed to connect to FourSquare API')
        })
    }
  }, [])

  /**
   * @description Init Google Map and populate with venue markers.
   * Create info window and set event listener to add location-specific content.
   * Re-render with updated markers each time function is invoked.
   * * Use Google Places Library to retrieve additional location data
   */
  const initMap = venues => {
    if (!window.google) {
      console.log('Failed to connect to Google Maps API')
      return
    }

    const mapCenter = { lat: 36.162177, lng: -86.849023 }

    var map = new window.google.maps.Map(
      window.document.getElementById('map'),
      {
        center: mapCenter,
        zoom: 20,
      }
    )

    setMarkers(prevState => (prevState.length = 0))

    const infoWindow = new window.google.maps.InfoWindow()

    var bounds = new window.google.maps.LatLngBounds()

    const markers = []

    venues &&
      venues.forEach(ven => {
        const { name, location } = ven.venue
        const latLng = { lat: location.lat, lng: location.lng }

        var marker = new window.google.maps.Marker({
          position: latLng,
          map: map,
          animation: window.google.maps.Animation.DROP,
        })

        bounds.extend(latLng)

        const getVenueDetails = results => {
          if (!results) return

          const { rating, opening_hours = '', formatted_address } = results[0]
          const content = `<div class="info-window" role="dialog" aria-labelledby="dialog-title">
                          <h3 id="dialog-title" class="m-md">${name}</h3>
                          <p>${location.address || formatted_address}</p>
                          <div class="info-window__content">
                            <p class="m-md info-window__rating"><span class="text--bold">Rating:</span> ${rating}</p>
                            <p class="m-md text--bold ${
                              opening_hours.open_now === true
                                ? 'color--success'
                                : 'color--warn'
                            }">${
            opening_hours.open_now === true ? 'Open' : 'Closed'
          }<p>
                          </div>
                        </div>`

          marker.addListener('click', () => {
            const animateMarker = marker => {
              marker.setAnimation(window.google.maps.Animation.BOUNCE)
              setTimeout(() => marker.setAnimation(null), 750)
            }

            infoWindow.open(map, marker, animateMarker(marker))
            infoWindow.setContent(content)
          })
        }

        const request = {
          query: name,
          fields: ['rating', 'opening_hours', 'formatted_address'],
          locationBias: {
            lat: location.lat,
            lng: location.lng,
          },
        }

        const service = new window.google.maps.places.PlacesService(map)
        service.findPlaceFromQuery(request, getVenueDetails)

        markers.push([marker, name])
      })

    setMarkers(markers)

    map.fitBounds(bounds)
    setHasMap(true)
  }

  /**
   * @description Test if venue has been passed
   * and call initMap with new venues.
   * @param {string} searchedVenue - filtered venues.
   */
  const updateMarkers = searchedVenue => {
    if (searchedVenue) {
      initMap(searchedVenue)
    }
  }

  /**
   * @description Show info window of corresponding marker.
   * @param { string } venueName - name of clicked venue.
   */
  const showMarkerInfo = venueName => {
    const filteredMarker = markers.filter(marker => {
      return marker[1].toLowerCase() === venueName.toLowerCase()
    })

    if (filteredMarker.length === 0) return

    window.google.maps.event.trigger(filteredMarker[0][0], 'click')
  }

  /**
   * @description Update state with filtered venues
   * and call updateMarkers func with venues.
   * @param { string } venue - name of searched venue.
   */
  const getLocation = venue => {
    if (!venue) {
      initMap()
      setVenue(venue)
      setListItems(venues)
      return
    }

    const searchedVenue = venues.filter(ven =>
      ven.venue.name.toLowerCase().includes(venue.toString().toLowerCase())
    )

    setVenue(venue)
    setListItems(searchedVenue)
    updateMarkers(searchedVenue)
  }

  /**
   * @description Render app.
   * Wrap component in ThemeProvider, so app has access to theme styles
   */
  return (
    <>
      <Layout>
        <Wrapper>
          <Main>
            <div className='row-1'>
              <Search getLocation={getLocation} />
              <Locations
                showMarkerInfo={showMarkerInfo}
                venue={venue}
                listItems={listItems}
              />
            </div>
            <div className='row-2'>
              <GoogleMap hasMap={hasMap} initMap={initMap} venues={venues} />
            </div>
          </Main>
        </Wrapper>
      </Layout>
    </>
  )
}

const Wrapper = styled.div`
  background-color: var(--colorGreyLight);
`

const Main = styled.main`
  display: grid;
  grid-template-columns: 300px 1fr;
`

export default Home
