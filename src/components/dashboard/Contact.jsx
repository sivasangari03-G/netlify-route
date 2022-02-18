import React from 'react'
import { useParams } from 'react-router-dom';

export const Contact = () => {
  const { userId } = useParams();
  return (
		<div className="box">{`Contact: ${ userId }`}</div>
  );
}
