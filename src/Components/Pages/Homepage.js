import React, { useState } from 'react';
import Mainpage from '../Mainpage';
import { apiGet } from '../../misc/config';
import Showgrid from '../Show/Showgrid';
import Actorgrid from '../Actor/Actorgrid';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

const Homepage = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [currentSearch, setCurrentSearch] = useState('shows');
  const onInputChange = ev => {
    setInput(ev.target.value);
  };
  const isSearchShows = currentSearch === 'shows';
  const onSearch = () => {
    // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    apiGet(`/search/${currentSearch}?q=${input}`).then(result => {
      setOutput(result);
    });
    // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    //   .then(r => r.json())
    //   .then(result => {
    //     console.log(result);
    //     setOutput(result);
    //   });
  };
  const onKeyDown = key => {
    if (key.keyCode === 13) {
      onSearch();
    }
  };
  const renderResults = () => {
    if (output===''){
      return
    }
    else if (output?.length === 0) {
      return <div>no results</div>;
    }
    if (output?.length > 0) {
      // console.log(output);
      return (
        <div>
          {output[0].show ? (
            <Showgrid results={output} />
          ) : (
            <Actorgrid results={output} />
          )}
        </div>
      );
    }
    return null;
  };
  const onSearchChange = ev => {
    setCurrentSearch(`${ev.target.value}`);
  };
  return (
    <Mainpage>
      <SearchInput
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
        placeholder="Search for something"
      />

      <RadioInputsWrapper>
        <div>
        <label>
          Shows
          <input
            checked={isSearchShows}
            type="radio"
            onChange={onSearchChange}
            value="shows"
          ></input>
        </label>
        </div>
        <div>
        <label>
          Actors
          <input
            checked={!isSearchShows}
            type="radio"
            onChange={onSearchChange}
            value="people"
          ></input>
        </label>
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
      <button onClick={() => onSearch()}>Search</button>
      </SearchButtonWrapper>
      {renderResults()}
    </Mainpage>
  );
};

export default Homepage;
