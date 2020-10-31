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
function ossz()
{
var felnev=document.getElementById("fnev").value;
var pw=document.getElementById("jelszo").value;
var telhossz=document.getElementById("tel").value;
var hossz= telhossz.length;
var evhossz= ev.length;
var honaphossz= honap.length;
var naphossz= nap.length;
var jelszohossz= pw.lenght;
var fnevhossz=felnev.lenght;
var evv=document.getElementById("ev").value;
var honapp=document.getElementById("honap").value;
var napp=document.getElementById("nap").value;
if(1916>evv)
{
document.getElementById("el").innerHTML="<font color='red'>Nem megfelelő évszám!</font>";
var jo_ev=0;
}
if(1916<evv)
{
document.getElementById("el").innerHTML="<font color='green'>Megfelelő évszám!</font>";
jo_ev=1;
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
var jo_nap=1;
}
host=document.getElementById("email").value;
emailell=host.indexOf("@");
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
if(fnevhossz=>0)
{
document.getElementById("fel").innerHTML="<font color='green'>Megfelelő Felhasznalónév!</font>";
var jo_felhasznalo=1;
}
if(jelszohossz==null)
{
document.getElementById("jel").innerHTML="<font color='red'>Nem megfelelő jelszó!</font>";
var jo_jelszo=0;
}
if(jelszohossz=>0)
{
document.getElementById("jel").innerHTML="<font color='green'>Megfelelő jelszó!</font>";
var jo_jelszo=1;
}
if(jo_ev==1 && jo_honap==1 && jo_nap==1 && jo_email==1 && jo_telefon==1)
{
	alertbox();
}
}
function alertbox() {
  if (confirm("A Regisztráció Sikeres volt!")) {
   saveFile();
  }
}
 let saveFile = () => {
    	
        // Get the data from each element on the form.
    	const bejelentkezes_felhasznalo = document.getElementById('fnev');
        const bejelentkezes_jelszo = document.getElementById('jelszo');
		const bejelentkezes_ev = document.getElementById('ev');
		const bejelentkezes_honap = document.getElementById('honap');
		const bejelentkezes_nap = document.getElementById('nap');
        const bejelentkezes_email = document.getElementById('email');
        const bejelentkezes_telefon = document.getElementById('tel');
        
        // This variable stores all the data.
        let data = 
            '\r Felhasználónév: ' + bejelentkezes_felhasznalo.value + ' \r\n ' + 
            'Jelszó: ' +bejelentkezes_jelszo.value + ' \r\n ' + 
            'Születési év: ' + bejelentkezes_ev.value + ' \r\n ' + 
            'Születési hónap: ' + bejelentkezes_honap.value + ' \r\n ' + 
			'Születési nap: ' + bejelentkezes_nap.value + ' \r\n ' + 
			'E-mail: ' + bejelentkezes_email.value.value + ' \r\n ' + 
            'Telefonszám: ' + bejelentkezes_telefon.value;
        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'bejelentkezesi_adatok.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
    }
