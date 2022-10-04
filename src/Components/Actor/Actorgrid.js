import React from 'react';
import Actorcard from './Actorcard';
import IMPORTED_IMAGE from '../../not-found.png';

const Actorgrid = ({ results }) => {
  return (
    <div>
      {results.map(({ person }) => (
        <Actorcard
          key={person.id}
          image={person.image ? person.image.medium : IMPORTED_IMAGE}
          name={person.name}
          gender={person.gender}
          country={person.country}
          birthday={person.birthday}
          deathday={person.deathday}
        />
      ))}
    </div>
  );
};

export default Actorgrid;
