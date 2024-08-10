import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    KeysJson.body.UserName = jFLocalyourUsername();
    KeysJson.body.Password = jFLocalyourPassword();
    KeysJson.body.Mail = jFLocalyourEmail();
    KeysJson.body = JSON.stringify(KeysJson.body);

    return KeysJson;
};

let jFLocalyourUsername = () => {
    let jVarLocalyourUsername = 'yourUsername'
    let jVarLocalHtmlId = document.getElementById(jVarLocalyourUsername);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalyourPassword = () => {
    let jVarLocalyourPassword = 'yourPassword'
    let jVarLocalHtmlId = document.getElementById(jVarLocalyourPassword);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalyourEmail = () => {
    let jVarLocalyourPassword = 'yourEmail'
    let jVarLocalHtmlId = document.getElementById(jVarLocalyourPassword);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }