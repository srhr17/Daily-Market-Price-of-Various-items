import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Redirect
} from "react-router-dom";
class Wheat extends Component {
    constructor(props) {
        super(props);
        this.state = { price: 0 }
    }

    submit = event => {
        event.preventDefault();
        var count;
        var value = this;
        // var data = new URLSearchParams();
        // var formdata = new FormData(document.getElementById('custform'))
        // // var pair;
        // for (var pair of formdata) {
        //     data.append(pair[0], pair[1])
        // }
        // console.log(data)

        fetch('https://dne6voyt71.execute-api.us-east-1.amazonaws.com/cloudcase/', {
            method: 'get',
            // body: data
        }).then(function (response) {
            return response.json();

        }).then(function (json) {
            value.setState({ price: json[0].price })
            console.log(value.state.price)
            alert(value.state.price)
        })


    }

    visualize1 = () => {
        window.history.pushState(null, null, "/visualization1");
        window.location.reload();
    };

    render() {
        var countryStateInfo = {
            "Assam": {
                "Bangaigaon": {
                },
                "Barpeta": {
                },
                "Dhemaji": {
                },
                "Dhubri": {
                },
                "Golaghat": {
                },
                "Jorhat": {
                },
                "Kamrup": {
                },
                "Karimganj": {
                },
                "Nagaon": {
                },
                "Nalbari": {
                },
                "Sibsagar": {
                },
                "Goalpara": {

                }
            },
            "Jharkhand": {
                "Bokaro": {
                },
                "Deogarh": {
                },
                "Dhanbad": {
                },
                "Koderma": {
                },
                "Palamu": {
                },
                "Saraikela(Kharsanwa)": {
                },
                "Lohardaga": {

                }
            },
            "Odisha": {

                "Angul": {
                },
                "Sundergarh": {

                }
            },
            "Madhya Pradesh": {

                "Sagar": {

                }
            },



        }


        window.onload = function () {

            //Get html elements
            var countySel = document.getElementById("countySel");
            var stateSel = document.getElementById("stateSel");

            //Load countries
            for (var country in countryStateInfo) {
                countySel.options[countySel.options.length] = new Option(country, country);
            }

            //County Changed
            countySel.onchange = function () {

                stateSel.length = 1; // remove all options bar first

                if (this.selectedIndex < 1)
                    return; // done

                for (var state in countryStateInfo[this.value]) {
                    stateSel.options[stateSel.options.length] = new Option(state, state);
                }
            }
            stateSel.onchange = function () {
                if (this.selectedIndex < 1)
                    return;
            }


        }
        return (
            <div>
                <h1 style={{ marginLeft: "600px" }}>Wheat</h1>
                <img src="https://www.bigbasket.com/media/uploads/p/l/30000234_5-bb-royal-wheat-lokwan.jpg" style={{ height: "800px", width: "800px", marginLeft: "300px" }}></img>
                <form id="custform" onSubmit={(e) => this.submit(e)}>
                    <h2 style={{ marginLeft: "570px" }}>State</h2>
                    <select style={{ marginLeft: "570px", textEmphasisColor: "grey" }}
                        id="countySel" size="1" name="state">
                        <option value="" selected="selected">-- Select Country --</option>
                    </select>
                    <br />
                    <br />
                    <h2 style={{ marginLeft: "570px" }}>District</h2>
                    <select style={{ marginLeft: "550px", textEmphasisColor: "grey" }}
                        id="stateSel" size="1" name="district">
                        <h3 style={{ marginLeft: "570px" }}>State</h3>
                        <option value="" selected="selected">-- Select district --</option>
                    </select>
                    <br></br>
                    <span><h1>Price : {this.state.price}</h1></span>
                    <br></br>
                    <input type="submit" ></input>
                </form>
                <NavLink to="/visualization1" onClick={this.visualize1}>
                    Visualization
              </NavLink>
            </div>
        );
    }
}

export default Wheat;