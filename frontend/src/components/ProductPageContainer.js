import { DropdownButton, Dropdown } from "react-bootstrap"

export default function ProductPageContainer({ body, title, button, hasTeam }) {
    return (
        <div >
            <div className="card text-center 100vh">
                <div className="card-header">
                    <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item m-1">
                            <DropdownButton variant="success" id="dropdown-basic-button" title="My Organization">
                                <Dropdown.Item href="#/action-1">ORG 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">ORG 2</Dropdown.Item>
                            </DropdownButton>
                        </li>
                        <li className="nav-item m-1">
                            <DropdownButton variant="success" id="dropdown-basic-button" title="My Projects">
                                <Dropdown.Item href="#/action-1">PROJECT 1 ORG 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">PROJECT 2 ORG 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">PROJECT 3 of ORG 2</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">PROJECT 4 of ORG 2</Dropdown.Item>
                            </DropdownButton>
                        </li>
                        {hasTeam ?
                            <ul className="nav nav-pills card-header-pills ml-1">
                                <li className="nav-item mr-1 mt-1 ">
                                    <DropdownButton variant="success" id="dropdown-basic-button" title="My Teams">
                                        <Dropdown.Item href="#/action-1">TEAM 1 ORG 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">TEAM 2 ORG 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">TEAM 3 ORG 2</Dropdown.Item>
                                    </DropdownButton>
                                </li>
                                <li className="nav-item m-1">
                                    <DropdownButton variant="success" id="dropdown-basic-button" title="Given Tasks">
                                        <Dropdown.Item href="#/action-1">TASK 1 ORG 2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">TASK 2 ORG 1</Dropdown.Item>
                                    </DropdownButton>
                                </li>
                            </ul> : null}
                    </ul>

                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {body.map(item => {
                            return (
                                <li>
                                    <a href={item.href}>{item.title}</a>
                                </li>
                            )
                        })}
                    </p>
                    <a href={button.href} className="btn btn-primary">{button.title}</a>
                </div>
                <div className="card-footer text-muted">

                </div>
            </div>
        </div>
    )
}