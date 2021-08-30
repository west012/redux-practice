import React from 'react';
import './App.css'; 
import Input from './components/input';

const agendaList = [
  {
            item: "this",
            added: true,
            id: 2651
  },{
            item: 'That',
            added: true,
            id: 654151
  },{
            item: '3rd',
            added: true,
            id: 584
  }
]

function App() {
  return (
    <div className="app">
      <div className="app_container">
        <div className="app_agendaContainer">
          {
            agendaList.map(item =>(
              <agendaItem
                name={item.item}
                done={item.done}
                id={item.id}
              />
            ))
          }
        </div>
        <Input/>
      </div>
    </div>
  );
}

export default App;
