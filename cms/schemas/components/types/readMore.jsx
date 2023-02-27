
const
  readMoreIcon = () => (
    <span>
      +
    </span>
  ),

  readMoreRender = (props) => (
    <span
      style={{
        paddingLeft: "10px",
        borderLeft: "2px solid cyan",

        opacity: "0.5",
        display: "block"}}>
      {props.children}
    </span>
  );

export { readMoreIcon, readMoreRender }