import LoggedIdContainer from "../components/LoggedIdContainer";
import Header from "../components/Header";
import { LoggedInPageItems } from '../components/NavbarItems';

export default function LoggedInPage() {
    
    var hasOrganization = true;
    var body;
    var title;
    var button;
    hasOrganization ? title = 'list of Projects' : title = 'Lets add an organization first!!';
    hasOrganization ? body =
        [
        {
                title: 'all of your list of Projects within given ORG',
                href:'/ProjectPage',
        },
        { title: 'all of your list of Projects within given ORG' ,
            href: '/ProjectPage',
        }
        ,
        { title: 'all of your list of Projects within given ORG' ,
            href: '/ProjectPage',
        },
        ]
        : body =[{ title:'by adding an organization you can manage your projects, teams and tasks, GoodLuck!'}];
    hasOrganization ? button = {
        title: 'Add Project',
        href:'/AddProject'
    }
        :
        button = {
        title: 'Add organization',
        href:'/AddOrganization'
    };
    return (
        <div>
            <Header Items={LoggedInPageItems} />
            <LoggedIdContainer body={body} title={title} button={button} hasOrganization={hasOrganization}/>
        </div>
    )
}