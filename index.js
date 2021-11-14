if(screen.availWidth>600){
    // location.reload();   
    document.getElementById("body").innerHTML="<h1 style='color:red;'>Sorry Currently only for small screen Mobiles</h1>\
    <br><p style='color:white;'>If you are phone reload the website <a href='#' onclick='reload()'>here</a></p>\
       ";
}
// Website reload
function reload() {
    location.reload();
}