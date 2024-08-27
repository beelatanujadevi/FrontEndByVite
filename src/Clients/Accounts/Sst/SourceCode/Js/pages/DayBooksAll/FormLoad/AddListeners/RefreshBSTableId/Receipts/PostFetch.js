import ConfigJson from '../../../../Config.json' with {type: "json"};

let StartFunc = async () => {
    let jVarLocalFetchUrl = `/${ConfigJson.routePath}/Receipts/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

