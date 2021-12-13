
import reactDom from 'react-dom';


function ListItem({toDoListItems,setToDoListItems}) {
    // Checkbox değiştiğinde property değiştiren method
    const onChange=(e,i)=>{
        const target = e.target; 
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;  
        updateItem(toDoListItems,name,value,i);  
    }
    //item propertysi güncelleyen method
    const updateItem = (array,name,value,index)=>{
        setToDoListItems(array.map((item)=>item === array[index]? {...item,[name]:value}: item))  
    }
    
    // butona basıldığında property değiştiren method
    const onClick = (e,i) => {
        const target = e.target;
        const value = target.type === 'button' ? true : false;
        const name = target.name;
        updateItem(toDoListItems,name,value,i)
        reactDom.findDOMNode(target).parentNode.className="d-none"; // parent node yakala
        
    }
    

    return (
        <div>
            {
                toDoListItems.map((item,index)=>(
                    item.isActive === true?
                    <label className="list-group-item d-flex bd-highlight gap-2 justify-content-start align-items-center ">
                        <input onChange={(e)=>{onChange(e,index)}} name='isActive' className="form-check-input p-1 bd-highlight " type="checkbox" value={item.isActive} checked={item.isActive}/> 
                        <span className="form-checked-content p-1 bd-highlight ">
                            <strong name="title" value={item.title} >{item.title}</strong>
                        </span>
                        <button name='isDeleted' value={item.isDeleted} type="button" onClick={(e)=>{onClick(e,index)}}  className="btn-close float-end ms-auto p-1 bd-highlight" aria-label="Close"></button>
                    </label>
                    :
                    <label className="list-group-item d-flex bd-highlight gap-2 justify-content-start align-items-center text-decoration-line-through ">
                        <input onChange={(e)=>{onChange(e,index)}} name='isActive' className="form-check-input p-1 bd-highlight " type="checkbox" value={item.isActive} checked={item.isActive}/> 
                        <span className="form-checked-content p-1 bd-highlight ">
                            <strong name="title" value={item.title} >{item.title}</strong>
                        </span>
                        <button name='isDeleted' value={item.isDeleted} type="button" onClick={(e)=>{onClick(e,index)}}  className="btn-close float-end ms-auto p-1 bd-highlight" aria-label="Close"></button>
                    </label>
                ))
            }
        </div>
    )
}

export default ListItem
