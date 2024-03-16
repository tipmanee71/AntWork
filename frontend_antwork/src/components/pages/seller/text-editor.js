import React from "react";
import MDEditor from "@uiw/react-md-editor";
// No import is required in the WebPack.
// import "@uiw/react-md-editor/dist/markdown-editor.css";

const mkdStr = `
# Markdown Editor

---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;

function TextEditor() {
  const [value, setValue] = React.useState(mkdStr);
  return (
    <div data-color-mode="light" style={{ maxWidth: "100%", width: "900px" }}>
      <MDEditor height={500} value={value} onChange={setValue} />
    </div>
  );
}

export default TextEditor;
