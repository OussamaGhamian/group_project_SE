import Header from "../components/Header";
import Login from "../components/loginForm";
import { HomePageItems } from '../components/NavbarItems';


export default function HomePage() {
    return (
        <div>
            <Header Items={HomePageItems} />
            <div className="card text-center">
                <div className="card-header">
                    Log in
                </div>
                <div className="card-body  w-50 mx-auto">
                    <Login />
                </div>
                <div className="card-footer text-muted">
                </div>
            </div>
        </div>


    )
}