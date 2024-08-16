let KSEval = {};

const StartFunc = (evt) => {
    let value = evt.key;
    let jVarLocalCurrentTarget = evt.currentTarget;

    let jVarLocalDataSet = jVarLocalCurrentTarget.dataset;
    // data-ksclienteval="{{ColumnInfo.HtmlTags.Create.SubTable.ClientEvalString}}">

    let jVarLocalEvalString = jVarLocalDataSet.ksclienteval;

    if (value === "Enter") {
        jFLocalInputValuesToOject();

        jVarLocalCurrentTarget.value = eval(jVarLocalEvalString);
    };
};

const jFLocalInputValuesToOject = () => {
    let jVarLocalTableName = jVarGlobalSubTableTagId;
    let jVarLocalHtml = document.getElementById(jVarLocalTableName);
    let jVarLocalInputs = jVarLocalHtml.querySelectorAll("tfoot input");

    jVarLocalInputs.forEach(element => {
        if (element.type === "number") {
            KSEval[element.name] = parseInt(element.value);
            return;
        };

        KSEval[element.name] = element.value;
    });
};

export { StartFunc };