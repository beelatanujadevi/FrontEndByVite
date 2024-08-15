import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as AccountsFill } from "./AccountsFill/EntryFile.js";

const StartFunc = () => {
    AccountsFill();
    StartFuncBuildBsTable();
    StartFuncAddListeners();
};

export { StartFunc };
