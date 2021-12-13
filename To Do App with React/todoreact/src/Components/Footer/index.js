import React from 'react'

function Footer({toDoListItems}) {
    // active elamanlar listesi
    const activeList = toDoListItems.filter((item)=>{
        if(!item.isDeleted){
            return item.isActive && item;
        }
    })
    // tamamlanan elemanlar listesi
    const completedList = toDoListItems.filter((item)=>{
        if(!item.isDeleted){
            return !item.isActive && item;
        }
    })
    // silinen elemanlar listesi
    const deletedList = toDoListItems.filter((item)=>{
        if(item.isDeleted){
            return item
        }
    })
    return (
        <div className="h-100 p-3 bg-light border rounded-3">
            <h6 className="fw-bold">Liste Detay</h6>
            <div className='row d-flex flex-row p-2 bd-highlight '>
            <button type="button" className="btn btn-outline-primary text-align-center d-inline align-items-center">Yapılacaklar
                <span className="badge bg-secondary mx-1">{activeList.length}</span> 
            </button>
            <button type="button" className="btn btn-outline-primary text-align-center d-inline align-items-center">Tamamlananlar<span className="badge bg-secondary mx-1">{completedList.length}</span> 
            </button>
            <button type="button" className="btn btn-outline-primary text-align-center d-inline align-items-center">Silinenler 
                <span className="badge bg-secondary mx-1">{deletedList.length}</span> 
            </button>
            </div>
        </div>
        
    )
}
export default Footer
