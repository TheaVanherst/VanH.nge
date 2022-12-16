
export {romanIcon, romanRender}

const romanIcon = () => (
  <span>
    iii.
  </span>
);

const romanRender = (props) => (
  <li
    style={{
      listStyleType: 'lower-roman'}}>
    {props.children}
  </li>);