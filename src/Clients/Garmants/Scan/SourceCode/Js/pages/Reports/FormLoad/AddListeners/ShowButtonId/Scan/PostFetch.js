let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/Scan/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

