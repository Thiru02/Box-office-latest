import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../../misc/config';

const Show = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(response => {
        if (isMounted) {
          setDetail(response);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message);
          setIsLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);
  console.log(detail);
  if (isLoading) {
    return <div>Data is being loaded</div>;
  }
  if (error) {
    return <div>error occurred:{error}</div>;
  }
  return <div>Show</div>;
};

export default Show;
