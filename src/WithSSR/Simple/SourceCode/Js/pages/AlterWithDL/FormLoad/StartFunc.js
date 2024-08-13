import { StartFunc as ShowOnDom } from "./ShowOnDom/EntryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = () => {
    jFLocalHeaderClick();
    ShowOnDom().then();
    StartFuncAddListeners();
};

const jFLocalHeaderClick = () => {
    let jVarLocalHeaderFetchToDLId = document.getElementById('HeaderFetchToDLId');
    jVarLocalHeaderFetchToDLId.click();
};

export { StartFunc };
