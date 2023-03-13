import { getDefaultFilters } from "./util";

test("default filters", () => {
    const list = [{
        "id": 1,
    }, {
        "id": 2,
    }]

    const filter = getDefaultFilters(list, (e) => e.id);
    expect(filter).toEqual([{
        "text": 1,
        "value": 1,
    }, {
        "text": 2,
        "value": 2,
    }])

    const filter2 = getDefaultFilters(list, (e) => e.id, (e) => e + 1);
    expect(filter2).toEqual([{
        "text": 2,
        "value": 1,
    }, {
        "text": 3,
        "value": 2,
    }])

})
