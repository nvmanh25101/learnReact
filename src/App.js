import { useMemo, useRef, useState } from 'react'
import Content from './Content.js'

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const nameRef = useRef()

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: +price,
    }])
    setName('')
    setPrice('')
    nameRef.current.focus()
  }

  const total = useMemo(() => {
    const result = products.reduce((sum, product) => {
      return sum + product.price
    }, 0)

    return result
  }, [products])
 
  return (
    <div style={{padding: 20}}>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={nameRef}
        placeholder='Name'
      ></input>
      <br />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder='Price'
      ></input>
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;