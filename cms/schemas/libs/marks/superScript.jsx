
export {superscriptIcon, superscriptRender}

const superscriptIcon = () => (
  <span>
    A
    <e
      style={{
        fontSize: "0.6rem",
        verticalAlign: "top"}}>
      2
    </e>
  </span>
);

const superscriptRender = (props) => (
  <span
    style={{
      fontSize: "0.6rem",
      verticalAlign: "top"}}>
    {props.children}
  </span>
);