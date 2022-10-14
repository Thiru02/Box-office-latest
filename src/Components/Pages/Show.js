import React, { useReducer, useEffect } from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../../misc/config';
import Details from '../Show/Details';
import ShowMainData from '../Show/ShowMainData';
import Seasons from '../Show/Seasons';
import Cast from '../Show/Cast';
import { InfoBlock, ShowPageWrapper } from './Show.styled';

const Show = () => {
  const { id } = useParams();
  // const [detail, setDetail] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const initialState = {
    isLoading: true,
    error: null,
    detail: '',
  };
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS': {
        return { isLoding: false, error: null, detail: action.show };
      }
      case 'FETCH_FAILED': {
        return { ...prevState, isLoading: false, error: action.error };
      }
      default:
        return prevState;
    }
  };

  const [{ isLoading, error, detail }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(response => {
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCESS', show: response });
          // setDetail(response);
          // setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          dispatch({ type: 'FETCH_FAILED', error: err.message });
          // setError(err.message);
          // setIsLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);
  console.log(detail);
  // if (isLoading) {
  //   return <div>Data is being loaded</div>;
  // }
  // if (error) {
  //   return <div>error occurred:{error}</div>;
  // }
  return (
    <ShowPageWrapper>
      <ShowMainData
        name={detail.name}
        image={detail.image}
        rating={detail.rating}
        tags={detail.tags}
        summary={detail.summary}
      />
      <InfoBlock>
        <Details
          Status={detail.status}
          premiered={detail.premiered}
          network={detail.network}
        />
      </InfoBlock>
      <InfoBlock>
        <Seasons seasons={detail?._embedded?.seasons} />
      </InfoBlock>
      <InfoBlock>
        <Cast cast={detail?._embedded?.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
