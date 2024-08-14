let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/Receipts/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

