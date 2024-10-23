function kontrol(degerler){
const kullaniciadi_pattern=/^[a-zA-Z0-9]+$/
const sifre_pattern=/^[a-zA-Z0-9]+$/
let error={}
if(degerler.kullaniciadi===""){
error.kullaniciadi="Kullanıcı adı boş olamaz"
}    
else if(!kullaniciadi_pattern.test(degerler.kullaniciadi)){
    error.kullaniciadi="Kullanıcı adı sadece harf ve rakam içermelidir"
}
else{
    error.kullaniciadi=""
}

if(degerler.sifre===""){
    error.sifre="Şifre boş olamaz"
}
else if(!sifre_pattern.test(degerler.sifre)){
    error.sifre="Şifre sadece harf ve rakam içermelidir"
}
else{
    error.sifre=""
}
return error

}
export default kontrol