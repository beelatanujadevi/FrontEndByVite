import { StartFunc as ShowOnDom } from "./ShowOnDom/EntryFile.js";
import { StartFunc as BuildBsTableForSubTable } from "./BuildBsTableForSubTable/EntryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = () => {
    ShowOnDom().then();

    BuildBsTableForSubTable();

    StartFuncAddListeners();
    jFLocalFetchMasters();
    jFLocalFillDataLists();
};

const jFLocalFillDataLists = () => {
    let jVarLocalHeaderToDataListId = document.getElementById('HeaderToDataListId');
    jVarLocalHeaderToDataListId.click();
};

const jFLocalFetchMasters = () => {
    let jVarLocalHeaderToDataListId = document.getElementById('HeaderFetchToDLId');
    jVarLocalHeaderToDataListId.click();
};

export { StartFunc };
