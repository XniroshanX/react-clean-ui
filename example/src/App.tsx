import {
  Button,
  Input,
  useCleanUI,
  CleanUIProvider,
  TextArea,
  Checkbox,
  Box,
  Text,
  SideMenu,
  Navbar,
} from "@x-niroshan-x/react-clean-ui";
import { useState } from "react";

const Header = () => {
  const { dark, setDark } = useCleanUI();

  const [textInput, setTextInput] = useState("");
  const [textAreaInput, setTextAreaInput] = useState("");
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <Box className="clean-ui-container">
      <Navbar logo="/logo512.png">
        <Text onClick={() => setShowSideMenu(!showSideMenu)}>Show</Text>
      </Navbar>

      <Box className="dark-mode-container">
        <Text variant="h1">React Clean UI</Text>
        <Box className="sidebar-container">
          <Text variant="h2">Side Menu</Text>
          <Text variant="p">Fully configurable side menu</Text>

          <SideMenu show={showSideMenu}>
            <Text onClick={() => setShowSideMenu(!showSideMenu)}>Hide</Text>
          </SideMenu>
        </Box>
        <Text variant="h2">Dark Mode Support</Text>
        <Text>
          Dark mode is implemented by adding the <code>dark</code> class to the{" "}
          <code>html</code> tag.
        </Text>
        <Button variant="warning" onClick={() => setDark(!dark)}>
          Toggle Dark Mode
        </Button>
      </Box>

      <Box className="button-container">
        <Text variant="h2">Button Component</Text>
        <Text>
          The <code>Button</code> component renders a customizable button with
          support for different types and styles. You can specify the button
          type, apply styles using the <code>variant</code> and{" "}
          <code>className</code> props, and handle click events with the{" "}
          <code>onClick</code> prop. Use the <code>children</code> prop to
          insert content inside the button.
        </Text>
        <Button>Click Me!</Button>
      </Box>

      <Box className="input-container">
        <Text variant="h2">Text Input Component</Text>
        <Text>
          The <code>Input</code> component renders a customizable input field
          with support for various types, placeholder text, and event handlers.
          You can specify a variant to apply different styles and use the{" "}
          <code>className</code> prop for additional styling.
        </Text>
        <Input
          value={textInput}
          onChange={(event) => setTextInput(event.target.value)}
        />
      </Box>

      <Box className="textarea-container">
        <Text variant="h2">Textarea Component</Text>
        <Text>
          The <code>TextArea</code> component provides a customizable text area
          with options for styling, placeholder text, and event handling. You
          can adjust its size with the <code>rows</code> and <code>cols</code>{" "}
          props, and apply different styles using the <code>variant</code> prop
          and <code>className</code>.
        </Text>
        <TextArea
          value={textAreaInput}
          onChange={(event) => setTextAreaInput(event.target.value)}
        />
      </Box>

      <Box className="input-container">
        <Text variant="h2">Checkbox Component</Text>
        <Text>
          The <code>Checkbox</code> component provides a customizable checkbox
          with support for different styles and a label. You can control its
          checked state and handle changes with the <code>onChange</code> prop.
          Use the <code>variant</code> and <code>className</code> props to apply
          styles, and provide a <code>label</code> for the checkbox's text.
        </Text>
        <Checkbox
          checked={checkBoxStatus}
          onChange={(event) => setCheckBoxStatus(event.target.checked)}
          label="Checked"
        />
      </Box>
    </Box>
  );
};

function App() {
  return (
    <CleanUIProvider>
      <Header />
    </CleanUIProvider>
  );
}

export default App;
