
const
  accentIcon = () => (
    <span>
      A
    </span>
  ),

  accentRender = (props) => (
    <span
      style={{color: 'purple'}}>
        {props.children}
    </span>
  );

export { accentIcon, accentRender }