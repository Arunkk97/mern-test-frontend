import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllUsersAPI } from '../services/allAPI'



function RegList() {
    const [allstudents,setallStudents] = useState([])

    const getAllStudents=async()=>{
        try{
          const result = await getAllUsersAPI()
          console.log(result);
          if(result.status==200){
            setallStudents(result.data)
          }
        }
        catch(err){
          console.log(err);
        }
    }

    console.log(allstudents);
    useEffect(()=>{
        getAllStudents()
    },[])

    return (
        <>
            <h1 className='text-center text-danger mt-5 fw-bolder'>Student Details</h1>
            <div className='container '>
                <table className='table shadow mt-5'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Dob</th>
                            <th>Gender</th>
                            <th>Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allstudents?.length>0 &&
                        allstudents.map(students=>(
                            <tr>
                            <td>{students.firstname}</td>
                            <td>{students.lastname}</td>
                            <td>{students.address}</td>
                            <td>{students.email}</td>
                            <td>{students.mobile}</td>
                            <td>{students.dob}</td>
                            <td>{students.gender}</td>
                            <td>{students.course}</td>

                        </tr>
                        ))
                            
                        }
                    </tbody>
                </table>
                <Link to={'/'}><button className='btn btn-primary'>Back to home</button></Link>
            </div>
        </>
    )
}

export default RegList