import { StartFunc as StartFuncForOnPostBody } from "./onPostBody/EntryFile.js";
import { StartFunc as onClickRow } from "./onClickRow/EntryFile.js";

const StartFunc = async () => {
    let jVarLocalTableName = jVarGlobalSubTableTagId;

    var $table = $(`#${jVarLocalTableName}`);

    $table.bootstrapTable({
        data: [],
        onPostBody: StartFuncForOnPostBody,
        onClickRow

    });
};

export { StartFunc };
