import Meta from 'components/Meta'
import Footer from 'components/Footer'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Meta />
            <div id="imgModal" className="modal">
                <div className="close">&times;</div>
                <img id="modalImage" />
                <div id="caption"></div>
                 </div>
            <main>{children}</main>
            <Footer />
        </div>
    )

}

export default DefaultLayout
