import React from 'react'
import ReactDOM from 'react-dom'
//css
import './index.css'

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Tittle />
      <Author />
    </article>
  )
}
const Image = () => (
  <img
    src='https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL906_SR906,600_.jpg'
    alt=''
  />
)
const Tittle = () => <h1>The Japanese secret to a long and happy life </h1>
const Author = () => (
  <h4 style={{ color: '#61798', fontSize: '0.75rem', marginTop: '0.25ren' }}>
    Francesc Miralles
  </h4>
)

ReactDOM.render(<BookList />, document.getElementById('root'))