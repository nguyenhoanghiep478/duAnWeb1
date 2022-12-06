function getEle(id) {
    return document.getElementById(id);
};
function renderPhone(arayPhone) {
    var content = '';
    var n = 0;
    arayPhone.forEach(function (dataPhone) {
        content += `
        <div class="col-4 the_sp">
        <div  class="card " style="width: 15rem;">
        <img style="width:100%; height:225px" class="card-img-top" id="img-SP" src="${dataPhone.imageSP}" alt="">
        <div class="card-body">
        <h5 class="card-tittle" id="tenSP">${dataPhone.tenSP.length > 20 ? dataPhone.tenSP.substr(0, 20) + '...' : dataPhone.tenSP}
        </h5>
        <p id="priceSP" class="text-center">${dataPhone.price}
        </p>
        <button onClick="xemCT(${n})" id="xemCT${n}" class="btn btn-info">
        Xem Chi Tiết
        </button>    
        <p class="text-center" style:"display:none" id="idProduct">${n}</p>
        </div>
        </div>
        </div>
        `
        n++;
    })

    document.getElementById('tablePhone').innerHTML = content;


}

var dssp = [];

function getLocalStorageSanPham() {
    if (localStorage.getItem("DanhSachSP")) {
        var dataString = localStorage.getItem("DanhSachSP");
        //convert String => JSON
        dssp = JSON.parse(dataString);
        renderPhone(dssp);
    }
}

getLocalStorageSanPham();

// getEle('xemCT').onclick = function () {
//     var n = getEle('idProduct').value * 1;
//     getLocalStorageChiTietSanPham(n);
//     console.log(n);
// }

function getEle(id) {
    return document.getElementById(id);
};


var dssp = [];

// getle('xemCTE').onclick=function(){

// }
function xemCT(n) {
    console.log("click");
    // var n = getEle('idProduct').value*1;
    getLocalStorageChiTietSanPham(n);
    console.log(n);
    // console.log(n);
}
getEle('back').onclick = function () {
    getEle('noiDung').style.display = "block";
    getEle('noiDungChiTiet').style.display = "none";
}
function getLocalStorageChiTietSanPham(n) {
    if (localStorage.getItem("DanhSachSP")) {
        var dataString = localStorage.getItem("DanhSachSP");
        //convert String => JSON
        dssp = JSON.parse(dataString);
        var index = 0;//n=4
        // dssp.forEach(function(dataPhone){
        //     if(index==n){
        //         var productName = dataPhone.tenSP;
        //         var productRam = dataPhone.ram;
        //         var productRom = dataPhone.rom;
        //         var productPrice = dataPhone.price;
        //         var productImage = dataPhone.imageSP;
        //         var productMoTa = dataPhone.moTa;
        //         console.log(productName);

        //         getEle('product-image').src = productImage
        //         getEle('product-name').innerHTML = productName;
        //         getEle('product-ram').innerHTML ="Ram: " + productRam;
        //         getEle('product-rom').innerHTML = "Rom: " + productRom;
        //         getEle('product-price').innerHTML = productPrice + "$";

        //     }else{
        //         index++;
        //     }
        //     getEle('noiDung').style.display = "none";
        //     getEle('noiDungChiTiet').style.display = "block";
        // })

        dssp.map(productItem => {
            if (index == n) {
                console.log(productItem);
                var productName = productItem.tenSP;
                var productRam = productItem.ram;
                var productRom = productItem.rom;
                var productPrice = productItem.price;
                var productImage = productItem.imageSP;
                var productMoTa = productItem.moTa;
                console.log(productName);

                getEle('product-image').src = productImage
                getEle('product-name').innerHTML = productName;
                getEle('product-ram').innerHTML = "Ram: " + productRam;
                getEle('product-rom').innerHTML = "Rom: " + productRom;
                getEle('product-price').innerHTML = productPrice + "$";

                getEle('noiDung').style.display = "none";
                getEle('noiDungChiTiet').style.display = "block";
            }



            index++;
        })

    }

}
///Lấy thông báo 
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

