import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Map from '../domains/Map'
import Locations from '../domains/Locations'

const Home: React.FC = () => {
    const [venues, setVenues] = useState([])

    const getVenues = async () => {
        const endpoint = 'https://api.foursquare.com/v2/venues/explore?';
        const parameters = {
            client_id: '4YDVSH1N0LJ4OF32W33SCDN2DTJTU1IPVSJ0W1JAZBPYAVBR',
            client_secret: 'XSDZ20QPDEFL0HZJFNEFK24BYUNSE1I23ZWMOQUNP3A3L1OZ',
            query: 'food',
            ll: '36.162177, -86.849023',
            radius: '1000',
            v: '20181112'
        };

        const locationData = await Axios.get(endpoint + new URLSearchParams(parameters))

        setVenues(locationData.data.response.groups[0].items)
    };

    useEffect(() => { 
        getVenues()
        }, [])

    return (
        <Layout>
            <Main>
                <Locations venues={venues} />
                <Map venues={venues}/>
            </Main>
        </Layout>
    )
}

const Main = styled.main`
    display: grid;
    grid-template-columns: max-content 1fr;
`

export default Home
