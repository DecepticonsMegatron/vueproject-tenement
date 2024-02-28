import md5 from "js-md5"

export default function (data){
    let md5Data=(md5(data));
    return md5Data;
}