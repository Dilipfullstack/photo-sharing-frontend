import React, { useEffect } from 'react';
import './postview.css'
import { useState } from 'react'
import link from '../Constant'

export default function PostView() {
    const [data, setData] = useState([]);
    const [fail, setFail] = useState(true);

    useEffect(() => {
        // const url = "http://localhost:3004/user";

        const fetchData = async () => {
            try {
                const response = await fetch(`${link.apiLink}/user`);
                console.log(response);
                if (response.status == 404 || response.status == 500) {
                    setFail(true);
                }
                else {
                    const newData = await response.json();
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
                <img className='camera' src="\images\camera.png" alt='logo'></img>
            </div>
            <hr />
            {!fail && data.length &&
                data.map((value, i) => (
                    <div className='imgbox'>
                        <div className='displayname'>
                            <p className='name'>{value.name}</p>
                            <p>{value.location}</p>
                            <span className='three-dots'>&#9899; &#9899; &#9899;</span>
                        </div>
                        <div className='imgholder'>
                            <img src={value.PostImage} alt="uploaded pic" />
                        </div>
                        <div className='engagement'>
                            <span><img className='icon' src='/images/like.png' /></span>
                            <span><img className='icon' src='/images/share.png' /></span>
                            <span className='date'>{value.date}</span>
                        </div>
                        <div className='likecount'>
                            <p>{value.likes} Likes</p>
                        </div>
                        <div className='caption'>
                            <p>{value.description}</p>
                        </div>
                    </div>
                ))}
            {fail &&
                <h3>Please try after sometime</h3>}
        </div>

    )
}
