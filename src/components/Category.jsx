import { faCoins, faFaceSmile, faGear, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Category = () => {
    return (
        <Container >
            <Row>
                <h2 className='text-center'>Job Category List</h2>
                <p style={{color:'gray',textAlign:'center'}}>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <Col md={3} sm={6} className='mt-3'>
                    <div className='p-3 m-2' style={{background:'white',borderRadius:'8px'}}>
                        <FontAwesomeIcon className='p-3' style={{fontSize:'40px',color:'808EFE'}} icon={faCoins}/>
                        <h4 style={{color:'gray'}}>Account & Finance</h4>
                        <span>300 Jobs Available</span>
                    </div>
                </Col>
                <Col md={3} sm={6} className='mt-3'>
                    <div className='p-3 m-2' style={{background:'white',borderRadius:'8px'}}>
                        <FontAwesomeIcon className='p-3' style={{fontSize:'40px',color:'808EFE'}} icon={faFaceSmile}/>
                        <h4 style={{color:'gray'}}>Creative Design</h4>
                        <span>100+ Jobs Available</span>
                    </div>
                </Col>
                <Col md={3} sm={6} className='mt-3'>
                    <div className='p-3 m-2' style={{background:'white',borderRadius:'8px'}}>
                        <FontAwesomeIcon className='p-3' style={{fontSize:'40px',color:'808EFE'}} icon={faLightbulb}/>
                        <h4 style={{color:'gray'}}>Marketing & Sales</h4>
                        <span>150 Jobs Available</span>
                    </div>
                </Col>
                <Col md={3} sm={6} className='mt-3'>
                    <div className='p-3 m-2' style={{background:'white',borderRadius:'8px'}}>
                        <FontAwesomeIcon className='p-3' style={{fontSize:'40px',color:'808EFE'}} icon={faGear}/>
                        <h4 style={{color:'gray'}}>Engineering Job</h4>
                        <span>224 Jobs Available</span>
                    </div>
                </Col>
               
            </Row>
        </Container>
          
    );
};

export default Category;