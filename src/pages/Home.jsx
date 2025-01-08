import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HabitsPage from "./HabitsPage";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HabitsPage />
      <Footer />
    </div>
  );
}

export default Home;
