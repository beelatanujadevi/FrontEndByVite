import { StartFunc as ForData } from "./ForData/EntryFile.js";

const StartFunc = async () => {
    let jVarLocalQrCodeID = document.getElementById("QrCodeID");
    jVarLocalQrCodeID.addEventListener("keydown", async function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            await LocalFunc();
            SaveFunc();
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

const SaveFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("UpdateButtonId");
    jVarLocalRefreshBSTableId.click()

}

export { StartFunc };
