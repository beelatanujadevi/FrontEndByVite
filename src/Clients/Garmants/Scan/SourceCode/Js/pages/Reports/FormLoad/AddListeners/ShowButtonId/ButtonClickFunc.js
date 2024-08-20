import { StartFunc as Generate } from "./Generate/Entry.js";
import { StartFunc as BillsQrCode } from "./BillsQrCode/Entry.js";
import { StartFunc as Scan } from "./Scan/Entry.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
const CommonFromDateInputId = document.getElementById("FromDateInputId");
const CommonToDateInputId = document.getElementById("ToDateInputId");

let StartFunc = async () => {
    let [a, b, c] = await Promise.all([Generate(), BillsQrCode(), Scan()]);

    // jVarGlobalPresentViewData = [...a, ...b, ...c];



    const jVarLocalGroupData = jFLocalGroupData({ inGeneratedata: a, inBillsQrCodeData: b, inScan: c });
    // console.log("jVarLocalGroupData:", jVarLocalGroupData);

    // const arrByID = jVarLocalGroupData.filter(filterByAccountName);

    StartFuncAfterFetch({ inData: jVarLocalGroupData });
};

function filterByAccountName(item) {
    console.log("item:",item);

    if (item.Date >= CommonFromDateInputId.value && item.Date <= CommonToDateInputId.value) {
        return true;
    };

    return false;
};

let jFLocalGroupData = ({ inGeneratedata, inBillsQrCodeData, inScan }) => {

    let jVarLocalCollection = inGeneratedata.map(element => {
        element.Sales = inBillsQrCodeData.some(Sale => Sale.pk === element.pk);
        element.Scan = inScan.some(scan => scan.QrCode == element.pk);

        return element
    });

    return jVarLocalCollection;
};

export { StartFunc }