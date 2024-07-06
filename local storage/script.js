let sgup = JSON.parse(window.localStorage.getItem("sgup")) || [];
function signup() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let c_pass = document.getElementById("c-password").value;

    if(email == ""){
        alert("please enter a email");
    }
    else if(pass == ""){
        alert("please enter a password");
    }
    else if(pass != c_pass){
        alert("pleas entere valid password");
    }
    else{
        document.getElementById("s-button").innerHTML = `<a href="home.html"style="text-decoration: none;color: red;font-size: 20px;">Sign</a>`;
    }
    sgup.push({
        email: email,
        password: pass,
    });

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("c-password").value = "";
    window.localStorage.setItem("data",JSON.stringify(sgup));

}
function login() {
    let email = document.getElementById("log-email").value;
    let pass = document.getElementById("log-password").value;

    let maindata = JSON.parse(window.localStorage.getItem("data"));

    let user = maindata.find(user => user.email === email && user.password=== pass);

    
    if(email == ""){
        alert("please enter a email");
    }
    else if(pass == ""){
        alert("please enter a password");
    }
    else if (!user) {
        alert("pleas invalid email or password");
    }
    else{
        document.getElementById("lg-in").innerHTML = `<a href="home.html"style="text-decoration: none;color: red;font-size: 20px;">Sign</a>`;
    }
}