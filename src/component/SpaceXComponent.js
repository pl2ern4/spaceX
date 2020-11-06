import React from "react";

const SpaceXComponent = ({spaceXDetail=[]}) =>{
    return spaceXDetail.map((obj,key)=>(
        <div key={`element-${key}`}>
            <img src={`${obj.links.mission_patch}`} alt="rocket" width="" height=""/>
    <h3>{obj.mission_name} #{obj.flight_number}</h3>
            <h4>Mission Ids:</h4>
    <span>{obj.mission_id}</span>
            <h4>Sucessful Launch:</h4>i
            <span>{obj.launch_success}</span>
            <h4>Sucessful Landing :</h4>
            <span>{obj.launch_landing}</span>
        </div>
    ))
}

export default SpaceXComponent;