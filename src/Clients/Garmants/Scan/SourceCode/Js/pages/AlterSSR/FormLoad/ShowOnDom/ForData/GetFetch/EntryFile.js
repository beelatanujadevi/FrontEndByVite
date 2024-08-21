import ConfigJson from './url.json' with {type: 'json'};

const StartFunc = async () => {
    let LocalRowPk = getUrlQueryParams({ inGetKey: "inRowPk" });
    let jVarLocalQrCodeID = document.getElementById("QrCodeID").value;
    let Rowpk = parseInt(jVarLocalQrCodeID.substring(2));

    let jVarLocalResponse = await fetch(`/${ConfigJson.GetUrl}/Generate/${Rowpk}`);
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
