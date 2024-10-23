function kontrol(degerler){
    const kullaniciadi_pattern=/^[a-zA-Z0-9]+$/
    const sifre_pattern=/^[a-zA-Z0-9]+$/
    const isim_pattern=/^[a-zA-Z]+$/
    let error={}
    if(degerler.isim===""){
        error.isim="İsim boş olamaz"
        }    
        else if(!isim_pattern.test(degerler.isim)){
            error.isim="isim sadece harf ve rakam içermelidir"
        }
        else{
            error.isim=""
        }
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
    if(degerler.sifre.length<8){
        error.sifre="Şifre en az 8 karakter olmalıdır"
    }
   else if(degerler.sifretekrar!==degerler.sifre){
        error.sifretekrar="Şifreler eşleşmiyor"
    }
    else{
        error.sifretekrar=""
    }
    return error
    
    }
    export default kontrol