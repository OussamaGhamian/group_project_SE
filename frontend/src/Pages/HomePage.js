import Header from "../components/Header";
import { HomePageItems } from '../components/NavbarItems';

export default function HomePage() {
    return (
        <div>
            <Header Items={HomePageItems} />
        </div>
        
    )
}