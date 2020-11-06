import {render, cleanup} from '@testing-library/react';
import {objectToQuerystring} from "../utility";

test("empty object", () => {
    expect(objectToQuerystring({})).toEqual("");
});

test("empty object", () => {
    expect(objectToQuerystring({test:"city",testing:1})).toEqual("?test=city&testing=1");
});
test("not passed", () => {
    expect(objectToQuerystring()).toBeNull();
});