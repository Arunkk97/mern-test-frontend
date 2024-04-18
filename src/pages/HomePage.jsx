import React from 'react'
import Header from '../component/Header';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <Header />

            <div className='container mt-5'>
                <div className='row align-items-center'>
                    <div className="col-lg-6">
                        <h1 className='fw-bolder text-info'>HSS Registration</h1>
                        <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repellat nemo quos laborum dolor aperiam corporis eum blanditiis ducimus esse provident in consequatur eaque numquam sit consequuntur, quas atque praesentium!</p>
                        <div className='d-flex'>
                            <p className='fw-bolder'>New Student? Click here to </p> 
                            <Link to={'/regpage'}><button className='btn btn-primary ms-3 rounded'>Register</button></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className='w-100' src="https://www.freeiconspng.com/uploads/education-png-0.png" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage