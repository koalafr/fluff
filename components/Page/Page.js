import Header from "./Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// this is a Layout, the default Page Layout
export default function Page({ children }) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between'>
      <Header />
      {/* Navbar */}
      <Navbar />
      <main>{children}</main>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
