import React, { useState, useEffect, Suspense, lazy } from "react";
// import FilterComponent from "./component/FilterComponent";
import { objectToQuerystring } from "./utility";
import './App.scss';
const FilterComponent = lazy(() => import('./component/FilterComponent'));
const SpaceXComponent = lazy(() => import('./component/SpaceXComponent'));

function App() {
  const [filter, setFilter] = useState({ limit: 100 });
  const [spaceXDetail, setSpaceXDetail] = useState([]);
  const url = "https://api.spaceXdata.com/v3/launches";

  const getData = params => {
    setSpaceXDetail([])
    fetch(`${params}`, { "Cache-Control": "max-age=31536000" })
      .then(res => res.json())
      .then(res => {
        if (res.length) {
          setSpaceXDetail(res)
        } else {
          setSpaceXDetail("No Data found for particular search...")
        }
      })
      .catch(() => setSpaceXDetail([]))
  }
  useEffect(() => {
    const queryString = objectToQuerystring(filter);
    getData(`${url}${queryString}`);
  }, [filter]);

  useEffect(() => {
    getData(`${url}?limit=100`);
  }, []);

  return (
    <div className="App">
      <div className="company-name">SpaceX Launch Programs</div>
      <div className="grid-container">

        <Suspense fallback={<div />}>
          <FilterComponent setFilter={setFilter} filter={filter} />
        </Suspense>
        <div className={`col span_2_of_2 ${(!spaceXDetail.length && `loader`) || ''}`}>
          {(!spaceXDetail.length && <div className="spinner" />) ||
            <Suspense fallback={<div />}>
              <SpaceXComponent spaceXDetail={spaceXDetail} />
            </Suspense>
          }
        </div>

      </div>
      <div className="copyright-text">
        <span>Developed by:</span>
        <span> Prerna Chaturvedi</span>
      </div>
    </div>
  );
}

export default App;
