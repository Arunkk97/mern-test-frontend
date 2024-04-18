import React, { useState } from 'react'
import Header from '../component/Header'
import Form from 'react-bootstrap/Form';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { registerAPI } from '../services/allAPI';





function RegPage() {
    const navigate=useNavigate()
    const[userInput,setUserInput]=useState({
        firstname:'',lastname:'',email:'',password:'',address:'',mobile:'',gender:'',dob:'',course:''
    })
    console.log(userInput);

    const handleRegister=async(e)=>{
        e.preventDefault()
        if (userInput.firstname && userInput.lastname && userInput.email && userInput.password && userInput.address && userInput.mobile && userInput.gender && userInput.dob && userInput.course) {
            //api call
            try {
              const result = await registerAPI(userInput)
              console.log(result);
              if (result.status == 200) {
                alert(`welcome ${result.data.firstname} ...Registered successfully `)
                setUserInput({ firstname:'',lastname:'',email:'',password:'',address:'',mobile:'',gender:'',dob:'',course:''})
                setTimeout(() => {
                  navigate('/reglist')
      
                }, 2000)
      
              } else {
                toast.error(result.response.data)
                setTimeout(() => {
                  setUserInput({  firstname:'',lastname:'',email:'',password:'',address:'',mobile:'',gender:'',dob:'',course:''})
      
                }, 2000)
              }
      
            } catch (err) {
              console.log(err);
            }
          } else {
            alert('Please fill the form completely!!!')
          }
    }
    return (
        <>
            <Header />
            <div>
                <img className='p-3' style={{width:'10%'}} src="https://pngimg.com/uploads/welcome/welcome_PNG34.png" alt="" />
            </div>

            <h3 className='text-info mt-5 fw-bolder text-center '>Apply as a Student</h3>


            <Container className='mt-5 shadow p-5 mb-5'>

                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="name">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="First Name"
                                    value={userInput.firstname}
                                    onChange={(e)=>setUserInput({...userInput,firstname:e.target.value})}
                                    
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="name">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Last name"
                                    value={userInput.lastname}
                                    onChange={(e)=>setUserInput({...userInput,lastname:e.target.value})}
                                    
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>

                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="name">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Enter your Address"
                                    value={userInput.address}
                                    onChange={(e)=>setUserInput({...userInput,address:e.target.value})}
                                   
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    value={userInput.mobile}
                                    onChange={(e)=>setUserInput({...userInput,mobile:e.target.value})}
                                   
                                />
                            </Form.Group>
                        </Col>

                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    value={userInput.email}
                                    onChange={(e)=>setUserInput({...userInput,email:e.target.value})}
                                    
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="phone">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={userInput.password}
                                    onChange={(e)=>setUserInput({...userInput,password:e.target.value})}
                                    
                                />
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select
                                    as="select"
                                    value={userInput.gender}
                                    onChange={(e)=>setUserInput({...userInput,gender:e.target.value})}
                                    

                                >
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="appointmentDate">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={userInput.dob}
                                    onChange={(e)=>setUserInput({...userInput,dob:e.target.value})}
                                    
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="gender">
                                <Form.Label>Course</Form.Label>
                                <Form.Select
                                    as="select"
                                    value={userInput.course}
                                    onChange={(e)=>setUserInput({...userInput,course:e.target.value})}
                                    

                                >
                                    <option value="">Select</option>
                                    <option value="male">Biology</option>
                                    <option value="female">Computer Science</option>
                                    <option value="other">Commerce</option>
                                    <option value="other">Humanities</option>
                                    <option value="other">Others</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                    </Row>
                    <div className='d-flex justify-content-center'>
                        <Button onClick={handleRegister} className='mt-3 ' variant="success" type="submit">
                            Register
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    )
}

export default RegPage