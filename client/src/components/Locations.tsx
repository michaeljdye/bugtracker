import React from 'react';
import styled from '@emotion/styled';

type props = {
    showMarkerInfo: (name: string) => {},
    listItems: []
}

/**
 * @description React class component - return locations list
 * and pass location data when a location is clicked.
 */
const Locations: React.FC<props> = ({showMarkerInfo, listItems}) => {
  /**
   * @description Pass location name to showMarkerInfo func
   * @param { string } name - name of selected location
   */
  const getName = (name: string) => {
    showMarkerInfo(name);
  };

  /**
   * @description Render filtered locations.
   */

    return (
      <nav>
        <LocationList>
          {listItems.map((data: any, index) => (
            <LocationContent
              key={index}
              onClick={() => getName(data.venue.name)}
              role="button"
              tabIndex={0}
            >
              <h2 className="location-title">{data.venue.name}</h2>
            </LocationContent>
          ))}
        </LocationList>
      </nav>
    );
}

const LocationList = styled.ul`
  padding: 0;
`

const LocationContent = styled.li`
  background: var(--colorWhite);
  border-bottom: 1px solid var(--colorGreyDark);
  color: var(--colorWhite);
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: var(--colorGreyDark);
  background-position: 0;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    var(--colorPrimary) 50%
  );
  background-size: 250%;
  transition: all 0.4s;

  &:hover,
  &:focus {
    outline: none;
    color: var(--colorWhite);
    cursor: pointer;
    background-position: 100%;
  }

  .location-title,
  .location-address {
    margin: 0;
    padding: 5px;
    border-bottom: 1px dotted var(--colorSecondary);
  }

  .location-title {
    font-weight: 700;
  }
`


export default Locations