import { Provider } from "react-redux";
import store from "./redux/store";
import BookingForm from "./components/BookingForm";
import Header from "./components/Header";
import TableContainer from "./components/TableContainer";

function App() {
  return (
    <Provider store={store}>
      <Header />

      <section>
        <BookingForm />
        <TableContainer />
      </section>
    </Provider>
  );
}

export default App;
