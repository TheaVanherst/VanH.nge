
const
  floatCenterIcon = () => (
    <span>
      ⌧
    </span>
  ),

  floatCenterRender = (props) => (
    <center
      style={{
        borderRight: "2px dashed yellow",
        borderLeft: "2px dashed yellow",
        paddingRight: "10px",
        paddingLeft: "10px"}}>
      {props.children}
    </center>
  );

export { floatCenterIcon, floatCenterRender }