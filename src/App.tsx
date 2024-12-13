// We have 3 forms of add CSS styles in React:

// 1 - EXTERNAL (example: index.css + Button.tsx)
//     + Traditional way, separated .css file, such as "index.css")
//     - On bigger projects, using external css can be dificult, since there could be conflicting class names for diferent contexts.
import Button from "./Button.tsx";

// 2 - MODULES (example: the "ButtonModule" folder)
//     + Allows us to import css modules dyamically on our components.
//     + Very scallabe, since there can be no naming conflicts when you import a css file directly.
//     - Requires additional configuration
//     - Can be dificult to manage global styles
import ButtonModule from "./ButtonModule/Button.tsx";

// 3 - INLINE (example: the "ButtonInline.tsx" file)
//     + Works by adding css definitions as an straight object in the tsx file
//     + Great for unique and minimal styling
//     - Reduces the readabilty of our components
//     - Very hard to maintain on large scale
import ButtonInline from "./ButtonInline.tsx"

function App() {
  return(
    <>
      <Button/>
      <ButtonModule/>
      <ButtonInline/>
    </>
  );
}

export default App
