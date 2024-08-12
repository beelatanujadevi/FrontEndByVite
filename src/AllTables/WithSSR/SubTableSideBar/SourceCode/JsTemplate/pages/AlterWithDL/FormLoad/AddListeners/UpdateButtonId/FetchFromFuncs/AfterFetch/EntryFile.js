import UrlJson from './url.json' with {type: 'json'};

let StartFunc = () => {
   
    //  window.location.href = `${jVarGlobalTableName}${UrlJson.RedirectToUrl}`;
    LocalFuncForSingleTable()

};

const LocalFuncForSingleTable = () => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL(`./${jVarGlobalTableName}ShowAlterSSR.html`, url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;
};

const LocalFuncForAllTables = () => {
    let LocalRowPk = inRowPk;

    window.location.href = `${jVarGlobalTableName}${UrlJson.RedirectToUrl}`;
};

export { StartFunc }