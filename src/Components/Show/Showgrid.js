import React from 'react';
import Showcard from './Showcard';
import IMAGE_IMPORTED from '../../not-found.png';
import { Flexstyle } from '../Styled';

const Showgrid = ({ results }) => {
  return (
    <Flexstyle>
      {results.map(({ show }) => (
        <Showcard
          key={show.id}
          id={show.id}
          image={show.image ? show.image.medium : IMAGE_IMPORTED}
          name={show.name}
          summary={show.summary}
        />
      ))}
    </Flexstyle>
  );
};

export default Showgrid;
