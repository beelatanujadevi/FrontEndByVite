const StartFunc = (row, $element, field) => {
    console.log("current field: ", field);

    if (field === "Scan") {

        const url = new URL(window.location.href);
        const params1 = new URLSearchParams(url.search);
        let NewURl = new URL(`./${jVarGlobalTableName}AlterSSR.html`, url);
        const new_url = new URL(`${NewURl.href}?${params1}`);
        new_url.searchParams.append('inRowPk', row.pk);

        window.location.href = new_url.href;

    };
    if (field === "Show") {

        const url = new URL(window.location.href);
        const params1 = new URLSearchParams(url.search);
        let NewURl = new URL(`./${jVarGlobalTableName}RowShowSubTable.html`, url);
        const new_url = new URL(`${NewURl.href}?${params1}`);
        new_url.searchParams.append('inRowPk', row.pk);

        window.location.href = new_url.href;

    };
};
export { StartFunc };