import GlobalStyles from "./assets/GlobalStyles";
import Main from "./components/Content/Main/Main";
import Header from "./components/Header/Header";
import Form from "./components/Content/Form/Form";
import Bill from "./components/Content/Bill/Bill";
import Result from "./components/Content/Result/Result";
import People from "./components/Content/People/People";
import Tip from "./components/Content/Tip/Tip";
import TipResult from "./components/Content/TipResult/TipResult";
import TotalResult from "./components/Content/TotalResult/TotalResult";
import Reset from "./components/Content/Reset/Reset";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <Form>
          <Bill />
          <Tip />
          <People />
        </Form>
        <Result>
          <div>
            <TipResult />
            <TotalResult />
          </div>
          <Reset />
        </Result>
      </Main>
    </>
  );
}

export default App;
