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
const startgomb = document.getElementById("startgomb")
const stopgomb = document.getElementById("stopgomb")
const csapat1kiallitottak = document.getElementById("csapat1kiallitott")
const csapat2kiallitottak = document.getElementById("csapat2kiallitott")
const csapatokselect = document.getElementById("csapatokselect")
const kiallitottinput = document.getElementById("kiallitottinput")
const hosszabitasinput = document.getElementById("hosszabbitasinput")
const extraido = document.getElementById("extraido")
const hminusz = document.getElementById("hminusz")
const hplusz = document.getElementById("hplusz")
const vminusz = document.getElementById("vminusz")
const vplusz = document.getElementById("vplusz")
const kiallitasgomb = document.getElementById("kiallitasgomb")
const hosszabbitogomb = document.getElementById("hosszabbitogomb")
class kiallitottemberke 
{
    constructor(idohatra,spanid,objektumid)
    {
        this.idohatra = idohatra
        this.spanid = spanid
        this.objektumid = objektumid
    }
}
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
let bonuszido = 0
let kiallitottemberek = []
let bonuszidoben = false
futamoldal.style.visibility = "hidden"
eredmenyoldal.style.visibility = "hidden"
futamoldal.style.height = "0px"
eredmenyoldal.style.height = "0px"
submitgomb.disabled = true
let go = setInterval(leszamolas,1000)
function leszamolas()
{
    for (let index = 0; index < kiallitottemberek.length; index++) {
        if (kiallitottemberek[index].idohatra <= 0)
        {
            let temp = document.getElementById(kiallitottemberek[index].objektumid)
            temp.parentNode.removeChild(document.getElementById(temp))
            kiallitottemberek.splice(index,1)
        }
        else
        {
            kiallitottemberek[index].idohatra--
            let number = kiallitottemberek[index].idohatra
            document.getElementById(kiallitottemberek[index].spanid).innerText = " "+Math.floor(number/60)+":"+number%60
        }
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
    felidokhossza = parseInt(document.getElementById("felido").value) * 60
    ido = 0
    szamolo = setInterval(idofelfele,1000)
    idomutato.innerText = Math.floor(ido/60)+":"+ido%60
    hminusz.disabled = false
    vminusz.disabled = false
    vplusz.disabled = false
    hplusz.disabled = false
    startgomb.disabled = false
    stopgomb.disabled = false
    hosszabbitogomb.disabled = false
    kiallitasgomb.disabled = false
    csapat1kiallitottak.innerHTML = ""
    csapat2kiallitottak.innerHTML = ""
    csapatokselect.innerHTML = "<option value='csapat1'>"+csapat1neve+"</option>"+"<option value='csapat2'>"+csapat2neve+"</option>"
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
        document.getElementById("gyoztescsapat").innerText = "Döntetlen"
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
    extraido.style.visibility = "hidden"
    bonuszido = 0
    bonuszidoben = false
}
function idostop()
{
    clearInterval(szamolo)
    clearInterval(go)
    startgomb.disabled = false
    stopgomb.disabled = true
}
function idostart()
{
    if (bonuszidoben == true)
    {
        szamolo = setInterval(idolefele,1000)
    }
    else
    {
        szamolo = setInterval(idofelfele,1000)
    }
    go = setInterval(leszamolas,1000)
    startgomb.disabled = true
    stopgomb.disabled = false
}
function kiallitas()
{
    let input = kiallitottinput.value
    if (csapatokselect.value == "csapat1" && input != "")
    {
        csapat1kiallitottak.innerHTML += "<p class='kiallitott' id='"+input+"'>"+input+"<span id='"+input+"span'>2:00</p>"
        kiallitottemberek.push(new kiallitottemberke(120,input+"span",input))
        kiallitottinput.value = ""
    }
    else if (csapatokselect.value == "csapat2" && input != "")
    {
        csapat2kiallitottak.innerHTML += "<p class='kiallitott' id='"+input+"'>"+input+"<span id='"+input+"span'>2:00</p>"
        kiallitottemberek.push(new kiallitottemberke(120,input+"span",input))
        kiallitottinput.value = ""
    }
}
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
function idofelfele()
{
    ido++
    idomutato.innerText = Math.floor(ido/60)+":"+ido%60
    if (ido >= felidokhossza && felidokhossza > 59)
    {
        clearInterval(szamolo)
        startgomb.disabled = true
        stopgomb.disabled = true
        if (bonuszido > 0)
        {
            szamolo = setInterval(idolefele,1000)
            bonuszidoben = true
            extraido.style.visibility = "visible"
            extraido.innerText = Math.floor(bonuszido/60)+":"+bonuszido%60
        }
        else
        {
            hminusz.disabled = true
            vminusz.disabled = true
            vplusz.disabled = true
            hplusz.disabled = true
            hosszabbitogomb.disabled = true
            kiallitasgomb.disabled = true
            submitgomb.disabled = false
        }
    }
}
function idolefele()
{
    bonuszido--
    extraido.innerText = Math.floor(bonuszido/60)+":"+bonuszido%60
    if (bonuszido <= 0)
    {
        clearInterval(szamolo)
        hminusz.disabled = true
        vminusz.disabled = true
        vplusz.disabled = true
        hplusz.disabled = true
        hosszabbitogomb.disabled = true
        kiallitasgomb.disabled = true
        submitgomb.disabled = false
    }
    
}
function hosszabbitas()
{
    let hosszabitanivalo = parseInt(hosszabitasinput.value)
    if (hosszabitanivalo > 0)
    {
        bonuszido += hosszabitanivalo * 60
        hosszabitasinput.value = 0
    }
}