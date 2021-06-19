function Modal_LogIn(){
    var myModal_LogIn = new bootstrap.Modal(document.getElementById('myModal_LogIn'));
    myModal_LogIn.show();
    
   
}
function check(){
    var user = document.getElementById("inputusername").value;
    var pass = document.getElementById("password").value;
    if((user =="abc") && (pass =="xyz")  )
    {
        document.getElementById("change").innerHTML = "Chào!";
    }
}
