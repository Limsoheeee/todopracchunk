import { useSelector } from "react-redux"


const Todo =(props) => {
    const {list,onRender} = props;

return (
<>
{list.map((item) =>  <h3>{onRender(item)}</h3>)}
</>
);

};

export default Todo;