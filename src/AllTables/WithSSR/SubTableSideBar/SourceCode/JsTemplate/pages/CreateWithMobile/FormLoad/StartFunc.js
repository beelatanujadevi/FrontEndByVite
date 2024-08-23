import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as ToLocalStorage } from "./ToLocalStorage/StartFunc.js";
import { StartFunc as ToDataList } from "./ToDataList/StartFunc.js";
import { StartFunc as ShowOnDom } from "./ShowOnDom/EntryFile.js";
import { StartFunc as initialize } from "./initialize.js";

const StartFunc = async () => {
    initialize();
    StartFuncAddListeners();
    ToLocalStorage();
    ToDataList();
    ShowOnDom();
};

export { StartFunc };
