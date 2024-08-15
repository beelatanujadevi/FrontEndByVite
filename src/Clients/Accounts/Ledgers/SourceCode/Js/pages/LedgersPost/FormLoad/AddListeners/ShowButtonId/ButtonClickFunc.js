import { StartFunc as Receipts } from "./Receipts/Entry.js";
import { StartFunc as Openings } from "./Openings/Entry.js";
import { StartFunc as Payments } from "./Payments/Entry.js";
import { StartFunc as Journals } from "./Journals/Entry.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
const CommonAccountNameSelected = document.getElementById("AccountsInputId");

let StartFunc = async () => {
    let [a, b, c, d] = await Promise.all([Receipts(), Openings(), Payments(), Journals()]);

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

let jFLocalInterestInputId = () => {
    let jVarLocalInterestInputId = 'InterestInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalInterestInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

const jFLocalAddInterest = ({ inData, inInterestPer, inToDate }) => {
    let jVarLocalInterestAdded = inData.map(element => {
        let jVarLocalDays = jFLocalGetDays({
            inFromDate: element.Date,
            inToDate
        });

        if (element.Credit > 0) {
            element.CreditInterest = ((element.Credit * inInterestPer * jVarLocalDays) / (365 * 100)).toFixed(2);
        };

        if (element.Debit > 0) {
            element.DebitInterest = ((element.Debit * inInterestPer * jVarLocalDays) / (365 * 100)).toFixed(2);
        };

        return element;
    });

    return jVarLocalInterestAdded;
};

let jFLocalGetDays = ({ inFromDate, inToDate }) => {
    var date1 = new Date(inFromDate)//converts string to date object
    var date2 = new Date(inToDate)

    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var diffDays = Math.abs((date1.getTime() - date2.getTime()) / (oneDay));
    return diffDays;
};

function filterByAccountName(item) {
    if (item.AccountName === CommonAccountNameSelected.value) {
        return true;
    };

    return false;
};

let jFLocalDateInputId = () => {
    let jVarLocalDateInputId = 'DateInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalDateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }