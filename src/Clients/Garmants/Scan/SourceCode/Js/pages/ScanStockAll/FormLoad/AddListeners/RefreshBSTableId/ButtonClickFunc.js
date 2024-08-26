let StartFunc = async () => {

    let jVarLocalQrCodeData = await jFLocalPromiseAll();

    // let jVarLocalQrCodeData = await jFLocalFetchQrCodes();

    var $table = $('#table');
    jFLocalHideSpinner();
    $table.bootstrapTable("load", jVarLocalQrCodeData);

    // $table.bootstrapTable({
    //     data: jVarLocalQrCodeData
    // });
};

let jFLocalPromiseAll = async () => {
    let jVarLocalPromises = [jFLocalFetchQrCodes(), jFLocalFetchPurchases(), jFLocalFetchBillsQrCode(), jFLocalFetchSalesReturns(), jFLocalFetchScan()];

    let [a, b, c, d, e] = await Promise.allSettled(jVarLocalPromises);

    let jVarLocalReturnArray = a.value.map(LoopQrCode => {

        LoopQrCode.Purchased = "false";
        LoopQrCode.Sold = "InStoke";
        LoopQrCode.ReturnStatus = "false";
        LoopQrCode.Scan = "false";

        let LoopInideFind = b.value.find(LoopPurchase => LoopPurchase.pk === LoopQrCode.PurchasePk);
        // let LoopInideInvGrid = LoopInideFind.InvGrid[LoopQrCode.InventorySerial];

        if (LoopInideFind === undefined === false) if ("Date" in LoopInideFind) LoopQrCode.Purchased = "true";
        if (LoopInideFind === undefined === false) if ("Date" in LoopInideFind) LoopQrCode.PurchaseDate = LoopInideFind.Date;
        let LoopInideSales = c.value.find(LoopPurchase => LoopPurchase.pk == LoopQrCode.pk);
        let LoopInideScane = e.value.find(LoopScan => LoopScan.QrCode == LoopQrCode.pk);

        // if (LoopQrCode.pk === "1") {
        //     console.log(" LoopQrCode.pk : ", LoopQrCode, LoopInideSales,c);
        // };
        if (LoopInideSales === undefined === false) LoopQrCode.Sold = "Sold";
        if (LoopInideScane === undefined === false) LoopQrCode.Scan = "Scan";

        let LoopInideSalesReturn = d.value.find(LoopSaleReturn => LoopSaleReturn.QrCode == LoopQrCode.pk);

        if (LoopInideSalesReturn === undefined === false) LoopQrCode.ReturnStatus = "Return";



        return LoopQrCode;

    });

    return jVarLocalReturnArray
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalFetchQrCodes = async () => {
    let jVarLocalFetchUrl = "/bin/Generate/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchPurchases = async () => {
    let jVarLocalFetchUrl = "/bin/Vouchers/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchBillsQrCode = async () => {
    let jVarLocalFetchUrl = "/bin/BillsQrCode/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchSalesReturns = async () => {
    let jVarLocalFetchUrl = "/bin/SalesReturns/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchScan = async () => {
    let jVarLocalFetchUrl = "/bin/Scan/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

export { StartFunc }