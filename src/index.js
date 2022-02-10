import React, { Children } from 'react'
import ReactDOM from 'react-dom'
//css
import './index.css'

const firstBook = {
  img:'https://images-eu.ssl-images-amazon.com/images/I/41FIdMzjGUL._AC_SX184_.jpg',
  tittle:'The Japanese secret to a long and happy life',
  author:'Francesc Miralles',

};
const secondBook = {
  img:'https://m.media-amazon.com/images/I/81zz6LqCreS._AC_UY327_FMwebp_QL65_.jpg',
  tittle:'How to Stop Worrying and Start Living: Time-Tested Methods for Conquering Worry',
  author:'Dale Carnegie',

};



function BookList() {
  return (
    <section className='booklist'>
      <Book 
      img={firstBook.img}
      tittle={firstBook.tittle}
      author={firstBook.author}
      > 
  
   </Book>
   
   <Book 
   img={secondBook.img}
   tittle={secondBook.tittle}
   author={secondBook.author}
   />
   </section>
  );
}
  
   
const Book = (props) => {
  const {  img,  tittle,    author,   Children   } = props;


  return (
    <article className='book'>
    <img src={img}alt=''/>
    <h1>{tittle}</h1>
    <h4>{author}</h4>
    {Children}
    </article>
  );
  
};

ReactDOM.render(<BookList />, document.getElementById('root'));