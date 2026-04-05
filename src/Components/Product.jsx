import './Product.css' 
 function Product({title,price=1,image,features}){
  console.log(features);

  return (  <div className='Product-card'>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p><b>Price :</b>{price}</p>
        <p><b>Description :</b>This is a in-demand jacket in this winter. <br /> there are many colors
                available for limited time. <br /> So come to the shop and purchase it</p>
      <p>{features.map((feature)=><li>{feature}</li>)}</p>
    </div>
  )
//  function Product({title,price=1,image,features,features2}){
//   console.log(features)
//   console.log(features2);
//   return (  <div className='Product-card'>
//         <img src={image} alt="" />
//         <h3>{title}</h3>
//         <p><b>Price :</b>{price}</p>
//         <p><b>Description :</b>This is a in-demand jacket in this winter. <br /> there are many colors
//                 available for limited time. <br /> So come to the shop and purchase it</p>
//       <p>{features}</p>
//       <p>{features2.a}</p>
//     </div>
//   )
}
// function Product(props){
//   console.log(props);
//   console.log(props.title);
//   return (  <div className='Product-card'>
//         <img src={image} alt="" />
//         <h3>{title}</h3>
//         <p><b>Price :</b>{price}</p>
//         <p><b>Description :</b>This is a in-demand jacket in this winter. <br /> there are many colors
//                 available for limited time. <br /> So come to the shop and purchase it</p>
//     </div>
//   )
// }
export default Product;