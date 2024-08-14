import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    KeysJson.body.StudentName = jFLocalStudentName();
    KeysJson.body.StudentName = jFLocalMobile();
    KeysJson.body.Email = jFLocalEmailId();
    KeysJson.body = JSON.stringify(KeysJson.body);

    return KeysJson;
};

let jFLocalStudentName = () => {
    let jVarLocalStudentName = 'StudentName'
    let jVarLocalHtmlId = document.getElementById(jVarLocalStudentName);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalMobile = () => {
    let jVarLocalMobile = 'Mobile'
    let jVarLocalHtmlId = document.getElementById(jVarLocalMobile);

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