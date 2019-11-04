import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Redirect
} from "react-router-dom";
class Register extends Component {
    rice = event => {
        window.history.pushState(null, "Rice", "/");
        //window.location.reload();
    };
    wheat = event => {
        window.history.pushState(null, "Wheat", "/");
        //window.location.reload();
    };
    saunf = event => {
        window.history.pushState(null, "Saunf", "/");
        //window.location.reload();
    };
    cowghee = event => {
        window.history.pushState(null, "Cowghee", "/");
        //window.location.reload();
    };
    cauliflower = event => {
        window.history.pushState(null, "Cauliflower", "/");
        //window.location.reload();
    };
    greenpeas = event => {
        window.history.pushState(null, "Greenpeas", "/");
        //window.location.reload();
    };
    render() {
        return (

            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h2 >Rice</h2>
                    <Router>
                        <NavLink
                            to="/rice"
                            onClick={this.rice()} >
                            <img src="https://www.bigbasket.com/media/uploads/p/l/40160003_1-super-saver-sona-masoori-raw-rice.jpg" alt="Rice" style={{ height: "300px", width: "200px", marginLeft: "10px" }}></img>
                        </NavLink>
                    </Router>
                </div>

                <div className='form-wrapper'>
                    <h2 style={{ marginLeft: "0px" }}>Wheat</h2>
                    <Router>
                        <NavLink
                            to="/wheat"
                            onClick={this.wheat()} >
                            <img src="https://www.bigbasket.com/media/uploads/p/l/30000234_5-bb-royal-wheat-lokwan.jpg" style={{ height: "300px", width: "200px", marginLeft: "10px" }}></img>

                        </NavLink>
                    </Router>

                </div>
                <div className='form-wrapper'>
                    <h2 style={{ marginLeft: "0px" }}>Saunf</h2>

                    <Router>
                        <NavLink
                            to="/saunf"
                            onClick={this.saunf()} >
                            <img src="https://www.bigbasket.com/media/uploads/p/l/20000476_2-bb-royal-fennelsaunf-big.jpg" style={{ height: "300px", width: "200px", marginLeft: "10px" }}></img>

                        </NavLink>
                    </Router>

                </div>
                <div className='form-wrapper'>
                    <h2 style={{ marginLeft: "0px" }}>Cow Ghee</h2>

                    <Router>
                        <NavLink
                            to="/cowghee"
                            onClick={this.cowghee()} >
                            <img src="https://www.bigbasket.com/media/uploads/p/l/40166277_2-amul-high-aroma-cow-ghee.jpg" style={{ height: "300px", width: "200px", marginLeft: "10px" }}></img>

                        </NavLink>
                    </Router>

                </div>
                <div className='form-wrapper'>
                    <h2 style={{ marginLeft: "0px" }}>Cauliflower</h2>

                    <Router>
                        <NavLink
                            to="/cauliflower"
                            onClick={this.cauliflower()} >
                            <img src="https://www.bigbasket.com/media/uploads/p/l/10000074-2_2-fresho-cauliflower.jpg" style={{ height: "300px", width: "200px", marginLeft: "10px" }}></img>

                        </NavLink>
                    </Router>

                </div>
                <div className='form-wrapper'>
                    <h2 style={{ marginLeft: "0px" }}>Green Peas</h2>

                    <Router>
                        <NavLink
                            to="/greenpeas"
                            onClick={this.greenpeas()} >
                            <img src="https://www.bigbasket.com/media/uploads/p/l/10000284_11-fresho-green-peas.jpg" style={{ height: "300px", width: "200px", marginLeft: "10px" }}></img>

                        </NavLink>
                    </Router>

                </div>
            </div>
        );
    }
}


export default Register;