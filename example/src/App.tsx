import {
  Button,
  useCleanUI,
  CleanUIProvider,
} from "@x-niroshan-x/react-clean-ui";

const Header = () => {
  const { dark, setDark } = useCleanUI();
  return (
    <div>
      <p>Dark mode is {dark ? "on" : "off"}</p>
      <Button type="warning" onClick={() => setDark(!dark)}>Toggle</Button>
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
