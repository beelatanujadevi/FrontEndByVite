import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";

const StartFunc = () => {
    // StartFuncTableTag();
    jFLocalInitialize().then();
};

const jFLocalInitialize = async () => {
    var $table = $('#table');
    let jVarLocalColumnsJson = ForColumns();

    $table.bootstrapTable({
        toolbar: "#toolbar",
        "data-search": "true",
        "data-searchable": "true",
        "data-id-field": "pk",
        "data-show-footer": "true"
        data: [],
        columns: jVarLocalColumnsJson
    });
};

export { StartFunc };
