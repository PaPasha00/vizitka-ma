import Header from "../Header";
import BlockInfo from "./BlockInfo";
import BookingPage from "./BookingPage";
import Footer from "./Footer";
import s from "./MainPage.module.scss";
import Preview from "./Preview";

function MainPage() {
<<<<<<< Updated upstream
    return (
        <div className={s.root}>
            main page
        </div>
    )
=======
  return (
    <div className={s.root}>
      <Header />
      <Preview />
      <BlockInfo />
      <BookingPage />
      <Footer />
    </div>
  );
>>>>>>> Stashed changes
}

export default MainPage;
