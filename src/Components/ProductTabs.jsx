import Product from './Product.jsx'
import goggles from '../assets/goggles.png'
import Phone from '../assets/Phone.png'
import laptop from '../assets/laptop.png'
import Jacket from '../assets/Jacket.png'
function ProductTabs(){
      let options=["hi-tech","fast","durable"];
      let options2 = {a:"hi-tech",b:"fast",c:"durable"};
// let options=[<li>"hi-tech"</li>,<li>"hi-tech"</li>,<li>"hi-tech"</li>];
    return(
        <>
                <Product title = "Phone" price="30,000" image={Phone} features={options} />
        {/* <Product title = "Phone" price="30,000" image={Phone} features={["hi-tech","fast","durable"]} /> */}
        {/* <Product title = "Phone" price="30,000" image={Phone} features={{a:"hi-tech",b:"fast",c:"durable"}} /> */}
        {/* <Product title = "Phone" price="30,000" image={Phone} features={options} features2={options2}/> */}
        {/* <Product title = "Goggles" price="2000" image={goggles}/>
        <Product title = "Laptop" price="1,00,000" image={laptop}/>
        <Product title = "Jacket" price="5000" image={Jacket}/> */}

        {/* <Product/>
        <Product></Product>
        <Product></Product> */}
        <p><b>Total Cards:</b>  {2*2}</p>
        </>
    )
}
export default ProductTabs;