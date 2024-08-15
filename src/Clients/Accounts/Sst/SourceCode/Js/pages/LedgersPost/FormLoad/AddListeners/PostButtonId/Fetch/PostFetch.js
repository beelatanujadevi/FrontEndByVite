import { StartFunc as FetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/Transfers`;
    let response = await fetch(jVarLocalFetchUrl, FetchHeaders());

    return await response;
};

export { StartFunc };

