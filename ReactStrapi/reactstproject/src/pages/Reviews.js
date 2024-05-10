import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../components/hooks/useFetch';

export default function Reviews() {
  const { data, loading, error } = useFetch("http://localhost:1337/api/reviews");

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div className="m-auto h-full mt-20 w-5/6 border-2 border-green-400">
      {data.data.map((x) => (
        <div key={x.id} className="m-auto mt-10 w-5/6 h-auto border-2 border-blue-400 flex flex-row">
          <div className="border-2 border-green-200 w-20 h-16 bg-emerald-900 -mt-4 -ml-4 flex justify-center">
            <span className="p-2 text-3xl text-white">{x.id}</span>
          </div>

          <div className="border-2 border-green-400 p-2">
            <h1 className="text-2xl text-blue-400">{x.attributes.Title}</h1>
            <h1 className="text-xs text-gray-500">{x.attributes.Product}</h1>
            <p className="mt-3">
              {x.attributes.Body[0].children[0].text.substring(0, 200)}
            </p>
            <Link to={`/details/${x.id}`} className="text-teal-700">
              Read more...
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
