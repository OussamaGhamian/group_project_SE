import Header from "../components/Header";
import { HomePageItems } from '../components/NavbarItems';
import Home from '../component/home/home';


export default function HomePage() {
    return (
        <div>
            <Header Items={HomePageItems} />
            <Home></Home>
        </div>
        
    )
}