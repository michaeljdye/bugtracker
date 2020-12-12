import React from 'react';
import styled from '@emotion/styled';

/**
 * @description Stateless functional - return app header.
 */
const Header: React.FC = () => (
    <HeaderSection>
      <Title>Explore The Nations</Title>
    </HeaderSection>
  );

export const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    150deg,
    var(--colorSecondary) 40%,
    var(--colorPrimary) 60%
  );
  height: 7rem;
`;

export const Title = styled.h1`
  color: var(--colorWhite);
`;

export default Header