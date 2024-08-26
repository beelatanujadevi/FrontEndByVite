import { StartFunc as Receipts } from "./Receipts/Entry.js";
import { StartFunc as Openings } from "./Openings/Entry.js";
import { StartFunc as Payments } from "./Payments/Entry.js";
import { StartFunc as Journals } from "./Journals/Entry.js";
import { StartFunc as Transfers} from "./Transfers/Entry.js";


import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
const CommonFromDateInputId = document.getElementById("FromDateInputId");
const CommonToDateInputId = document.getElementById("ToDateInputId");

let StartFunc = async () => {
    let [a, b, c, d] = await Promise.all([Receipts(), Openings(), Payments(), Journals(),Transfers()]);

    jVarGlobalPresentViewData = [...a, ...b, ...c, ...d];

    const arrByID = jVarGlobalPresentViewData.filter(filterByAccountName);

    const jVarLocalGroupData = jFLocalGroupData({ inData: arrByID });
    console.log("111111111 : ", arrByID, jVarLocalGroupData);

    StartFuncAfterFetch({ inData: jVarLocalGroupData });
};

function filterByAccountName(item) {
    if (item.Date >= CommonFromDateInputId.value && item.Date <= CommonToDateInputId.value) {
        return true;
    };

    return false;
};

let jFLocalGroupData = ({ inData }) => {
    const groupedByAge = inData.reduce((acc, person) => {
        const age = person.AccountName;
        if (!acc[age]) {
            acc[age] = [];
        }
        acc[age].push(person);
        return acc;
    }, {});

    let jVarLocalCollection = [];

    for (const [key, value] of Object.entries(groupedByAge)) {
        let jVarLoopInsideCredits = value.map(element => {
            console.log("111111 : ", element);


            return parseFloat(element.Credit === undefined ? 0 : (element.Credit === "" ? 0 : element.Credit));
        }).reduce((partialSum, a) => partialSum + a, 0);

        let jVarLoopInsideDebits = value.map(element => {
            console.log("222222222 : ", element);

            return parseFloat(element.Debit === undefined ? 0 : (element.Debit === "" ? 0 : element.Debit));
        }).reduce((partialSum, a) => partialSum + a, 0);
        console.log("bbbbbbbbbbb : ", key, value, jVarLoopInsideCredits, jVarLoopInsideDebits);

        jVarLocalCollection.push({
            AccountName: key,
            Credit: jVarLoopInsideCredits,
            Debit: jVarLoopInsideDebits,
            Balance: jVarLoopInsideCredits - jVarLoopInsideDebits
        });
    };

    return jVarLocalCollection;
};

export { StartFunc }