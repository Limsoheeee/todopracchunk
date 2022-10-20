import { useSelector } from "react-redux"


const Todo =(props)=>{
    const {list, onRender} = props;

    return <h2>{list.map((item)=>onRender(item))}</h2>
}

export default Todo