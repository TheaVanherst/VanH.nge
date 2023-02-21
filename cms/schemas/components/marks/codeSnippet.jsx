
const codeSnippetIcon = () => (
  <span
    style={{
      fontStyle: "Copperplate"}}>
    &#8249;s&#8250;
  </span>
);

const codeSnippetRender = (props) => (
  <span
    style={{
      backgroundColor: 'lightGray',
      marginBottom: "15px",
      fontFamily: "monospace" }}>
      {props.children}
    </span>
);

export {codeSnippetIcon, codeSnippetRender}