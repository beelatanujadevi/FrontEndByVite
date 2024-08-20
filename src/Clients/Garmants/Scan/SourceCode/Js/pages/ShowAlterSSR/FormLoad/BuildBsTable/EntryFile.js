import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
import optionsJson from './options.json' with {type: 'json'};

const StartFunc = () => {
    jFLocalInitialize().then();
};
optionsJson.onClickRow = StartFuncOnClickRowFunc

const jFLocalInitialize = async () => {
    var $table = $('#table');
    $table.bootstrapTable(optionsJson);
};

export { StartFunc };
