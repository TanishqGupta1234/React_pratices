import React from 'react';
import { useParams } from 'react-router-dom';

function Userss() {
  const { userID } = useParams();

  return (
    <div className="text-center text-2xl font-semibold mt-10">
      User ID: {userID}
    </div>
  );
}

export default Userss;
