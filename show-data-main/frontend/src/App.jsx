import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  
  useEffect( () => {
    fetch('http://localhost:3000/getBooks')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setBooks(data)
    }) 
    .catch(error => console.log('Error bringing the books ', error));

  }, []);

  return (
    <>
      <div className='container mb-4 table-container justify-content-center table-responsive'>
        <h1 className='text-center text-primary'>Books</h1>
        <table className="table my-5">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          {books.map((book, index) => (
            <tbody>
              <tr key={index}>
                <td>{book.ID}</td>
                <td>{book.Title}</td>
                <td>{book.Author}</td>
                <td>{book.Description}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  )
}

export default App;
