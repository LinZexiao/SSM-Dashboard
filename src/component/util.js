export function getDefaultFilters(list, mapper = (e) => e, toLable = (e) => e) {
    let ret = [];
    if (list.length > 0) {
        ret = list.map(mapper);
        ret = ret.filter((e) => e !== undefined);
        // remove duplicate
        ret = [...new Set(ret)];
        ret = ret.map((e) => {
            return {
                text: toLable(e),
                value: e,
            };
        });
    }
    return ret
}


export function stateString(num) {
    const state = ["UnKnown", "UnFillMsg", "FillMsg", "OnChainMsg", "Failed", "NonceConflictMsg"]
    return state[num]
}
