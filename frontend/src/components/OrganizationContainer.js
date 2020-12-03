import { useEffect, useState } from "react";
import { DropdownButton, Dropdown, Form, Button } from "react-bootstrap"
import { getOneOrganization, getOrganization } from "../API/OrganizationAPI";
import { addProject, getProjects } from "../API/ProjectsAPI";
import Cookies from 'universal-cookie'



export default function OrganizationContainer() {

    const [ProjName, setProjName] = useState("");
    const [ProjDescription, setProjDescription] = useState("");
    const [organizations, setOrganizations] = useState("")
    const [myProjects, setmyProjects] = useState("")
    const [OneOrg, setOneOrg] = useState("")
    const cookies = new Cookies();
    const OrgId = cookies.get('OrgId').organizationId;

    const userProjects = async () => {
        const result = await getProjects();
        setmyProjects(result.data);
    }
    const userOrganizations = async () => {
        const result = await getOrganization();
        setOrganizations(result.data);
    }
    const getOneOrg = async () => {
        const result = await getOneOrganization(OrgId);
        setOneOrg(result.data);
    }

    useEffect(() => {
        userProjects();
        userOrganizations();
        getOneOrg();
    }, []);
    var myProjectDropDown = myProjects.data
    var orgData;
    var hasOrganization = organizations.success;
    hasOrganization ? orgData = organizations.data
        : orgData = [{ name: 'by adding an organization you can manage your projects, teams and tasks, GoodLuck!' }];

    var title;
    hasOrganization ? title = 'list of Projects' : title = 'Lets add a project first!!';


    function validateForm() {
        return ProjName.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    async function HandleAddProj(event) {
        event.preventDefault();
        await addProject(ProjName, ProjDescription, OrgId);
        // window.location.reload();
    }

    function orgIdnew(organizationId) {
        const cookies = new Cookies();
        cookies.set('OrgId', { organizationId }, { path: '/' });
    }

    console.log('From OrgContainer   ' + OrgId + OneOrg)
    return (
        <div >
            <div className="card text-center 100vh">
                <div className="card-header">
                    {hasOrganization ?
                        <ul className="nav nav-pills card-header-pills">
                            <li className="nav-item m-1">
                                <DropdownButton variant="success" id="dropdown-basic-button" title="My Organization">
                                    {orgData.map(item => (
                                        <Dropdown.Item onClick={() => orgIdnew(item.id)} key={item.id} href="/OrganizationPage">{item.name}</Dropdown.Item>
                                    ))}
                                </DropdownButton>
                            </li>
                            <li className="nav-item m-1">
                                <DropdownButton variant="success" id="dropdown-basic-button" title="My Projects">
                                    {myProjects == null ? myProjectDropDown.map(item => {
                                        return (
                                            <Dropdown.Item key={item.id} href="/OrganizationPage">{item.title}</Dropdown.Item>
                                        )
                                    }) : null}
                                </DropdownButton>
                            </li>
                        </ul> : null}
                </div>
                <div className="card-body w-50 mx-auto">
                    <h3>Welcome To { }</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="ProjName">
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={ProjName}
                                onChange={(e) => setProjName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="ProjDescription">
                            <Form.Label>Project Description</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={ProjDescription}
                                onChange={(e) => setProjDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Button block size="lg" type="submit" disabled={!validateForm()} onClick={HandleAddProj}>
                            Add Project
        </Button>
                    </Form>
                    <br></br>
                    <h5 className="card-title">{title}</h5>
                    <ul className="list-group card-text">
                        {myProjects == null ? myProjectDropDown.map(item => {
                            return (
                                <li key={item.id} className="list-group-item">
                                    <a key={item.id} href={"/" + item.href}>{item.name}</a>
                                </li>
                            )
                        }) : null}

                    </ul>
                </div>
                <div className="card-footer text-muted">
                </div>
            </div>
        </div >
    )
}