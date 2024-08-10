import { StartFunc as ButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("HeaderSignOutId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", ButtonClickFunc);
    };
};

StartFunc();