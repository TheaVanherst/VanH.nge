
export {floatRightIcon, floatRightRender}

const floatRightIcon = () => (
  <span>
      ⌦
  </span>
);

const floatRightRender = (props) => (
  <span
    style={{
        width: "100%",
        display: "block",
        textAlign: "right"}}>
      {props.children}
  </span>
);