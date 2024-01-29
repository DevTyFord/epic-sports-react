import React from 'react';
import '../../assets/css/bootstrap.min.css';
import './video.css';

function Video() {
    return (
        <>
        <div className="main">
            <h1>Newest Videos</h1>
        </div>
        <div clasName='container'>
            <div className='row'>
                <div className='col-sm'>
                    <p>This is a column</p>
                </div>
                <div className='col-sm'>
                    <p>This is a column</p>
                </div>
                <div className='col-sm'>
                    <p>This is a column</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Video