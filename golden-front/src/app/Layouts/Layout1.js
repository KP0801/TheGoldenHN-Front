import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


 function Layout1({ children }) {
    return (
        <div className="bg-white">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout1;