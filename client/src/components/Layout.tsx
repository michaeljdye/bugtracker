import React from 'react'
import { Global, css } from '@emotion/react'
import Header from './Header'
import Footer from './Footer'

const Layout: React.FC = ({children}) => (
    <>
     <Global
      styles={css`
      :root {
  --colorPrimary: #9b63f8;
  --colorSecondary: #819ff9;
  --colorWhite: #fff;
  --colorGreyLight: #f8f9fd;
  --colorGreyDark: #626a6f;
  --borderRounded: 1000px;
      }
      `}
    />
    <Header />
    {children}
    <Footer />
    </>
)

export default Layout