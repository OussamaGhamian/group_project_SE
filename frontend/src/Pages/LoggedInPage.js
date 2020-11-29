import Header from "../components/Header";
import { LoggedInPageItems } from '../components/NavbarItems';

export default function LoggedInPage() {
    return (
        <Header Items={LoggedInPageItems} />
    )
}