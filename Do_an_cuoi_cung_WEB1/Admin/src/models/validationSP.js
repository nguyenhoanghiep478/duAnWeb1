function ValidationSP(){
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


    this.kiemTraSanPhamTrung = function(value, divError, mess, arr){
        var isExist = false;

        for(var i=0; i< arr.length;i++){
            var sp = arr[i];
            if(sp.tenSP === value){
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
}