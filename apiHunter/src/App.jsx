import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApis } from "./store/actions/apiActions";

const App = () => {
  const dispatch = useDispatch();
  const { apis, loading, error } = useSelector((state) => state.apis);

  useEffect(() => {
    dispatch(fetchApis());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">API Hunter - Public API List</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="grid grid-cols-2 gap-4">
        {apis && apis.length > 0 ? (
          apis.map((api) => (
            <div key={api.API} className="border p-4 rounded shadow-lg">
              <h2 className="text-lg font-semibold mt-2">{api.API}</h2>
              <p className="text-gray-700">{api.Description}</p>
              <a
                href={api.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Visit API
              </a>
            </div>
          ))
        ) : (
          !loading && <p>No APIs available</p>
        )}
      </div>
    </div>
  );
};

export default App;
