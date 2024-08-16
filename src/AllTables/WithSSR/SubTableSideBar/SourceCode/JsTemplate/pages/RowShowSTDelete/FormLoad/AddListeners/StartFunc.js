import { StartFunc as SaveButtonId } from "./SaveButtonId/EntryFile.js";
import { StartFunc as StartFuncBsSubTable } from "./BsSubTable/EntryFile.js";

let StartFunc = () => {
    SaveButtonId();
    StartFuncBsSubTable();
};

export { StartFunc };