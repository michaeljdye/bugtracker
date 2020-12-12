import React from 'react';
import styled from '@emotion/styled';

const Footer: React.FC = () => (
    <FooterWrapper>
      <p>
        Joey Dye &copy;2018. All Rights Reserved. Uses FourSquare & Google Maps
        API
      </p>
    </FooterWrapper>
  );

const FooterWrapper = styled.footer`
  display: flex;
  grid-column: 1 / -1;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: var(--colorGreyDark);
  color: var(--colorWhite);
  text-align: center;
`;


  export default Footer