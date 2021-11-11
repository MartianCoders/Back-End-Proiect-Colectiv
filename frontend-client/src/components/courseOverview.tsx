import React, { Component, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';

interface OverviewState {
    bar : number;
}

type OverviewStateProps ={
}

class CourseOverview extends Component<OverviewStateProps, OverviewState>{
    state: OverviewState = {
        bar : 1,
    }

    render() {
        return (
            <div>
                <div style={{ width: "1020px" }}>
                    <Navbar bg="light" variant="light">
                        <Container>
                            <SearchIcon />
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => { this.setState({
                                    ...this.state,
                                    bar : 1
                                }) }}>Overview</Nav.Link>
                                <Nav.Link onClick={() => { this.setState({
                                    ...this.state,
                                    bar : 2
                                }) }}>Q&A</Nav.Link>
                                <Nav.Link onClick={() => { this.setState({
                                    ...this.state,
                                    bar : 3
                                }) }}>Notes</Nav.Link>
                                <Nav.Link onClick={() => { this.setState({
                                    ...this.state,
                                    bar : 4
                                }) }}>Announcements</Nav.Link>
                            </Nav>
                        </Container>

                    </Navbar>
                    <div>
                        {this.state.bar == 1 ? <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                            This is an overview.
                        </div> : this.state.bar == 2 ? <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                            Add questions.
                        </div> : this.state.bar == 3 ? <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                            Notes.
                        </div> : this.state.bar == 4 ? <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                            Announcements.
                        </div> : null}
                    </div>
                </div>
            </div>
        );
    }
}; export default CourseOverview;