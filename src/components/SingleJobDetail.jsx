import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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

    const {id,img,jobTitle,jobType,location,salary,phone,email,address,jobDescrption,jobResponcibility,educationalRequerment,experience,category} =  detaildata
    return (
        <>
            <Container fluid className='singleDetail'>
                <div className='category'><h1 style={{color:'white',textTransform:'capitalize'}}>category: <span style={{color:'tomato'}}>{category}</span></h1></div>
            </Container>
        </>
    );
};

export default SingleJobDetail;