const kezdooldal = document.getElementById("kezdo")
const futamoldal = document.getElementById("futam")
const eredmenyoldal = document.getElementById("eredmeny")
let csapat1neve
let csapat2neve
let felidokhossza
let elteltido
let szamolo
function adatbeadas()
{
    csapat1neve = document.getElementById("csapat1nevinput").Value
    csapat2neve = document.getElementById("csapat2nevinput").Value
    felidokhossza = parseInt(document.getElementById("percinput").Value*60+document.getElementById("mpinput").Value)
    document.getElementById("mpinput").Value = 0
    document.getElementById("percinput").Value = 0
    document.getElementById("csapat1nevinput").Value = ""
    document.getElementById("csapat2nevinput").Value = ""
    document.getElementById("csapat1neve").innerText = csapat1neve
    document.getElementById("csapat2neve").innerText = csapat2neve
    document.getElementById("idohatra").innerText = (Math.floor(elteltido / 60) + ":" + elteltido % 60)
    kezdooldal.style.visibility = "hidden"
    futamoldal.style.visibility = "visible"
}