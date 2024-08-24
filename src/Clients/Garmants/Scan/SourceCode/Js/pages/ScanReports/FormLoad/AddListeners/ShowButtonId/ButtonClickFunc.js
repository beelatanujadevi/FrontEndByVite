import { StartFunc as Generate } from "./Generate/Entry.js";
import { StartFunc as BillsQrCode } from "./BillsQrCode/Entry.js";
import { StartFunc as Scan } from "./Scan/Entry.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
const CommonFromDateInputId = document.getElementById("FromDateInputId");
const CommonToDateInputId = document.getElementById("ToDateInputId");

let StartFunc = async () => {
    let jVarLocalPromises = [Generate(), BillsQrCode(), Scan()];
    let [a, b, c] = await Promise.allSettled(jVarLocalPromises);


    const jVarLocalGroupData = jFLocalGroupData({ inGeneratedata: a.value, inBillsQrCodeData: b.value, inScan: c.value });

    StartFuncAfterFetch({ inData: jVarLocalGroupData });
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