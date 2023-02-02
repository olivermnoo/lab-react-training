export function BoxColor(props) {
  const styleDiv = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    width: "80%",
    height: "150px",
    display: "flex",
    justifyContent: " center",
    alignItems: " center",
  };
  return (
    <div style={styleDiv}>
      <p>Teste</p>
    </div>
  );
}

// css inline react
//styled components
