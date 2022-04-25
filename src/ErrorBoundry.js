import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundry extends Component {
    state = { hasError: false, redirect: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error(error, info);
    }

    componentDidUpdate() {
        if (this.state.hasError) {
            setTimeout(() => this.setState({ redirect: true }), 5000);
        }
    }

    render () {
        if (this.state.redirect) {
            return <Navigate to="/" />
        } else if (this.state.hasError) {
            return (
                <h2>
                    There was an erroe. Oh no. What are we going to do. JK.{""} 
                    <Link to="/">Click here</Link> to go back to the homepage. Or wait five 
                    seconds and we will do it for you. Or not. I'm not your mom.
                </h2>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundry;