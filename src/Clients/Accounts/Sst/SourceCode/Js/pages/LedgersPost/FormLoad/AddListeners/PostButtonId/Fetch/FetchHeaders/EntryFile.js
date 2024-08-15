import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyObject = {
        "Credit Account": "",
        "Debit Account": "",
        "Date": "",
        "Description": "",
        "Amount": ""
    };

    let jVarLocalTransferAccount = jFLocalTransferAccountInputId();
    let jVarLocalDate = jFLocalDateInputId();
    let jVarLocalAccount = jFLocalAccountsInputId();

    let jVarLocalTotalInterest = jFLocalInterestTotal();

    if (jVarLocalTotalInterest > 0) {
        jVarLocalBodyObject["Credit Account"] = jVarLocalAccount;
        jVarLocalBodyObject["Debit Account"] = jVarLocalTransferAccount;
        jVarLocalBodyObject["Date"] = jVarLocalDate;
        jVarLocalBodyObject["Description"] = "-------";
        jVarLocalBodyObject["Amount"] = jVarLocalTotalInterest;
    } else {
        jVarLocalBodyObject["Credit Account"] = jVarLocalTransferAccount;
        jVarLocalBodyObject["Debit Account"] = jVarLocalAccount;
        jVarLocalBodyObject["Date"] = jVarLocalDate;
        jVarLocalBodyObject["Description"] = "-------";
        jVarLocalBodyObject["Amount"] = - jVarLocalTotalInterest;
    };

    KeysJson.body = JSON.stringify(jVarLocalBodyObject);

    return KeysJson;
};

const jFLocalInterestTotal = () => {
    var $table = $('#table');
    const jVarLocalDataFromTable = $table.bootstrapTable('getData');

    const jVarLocalCreditInterest = jVarLocalDataFromTable.map(element => {
        if (element.CreditInterest === undefined) {
            return 0;
        } else {
            return parseFloat(element.CreditInterest);
        };
    }).reduce((accumulator, currentValue) => accumulator + currentValue);

    const jVarLocalDebitInterest = jVarLocalDataFromTable.map(element => {
        if (element.DebitInterest === undefined) {
            return 0;
        } else {
            return parseFloat(element.DebitInterest);
        };
    }).reduce((accumulator, currentValue) => accumulator + currentValue);

    return jVarLocalCreditInterest - jVarLocalDebitInterest;
};

let jFLocalAccountsInputId = () => {
    let jVarLocalAccountsInputId = 'AccountsInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalAccountsInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalDateInputId = () => {
    let jVarLocalDateInputId = 'DateInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalDateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTransferAccountInputId = () => {
    let jVarLocalTransferAccountInputId = 'TransferAccountInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTransferAccountInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }