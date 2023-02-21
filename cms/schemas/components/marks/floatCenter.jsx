
const floatCenterIcon = () => (
  <span>
      ⌧
  </span>
);

const floatCenterRender = (props) => (
  <span
    style={{
        borderRight: "2px dashed yellow",
        borderLeft: "2px dashed yellow",
        paddingRight: "10px",
        paddingLeft: "10px",

        display: "block",
        textAlign: "center"}}>
      {props.children}
  </span>
);

export {floatCenterIcon, floatCenterRender}