import React, { Component, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import VideoComments from "./VideoComments";
import Review from "./Review";


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
                <div style={{ width: "1920px" }}>
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
                            </Nav>
                        </Container>

                    </Navbar>
                    <div style={{ marginLeft: "10px"}}>
                        {this.state.bar == 1 ? <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                            <div style={{ textAlign: "left"}}>
                                This is an overview.
                            </div>
                            <Review />
                            
                        </div> : this.state.bar == 2 ? <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                        <   VideoComments />
                        </div> : this.state.bar == 3 ? <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                            Notes.
                        </div> : this.state.bar == 4 ? <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                            Announcements.
                        </div> : null}
                    </div>
                </div>
                <div>

                </div>
            </div>
        );
    }
};
export default CourseOverview;