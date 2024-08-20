import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    KeysJson.body.StudentName = jFLocalStudentNameId();
    KeysJson.body.Mobile = jFLocalMobileId();
    KeysJson.body.Email = jFLocalEmailId();
    KeysJson.body = JSON.stringify(KeysJson.body);

    return KeysJson;
};

let jFLocalStudentNameId = () => {
    let jVarLocalStudentNameId = 'StudentNameId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalStudentNameId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalMobileId = () => {
    let jVarLocalMobileId = 'MobileId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalMobileId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalEmailId = () => {
    let jVarLocalEmailId = 'EmailId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalEmailId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }