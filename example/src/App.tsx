import {
  Button,
  usePlainUI,
  PlainUIProvider,
} from "@x-niroshan-x/react-clean-ui";

const Header = () => {
  const { dark, setDark } = usePlainUI();
  return (
    <div>
      <p>Dark mode is {dark ? "on" : "off"}</p>
      <Button onClick={() => setDark(!dark)}>Toggle</Button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <PlainUIProvider>
        <Header />
      </PlainUIProvider>
    </div>
  );
}

export default App;
