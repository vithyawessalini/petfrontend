import React, { Component } from 'react';

class AdminSignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adminUsername: '',
            adminPassword: '',
            confirmPassword: '',
            adminName: '',
            adminEmail: '',
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleAdminSignup = (e) => {
        e.preventDefault();

        // Perform client-side validation (e.g., password match, required fields, etc.)
        if (this.state.adminPassword !== this.state.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Prepare admin data to send to the server for registration
        const adminData = {
            adminUsername: this.state.adminUsername,
            adminPassword: this.state.adminPassword,
            adminName: this.state.adminName,
            adminEmail: this.state.adminEmail,
            // Include other admin details here
        };

        // Send adminData to the server for registration (server-side logic not shown here)

        // Optionally, you can clear the form fields after submission
        this.setState({
            adminUsername: '',
            adminPassword: '',
            confirmPassword: '',
            adminName: '',
            adminEmail: '',
        });
    };

    render() {
        return (
            <div>
                <h1>Admin Signup</h1>
                <form onSubmit={this.handleAdminSignup}>
                    <label>Username:
                        <input
                            type="text"
                            name="adminUsername"
                            value={this.state.adminUsername}
                            onChange={this.handleInputChange}
                            required
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            name="adminPassword"
                            value={this.state.adminPassword}
                            onChange={this.handleInputChange}
                            required
                        />
                    </label>
                    <label>Confirm Password:
                        <input
                            type="password"
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.handleInputChange}
                            required
                        />
                    </label>
                    <label>Name:
                        <input
                            type="text"
                            name="adminName"
                            value={this.state.adminName}
                            onChange={this.handleInputChange}
                            required
                        />
                    </label>
                    <label>Email:
                        <input
                            type="email"
                            name="adminEmail"
                            value={this.state.adminEmail}
                            onChange={this.handleInputChange}
                            required
                        />
                    </label>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default AdminSignupForm;
