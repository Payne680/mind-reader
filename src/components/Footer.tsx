import { Col, Nav, NavItem, NavLink, Row } from "react-bootstrap";

export const Footer = () => {
    return (
        <div>
            <hr className="mb-0 mt-0" />
            <footer className="w-100 p-1 bg-light ">
                <Row>

                    <Col>
                        <Nav>
                            <NavItem>
                                <Nav as="ul" className="d-flex flex-column">
                                    <NavItem as="li" className="pl-0">
                                        <NavLink href="">Mind Reader</NavLink>
                                    </NavItem>
                                    <NavItem as="li" className="text-right mt-4">
                                        <strong>Happy Chatting ☺!</strong>
                                    </NavItem>
                                </Nav>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="px-3 mt-4 mb-0">Note that for simplicity, this example is not responsive (desktop only).</p>
                    </Col>
                </Row>
            </footer>
        </div>
    );
};