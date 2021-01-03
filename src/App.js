import "./App.css";

import Editor from "./components/Editor";
import Preview from "./components/Preview";

import React,{ Component } from "react";
import marked from "marked";

class App extends Component {
  initialText = `
  # Markdown Live Previewer

  ## Headers
  
  # This is a Heading h1
  ## This is a Heading h2 
  ###### This is a Heading h6
  
  ## Emphasis
  
  *This text will be italic*  
  _This will also be italic_
  
  **This text will be bold**  
  __This will also be bold__
  
  _You **can** combine them_
  
  ## Lists
  
  ### Unordered
  
  * Item 1
  * Item 2
  * Item 2a
  * Item 2b
  
### Ordered
  
  1. Item 1
  1. Item 2
  1. Item 3
    1. Item 3a
    1. Item 3b
  
## Images
  
![This is a alt text.](./logo192.png "This is a sample image.")
  
## Links
  
You can also check out [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Code

If you have inline code blocks, wrap them in backticks: \`var example = true\`.

### Blocks of code

\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`
  `

  state = {
    text: this.initialText,
    ouput: ""
  }

  textInputHandler = (event) => {
    this.setState({
      text: event.target.value,
      output: marked(event.target.value, {breaks: true})
    });
  }

  componentDidMount() {
    this.setState({output: marked(this.state.text, {breaks: true})})
  }

  render() {
    return (
      <div className="App">
        <Editor text={this.state.text} handleTextInput={this.textInputHandler}/>
        <Preview output={this.state.output}/>
      </div>
    );
  }
}

export default App;
