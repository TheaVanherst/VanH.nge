
export {codeRender}

const codeRender = (props) => (
  <span
    style={{
      whiteSpace: "pre"}}>
    {props.children}
  </span>
);