import {React,useState,useRef} from "react";
import { FaSquarePlus } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";
import "./App.css"

function App() {
  const [x,setX]=useState([])
  const [all,setAll]=useState(true)
  const [compl,setComple]=useState(false)
  const [activ,setActiv]=useState(false)
  const inp=useRef()
  const done=()=>{
    const newdate={value:inp.current.value,complated:false}
    setX([...x,newdate])
    inp.current.value=""
  }
  const closeit=(ele)=>{
    const newx=[...x]
    newx.splice(ele,1)
    setX(newx)
  }
  const comp=(index)=>{
    const newx=[...x]
    x[index].complated=!x[index].complated
    setX(newx)
  }
  return (
    <div className="app">
      <h1>To DO List</h1>
      <div className="main">
        <div className="enter">
          <input type="text" placeholder="Enter your task" ref={inp}/>
          <FaSquarePlus onClick={done} className="add"/>
        </div>
        <div className="buttons">
          <button className={all? "open":"btn"} onClick={()=>{
            setAll(true)
            setComple(false)
            setActiv(false)
          }}>All</button>
          <button className={compl? "open":"btn"} onClick={()=>{
            setAll(false)
            setComple(true)
            setActiv(false)
          }}>Complated</button>
          <button className={activ? "open":"btn"} onClick={()=>{
            setAll(false)
            setComple(false)
            setActiv(true)
          }}>Active</button>
        </div>
        <ul className="box">
          {
            all?x.length===0? <div className="empty">no items</div>
            : x.map((ele,index)=>{
            return <div className="item" >
              <FaRegCircle className={ele.complated?"done":""} onClick={()=>comp(index)} />
              <li>{ele.value}</li>
              <FaRegCircleXmark className="x" onClick={()=>closeit(index)}/>
            </div>
            }):
            compl?x.length===0? <div className="empty">no items</div>
            : x.map((ele,index)=>{
              if(ele.complated){
                return <div className="item" >
              <FaRegCircle className={ele.complated?"done":""} onClick={()=>comp(index)} />
              <li>{ele.value}</li>
              <FaRegCircleXmark className="x" onClick={()=>closeit(index)}/>
            </div>
              }
            }):
            x.length===0? <div className="empty">no items</div>
            : x.map((ele,index)=>{
              if(!ele.complated){
                return <div className="item" >
              <FaRegCircle className={ele.complated?"done":""} onClick={()=>comp(index)} />
              <li>{ele.value}</li>
              <FaRegCircleXmark className="x" onClick={()=>closeit(index)}/>
            </div>
              }
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
