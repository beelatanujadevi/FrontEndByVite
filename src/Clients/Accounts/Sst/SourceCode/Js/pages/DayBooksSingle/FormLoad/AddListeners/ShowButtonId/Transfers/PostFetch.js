let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/Transfers/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

