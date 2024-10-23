import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Giriskontrol from './Giriskontrol';
import axios from 'axios';
export const Login = () => {
  const [values, setValues] = useState({
    kullaniciadi: '',
    sifre: ''
  });
  const [errors, setErrors] = useState({});


  
  const submitfonksiyonu = (event) => {
    event.preventDefault();
    setErrors(Giriskontrol(values));

    if (Object.keys(errors).length === 0) {
        axios.post("http://localhost:8081/login", values)
            .then(response => {
                const { message } = response.data;
                if (message === 'Basarili') {
                    window.location.href = "/anasayfa";
                } else {
                    console.log(message); // Hata mesajını konsola yazdırabilirsiniz
                }
            })
            .catch(error => console.log(error));
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
            <label htmlFor="kullaniciadi"><strong>Kullanıcı adı</strong></label>
            <input onChange={inputfonksiyon} type="text" name="kullaniciadi" placeholder='Kullanıcı adı giriniz' className='form-control rounded-0' />
            {errors.kullaniciadi && <span className='text-danger'>{errors.kullaniciadi}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="sifre"><strong>Şifre</strong></label>
            <input onChange={inputfonksiyon} type="password" placeholder='Şifre giriniz' name='sifre' className='form-control rounded-0' />
            {errors.sifre && <span className='text-danger'>{errors.sifre}</span>}
          </div>
          <button type="submit" className='btn btn-success w-100'>Giriş yap</button>
          <p></p>
          <Link to="/kaydol">
            <button className='btn btn-default border w-100 text-decoration-none'>Hesap oluştur</button>
          </Link>
        </form>
      </div>
    </div>
  )
}