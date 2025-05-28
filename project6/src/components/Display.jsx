
const Display = ({ colors }) => {


  return (

    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "20px" }}>

      {colors.map((color, index) => (

        <div key={index} style={{ width: "100px", height: "100px",backgroundColor: color,border: "1px solid black"}}></div>

      ))}
    </div>
  );
};

export default Display;
