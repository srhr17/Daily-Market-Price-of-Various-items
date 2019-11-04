import React, { Component } from 'react';
class Greenpeas extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        var countryStateInfo = {
            "Assam": {
                "Kamrup": {
                },
                "Lakhimpur": {
                }

            },
            "Jharkhand": {
                "Garhwa": {
                },
            },
            "Odisha": {

                "Angul": {
                }
            },
            "Madhya Pradesh": {

                "Betul": {

                },

                "Indore": {

                },
                "Jabalpur": {

                },
                "Khargone": {

                },
                "Raisen": {

                }
            },
            "Kerala": {

                "Alappuzha": {
                },
                "Idukki": {
                },
                "Malappuram": {
                }

            },
            "Gujarat": {

                "Dahod": {
                },
                "Patan": {
                }

            },
            "Chattisgarh": {

                "Balodabazar": {
                },
                "Balrampur": {
                },
                "Mungeli": {
                }

            },
            "Harayana": {

                "Fatehabad": {
                },
                "Hissar": {
                },
                "Jhajar": {
                },
                "Panipat": {
                }

            },
            "Punjab": {

                "Mansa": {
                }
            }







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
                <h1 style={{ marginLeft: "600px" }}>Green Peas</h1>
                <img src="https://www.bigbasket.com/media/uploads/p/l/10000284_11-fresho-green-peas.jpg" style={{ height: "800px", width: "800px", marginLeft: "300px" }}></img>
                <form action="http://localhost:8000/greenpeas" method="POST">
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

                    <input type="submit" ></input>
                </form>
            </div>
        );
    }
}

export default Greenpeas;