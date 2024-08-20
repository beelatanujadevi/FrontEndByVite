import UrlJson from './url.json' with {type: 'json'};

let StartFunc = () => {
    LocalFuncForSingleTable()
};

const LocalFuncForSingleTable = () => {
    const url = new URL(window.location.href);
    let NewURl = new URL(`./${jVarGlobalTableName}${UrlJson.RedirectToUrl}`, url);
    window.location.href = "";
};

export { StartFunc }