import React from "react";


class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    }
     add=(e)=>{
        e.preventDefault();
        if(this.state.name===""||this.state.email==="")
        return;
        this.props.AddContactHandler(this.state);
        this.setState({name:"",email:""});
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="ui main ">
                <h2>Add Conatct</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} placeholder="Enter Your Name" onChange={(e) => this.setState({ name: e.target.value })}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" value={this.state.email} name="email" placeholder="Enter Your E-Mail" onChange={(e) => this.setState({ email: e.target.value })}></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>

            </div>
        );
    }
}

export default AddContact;