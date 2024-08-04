import {
  Button,
  Input,
  useCleanUI,
  CleanUIProvider,
  TextArea,
  Checkbox
} from "@x-niroshan-x/react-clean-ui";

const Header = () => {
  const { dark, setDark } = useCleanUI();
  return (
    <div>
      <p>Dark mode is {dark ? "on" : "off"}</p>
      <Button variant="warning" onClick={() => setDark(!dark)}>
        Toggle
      </Button>
      <Input />
      <TextArea />
      <Checkbox label="Checked" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <CleanUIProvider>
        <Header />
      </CleanUIProvider>
    </div>
  );
}

export default App;
