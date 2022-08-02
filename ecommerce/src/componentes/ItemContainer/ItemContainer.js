import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemContainer.css'

const ItemContainer = ({section}) =>{
    const product1 = {
        title: "Victory bomber 150",
        price: 5999000,
        image: 'Victory-bomber150-01.png',
        stock: 8,
    }
    const product2 = {
        title: "Victory switch",
        price: 6799000,
        image: 'Victory-switch.png',
        stock: 10,
    }
    const product3 = {
        title: "Victory bomber 250",
        price: 5999000,
        image: 'Victory-bomber-250.png',
        stock: 4,
    }
    const product4 = {
        title: "Benelli TNT 135",
        price: 9499000,
        image: 'Benelli-tnt135.png',
        stock: 7,
    }
    const product5 = {
        title: "Benelli 180s",
        price: 10799000,
        image: 'Benelli-180s.png',
        stock: 10,
    }
    const product6 = {
        title: "Benelli TNT23N",
        price: 12799000,
        image: 'Benelli-tnt25n.png',
        stock: 8,
    }
    const handleSubmit = () => {console.log("Envio de info")}
return(
    <div className='list-products'>
        <h2>{section}</h2>
        <ItemProduct data={product1} action={handleSubmit}/>
        <ItemProduct data={product2}/>
        <ItemProduct data={product3}/>
        <ItemProduct data={product4}/>
        <ItemProduct data={product5}/>
        <ItemProduct data={product6}/>
    </div>
)
}

export default ItemContainer