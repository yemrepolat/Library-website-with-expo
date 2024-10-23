import React, { useState } from 'react';
import kontrol from './Kayitkontrol.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Kaydol() {
  const [values, setValues] = useState({
    isim: '',
    kullaniciadi: '',
    sifre: '',
    sifretekrar: ''
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const submitfonksiyonu = (event) => {
    event.preventDefault();
    setErrors(kontrol(values));

    if (!errors.isim && !errors.kullaniciadi && !errors.sifre && !errors.sifretekrar) { // Değişiklik: Hataların kontrolü güncellendi
      axios.post("http://localhost:8081/kayit", values)
        .then(response => {
          if (response.data !== "Basarili") {
            alert("Kullanıcı adı alınmış");
          } else {
            navigate("/anasayfa");
          }
        })
        .catch(err => console.log(err));
    }
  }

  const inputfonksiyon = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form onSubmit={submitfonksiyonu}>
          <div className='mb-3'>
            <label htmlFor="isim"><strong>İsim</strong></label>
            <input onChange={inputfonksiyon} name="isim" type="text" placeholder='İsim giriniz' className='form-control rounded-0' />
            {errors.isim && <span className='text-danger'>{errors.isim}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="kullaniciadi"><strong>Kullanıcı adı</strong></label>
            <input onChange={inputfonksiyon} name="kullaniciadi" type="text" placeholder='Kullanıcı adı giriniz' className='form-control rounded-0' />
            {errors.kullaniciadi && <span className='text-danger'>{errors.kullaniciadi}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="sifre"><strong>Şifre</strong></label>
            <input onChange={inputfonksiyon} name="sifre" type="password" placeholder='Şifre giriniz' className='form-control rounded-0' />
            {errors.sifre && <span className='text-danger'>{errors.sifre}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="sifretekrar"><strong>Şifre tekrar</strong></label>
            <input onChange={inputfonksiyon} name="sifretekrar" type="password" placeholder='Şifreyi tekrar giriniz' className='form-control rounded-0' />
            {errors.sifretekrar && <span className='text-danger'>{errors.sifretekrar}</span>}
          </div>
          <button className='btn btn-success w-100'>Kayıt ol</button>
        </form>
      </div>
    </div>
  )
}

export default Kaydol;