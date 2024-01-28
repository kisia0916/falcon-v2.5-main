import * as readline from "readline"
import { mainClient, setSystemMode } from "./clientMain";
import { setFormat } from "../protocol/sendFormat";
export const getInput = (beforeText:string)=>{
    const readLine = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
    return new Promise((resolve, reject) => {
        readLine.question(beforeText, (answer) => {
          resolve(answer);
          readLine.close();
        });
    })
}

export const cmdAnalyze = (cmd:any)=>{
    const splitCmd = cmd.split(" ")
    if (splitCmd[0] === "upload"){
        setSystemMode("upload")
        mainClient.write(setFormat("start_upload_settings","mainClient","start"))
    }
}