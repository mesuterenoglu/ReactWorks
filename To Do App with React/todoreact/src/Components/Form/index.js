import React, { useEffect, useState } from 'react'

function Form({toDoListItems,setToDoListItems}) {

    // liste elemanı stateleri 
    const [listItem,setListItem] = useState({title:"",isActive:true,isDeleted:false})

    // input değiştiğinde liste elemanı oluşturan metod
    const onChangeInput = (e) => {
        setListItem({...listItem, [e.target.name]:e.target.value})  
    }

    // Form submit olduğunda listeye ekleyen method
    const onSubmit = (e)=>{
        e.preventDefault(); //Submit default işlemini durduran kod
        if(listItem.title === ""){
            alert("Lütfen yapılmak isteneni giriniz!");
            return false;
        }
        setToDoListItems([...toDoListItems,listItem]) //mevcut verileri koruyarak yeni gelen formu bilgilerini ekliyoruz.
    }

    // Form inputunu boşaltan method
    useEffect(()=>{
        setListItem({title:"",isActive:true,isDeleted:false})
    },[toDoListItems])


    return (
        <form className='form-control' onSubmit={onSubmit}>
            <div className="input-group mb-1">
                <input onChange={onChangeInput} name='title' value={listItem.title} type="text" className="form-control" placeholder="Ben bunu yaparım?" aria-label="Ben bunu yaparım?" aria-describedby="button-addon2"/>
            </div>
        </form>
    )
}

export default Form
