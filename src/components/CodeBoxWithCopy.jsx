import CopyButton from './CopyButton';
import { Code } from './Code';

export default function CodeBoxWithCopy(props){
  //create a codeBox that includes a copy button on the bottom right corner
  return (
    <div class='relative w-full'>
      <CopyButton textToCopy={props.html} />
      <Code html={props.html} />
    </div>
  );
  //when the copy button is clicked, the text that is inside the box is copied onto the user's clipboard
  //the user's clipboard is then reset to an empty string

  //props.html
}

