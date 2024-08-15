import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as AccountsFill } from "./AccountsFill/EntryFile.js";

const StartFunc = () => {
    AccountsFill();
    StartFuncBuildBsTable();
    StartFuncAddListeners();

    jFLocalToInputDateInputId(new Date().toJSON().slice(0, 10));
};

let jFLocalToInputDateInputId = (inValue) => {
    let jVarLocalHtmlId = 'DateInputId';
    let jVarLocalDateInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalDateInputId === null === false) {
        jVarLocalDateInputId.value = inValue;
    };
};

export { StartFunc };
