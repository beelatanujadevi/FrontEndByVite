import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    
    let jVarLocalFetchUrl = `/Login/bin/CreateToken/UsingJwt`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    
    return await response;
};

export { StartFunc };

