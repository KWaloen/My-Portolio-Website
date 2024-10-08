"use client"

import { useState } from "react"
import RegistrationForm from "./RegistrationForm"
import IntroText from "./IntroText"
import LogInForm from "./LogInForm"
import Footer from "../../FrontPage/Footer"
import Banner from "../../FrontPage/Banner"
import NavBar from "@/app/FrontPage/NavBar"

export default function RegistrationPage() {
    const [submittedUsername, setSubmittedUsername] = useState<string>("");
    const [submittedPassword, setSubmittedPassword] = useState<string>("");

    function takeInCredentials(username: string, password: string) {
        setSubmittedUsername(username);
        setSubmittedPassword(password);
    }

    return (
        <div className = "page">
            <NavBar />
            <Banner message = "🔑 Login Page 🔒" />
            <IntroText />
                <div className="card">
                    <h1 className = "text centerText">Register here!</h1>
                    <h1 className = "text centerText">Enter your new username and password.</h1>
                    <RegistrationForm onSubmit={takeInCredentials} />
                </div>

                <div className="card">
                    <h1 className = "text centerText">Log in here!</h1> 
                    <h1 className = "text centerText">Enter your registered username and password.</h1>
                    <LogInForm onSubmit={takeInCredentials} />
                </div>

            <Footer />
        </div>
    )
}