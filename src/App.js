import React from 'react'
import JsonData from './data'

 function JsonDataDisplay(){
    const added = () => {
        alert('Added to cart');
    }

    const removed = () => {
        alert("Removed from cart");
    }
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                  <div className="name">  <h1>{info.name}</h1> </div>
                    <div className='box'>
                     <p>{`Name : ${info.productList[0].name}`}</p>
                     <p>{`Price : ${info.productList[0].price}`}</p>
                     <div className='fancy'><button onClick={added}>Add to cart</button></div> 
                     <div className='fancy'><button onClick={removed}>Remove from cart</button></div>  
                     </div>  
                     <div className='box'>
                     <p>{`Name : ${info.productList[1].name}`}</p>
                     <p>{`Price : ${info.productList[1].price}`}</p>
                     <div  className='fancy'><button onClick={added}>Add to cart</button></div> 
                     <div className='fancy'><button onClick={removed}>Remove from cart</button></div>  
                     </div> 
                </tr>
            )
        }
    )
    return(
        <div>      
                    {DisplayData} 
        </div>
    )
 }
 
 export default JsonDataDisplay;

 

 

        
                     