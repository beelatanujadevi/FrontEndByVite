import { StartFunc as Accounts } from "./Accounts/Entry.js";
import { StartFunc as Openings } from "./Openings/Entry.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";


let StartFunc = async () => {

    let [a, b] = await Promise.all([Accounts(), Openings()]);

    StartFuncAfterFetch({ inAccounts: a, inOpenings: b });
};

export { StartFunc }