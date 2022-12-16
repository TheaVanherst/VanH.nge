
export {highlightIcon, highlightRender}

const highlightIcon = () => (
  <span
    style={{
      backgroundColor: '#565d67',
      borderRadius: '3px',
      color: 'white',
      padding: '0 4px'}}>
    H
  </span>
);

const highlightRender = (props) => (
  <span
    style={{
      backgroundColor: 'red' }}>
    {props.children}
  </span>
);