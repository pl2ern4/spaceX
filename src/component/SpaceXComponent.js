import React from "react";

const SpaceXComponent = ({
    spaceXDetail = []
}) => {
    const spaceXList = spaceXDetail.map((obj, key) => (
        <div className="spacex-detail" key={`element-${key}`}>
            <div className="image-wrapper">
                <img src={`${obj.links.mission_patch}`} alt="rocket" width="200" height="250"/>
            </div>
            <div className="detail-wrapper">
                <h3>{obj.mission_name}
                    #{obj.flight_number}</h3>
                <span><h4>Mission Ids:</h4> {(obj.mission_id && obj.mission_id.join())|| `--`}</span>
                <span><h4>Sucessful Launch:</h4> {`${obj.launch_success}`}</span>
                <span><h4>Sucessful Landing :</h4> {obj.launch_landing}</span>
            </div>
        </div>
    ));
    return <div className="col span_2_of_2"><div className="wrapper">{spaceXList}</div></div>
}

export default SpaceXComponent;