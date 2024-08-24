let StartFunc = ({ inData }) => {
    var $table = $('#table');
    jFLocalHideSpinner();

    // let jVarLocalSortByDate = jFLocalSortByDate({ inData });
    // let jVarLocalSortByAccountName = jVarLocalSortByDate.sort((a, b) => a.value - b.value);

    $table.bootstrapTable("load", inData);
};

const jFLocalSortByDate = ({ inData }) => {
    return inData.sort((a, b) => {
        const nameA = a.Date; // ignore upper and lowercase
        const nameB = b.Date; // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc };