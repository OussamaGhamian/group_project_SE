import React from "react";
import './asd.css';
import linkedin from './linked.jpg';
import netlify from './netlify.png';

import avo from './avo.jpg';
import kassem from './kassem.jpg';
import mahmoud from './mahmoud.jpg';
import oussama from './oussama.jpg';



export default function contactus() {
    return (
        <div>
            <div className="bg-light py-5">
                <div className="container py-5">
                    <div className="row mb-4">
                        <div className="col-lg-5">
                            <h2 className="display-4 font-weight-light">Our team</h2>
                            <p className="font-italic text-muted">A creative team with members from different backgrounds.</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        {/* Team item*/}
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src={avo} alt="" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" width={100} />
                                <h5 className="mb-0">Avo Mandjian</h5><span className="small text-uppercase text-muted">Junior full stack-web developer</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/avo-mandjian/" className="social-link"><img className='card-img-bottom' src={linkedin}/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src={kassem} alt="" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" width={100} />
                                <h5 className="mb-0">Kassem Kaysaniye</h5><span className="small text-uppercase text-muted">Junior full stack-web developer</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/kassem-kaysaniye/" className="social-link"><img className='card-img-bottom' src={linkedin}/></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src={mahmoud} alt="" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" width={100} />
                                <h5 className="mb-0">Mahmoud Alsalmo</h5><span className="small text-uppercase text-muted">Junior full stack-web developer</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/mahmoud-alsalmo/" className="social-link"><img className='card-img-bottom' src={linkedin}/></a></li>
                                </ul>                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src={oussama} alt="" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" width={100} />
                                <h5 className="mb-0">Oussama Ghamian</h5><span className="small text-uppercase text-muted">Junior full stack-web developer</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="https://oussamaghamian.netlify.app/" className="social-link"><img className='card-img-bottom' src={netlify}/></a></li>
                                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/oussama-alghamian/" className="social-link"><img className='card-img-bottom' src={linkedin}/></a></li>
                                </ul>
                            </div>
                        </div>

                    </div></div></div></div>

    );
}

