import Header from "../components/Header";
import { HomePageItems } from '../components/NavbarItems';
import SignUpForm from "../components/SignUpForm";


export default function HomePage() {
    return (
        <div>
            <Header Items={HomePageItems} />
            <div className="card text-center">
                <div className="card-header">
                    Sign Up
                </div>
                <div className="card-body w-50 mx-auto">
                    <SignUpForm />
                </div>
                <div className="card-footer text-muted">
                </div>
            </div>
        </div>


    )
}