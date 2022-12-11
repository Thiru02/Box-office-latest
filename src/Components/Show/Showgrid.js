import React from 'react';
import Showcard from './Showcard';
import IMAGE_IMPORTED from '../../not-found.png';
import { Flexstyle } from '../Styled';
import { useShows } from '../../misc/custom-hooks';
const Showgrid = ({ results }) => {
  const [starredShows, dispatchStarred] = useShows()
  return (
    <Flexstyle>
      {results.map(({ show }) => {
        const isStarred = starredShows.includes(show.id)
        const onStarClick = ()=>{
          if (isStarred){
            dispatchStarred({type:'REMOVE', showId:show.id})
          }else{
            dispatchStarred({type:'ADD',showId:show.id})
          }
        }
        return(
          <Showcard
            key={show.id}
            id={show.id}
            image={show.image ? show.image.medium : IMAGE_IMPORTED}
            name={show.name}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        )
      })}
    </Flexstyle>
  );
};

export default Showgrid;
