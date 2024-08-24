let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/Generate/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

