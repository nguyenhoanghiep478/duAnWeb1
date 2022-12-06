function ValidationDangKi(){
    this.kiemTraRong = function (value, divError, mess){
        if(value.trim() === ""){
            //show thong bao loi
            getEle(divError).innerHTML= mess;
            getEle(divError).style.display="block";
            return false;
        }else{
            getEle(divError).innerHTML="";
            getEle(divError).style.display = "none";
            return true;
        }
    };
    this.kiemTraDoDaiKiTu = function(value, divError, mess , min ,max){
        if(value.length >= min && value.length <= max){
            getEle(divError).innerHTML = "";
            getEle(divError).style.display = "none";
            return true;
        }
        getEle(divError).innerHTML = mess;
        getEle(divError).style.display = "block";
        return false;
    };
    this.kiemTraChuoiKiTu = function(value, divError, mess){
        
        var letter="^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letter)){
            getEle(divError).innerHTML = "";
            getEle(divError).style.display = "none";
            return true;
        }

        getEle(divError).innerHTML = mess;
        getEle(divError).style.display = "block";
        return false;
    };
    this.kiemTraTaiKhoanTrung = function(value, divError, mess, arr){
        var isExist = false;

        for(var i=0; i< arr.length;i++){
            var tk = arr[i];
            if(tk.taiKhoan === value){
                isExist = true;
                break;
            }
        }
        if(isExist){
            getEle(divError).innerHTML = mess;
            getEle(divError).style.display = "block";
            return false;
        }
        
        getEle(divError).innerHTML = "";
        getEle(divError).style.display = "none";
        return true;
    }
    this.check = function(value, divError,mess){
        var isExist = true;
        if (isExist == value) {
            getEle(divError).style.display = "block";
            getEle(divError).innerHTML = "Đăng kí thành công";
            return true;
        } else {
            getEle(divError).style.display = "block";
            getEle(divError).innerHTML = "Đăng kí thất bại";
            return false;
        }
    }
}