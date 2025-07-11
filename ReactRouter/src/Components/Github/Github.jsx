import React from 'react';
import { useEffect } from 'react';

function Github() {
    useEffect(()=>{
        fetch('')

    },[])
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">GitHub Followers: </h2>
        <p className="mt-2 text-gray-600">
          A list of your awesome GitHub followers displayed below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Example Follower Card */}
      </div>
    </div>
  );
}

export default Github;
