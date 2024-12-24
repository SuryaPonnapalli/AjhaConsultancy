import styles from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NavBar,
  Hero,
  AboutUs,
  Board,
  Business,
  Clients,
  ContactUs,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavBar />
          </div>
        </div>

        {/* Main content area, where routes will be displayed */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/business" element={<Business />} />
              <Route path="/board" element={<Board />} />
            </Routes>
          </div>
        </div>

        {/* Footer section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Clients />
            <ContactUs />
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
