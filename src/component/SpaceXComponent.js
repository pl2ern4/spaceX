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
                <h3>{obj.mission_name} #{obj.flight_number}</h3>
                <div className="spacex-detail-node">
                    <span>
                        <span className="sub-heading">Launch Year:</span> 
                        {obj.launch_year}
                    </span>
                </div>
                <div className="spacex-detail-node">
                    <span>
                        <span className="sub-heading">Mission Ids:</span> 
                        {(obj.mission_id && obj.mission_id.join())|| `--`}
                    </span>
                </div>
                <div className="spacex-detail-node">
                    <span>
                        <span className="sub-heading">Sucessful Launch:</span>
                        {`${obj.launch_success}`}
                    </span>
                </div>
                <div className="spacex-detail-node">
                    <span>
                        <span className="sub-heading">Sucessful Landing :</span>
                        {obj.launch_landing}
                    </span>
                </div>
            </div>
        </div>
    ));
    return <div className="col span_2_of_2"><div className="wrapper">{spaceXList}</div></div>
}

export default SpaceXComponent;