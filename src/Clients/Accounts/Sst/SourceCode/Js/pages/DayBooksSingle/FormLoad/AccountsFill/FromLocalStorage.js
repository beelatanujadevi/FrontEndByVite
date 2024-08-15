const CommonKey = "Accounts";

let StartFunc = () => {
    let jVarLocalFromLocalStorage = localStorage.getItem("AllMastersData");
    let jVarLocalParsedData = JSON.parse(jVarLocalFromLocalStorage);
    let jVarLocalHtmlId = "AccountDLId";
    let jVarLocalHtmlControl = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalHtmlControl === null === false) {
        fillDataList({ inDataListId: jVarLocalHtmlControl, inDataArray: jVarLocalParsedData[CommonKey] });
    };
};

function fillDataList({ inDataListId, inDataArray }) {
    inDataListId.innerHTML = "";

    inDataArray.forEach(element => {
        var option = document.createElement('option');
        option.value = element;
        inDataListId.appendChild(option);
    });
};

export { StartFunc };