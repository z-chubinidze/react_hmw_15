import React from "react";
import { Link } from "react-router-dom";

class Avtorizacia extends React.Component {

    constructor() {
        super()
        this.state = {
            email: "",
            pasword: ""
        }
    }
    Validacia = (event) => {
        event.preventDefault();

        if (this.state.email === "" ){
            window.alert("შეიყვანეთ თქვენი ელ.ფოსტა")
        }else if(this.state.pasword === ""){
            window.alert("შეიყვანეთ პაროლი")
        }else{
            this.setState({
                email: "",
                pasword: ""
            })
        }
        
    }

    saveEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    savePasword(event) {
        this.setState({
            pasword: event.target.value
        })
    }

    render() {
        return (
            <div className="sighin-content">

                <form onSubmit={(event) => this.Validacia(event)} className="form-1  p-4 p-md-5">
                    <h1 className="text-center Sign mb-4">SIGN IN FORM</h1>
                    <div className="d-flex flex-column mb-3">
                        <label htmlFor="Email" className="mb-2 ">EMAIL</label>
                        <input value={this.state.email} className="form-control input-1 " type="Email" id="Email" placeholder="ENTER EMAIL"
                            onChange={(event) => this.saveEmail(event)} />
                    </div>
                    <div className="d-flex flex-column mb-5">
                        <label htmlFor="Password" className="mb-2">PASSWORD</label>
                        <input value={this.state.pasword} className="form-control input-1 " type="Password" id="Password" placeholder="ENTER PASSWORD"
                            onChange={(event) => this.savePasword(event)} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <input type="submit" className="btn btn-warning w-100 " value="SIGN IN" />
                    </div>
                    <span className="d-flex span-1  gap-3 mt-2">d'not have an account?<Link className="nav-link text-primary  " to={"/Registracia"}>regirtration</Link> </span>

                </form>

            </div>
        )
    }

}

export default Avtorizacia