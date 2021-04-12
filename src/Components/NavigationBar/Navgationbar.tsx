import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./Navigationbar.css";
import { Link } from "react-router-dom";

export default function NavgiationBar(props: any) {
  return (
    <section className="navbarBackground sticky-top">
      <Navbar className="navbarCustom container" expand="lg">
        <Link to="/">
          <Navbar.Brand id="brandFont">Lotto 60</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navResponsive">
          <Nav className="ml">
            <Nav.Link className="mr">
              <Link className="navFont" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="mr navFont">Fund</Nav.Link>
            <Nav.Link href="#home" className="mr navFont">
              Activity
            </Nav.Link>
            <Nav.Link href="#link" className="mr navFont">
              About
            </Nav.Link>
            <Nav.Link href="#home" className="mr navFont">
              Support
            </Nav.Link>
            <Nav.Link href="#link" className="mr navFont">
              Fund
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="NavButtonMargin navbar-toggler navResponsive">
          <Link to="/PlaceYourJackpotBet" className="link">
            <Button variant="primary" className="btnCustom mr-lg-3">
              Play For Jackpot
            </Button>
          </Link>
          <Link to="/PlaceYourJackpotBet" className="link">
            <Button variant="primary" className="btnCustom mr-lg-3">
              Play For Fun
            </Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
}
