const StartFunc = () => {
    jFLocalForyourUsername();
};

const jFLocalForyourUsername = () => {
    let jVarLocalFolderCreated = getUrlQueryParams({ inGetKey: "inyourUsername" });
    let jVarLocaluserId = document.getElementById("yourUsernameId");
    jVarLocaluserId.innerHTML = jVarLocalFolderCreated;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
