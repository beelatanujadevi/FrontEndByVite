import { StartFunc as Receipts } from "./Receipts/Entry.js";
import { StartFunc as Openings } from "./Openings/Entry.js";
import { StartFunc as Payments } from "./Payments/Entry.js";
import { StartFunc as Journals } from "./Journals/Entry.js";
import { StartFunc as Transfers } from "./Transfers/Entry.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let [a, b, c, d, e] = await Promise.all([Receipts(), Openings(), Payments(), Journals(), Transfers()]);
    console.log("aaaaaaaaa : ", e);

    jVarGlobalPresentViewData = [...a, ...b, ...c, ...d, ...e];

    StartFuncAfterFetch();
};

export { StartFunc }