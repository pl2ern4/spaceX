import React from "react";
import { render } from '@testing-library/react';
import FilterComponent from "../component/FilterComponent";

test("FilterComponent",()=>{
    const { container, getByText } = render(<FilterComponent filter={{}} setFilter={()=>{}}/>);
    expect(container.firstChild).toMatchSnapshot();
})