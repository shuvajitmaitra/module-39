
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

function App() {
  const handleClick= ()=>{
    alert("You click me!")
  }
const handleClick2 = (num) =>{
  alert(num + 3);
}
  return (
    <>
      
      <h1>React</h1>
      <Users></Users>
      <Team></Team>
    <Counter></Counter>

    <button onClick={handleClick}>Click Me</button>
    <button onClick={()=>handleClick2(3)}>Again Click Me</button>
    <button onClick={()=>{alert("third time you click me!!!")}}>Third</button>
    </>
  )
}

export default App
