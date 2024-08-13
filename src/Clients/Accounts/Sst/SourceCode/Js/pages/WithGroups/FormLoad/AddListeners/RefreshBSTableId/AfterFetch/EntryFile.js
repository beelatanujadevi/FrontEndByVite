let StartFunc = ({ inAccounts, inOpenings }) => {
    console.log("kkkk", inAccounts, inOpenings);

    let jVarLocalWithAggValues = inData;
    var $table = $('#table')
    $table.bootstrapTable("load", jVarLocalWithAggValues);
};

export { StartFunc };