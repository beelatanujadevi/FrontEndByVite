import { StartFunc as Receipts } from "./Receipts/Entry.js";
import { StartFunc as Openings } from "./Openings/Entry.js";
import { StartFunc as Payments } from "./Payments/Entry.js";
import { StartFunc as Journals } from "./Journals/Entry.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
const CommonAccountNameSelected = document.getElementById("AccountsInputId");

let StartFunc = async () => {
    let [a, b, c, d] = await Promise.all([Receipts(), Openings(), Payments(), Journals()]);

     let jVarGlobalPresentViewData = [...a, ...b, ...c, ...d];

    const arrByID = jVarGlobalPresentViewData.filter(filterByAccountName);

    StartFuncAfterFetch({ inData: arrByID });
};

function filterByAccountName(item) {
    if (item.AccountName === CommonAccountNameSelected.value) {
        return true;
    };

    return false;
}

export { StartFunc }