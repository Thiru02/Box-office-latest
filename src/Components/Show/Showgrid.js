import React from 'react';
import Showcard from './Showcard';
import IMAGE_IMPORTED from '../../not-found.png';

const Showgrid = ({ results }) => {
  return (
    <div>
      {results.map(({ show }) => (
        <Showcard
          key={show.id}
          id={show.id}
          image={show.image ? show.image.medium : IMAGE_IMPORTED}
          name={show.name}
          summary={show.summary}
        />
      ))}
    </div>
  );
};

export default Showgrid;
