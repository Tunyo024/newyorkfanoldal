var host;
var emailell;
var telhossz;
var hossz;
var evhossz;
var naphossz;
var honaphossz;
var jelszohossz;
var fnevhossz;
var felnev;
var pw;
var jo_ev;
var jo_honap;
var jo_nap;
var jo_email;
var jo_telefon;
var jo_felhasznalo;
var jo_jelszo;
function ossz()
{
felnev=document.getElementById("fnev").value;
pw=document.getElementById("jelszo").value;
telhossz=document.getElementById("tel").value;
var hossz= telhossz.length;
var evhossz= ev.length;
var honaphossz= honap.length;
var naphossz= nap.length;
jelszohossz= pw.lenght;
fnevhossz=felnev.lenght;
evv=document.getElementById("ev").value;
honapp=document.getElementById("honap").value;
napp=document.getElementById("nap").value;
if(1916>evv)
{
document.getElementById("el").innerHTML="<font color='red'>Nem megfelelő évszám!</font>";
var jo_ev=0;
}
if(1916<evv)
{
document.getElementById("el").innerHTML="<font color='green'>Megfelelő évszám!</font>";
var jo_ev=1;
}
if(evhossz==0)
{
document.getElementById("el").innerHTML="<font color='red'>Nem megfelelő évszám!</font>";
var jo_ev=0;
}
if(honapp>12)
{
document.getElementById("ell").innerHTML="<font color='red'>Nem megfelelő hónap!</font>";
var jo_honap=0;
}
if(honaphossz==null)
{
document.getElementById("ell").innerHTML="<font color='red'>Nem megfelelő hónap!</font>";
var jo_honap=0;
}
if(13>honapp && honapp>0)
{
document.getElementById("ell").innerHTML="<font color='green'>Megfelelő hónap!</font>";
var jo_honap=1;
}
if(napp>31)
{
document.getElementById("elll").innerHTML="<font color='red'>Nem megfelelő nap!</font>";
var jo_nap=0;
}
if(naphossz==null)
{
document.getElementById("elll").innerHTML="<font color='red'>Nem megfelelő nap!</font>";
var jo_nap=0;
}
if(napp<32 && napp>0)
{
document.getElementById("elll").innerHTML="<font color='green'>Megfelelő nap!</font>";
var jo_nap=0;
}
host=document.getElementById("email").value;
emailell=host.indexOf("@")
if(emailell==-1)
{
document.getElementById("ellll").innerHTML="<font color='red'>Nem megfelelő e-mail!</font>";
var jo_email=0;
}
if (emailell>0)
{
document.getElementById("ellll").innerHTML="<font color='green'>Megfelelő e-mail!</font>";
var jo_email=1;
}


if(hossz>11)
{
document.getElementById("elllll").innerHTML="<font color='red'>Nem megfelelő telefonszám!</font>";
var jo_telefon=0;
}
if(hossz<11)
{
document.getElementById("elllll").innerHTML="<font color='red'>Nem megfelelő telefonszám!</font>";
var jo_telefon=0;
}
if(hossz==11)
{
document.getElementById("elllll").innerHTML="<font color='green'>Megfelelő telefonszám!</font>";
var jo_telefon=1;
}
if(fnevhossz==null)
{
document.getElementById("fel").innerHTML="<font color='red'>Nem megfelelő Felhasznalónév!</font>";
var jo_felhasznalo=0;
}
if(fnevhossz>0)
{
document.getElementById("fel").innerHTML="<font color='green'>Megfelelő Felhasznalónév!</font>";
var jo_felhasznalo=1;
}
if(jelszohossz==null)
{
document.getElementById("jel").innerHTML="<font color='red'>Nem megfelelő jelszó!</font>";
var jo_jelszo=0;
}
if(jelszohossz>0)
{
document.getElementById("jel").innerHTML="<font color='green'>Megfelelő jelszó!</font>";
var jo_jelszo=1;
}
}