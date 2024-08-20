import UrlJson from "./url.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = UrlJson.PostUrl;
    let LocaltableName = jVarGlobalSubTableName;
    let jVarLocalinRowPk = getUrlQueryParams({ inGetKey: "inRowPk" });

    let jVarLocalFetchUrl = `/${LocalroutePath}/Scan/FilterData/RefPK/${jVarLocalinRowPk}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };

