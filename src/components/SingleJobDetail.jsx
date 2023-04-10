import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../Style/SingleJobDetail.css';

const SingleJobDetail = () => {
    const info = useParams()
    const [detaildata,setddetaildata]=useState([])
    const jobdata = info.jobid


    useEffect(()=>{
        fetch('webdata.json')
        .then(res => res.json())
        .then(data => setddetaildata(data.find((spacificData)=> spacificData.id === Number(jobdata))))
    },[jobdata])

    const {id,img,jobTitle,jobType,location,salary,phone,email,address,jobDescription,educationalRequirement,experience,category,jobResponsibility} =  detaildata
    return (
        <>
            <Container fluid className='singleDetail'>
                <div className='category'><h1 style={{color:'white',textTransform:'capitalize'}}>category: <span style={{color:'tomato'}}>{category}</span></h1></div>
            </Container>
            <Container>
            <Row>
                    <Col md={8} sm={6}>
                        <div>
                            <h6 className='mt-3'style={{fontWeight:'bold'}}>Job Description :</h6> 
                            <span style={{color:'gray',fontWeight:'300',fontSize:'14px'}}>{jobDescription}</span>
                            </div>
                        <div>
                            <h6 className='mt-3'style={{fontWeight:'bold'}}>Job Responsibility :</h6> 
                            <span style={{color:'gray',fontWeight:'300',fontSize:'14px'}}>{jobResponsibility}</span>
                            </div>
                        <div>
                            <h6 className='mt-3'style={{fontWeight:'bold'}}>Educational Requirements: :</h6> 
                            <span style={{color:'gray',fontWeight:'300',fontSize:'14px'}}>{educationalRequirement}</span>
                            </div>
                        <div>
                            <h6 className='mt-3'style={{fontWeight:'bold'}}>Experiences:</h6> 
                            <span style={{color:'gray',fontWeight:'300',fontSize:'14px'}}>{experience}</span>
                            </div>
                    </Col>
                    <Col md={4} sm={6}>
                        
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SingleJobDetail;