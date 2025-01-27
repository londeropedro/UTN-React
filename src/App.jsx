import { useState, useEffect } from 'react'
import db from "./config/firebase.js" 
import './App.css'

const Home = () => {
  const [product, setProducts] =  useState([]);

  const database= db

  useEffect(() => {
    const fetchprouducts = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      const fakeProducts = [
        {id:1 , name: 'Papas Bastón', price: 34, description: 'Porción de papas bastón comunes', size: 2},
        {id:2 , name: 'Explosión Chedar', price: 60, description: 'Explosión Chedar', size: 2},
        {id:3 , name: 'Españolas', price: 40, description: 'Porción de papas Españolas', size: 5},
        {id:4 , name: 'Bastón doble cocción', price: 48, description: 'Porción de papas Bastón doble cocción', size: 4}
      ]
      setProducts(fakeProducts)
    }
    fetchprouducts()
  }, [])

}

return (
  <div style={styles.container}>
    <h1>Menú Palacio de la Papa Frita</h1>
    
  </div>

)

export default App
