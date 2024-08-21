import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFunc500 } from "./AfterFetch/500.js";

let StartFunc = async () => {
    let jVarLocalFromCheck = CheckFunc();

    if (jVarLocalFromCheck) {
        let jVarLocalDataNeeded = await StartFuncFetchFuncs();

        if (jVarLocalDataNeeded.status === 500) {
            await StartFunc500();
        };
        if (jVarLocalDataNeeded.status === 200) {
            await StartFuncAfterFetch();
        };
    };
};

export { StartFunc }