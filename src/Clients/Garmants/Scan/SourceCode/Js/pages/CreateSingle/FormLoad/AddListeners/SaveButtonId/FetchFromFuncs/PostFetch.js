import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import UrlJson from "../../../../Config.json" assert { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = UrlJson.routePath;
    let LocaltableName = jVarGlobalTableName;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/${LocalroutePath}/ScanHead`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    
    return await response;
};

export { StartFunc };

