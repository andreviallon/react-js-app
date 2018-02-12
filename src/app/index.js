import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends React.Component {
    render() {
        var user = {
            name: "Max",
            hobbies: ["Tennis", "Music", "Video games"],
            age: 21
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs10 col-xs-offset-1">
                        <Home name={"Andre"} age={22} user={user}>
                            <p>This paragraph is a children of Home</p>
                        </Home>
                    </div>
                </div>

            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"));