import ItemProduct from "../ItemProduct/ItemProduct"

const ItemContainer = ({section}) =>{

return(
    <div className='list-products'>
        <h2>{section}</h2>
        <ItemProduct title="Victory bomber 150" price="$ 5.999.000" image={'Victory-bomber150-01.png'}/>
        <ItemProduct title="Victory switch" price="$ 6.799.000" image={'Victory-switch.png'}/>
        <ItemProduct title="Victory bomber 250" price="$ 10.990.000" image={'Victory-bomber-250.png'}/>
        <ItemProduct title="Benelli TNT 135" price="$ 9.499.000" image={'Benelli-tnt135.png'}/>
        <ItemProduct title="Benelli 180s" price="$ 10.799.000" image={'Benelli-180s.png'}/>
        <ItemProduct title="Benelli TNT23N" price="$ 12.799.000" image={'Benelli-tnt25n.png'}/>
    </div>
)
}

export default ItemContainer