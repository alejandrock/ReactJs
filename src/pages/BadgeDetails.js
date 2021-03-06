import React from 'react';
import confLogo from '../images/platziconf-logo.svg';
import Badge from './Badge';
import { Link } from 'react-router-dom';
import './styles/BadgeDetails.css';

function BadgeDetails (props){
        const badge = props.badge;
        return(
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6"> 
                                <img src={confLogo} alt="Logo de " />
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>{badge.firstName} {badge.lastName}</h1>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName={badge.firstName}
                                email={Badge.email}
                                lastName={badge.lastName}
                                twitter={badge.twitter}
                                jobTitle={badge.jobTitle}
                                avatarUrl={badge.avatarUrl}/>
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <div> <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}}`}>Edit</Link></div>
                                <div> <button className="btn btn-danger">Delete</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );    
    };

export default BadgeDetails;