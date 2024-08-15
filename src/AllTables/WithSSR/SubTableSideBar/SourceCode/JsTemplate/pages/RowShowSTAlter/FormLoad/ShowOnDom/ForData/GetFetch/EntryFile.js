import ConfigJson from './url.json' with {type: 'json'};

const StartFunc = async () => {
    let LocalRowPk = getUrlQueryParams({ inGetKey: "inRowPk" });

    if (LocalRowPk === null) {
        alert("need inRowPk in URL ");
        return await false;
    };

    let jVarLocalResponse = await fetch(`/${ConfigJson.GetUrl}/${jVarGlobalTableName}/${LocalRowPk}`);
    let jVarLocalData = await jVarLocalResponse.json();

    return await jVarLocalData;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
