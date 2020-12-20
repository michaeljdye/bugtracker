import React from 'react'
import styled from '@emotion/styled'

const InfoWindow: React.FC = ({children}) => {
    return (
        <InfoWindowS>
            {children}
        </InfoWindowS>
    )
}

const InfoWindowS = styled.div`
    position: absolute;
    top:  -55px;
    background: white;
    width: 150px;
    height: 50px;
    color: #000;
    border: 1px solid #000;
`

export default InfoWindow
