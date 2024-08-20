import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalTableName = jVarGlobalTableName;
    let jVarLocalRoutePath = ConfigJson.routePath;
    let jVarLocalFetchUrl = `/${jVarLocalRoutePath}/ScanHead/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

