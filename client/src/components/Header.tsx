import React from 'react'
import styled from '@emotion/styled'

const Header: React.FC = () => {
    return (
        <HeaderSection>
            <h1>Explore the Nations</h1>
        </HeaderSection>
    )
}

const HeaderSection = styled.div`
    background: #000;
    padding: 10px 0;
    color: #fff;

    h1 {
        text-align: center;
    }
`

export default Header
