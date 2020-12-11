import React from 'react';

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
        <ul>
          {listItems.map((data: any, index) => (
            <div
              key={index}
              onClick={() => getName(data.venue.name)}
              role="button"
              tabIndex={0}
            >
              <h2 className="location-title">{data.venue.name}</h2>
            </div>
          ))}
        </ul>
      </nav>
    );
}

export default Locations