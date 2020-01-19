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
            <style jsx>{`
          /* Style the Image Used to Trigger the Modal */
          #modalImage {
              transition: 0.3s;
              clear: right;
              margin: auto;
              display: block;
              max-height: 80%;
              max-width: 90%
          }
          
          /* The Modal (background) */
          .modal {
              display: none; /* Hidden by default */
              position: fixed; /* Stay in place */
              z-index: 1; /* Sit on top */
              left: 0;
              top: 0;
              width: 100%; /* Full width */
              height: 100%; /* Full height */
              overflow: auto; /* Enable scroll if needed */
              background-color: rgb(0,0,0); /* Fallback color */
              background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
          }
        
          
          /* Caption of Modal Image (Image Text) - Same Width as the Image */
          #caption {
              margin: auto;
              display: block;
              width: 80%;
              max-width: 700px;
              text-align: center;
              color: #ccc;
              padding: 10px 0;
          }
          
          /* Add Animation - Zoom in the Modal */
          .modal-content, #caption { 
              -webkit-animation-name: zoom;
              -webkit-animation-duration: 0.6s;
              animation-name: zoom;
              animation-duration: 0.6s;
          }
          
          @-webkit-keyframes zoom {
              from {-webkit-transform:scale(0)} 
              to {-webkit-transform:scale(1)}
          }
          
          @keyframes zoom {
              from {transform:scale(0)} 
              to {transform:scale(1)}
          }
          
          /* The Close Button */
          .close {
            float: right;
            padding: 3% 3% 1% 0;
              color: #f1f1f1;
              font-size: 40px;
              font-weight: bold;
              transition: 0.3s;
          }
          
          .close:hover,
          .close:focus {
              color: #bbb;
              text-decoration: none;
              cursor: pointer;
          }
          
          }
          
        `}</style>
        </div>
    )

}

export default DefaultLayout
