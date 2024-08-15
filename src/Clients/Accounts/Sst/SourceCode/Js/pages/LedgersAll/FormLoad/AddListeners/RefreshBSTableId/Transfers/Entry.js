import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();

    if (jVarLocalDataNeeded.status === 200) {
        let jVarLocalNewData = jFLocalShowAmounts({ inData: await jVarLocalDataNeeded.json() });
        return await jVarLocalNewData;
    };
};

const jFLocalShowAmounts = ({ inData }) => {
    let jFLocalCreditEntries = inData.map(element => {
        if (element.Amount > 0) {
            element.Credit = element.Amount;
            element.AccountName = element["Credit Account"];
        } else {
            element.Debit = - element.Amount;
            element.AccountName = element["Debit Account"];
        };

        return element;
    });

    let jFLocalDebitEntries = inData.map(element => {
        if (element.Amount > 0) {
            element.Credit = element.Amount;
            element.AccountName = element["Debit Account"];
        } else {
            element.Debit = - element.Amount;
            element.AccountName = element["Credit Account"];
        };

        return element;
    });

    return [...jFLocalCreditEntries, ...jFLocalDebitEntries];
};

export { StartFunc }