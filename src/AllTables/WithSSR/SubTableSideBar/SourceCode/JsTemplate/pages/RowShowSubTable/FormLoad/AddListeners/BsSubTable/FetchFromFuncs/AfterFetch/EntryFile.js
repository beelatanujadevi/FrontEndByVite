import UrlJson from './url.json' with {type: 'json'};

let StartFunc = ({ InData }) => {
    let jVarGlobalName = jVarGlobalSubTableTagId;
     jVarGlobalPresentViewData=InData;

    console.log("InData:", InData);

    var $table = $(`#${jVarGlobalName}`)
    $table.bootstrapTable("load", InData);

};

export { StartFunc }