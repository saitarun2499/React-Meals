import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import "./Body.css"
function Body() {

    const[items,setitems] = useState([]);

    useEffect(() => {
       axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(res=>{
            console.log(res.meals);
            setitems(res.data.meals)
        }).catch(err=>{
            console.log(err);
        })
    }, [])
    
    const itemslist = items.map((obj)=>{
        return (
            <div className='col-md-3' >
                <img src={obj.strMealThumb} className='img-fluid' alt='img'></img>
                <p>{obj.strMeal}</p>
            </div>
        )
    })

  return (
    <div>
        <div className='row'>
            {itemslist}
        </div>
    </div>
    
  )
}

export default Body