var dstb = new DSTB();
function getEle(id) {
    return document.getElementById(id);
}
function setLocalStorage() {
    //Chuyển arr từ JSON => String
    var dataString = JSON.stringify(dstb.arr);
    //Lưu data xuống LocalStorage của trình duyệt
    localStorage.setItem("DanhSachTB", dataString);
}

function getLocalStorage() {
    if (localStorage.getItem("DanhSachTB")) {
        var dataString = localStorage.getItem("DanhSachTB");
        //convert String => JSON
        dstb.arr = JSON.parse(dataString);
    }
}

function layNoiDung(){
    var noiDung = getEle('noiDung').value;

    isValid=true;

    if(noiDung !== ""){
        isValid=true;
    }else{
        isValid=false;
    }

    if(isValid==true){
        var tb=new ThongBao(noiDung);

        return tb;
    }
    return null;
}

var arr=[];

getEle("btnAddTB").addEventListener("click", function () {
    var tb = layNoiDung();
    // console.log(tk);
    if (!tb) return
    dstb.themTB(tb);

    console.log(dstb.arr);

    setLocalStorage();
})

