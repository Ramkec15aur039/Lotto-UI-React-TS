import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./Navigationbar.css";
export default function NavgiationBar(props: any) {
  return (
    <section className="navbarBackground sticky-top">
      <Navbar className="navbarCustom container" expand="lg">
        <Navbar.Brand href="#home" id="brandFont">
          Lotto 60
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml">
            <Nav.Link href="#home" className="mr navFont">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="mr navFont">
              Fund
            </Nav.Link>
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
        <Navbar.Collapse className="NavButtonMargin">
          <Button variant="primary" className="btnCustom mr-lg-3">
            Play For Jackpot
          </Button>
          <Button variant="primary" className="btnCustom mr-lg-3">
            Play For Fun
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
}
