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
    let jVarLocalPromises = [jFLocalFetchQrCodes(), jFLocalFetchBillsQrCode()];

    let [a, b] = await Promise.allSettled(jVarLocalPromises);

    let jVarLocalReturnArray = a.value.filter(LoopQrCode =>

        !b.value.some(el => el.pk == LoopQrCode.pk)
    );

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

export { StartFunc }