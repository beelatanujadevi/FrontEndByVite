import { StartFunc as Receipts } from "./Receipts/Entry.js";
import { StartFunc as Openings } from "./Openings/Entry.js";
import { StartFunc as Payments } from "./Payments/Entry.js";
import { StartFunc as Journals } from "./Journals/Entry.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let [a, b, c, d] = await Promise.all([Receipts(), Openings(), Payments(), Journals()]);

    jVarGlobalPresentViewData = [...a, ...b, ...c];

    StartFuncAfterFetch();
};

export { StartFunc }