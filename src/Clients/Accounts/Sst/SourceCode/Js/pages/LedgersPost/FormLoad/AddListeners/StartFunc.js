import { StartFunc as ShowButtonId } from "./ShowButtonId/EntryFile.js";
import { StartFunc as PostButtonId } from "./PostButtonId/EntryFile.js";

let StartFunc = () => {
    ShowButtonId();
    PostButtonId();
};

export { StartFunc };