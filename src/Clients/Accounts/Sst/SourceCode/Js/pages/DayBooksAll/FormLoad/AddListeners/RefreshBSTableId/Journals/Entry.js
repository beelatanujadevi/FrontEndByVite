import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();

    if (jVarLocalDataNeeded.status === 200) {
        return await jVarLocalDataNeeded.json();
    };
};

const jFLocalShowAmounts = ({ inData }) => {
    let jFLocalNewData = inData.map(element => {
        if (element.Amount > 0) {
            element.Credit = element.Amount;
        } else {
            element.Debit = element.Amount;
        };

        return element;
    });
};

export { StartFunc }