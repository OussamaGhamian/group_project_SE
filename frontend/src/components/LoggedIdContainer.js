import { useEffect, useState } from "react";
import { DropdownButton, Dropdown, Form, Button } from "react-bootstrap"
import Cookies from "universal-cookie";
import { getOrganization, addOrganization } from "../API/OrganizationAPI";
import { getProjects } from "../API/ProjectsAPI";

export default function LoggedIdContainer() {
    const [orgName, setorgName] = useState("");
    const [organizations, setOrganizations] = useState("")
    const [myProjects, setmyProjects] = useState("")
    const userProjects = async () => {
        const result = await getProjects();
        setmyProjects(result.data);
    }
    const userOrganizations = async () => {
        const result = await getOrganization();
        setOrganizations(result.data);
    }
    useEffect(() => {
        userProjects();
        userOrganizations();
    }, []);
    var myProjectDropDown = myProjects.data
    var orgData;
    var hasOrganization = organizations.success;
    hasOrganization ? orgData = organizations.data
        : orgData = [{ name: 'by adding an organization you can manage your projects, teams and tasks, GoodLuck!' }];

    var title;
    hasOrganization ? title = 'list of Organizations' : title = 'Lets add an organization first!!';


    function validateForm() {
        return orgName.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    async function HandleAddOrg(event) {
        event.preventDefault();
        await addOrganization(orgName);
        window.location.reload();
    }

    function orgId(organizationId) {
        const cookies = new Cookies();
        cookies.set('OrgId', { organizationId }, { path: '/' });
    }
    console.log(myProjectDropDown)
    return (
        <div >
            <div className="card text-center 100vh">
                <div className="card-header">
                    {hasOrganization ?
                        <ul className="nav nav-pills card-header-pills">
                            <li className="nav-item m-1">
                                <DropdownButton variant="success" id="dropdown-basic-button" title="My Organization">
                                    {orgData.map(item => (
                                        <Dropdown.Item key={item.id} href="/OrganizationPage">{item.name}</Dropdown.Item>
                                    ))}
                                </DropdownButton>
                            </li>
                            <li className="nav-item m-1">
                                <DropdownButton variant="success" id="dropdown-basic-button" title="My Projects">
                                    {myProjectDropDown.map(item => {
                                        return (
                                            <Dropdown.Item onClick={() => orgId(item.id)} key={item.id} href="/OrganizationPage">{item[0].title}</Dropdown.Item>
                                        )
                                    })}
                                </DropdownButton>
                            </li>
                        </ul> : null}
                </div>
                <div className="card-body w-50 mx-auto">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="orgName">
                            <Form.Label>Organization Name</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={orgName}
                                onChange={(e) => setorgName(e.target.value)}
                            />
                        </Form.Group>
                        <Button block size="lg" type="submit" disabled={!validateForm()} onClick={HandleAddOrg}>
                            Add Organization
        </Button>
                    </Form>
                    <br></br>
                    <h5 className="card-title">{title}</h5>
                    <ul className="list-group card-text">
                        {orgData.map(item => (
                            <li key={item.id} className="list-group-item">
                                <a onClick={() => orgId(item.id)} key={item.id} href={"/OrganizationPage"}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="card-footer text-muted">
                </div>
            </div>
        </div >
    )
}