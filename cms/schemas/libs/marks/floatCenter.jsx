
export {floatCenterIcon, floatCenterRender}

const floatCenterIcon = () => (
  <span>
      ⌧
  </span>
);

const floatCenterRender = (props) => (
  <span
    style={{
        width: "100%",
        display: "block",
        textAlign: "center"}}>
      {props.children}
  </span>
);