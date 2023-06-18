import React from "react";
import errorpage from "../../assets/errorpage.jpg";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
function ErrorPage() {
  return (
    <div>
      <MDBContainer fluid className="p-4">
        <MDBRow className="container">
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              404 Error <br />
              <span style={{ color: '#58e4a9' }}>Page not found</span>
            </h1>
          </MDBCol>

          <MDBCol md="6">
            <figure className="figure">
              <img
                src={errorpage}
                className="figure-img img-fluid rounded shadow-3 mb-3"
                alt="..."
              />
            </figure>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default ErrorPage;
