import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
  console.error(error);
    return (
        <div>
            Data Not Found
        </div>
    );
};

export default Error;