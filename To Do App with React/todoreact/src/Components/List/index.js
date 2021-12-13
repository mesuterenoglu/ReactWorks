
import ListItem from './ListItem';

function List({toDoListItems,setToDoListItems}) {
    
    return (
        <div className="list-group">
            <ListItem toDoListItems={toDoListItems} setToDoListItems={setToDoListItems}/>
        </div>
        
    )
}

export default List
