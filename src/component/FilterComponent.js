import React from "react";

const FilterComponent = ({ filter, setFilter }) => {

    const handleClick = ({ key, value }) => {
        setFilter({
            ...filter,
            [key]: value
        })
    }

    const resetFilter = () => setFilter({});

    const yearListHtml = [];
    for (let i = 2006; i <= 2020; i++) {
        yearListHtml.push(
            <label
                key={`element-${i}`}
                className={`button ${(filter.land_year === i && `selected`) || ""}`}>
                <input
                    type="radio"
                    name="filterYears"
                    onClick={() => handleClick({ key: "land_year", value: i })} />
                <span>{i}</span>
            </label>
        );
    }
    return (
        <div className="col span_1_of_2">
            <div className="filter">
                <div className="heading">Filters</div>
                <div className="filter--launch-year">Launch Year</div>
                <hr />
                <div className="filter--year">
                    {yearListHtml}
                </div>
                <div className="filter--launch">
                    <span>Successful Launch</span>
                    <hr />
                    <div className="filter--option">
                        <label
                            className={`button ${(filter.launch_success === true && `selected`) || ""}`}>
                            <input
                                type="radio"
                                name="launch_success"
                                onClick={() => handleClick({ key: "launch_success", value: true })} />
                            <span>True</span>
                        </label>
                        <label
                            className={`button ${(filter.launch_success === false && `selected`) || ""}`}>
                            <input
                                type="radio"
                                name="launch_success"
                                onClick={() => handleClick({ key: "launch_success", value: false })} />
                            <span>False</span>
                        </label>
                    </div>
                </div>

                <div className="filter--landing">
                    <div>Successful Landing</div>
                    <hr />
                    <div className="filter--option">
                        <label
                            className={`button ${(filter.land_success === true && `selected`) || ""}`}>
                            <input
                                type="radio"
                                name="land_success"
                                onClick={() => handleClick({ key: "land_success", value: true })} />
                            <span>True</span>
                        </label>
                        <label
                            className={`button ${(filter.land_success === false && `selected`) || ""}`}>
                            <input
                                type="radio"
                                name="land_success"
                                onClick={() => handleClick({ key: "land_success", value: false })} />
                            <span>False</span>
                        </label>
                    </div>
                </div>
                <div className=""><label className="button filter-reset" onClick={resetFilter}><span>Reset</span></label></div>
            </div>
        </div>
    )
}

export default FilterComponent;