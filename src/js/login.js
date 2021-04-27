document.querySelector("form").addEventListener("submit",function (event){
    //console.log(event)
    event.preventDefault()
    let dataLogin = new FormData(event.target);
    // console.log(dataLogin.get("nombre"))
    // console.log(dataLogin.get("contrasenya"))

    fetch("http://localhost/ControlVentas/src/api/v1.0/",{
        method:"POST",
        body: dataLogin
    }).then(function (respuesta) {
        // console.log(respuesta)
        // console.log(respuesta.json())
        if (respuesta.ok){
            return respuesta.json()
        }
    }).then(function (datos) {
        console.log("no va")
        document.getElementById("output").textContent = "Bienvenido, " + datos.nombre + "!";
        setTimeout(function () {
            location.href = "app/index.html"
        },3000)
    }).catch(function (error) {
        document.getElementById("output").textContent = "El usuario no existe"
    })
    /*let url = "api/v1.0/" + dataLogin.get("username") + "-" + dataLogin.get("userpass")+".json"
    fetch(url).then(function (respuesta) {
        return respuesta.json()
    }).then(function (datos) {
        console.log(datos)
        if (datos.resultado === "ok"){
            document.getElementById("output").textContent = "Bienvenido, " + datos.nombre + "!";
            setTimeout(function () {
                location.href = "app/index.html"
            },3000)
        }
    }).catch(function (error) {
        document.getElementById("output").textContent = "El usuario no existe"
    })*/
})