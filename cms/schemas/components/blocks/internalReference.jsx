
const
  internalIcon = () => (
    <div
      style={{
        width: "12px",
        display: "block"}}>
        <span
          style={{
            marginLeft: "-100%",
            marginRight: "-100%",
            textAlign: "center",
            display: "block"}}>
        📍
      </span>
    </div>
  ),

  internalRender = (props) => (
    <span>
      {props.children}
    </span>
  );

export { internalIcon, internalRender }