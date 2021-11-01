import React, { Component, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';



class CourseOverview extends React.Component {
    render() {

        const [bar, switchBar] = useState(1);

        return (
            <div>
                <div style={{ width: "1020px" }}>
                    <Navbar bg="light" variant="light">
                        <Container>
                            <SearchIcon />
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => { switchBar(1) }}>Overview</Nav.Link>
                                <Nav.Link onClick={() => { switchBar(2) }}>Q&A</Nav.Link>
                                <Nav.Link onClick={() => { switchBar(3) }}>Notes</Nav.Link>
                                <Nav.Link onClick={() => { switchBar(4) }}>Announcements</Nav.Link>
                            </Nav>
                        </Container>

                    </Navbar>
                    <div>
                        {bar == 1 ? <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                            This is an overview.
                        </div> : bar == 2 ? <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                            Add questions.
                        </div> : bar == 3 ? <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                            Notes.
                        </div> : bar == 4 ? <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                            Announcements.
                        </div> : null}
                    </div>
                </div>
            </div>
        );
    }
}; export default CourseOverview;