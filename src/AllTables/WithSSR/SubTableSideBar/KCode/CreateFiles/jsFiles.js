import fs from "fs";
import { StartFunc as GetTableNames } from "../GetTableNames.js";
const CommonHtmlFiles = ["Index", "Login", "register", "validation"];

const StartFunc = ({ inSrcPath, inSourceFolderName }) => {
    fs.readdirSync(`${inSrcPath}/${inSourceFolderName}/JsTemplate/pages`)
        .forEach(filename => {
            let TableNamesAsArray = GetTableNames();

            // if (filename === "Index") {
            if (CommonHtmlFiles.includes(filename)) {
                fs.cpSync(`${inSrcPath}/${inSourceFolderName}/JsTemplate/pages/${filename}`, `${inSrcPath}/${inSourceFolderName}/Js/pages/${filename}`, { recursive: true });
                // fs.writeFileSync(`${root}/${key}.html`, LocalFileData);
                return true;
            };

            TableNamesAsArray.forEach(LoopTableName => {
                fs.cpSync(`${inSrcPath}/${inSourceFolderName}/JsTemplate/pages/${filename}`, `${inSrcPath}/${inSourceFolderName}/Js/pages/${LoopTableName}${filename}`, { recursive: true });
            });
        });


    // fs.cpSync(`${inSrcPath}/JsTemplate/pages`, `${inSrcPath}/Js/pages`, { recursive: true });
};

export { StartFunc };