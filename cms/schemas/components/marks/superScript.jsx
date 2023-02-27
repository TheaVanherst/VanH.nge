
const
  superscriptIcon = () => (
    <span>
      A
      <sup>
        2
      </sup>
    </span>
  ),

  superscriptRender = (props) => (
    <span>
      {props.children}
    </span>
  );

export { superscriptIcon, superscriptRender }