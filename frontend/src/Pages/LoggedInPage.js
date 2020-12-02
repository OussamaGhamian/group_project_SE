import LoggedIdContainer from "../components/LoggedIdContainer";
import Header from "../components/Header";
import { LoggedInPageItems } from '../components/NavbarItems';

export default function LoggedInPage() {
    return (
        <div>
            <Header Items={LoggedInPageItems} />
            <LoggedIdContainer />
        </div>
    )
}