let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/BillsQrCode/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

