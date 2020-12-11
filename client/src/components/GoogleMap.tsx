import React, {useEffect} from 'react';
import loadScript from '../utils/loadScript';

type props = {
    initMap: () => {},
    hasMap: boolean
}

declare global {
    interface Window { initMap: any; }
}

window.initMap = window.initMap || {};

/**
 * @description React class component - render map
 * @param { string } script - script URL.
 */
const GoogleMap: React.FC<props> = ({initMap, hasMap}) => {
  /**
   * @description call function to load script and set initMap function.
   * @param { string } script - script URL.
   */
  const renderMap = (script: string) => {
    loadScript(script);
    window.initMap = initMap;
  };

  /**
   * @description Pass Google Map script to renderMap
   * @param { string } script - script URL.
   */
   useEffect(() => {
         const script =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDBBlr6-M5k81x_a4D8PQGCYm1BdTHABUA&libraries=places&callback=initMap';

    renderMap(script);
   }, [])

    return (
      <div role="application" aria-label="Map with restaurants">
        {hasMap === false ? (
          <div>
            <h2>No Connection</h2>
            <p>Please connect to internet to display map.</p>
          </div>
        ) : (
          ''
        )}
        <div id="map" />;
      </div>
    );
}

export default GoogleMap
