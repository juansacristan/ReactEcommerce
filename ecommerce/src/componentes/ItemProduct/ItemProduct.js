import { useEffect, useState } from 'react'
import './ItemProduct.css'

const ItemProduct = ({data, action}) => {
    const [contador, setContador] = useState(0)

    const {title, image, price, stock} = data

    const sumaNum = () =>{
        setContador(contador + 1)
    }
    const restaNum = () =>{
        setContador(contador - 1)
    }

    // 1. Mount -> Crear
    
    // useEffect(() =>{
    // }, [])

    // 2. Update/Change/Actualizacion -> Cambio el valor de State/prop
    
    // useEffect(() =>{
    // })

    // 3. Unmount/Desmontaje -> Destruye/Desaperece
    
    // useEffect(() =>{
        // return () =>{
        //   console.log("Se desmonta el componente")
        // }
    // }, [])

    useEffect(() =>{
        console.log("Actualizacion")
    }, [])

    return (
        <div className="item-product">
            <img src={`/assets/${image}`} alt ="Imagen producto"/>
            <p>{title}</p>
            <span>$ {price} COP</span>
            <p>stock: {stock}</p>
            <div className='countProd'>
                <button onClick={restaNum}>-</button>
                <p>{contador}</p>
                <button onClick={sumaNum}>+</button>
            </div>
            <button onClick={action}>Comprar</button>
        </div>
    )
}

export default ItemProduct