import React from "react";

const FilterComponent = ({filter, setFilter}) => {

    const handleClick = ({key, value}) => {
        setFilter({
            ...filter,
            [key]: value
        })
    }

    const yearListHtml = [];
    for (let i = 2006; i <= 2020; i++) {
        yearListHtml.push(
            <div className={`button ${ (filter.year === i && `selected`) || ""}`}>
                <input
                    type="radio"
                    id={`${i}`}
                    name="filterYears"
                    value={`${i}`}
                    onClick={() => handleClick({key: "land_year", value: i})}/>
                <label for={`${i}`}>{i}</label>
            </div>
        );
    }
    return (
        <div>
            <h3>Filters</h3>
            <span>Launch Year</span>
            <hr/>
            <div>
                {yearListHtml}
            </div>
            <span>Successful Launch</span>
            <hr/>
            <div className={`button ${ (filter.launch_success && `selected`) || ""}`}>
                <input
                    type="radio"
                    id="launch_success"
                    name="launch_success"
                    value="True"
                    onClick={() => handleClick({key: "launch_success", value: true})}/>
                <label for="launch_success">True</label>
            </div>
            <div className={`button ${ (!filter.launch_success && `selected`) || ""}`}>
                <input
                    type="radio"
                    id="launch_fail"
                    name="launch_success"
                    value="False"
                    onClick={() => handleClick({key: "launch_success", value: false})}/>
                <label for="launch_fail">False</label>
            </div>

            <span>Successful Landing</span>
            <hr/>
            <div
                className={`button ${ (filter.landing_success && `selected`) || ""}`}>
                <input
                    type="radio"
                    id="landing-success"
                    name="land_success"
                    value="true"
                    onClick={() => handleClick({key: "land_success", value: true})}/>
                <label for="landing-sucess">True</label>
            </div>
            <div className={`button ${ (!filter.landing_success && `selected`) || ""}`}>
                <input
                    type="radio"
                    id="landing-fail"
                    name="land_success"
                    value="false"
                    onClick={() => handleClick({key: "land_success", value: false})}/>
                <label for="landing-sucess">False</label>
            </div>
        </div>
    )
}

export default FilterComponent;