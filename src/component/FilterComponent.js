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
            <label
                key={`element-${i}`}
                className={`button ${ (filter.land_year === i && `selected`) || ""}`}>
                <input
                    type="radio"
                    name="filterYears"
                    onClick={() => handleClick({key: "land_year", value: i})}/>
                <span>{i}</span>
            </label>
        );
    }
    return (
        <div className="col span_1_of_2 filter">
            <div className="heading">Filters</div>
            <div className="filter--launch-year">Launch Year</div>
            <hr/>
            <div className="filter--year">
                {yearListHtml}
            </div>
            <span>Successful Launch</span>
            <hr/>
            <label className={`button ${ (filter.launch_success===true && `selected`) || ""}`}>
                <input
                    type="radio"
                    name="launch_success"
                    onClick={() => handleClick({key: "launch_success", value: true})}/>
                <span>True</span>
            </label>
            <label className={`button ${ (filter.launch_success===false && `selected`) || ""}`}>
                <input
                    type="radio"
                    name="launch_success"
                    onClick={() => handleClick({key: "launch_success", value: false})}/>
                <span>False</span>
            </label>

            <span>Successful Landing</span>
            <hr/>
            <label className={`button ${ (filter.land_success===true && `selected`) || ""}`}>
                <input
                    type="radio"
                    name="land_success"
                    onClick={() => handleClick({key: "land_success", value: true})}/>
                <span>True</span>
            </label>
            <label className={`button ${ (filter.land_success===false && `selected`) || ""}`}>
                <input
                    type="radio"
                    name="land_success"
                    onClick={() => handleClick({key: "land_success", value: false})}/>
                <span>False</span>
            </label>
        </div>
    )
}

export default FilterComponent;