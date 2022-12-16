
export {letterIcon, letterRender}

const letterIcon = () => (
  <span>
    b.
  </span>
);

const letterRender = (props) => (
  <li
    style={{
      listStyleType: 'lower-latin'}}>
    {props.children}
  </li>);