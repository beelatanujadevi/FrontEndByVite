import { StartFunc as SubTableFooterSaveButtonId } from "./SubTableFooterSaveButtonId/EntryFile.js";
import { StartFunc as keyPress } from "./keyPress/func.js";

const StartFunc = () => {
    SubTableFooterSaveButtonId();
    jFLocalKeyPress();
    jFLocalSetFocusToFirstInput();
};

const jFLocalSetFocusToFirstInput = () => {
    let jVarLocalTableName = jVarGlobalSubTableTagId;
    let jVarLocalHtml = document.getElementById(jVarLocalTableName);
    let jVarLocalTableFooter = jVarLocalHtml.querySelector("tfoot input");
    jVarLocalTableFooter.focus();
};

const jFLocalKeyPress = () => {
    let jVarLocalTableName = jVarGlobalSubTableTagId;
    let jVarLocalHtml = document.getElementById(jVarLocalTableName);
    let jVarLocalTableFooterInputs = jVarLocalHtml.querySelectorAll("tfoot input[data-ksclienteval]");

    if (jVarLocalTableFooterInputs.length > 0) {
        jVarLocalTableFooterInputs.forEach(div => {
            div.addEventListener("keypress", keyPress);
        });
    };
};

export { StartFunc };
