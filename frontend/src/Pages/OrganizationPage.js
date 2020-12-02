import { useEffect, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap"
import { getProjects } from "../API/ProjectsAPI";


export default function LoggedIdContainer({ organizationData, title, button, hasOrganization }) {
    var body;
    var orgData;
    const [myProjects, setmyProjects] = useState("")
    const userProjects = async () => {
        const result = await getProjects();
        setmyProjects(result.data);
    }
    useEffect(() => {
        userProjects();
    }, []);
    hasOrganization ? body = myProjects.data
        : body = [{ title: 'by adding an organization you can manage your projects, teams and tasks, GoodLuck!' }];
    hasOrganization ? orgData = organizationData
        : orgData = [{ name: 'by adding an organization you can manage your projects, teams and tasks, GoodLuck!' }];

    return (
        <div >
            <div className="card text-center 100vh">
                <div className="card-header">
                    {hasOrganization ?
                        <ul className="nav nav-pills card-header-pills">
                            <li className="nav-item m-1">
                                <DropdownButton variant="success" id="dropdown-basic-button" title="My Organization">
                                    {organizationData.map(item => (
                                        <Dropdown.Item key={item.id} href="/">{item.name}</Dropdown.Item>
                                    ))}
                                </DropdownButton>
                            </li>
                            <li className="nav-item m-1">
                                <DropdownButton variant="success" id="dropdown-basic-button" title="My Projects">
                                    {body.map(item => {
                                        return (
                                            <Dropdown.Item key={item.id} href="/">{item.title}</Dropdown.Item>
                                        )
                                    })}
                                </DropdownButton>
                            </li>
                        </ul> : null}

                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {orgData.map(item => (
                            <li>
                                <a key={item.id} href={"/" + item.href}>{item.name}</a>
                            </li>
                        ))}
                    </p>
                    <a href={button.href} className="btn btn-primary">{button.title}</a>
                </div>
                <div className="card-footer text-muted">

                </div>
            </div>
        </div >
    )
}