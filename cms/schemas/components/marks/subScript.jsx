
const
  subscriptIcon = () => (
    <span>
      A
      <sub>
        2
      </sub>
    </span>
  ),

  subscriptRender = (props) => (
    <sub>
      {props.children}
    </sub>
  );

export { subscriptIcon, subscriptRender }