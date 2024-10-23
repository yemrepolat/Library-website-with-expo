import React, { useEffect, useState } from 'react';
import './KitapAl.css';

const KitapAl = () => {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      fetchBooks();
    }, []);
  
    const fetchBooks = async () => {
        try {
          const response = await fetch('http://localhost:8081/kitaplar');
          if (!response.ok) {
            throw new Error('Veri yüklenirken hata oluştu');
          }
          const data = await response.json();
          console.log('Fetched books:', data);
          setBooks(data);
        } catch (error) {
          console.error('Veri çekme hatası:', error);
        }
    };
  
    return (
        <div>
            <h2>Kitaplar</h2>
            <ul>
                {books.map(book => (
                    <li key={book.kitapid}>{book.kisim}</li>
                ))}
            </ul>
        </div>
    );
};

export default KitapAl;