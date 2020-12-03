import Header from "../components/Header";
import { LoggedInPageItems } from '../components/NavbarItems';
import OrganizationContainer from "../components/OrganizationContainer";

export default function OrganizationPage() {
    return (
        <div>
            <Header Items={LoggedInPageItems} />
            <OrganizationContainer />
        </div>
    )
}