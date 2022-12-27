let trxid = form["trxid"].value;
let mobile = form["mobile"].value;
let db = ["trxid0001", "01711", "TicketID122211"];
function validation(){
    let message = [];
    if(trxid == db[1] && mobile==db[2]){
        alert("purchase confirmed" + "<br>"+db[3]);
        return true;
    }
    else{
        alert("wrong input");
        return false;
    }
}