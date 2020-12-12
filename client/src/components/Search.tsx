import React, {useState} from 'react';
import styled from '@emotion/styled';

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
        <SearchSection>
          <form role="search" onSubmit={handleSubmit}>
            <div>
              <Input
                id="search"
                onChange={e => handleSearchChange(e.target.value)}
                type="search"
                value={query}
                tabIndex={0}
              />
              <label htmlFor="search">Search Location</label>
            </div>
            <Btn
              type="button"
              onClick={handleReset}
              aria-label="Submit search"
            >
              Reset
            </Btn>
            <Btn
              type="submit"
              aria-label="Reset search"
            >
              Submit
            </Btn>
          </form>
        </SearchSection>
      </>
    );
  }

const SearchSection = styled.section`
  padding: 20px;
  background-color: #fff;
  text-align: center;
  border-top: 1px solid var(--colorDarkGray);
  border-bottom: 1px solid var(--colorDarkGray);

  & div {
    position: relative;
  }

  & label {
    opacity: 0;
    cursor: text;
    font-weight: 300;
    position: absolute;
    top: 20%;
    left: 50%;
    z-index: 10;
    transform: translateX(-50%);
    transition: all 0.2s;
  }
`;

const Input = styled.input`
  border: none;
  border-radius: 1000px;
  height: 3.2rem;
  font-size: 1.6rem;
  text-align: center;
  box-shadow: 0 1px 1px #00000026;
  background-color: var(--colorGreyLight);
  width: 80%;
  transition: all 0.2s;

  &:focus {
    outline: none;
    width: 100%;
  }
`;

const Btn = styled.button`
  border: none;
  border-radius: 3px;
  background: var(--colorPrimary);
  margin: 1.5rem 10px 0 0;
  padding: 0.6rem 1.4rem;
  color: var(--colorWhite);
  font-size: 1.4rem;
  font-weight: 700;

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

  export default Search