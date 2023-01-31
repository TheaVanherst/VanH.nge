
const subscriptIcon = () => (
  <span>
    A
    <e
      style={{
        display: "inline-block",
        fontSize: "0.6rem",
        verticalAlign: "bottom"}}>
      2
    </e>
  </span>
);

const subscriptRender = (props) => (
  <span
    style={{
      fontSize: "0.6rem",
      verticalAlign: "bottom"}}>
    {props.children}
  </span>
);

export {subscriptIcon, subscriptRender}