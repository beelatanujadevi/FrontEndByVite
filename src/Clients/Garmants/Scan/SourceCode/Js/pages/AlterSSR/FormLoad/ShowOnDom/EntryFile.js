import { StartFunc as ForData } from "./ForData/EntryFile.js";

const StartFunc = async () => {
    let jVarLocalQrCodeID = document.getElementById("QrCodeID");
    jVarLocalQrCodeID.addEventListener("keydown", function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            LocalFunc();
        }
    })
};

const LocalFunc = async () => {
    let jVarLocalData = await ForData();
    jFLocalShowInInputs({ inDataAsObject: jVarLocalData });
    return jVarLocalData;
};

const jFLocalShowInInputs = ({ inDataAsObject }) => {
    let jVarLocalFormId = document.getElementById('FormId');
    const highlightedItems = jVarLocalFormId.querySelectorAll("input");

    highlightedItems.forEach((userItem) => {
        if (userItem.name in inDataAsObject) {
            userItem.value = inDataAsObject[userItem.name];
        };
    });
};

export { StartFunc };
