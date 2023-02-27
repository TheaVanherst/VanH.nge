
const
  highlightIcon = () => (
    <span
      style={{
        backgroundColor: '#565d67',
        borderRadius: '3px',
        color: 'white',
        padding: '0 4px'}}>
      H
    </span>
  ),

  highlightRender = (props) => (
    <span
      style={{
        backgroundColor: 'red' }}>
      {props.children}
    </span>
  );

export { highlightIcon, highlightRender }