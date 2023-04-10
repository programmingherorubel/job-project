import { faDollar, faLocation, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const JobsCard = ({job}) => {
   const {img,jobTitle,jobType,salary,location} =job
    return (
        <>
            <div className='col p-3 m-3' style={{background:'white',border:'1px sold black'}}>
                <img src={img} style={{width:'150px'}} alt="" />
                <h5>{jobTitle}</h5>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-primary">Remote</button>
                    <button type="button" class="btn btn-outline-primary">Full Time</button>
                </div>
                <div className='d-flex gap-5 mt-4'>
                    <h6><FontAwesomeIcon style={{color:'gray'}} icon={faLocationPin}/> {location}</h6>
                    <h6> Salary: <FontAwesomeIcon style={{color:'gray'}} icon={faDollar}/>{salary}</h6>
                </div>
            </div>
        </>
    );
};

export default JobsCard;