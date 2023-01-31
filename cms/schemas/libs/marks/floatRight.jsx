
const floatRightIcon = () => (
  <span>
      ⌦
  </span>
);

const floatRightRender = (props) => (
  <span
    style={{
        borderRight: "2px dashed yellow",
        paddingRight: "10px",
        marginLeft: "10px",
        right: "0px",

        display: "block",
        textAlign: "right"}}>
      {props.children}
  </span>
);

export {floatRightIcon, floatRightRender}