import { StartFunc as Receipts } from "./Receipts/Entry.js";
import { StartFunc as Openings } from "./Openings/Entry.js";
import { StartFunc as Payments } from "./Payments/Entry.js";
import { StartFunc as Journals } from "./Journals/Entry.js";
import { StartFunc as Transfers } from "./Transfers/Entry.js";


import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
const CommonFromDateInputId = document.getElementById("FromDateInputId");
const CommonToDateInputId = document.getElementById("ToDateInputId");

let StartFunc = async () => {
    let [a, b, c, d, e] = await Promise.all([Receipts(), Openings(), Payments(), Journals(),Transfers()]);

    jVarGlobalPresentViewData = [...a, ...b, ...c, ...d, ...e];

    const arrByID = jVarGlobalPresentViewData.filter(filterByAccountName);

    StartFuncAfterFetch({ inData: arrByID });
};

function filterByAccountName(item) {
    if (item.Date >= CommonFromDateInputId.value && item.Date <= CommonToDateInputId.value) {
        return true;
    };

    return false;
}

export { StartFunc }