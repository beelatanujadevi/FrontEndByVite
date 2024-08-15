let StartFunc = ({ inAccounts, inOpenings }) => {
    // console.log("kkkk", inAccounts, inOpenings);

    let jVarLocalWithAggValues = LocalFunc({ inAccounts, inOpenings });
    var $table = $('#table')
    $table.bootstrapTable("load", jVarLocalWithAggValues);
};
const LocalFunc = ({ inAccounts, inOpenings }) => {
    let AG3Name = "AG3 Name"
    let AG4Name = "AG4 Name"

    let LocalWithGrops = inOpenings.map(element => {
        inAccounts.filter(el => {
            if (element.AccountName === el.AccountName) {
                element.BSGroup = el.BSGroup
                element.SubGroup = el.SubGroup
                element[AG4Name] = el[AG4Name]
                element[AG3Name] = el[AG3Name]
            }
        });
        return element;

    });
    return LocalWithGrops;

}

export { StartFunc };