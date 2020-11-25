import React, { useState, useEffect } from "react";

const SpaceXComponent = ({
    spaceXDetail = []
}) => {

    const [spaceXDetailState, setSpaceXDetail] = useState([]);
    function handleScroll(){
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;

        if(typeof spaceXDetail === "object" && spaceXDetail.length>0){
            setSpaceXDetail(prevState => 
                ([...prevState, ...Array.from(Array(20).keys(), 
                                           n => n + prevState.length + 1)
                                        ]));
    
        }
    }

    useEffect(()=>{
        if(typeof spaceXDetail === "object" && spaceXDetail.length>1){
            setSpaceXDetail(spaceXDetail)
        }
    },[spaceXDetailState])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])


    if (typeof spaceXDetail === "string") {
        return <div className="no-data-found">{spaceXDetail}</div>;
    }
    const spaceXList = spaceXDetailState.map((obj, key) => (
        <div className="spacex-detail" key={`element-${key}`}>
            <div className="image-wrapper">
                <img src={`${(obj.links && obj.links.mission_patch || "")}`} alt="rocket" width="200" height="250" />
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
                        {(obj.mission_id && obj.mission_id.join()) || `--`}
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
    return <div className="wrapper">{spaceXList}</div>;
}

export default SpaceXComponent;