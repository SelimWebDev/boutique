import { Route, Routes } from "react-router-dom"
import SignupForm from "../components/SignupForm.jsx"

function Auth(){
    return (
        <div>
            <Routes>
                <Route path="signup" element={<SignupForm />} />
            </Routes>
        </div>
    )
}

export default Auth