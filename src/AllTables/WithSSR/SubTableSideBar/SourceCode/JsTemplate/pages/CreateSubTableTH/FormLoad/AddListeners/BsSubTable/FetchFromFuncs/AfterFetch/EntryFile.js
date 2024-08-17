import UrlJson from './url.json' with {type: 'json'};

let StartFunc = ({ InData }) => {
    let jVarGlobalName = jVarGlobalSubTableTagId;
    console.log("InData:", InData);
    let LocalDatareverse = InData.reverse();

    var $table = $(`#${jVarGlobalName}`)
    $table.bootstrapTable("load", LocalDatareverse);

};

export { StartFunc }