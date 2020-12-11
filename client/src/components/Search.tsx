import React, {useState} from 'react';

type props = {
    getLocation: (query?: string) => {}
}

/**
 * @description React class component - receive user search input
 * and pass queries to other part of the app.
 */
const Search: React.FC<props> = ({getLocation}) => {
  const [query, setQuery] = useState('')

  /**
   * @description Update state with new search query.
   * @param { string } query - value of search input.
   */
  const handleSearchChange = (query: string): void => {
    setQuery(query)
  };

  /**
   * @description Pass query to getLocation function.
   * @param { object } e - event
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    getLocation(query);
  };

  /**
   * @description Reset search.
   * @param { object } e - event
   */
  const handleReset = () => {
    setQuery(query);
    getLocation();
  };

  /**
   * @description Render search form.
   */
    return (
      <>
        <div>
          <form role="search" onSubmit={handleSubmit}>
            <div>
              <input
                id="search"
                onChange={e => handleSearchChange(e.target.value)}
                type="search"
                value={query}
                tabIndex={0}
              />
              <label htmlFor="search">Search Location</label>
            </div>
            <button
              type="button"
              onClick={handleReset}
              aria-label="Submit search"
            >
              Reset
            </button>
            <button
              type="submit"
              aria-label="Reset search"
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }

  export default Search