import { StartFunc as FetchFuncs } from "./Fetch/Entry.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFetchResponse = await FetchFuncs();

    jVarGlobalPresentViewData = [...a, ...b, ...c, ...d];

    const arrByID = jVarGlobalPresentViewData.filter(filterByAccountName);

    const jVarLocalInterestPer = jFLocalInterestInputId();
    const jVarLocalToDate = jFLocalDateInputId();

    const jVarLocalWithInterest = jFLocalAddInterest({
        inData: arrByID,
        inInterestPer: parseInt(jVarLocalInterestPer),
        inToDate: jVarLocalToDate
    });

    StartFuncAfterFetch({ inData: jVarLocalWithInterest });
};

export { StartFunc }