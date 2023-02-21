
const accentIcon = () => (
  <span>
    A
  </span>
);

const accentRender = (props) => (
  <span
    style={{color: 'purple'}}>
      {props.children}
    </span>
);

export {accentIcon, accentRender}