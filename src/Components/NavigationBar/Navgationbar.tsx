import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./Navigationbar.css";
export default function NavgiationBar(props: any) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Lotto 60</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml">
          <Nav.Link href="#home" className="mr">Home</Nav.Link>
          <Nav.Link href="#link" className="mr">Fund</Nav.Link>
          <Nav.Link href="#home" className="mr">Activity</Nav.Link>
          <Nav.Link href="#link" className="mr">About</Nav.Link>
          <Nav.Link href="#home" className="mr">Support</Nav.Link>
          <Nav.Link href="#link" className="mr">Fund</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse>
        <Button variant="primary" className="btnFontStyle mr-lg-3">
          Play For Fun
        </Button>
        <Button variant="primary" className="btnFontStyle mr-lg-3">
          Play For Jackpot
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
