import { StartFunc as StartFuncForOnPostBody } from "./onPostBody/EntryFile.js";

const StartFunc = async () => {
    let jVarLocalTableName = jVarGlobalSubTableTagId;

    var $table = $(`#${jVarLocalTableName}`);

    $table.bootstrapTable({
        data: []
        // onPostBody: StartFuncForOnPostBody
    });
};

export { StartFunc };
