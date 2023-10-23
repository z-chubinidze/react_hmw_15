import React from "react";


class Registracia extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            pasword: "",
            conf_pasword: ""
        }
    }

    reg_validation = (event) => {
        event.preventDefault();
        if (this.state.name === "") {
            window.alert("შეიყვანეთ თქვენი სახელი")
        } else if (this.state.email === "") {
            window.alert("შეიყვანეთ თქვენი იმეილი")
        } else if (this.state.pasword === "") {
            window.alert("შეიყვანეთ პაროლი")
        } else if (this.state.conf_pasword === "") {
            window.alert("დაადასტურეთ პაროლი")
        } else {
            this.setState({
                name: "",
                email: "",
                pasword: "",
                conf_pasword: ""
            })
        }
    }

    saveName(event) {
        this.setState({
            name: event.target.value
        })
    }

    saveEmail_2(event) {
        this.setState({
            email: event.target.value
        })
    }

    savepasword_2(event) {
        this.setState({
            pasword: event.target.value
        })
    }

    saveConf_pasword(event) {
        this.setState({
            conf_pasword: event.target.value
        })
    }

    render() {
        return (
            <div className="reg-content">

                <form action="#" onSubmit={(event) => this.reg_validation(event)} className="form-1  p-4 p-md-5">
                    <h1 className="text-center Sign mb-4">REGISTRATION FORM</h1>
                    <input value={this.state.name} className="form-control input-1 mb-3 " type="text" placeholder="NAME"
                        onChange={(event) => this.saveName(event)} />

                    <input value={this.state.email} className="form-control input-1 mb-3 " type="Email" placeholder="EMAIL"
                        onChange={(event) => this.saveEmail_2(event)} />

                    <input value={this.state.pasword} className="form-control input-1 mb-3 " type="Password" placeholder="PASSWORD"
                        onChange={(event) => this.savepasword_2(event)} />

                    <input value={this.state.conf_pasword} className="form-control input-1 mb-4 " type="Password" placeholder="CONFIRM PASSWORD"
                        onChange={(event) => this.saveConf_pasword(event)} />

                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-warning w-100 ">REGISTRATION</button>
                    </div>

                </form>

            </div>
        )
    }

}

export default Registracia