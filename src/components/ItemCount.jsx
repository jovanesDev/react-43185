import useChangeColor from "../hooks/useChangeColor";
import useCount from "../hooks/useCount";

const ItemCount = (props) => {

  const {count,handleSumar,handleRestar,decideColor} = useCount(props.initial,props.stock)

  return (
    <div>
      <div style={{ display: "flex",flexDirection:'column' }}>
        </div>
        <div style={{display:'flex'}}>
        <button onClick={handleSumar} >Sumar</button>
        <h4 style={{color:decideColor(count)}}> Count {count}</h4>
        <button onClick={handleRestar} >Restar</button>
      </div>
    </div>
  );
};

export default ItemCount;
