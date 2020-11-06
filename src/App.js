import React,{useState,useEffect} from "react";
import FilterComponent from "./component/FilterComponent";
import SpaceXComponent from "./component/SpaceXComponent";
import { objectToQuerystring } from "./utility";
import './App.css';

function App() {
  const [filter, setFilter] = useState({limit:100});
  const [spaceXDetail, setSpaceXDetail] = useState([]);
  const url = "https://api.spaceXdata.com/v3/launches";

  const getData = params =>{
    fetch(`${params}`)
    .then(res=>res.json())
    .then(res=>setSpaceXDetail(res))
    .catch(()=>setSpaceXDetail([]))
  }
  useEffect(()=>{
      const queryString = objectToQuerystring(filter);
      getData(`${url}${queryString}`);
  },[filter]);

  useEffect(()=>{
    getData(`${url}?limit=100`);
  },[]);

  return (
    <div className="App">
      <h2>SpaceX Launch Programs</h2>
      <div>
      <FilterComponent setFilter={setFilter}  filter={filter}/>
      </div>
      <div>
      <SpaceXComponent spaceXDetail={spaceXDetail}/>
      </div>
    </div>
  );
}

export default App;
