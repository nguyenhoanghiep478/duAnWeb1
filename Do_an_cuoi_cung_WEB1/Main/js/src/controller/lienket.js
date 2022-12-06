window.onload = getUserData();
function getUserData() {
    let userLogin=JSON.parse(localStorage.getItem('userLogin'));
    if (userLogin!= null) {
    
            let userRow = document.getElementsByClassName('user')[0];
            let logOutDivTag = document.createElement('div');
            logOutDivTag.setAttribute('class', 'shopping');
            logOutDivTag.setAttribute('onclick', 'logOut()');
            let logOutaTag = document.createElement('a');
            let iconTag = document.createElement('i');
            iconTag.setAttribute('class', 'fa-solid fa-right-from-bracket');
            logOutaTag.appendChild(iconTag);
            logOutaTag.setAttribute('href', '#');
            logOutDivTag.appendChild(logOutaTag);
            userRow.appendChild(logOutDivTag);
        if(userLogin.taiKhoan=="admin"){
            document.getElementById('AD').style.display="block";
        }
        let loginDiv = document.getElementsByClassName('login')[0];
        loginDiv.firstElementChild.setAttribute('href', '#');
    }

}
function logOut() {
    localStorage.removeItem('userLogin');
    window.location = "../Main/main.html";
}