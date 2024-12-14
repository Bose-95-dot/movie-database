import Home from './home';
import NavBar from './navbar';
import Footer from './footer';

function Layout() {
    return (
        <>
            <div className="container mx-auto">
                <NavBar />

                <Home />

                <Footer />

            </div>
        </>
    )
}

export default Layout