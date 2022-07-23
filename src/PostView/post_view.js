import React, { useEffect } from 'react';
import './postview.css'
import { useState } from 'react'
import link from './Constant'

const PostView = () => {
    const [data, setData] = useState([]);
    const [fail, setFail] = useState(true);

    useEffect(() => {
        // const url = "http://localhost:3004/user";

        const fetchData = async () => {
            try {
                const response = await fetch(`${link.apiLink}/home`);
                console.log(response);
                if (response.status === 404 || response.status === 500) {
                    setFail(true);
                }
                else {
                    const newData = await response.json();
                    newData.reverse();
                    setData(newData);
                    setFail(false);
                }


            }
            catch (error) {
                setFail(true);
                console.log("error", error);
            }
        };
        fetchData();
    }, []);   

    return (
        <div className='container'>
            <div className='header'>
                <h2 className='heading'><img className='logo' src='/images/logo.png' alt='logoInstaClone' /></h2>
                <a className='camera' href={`${link.apiLink}/createpost`}><img  src="\images\camera.png" alt='logo'></img></a>
            </div>
            <hr />
            {!fail && data.length && 
                data.map((value, i) => (
                    <div className='imgbox'>
                        <div className='displayname'>
                            <p className='name'>{value.name}</p>
                            <p className='location'>{value.location}</p>
                            <span className='three-dots'>&#9899; &#9899; &#9899;</span>
                        </div>
                        <div className='imgholder'>
                            {/* <p>{changeToString(value)}</p> */}
                            <img src={`${link.apiLink}/uploads/${value.postImage.data}`} alt="uploaded pic" width='100%' height='275px'/>
                        </div>
                        <div className='engagement'>
                            <p><img className='icon' src='/images/like.png' alt=''/>
                            <img className='icon' src='/images/share.png' alt=''/>
                            <span className='date'>{value.date}</span></p>
                        </div>
                        <div className='likecount'>
                            <p>{value.likes}</p>
                        </div>
                        <div className='caption'>
                            <p>{value.description}</p>
                        </div>
                    </div>
                ))}
            {fail &&
                <h3>Please wait while we load data</h3>}
        </div>

    )
};

export default PostView;