import React, { useState } from 'react';
import Mainpage from '../Mainpage';

const Homepage = () => {
  const [input, setInput] = useState('');
  const onInputChange = ev => {
    setInput(ev.target.value);
  };
  const onSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => {
        console.log(result);
      });
  };
  const onKeyDown = key => {
    if (key.keyCode === 13) {
      onSearch();
    }
  };
  return (
    <Mainpage>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button onClick={() => onSearch()}>Search</button>
    </Mainpage>
  );
};

export default Homepage;
