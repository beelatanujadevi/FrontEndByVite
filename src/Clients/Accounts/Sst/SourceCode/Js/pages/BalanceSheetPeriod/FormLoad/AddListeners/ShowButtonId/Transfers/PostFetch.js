import ConfigJson from '../../../../Config.json' with {type: "json"};

let StartFunc = async () => {
    let jVarLocalRoutePath = ConfigJson.routePath; 

    let jVarLocalFetchUrl = `/${jVarLocalRoutePath}/Receipts/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

