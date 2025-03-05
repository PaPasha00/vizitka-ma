import Header from "../Header";
import BlockInfo from "./BlockInfo";
import BookingPage from "./BookingPage";
import Footer from "./Footer";
import s from "./MainPage.module.scss";
import Preview from "./Preview";

function MainPage() {
  return (
    <div className={s.root}>
      <Header />
      <Preview />
      <BlockInfo />
      <BookingPage />
      <Footer />
    </div>
  );
}

export default MainPage;
