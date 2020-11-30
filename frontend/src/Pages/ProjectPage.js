import Header from "../components/Header";
import { LoggedInPageItems } from "../components/NavbarItems";
import ProductPageContainer from "../components/ProductPageContainer";

export default function ProjectPage() {
    var hasTeam = true;
    var body;
    var title;
    var button;
    hasTeam ? title = 'list of Teams' : title = 'Lets add a team first!!';
    hasTeam ? body =
        [
            {
                title: 'all of your Team within given ORG',
                href: '/ProjectPage',
            },
            {
                title: 'all of your Team within given ORG',
                href: '/ProjectPage',
            }
            ,
            {
                title: 'all of your Team within given ORG',
                href: '/TeamPage',
            },
        ]
        : body = [{ title: 'by adding a team or multiple teams you can manage your project by assessing tasks to users!' }];
    hasTeam ? button = {
        title: 'Add Team',
        href: '/AddProject'
    }
        :
        button = {
            title: 'Add Team',
            href: '/AddTeam'
        };
    return (
        <div>
            <Header Items={LoggedInPageItems} />
            <ProductPageContainer body={body} title={title} button={button} hasTeam={hasTeam} />
        </div>
    )
}