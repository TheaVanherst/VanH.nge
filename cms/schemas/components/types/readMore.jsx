
const readMoreIcon = () => (
  <span>
    +
  </span>
);

const readMoreRender = (props) => (
  <readMore
    style={{
      paddingLeft: "10px",
      borderLeft: "2px solid cyan",

      opacity: "0.5",
      display: "block"
  }}>
    {props.children}
  </readMore>);

export {readMoreIcon, readMoreRender}