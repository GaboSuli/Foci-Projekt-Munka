const kezdooldal = document.getElementById("kezdo")
const futamoldal = document.getElementById("fo")
const eredmenyoldal = document.getElementById("eredmeny")
const csapat1neveh = document.getElementById("hazaicsapatneve")
const csapat2neveh = document.getElementById("vendegcsapatneve")
const csapat1nevejatek = document.getElementById("hazaicsapatnevejatek")
const csapat2nevejatek = document.getElementById("vendegcsapatnevejatek")
const csapat1golok = document.getElementById("csapat1golszam")
const csapat2golok = document.getElementById("csapat2golszam")
const idomutato = document.getElementById("idomutato")
const submitgomb = document.getElementById("tovabb")
let originalheightf = futamoldal.style.height
let originalheightk = kezdooldal.style.height
let originalheighte = eredmenyoldal.style.height
let csapat1golszam = 0
let csapat2golszam = 0
let csapat1neve
let csapat2neve
let felidokhossza
let ido
let elteltido
let szamolo
futamoldal.style.visibility = "hidden"
eredmenyoldal.style.visibility = "hidden"
futamoldal.style.height = "0px"
eredmenyoldal.style.height = "0px"
function bekapcsolas()
{
    if (document.getElementById("csapat2").value != "" && document.getElementById("csapat1").value != "" && parseInt(document.getElementById("felido").value) > 0)
    {
        document.getElementById("submit").disabled = false
    }
    else
    {
        document.getElementById("submit").disabled = true
    }
}
function golplusz1()
{
    csapat1golszam++
    csapat1golok.innerText = csapat1golszam
}
function golplusz2()
{
    csapat2golszam++
    csapat2golok.innerText = csapat2golszam
}
function golminusz1()
{
    if (csapat1golszam != 0)
        csapat1golszam--
    csapat1golok.innerText = csapat1golszam
}
function golminusz2()
{
    if (csapat2golszam != 0)
        csapat2golszam--
    csapat2golok.innerText = csapat2golszam
}
function idolefele()
{
    ido--
    idomutato.innerText = Math.floor(ido/60)+":"+ido%60
    if (ido == 0 && ido != felidokhossza)
    {
        clearInterval(szamolo)
        submitgomb.disabled = false
    }
}
function adatbeadas()
{
    futamoldal.style.visibility = "visible"
    futamoldal.style.height = originalheightf
    kezdooldal.style.visibility = "hidden"
    kezdooldal.style.height = "0px"
    csapat1neve = document.getElementById("csapat1").value
    csapat2neve = document.getElementById("csapat2").value
    csapat1nevejatek.innerText = csapat1neve
    csapat2nevejatek.innerText = csapat2neve
    felidokhossza = parseInt(document.getElementById("felido").value)
    ido = felidokhossza * 60
    szamolo = setInterval(idolefele,1000)
    idomutato.innerText = Math.floor(ido/60)+":"+ido%60
    /*
    felidokhossza = parseInt(document.getElementById("percinput").Value*60+document.getElementById("mpinput").Value)
    document.getElementById("mpinput").Value = 0
    document.getElementById("percinput").Value = 0
    document.getElementById("csapat1nevinput").Value = ""
    document.getElementById("csapat2nevinput").Value = ""
    document.getElementById("csapat1neve").innerText = csapat1neve
    document.getElementById("csapat2neve").innerText = csapat2neve
    document.getElementById("idohatra").innerText = (Math.floor(elteltido / 60) + ":" + elteltido % 60)
    kezdooldal.style.visibility = "hidden"
    futamoldal.style.visibility = "visible"*/
}
function vegeredmeny()
{
    futamoldal.style.visibility = "hidden"
    futamoldal.style.height = "0px"
    eredmenyoldal.style.visibility = "visible"
    eredmenyoldal.style.height = originalheighte
    if (csapat1golszam > csapat2golszam)
        document.getElementById("gyoztescsapat").innerText = "A gyöztes csapat: "+csapat1neve
    else if (csapat2golszam > csapat1golszam)
        document.getElementById("gyoztescsapat").innerText = "A gyöztes csapat: "+csapat2neve
    else
        document.getElementById("gyoztescsapat").innerText = "Döntetlen lett."
    document.getElementById("hazaigolvege").innerText = csapat1golszam
    document.getElementById("vendeggolvege").innerText = csapat2golszam
    csapat1neveh.innerText = csapat1neve
    csapat2neveh.innerText = csapat2neve
}
function restart()
{
    csapat1golszam = 0
    csapat2golszam = 0
    csapat2golok.innerText = 0
    csapat1golok.innerText = 0
    submitgomb.disabled = true
    document.getElementById("felido").value = 0
    document.getElementById("csapat1").value = ""
    document.getElementById("csapat2").value = ""
    eredmenyoldal.style.visibility = "hidden"
    eredmenyoldal.style.height = "0px"
    kezdooldal.style.visibility = "visible"
    kezdooldal.style.height = originalheighte
}