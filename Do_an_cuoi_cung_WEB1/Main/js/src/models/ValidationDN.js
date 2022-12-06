function validationDN(){
    this.kiemTraTrung = function(value, divError, mess,arr){
        var isExist = false;

        for(var i=0; i< arr.length;i++){
            var tk = arr[i];
            if(tk.taiKhoan === value){
                isExist = true;
                break;
            }
        }
        if(isExist){
            getEle(divError).innerHTML = "";
            getEle(divError).style.display = "none";
            return true;
        }
        getEle(divError).innerHTML = mess;
        getEle(divError).style.display = "block";
        return false;
    }
    this.kiemTraMatKhau= function(value1,value2,divError,mess,arr){
        var isExist = false;

        for(var i =0;i<arr.length;i++){
            var tk=arr[i];
            if(tk.taiKhoan === value1){
                if(tk.matKhau === value2){
                    isExist=true;
                    break;
                }
            }
        }
            // console.log(isValid);
            if(isExist){
                getEle(divError).innerHTML = "";
                getEle(divError).style.display = "none";
                return true;
            }
            getEle(divError).innerHTML = mess;
            getEle(divError).style.display = "block";
            return false;
    }
}