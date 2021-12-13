import { useState } from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import Footer from "./Components/Footer";


function App() {
  // Liste stateleri
  const[toDoListItems,setToDoListItems] = useState([])

  return (
    <div>
      <div className="h-100 p-3 bg-light border rounded-3">
          <h2 className="text-center">Yapılacaklar Listesi</h2>
      </div>
      <Form toDoListItems={toDoListItems} setToDoListItems={setToDoListItems}/>
      <List toDoListItems={toDoListItems} setToDoListItems={setToDoListItems}/>
      <Footer toDoListItems={toDoListItems}/>
      
    </div>
  );
}

export default App;
