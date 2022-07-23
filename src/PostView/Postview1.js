import React from 'react';
import './postview.css'
import {useState} from 'react'
import data from '../Mock-data/data.json'

function DataRetreive(props) {
 
    return (
        <div className='imgbox'>
        <div className='displayname'>
            <p className='name'>{props.name}</p>
            <p>{props.location}</p>
        </div>
        <div className='imgholder'>
            <img src={props.PostImage} alt="uploaded pic"/>
        </div>
        <div className='engagement'>
            <span><img className='icon' src='/images/like.png' /></span>
            <span><img className='icon' src='/images/share.png' /></span>
            <span className='date'>{props.date}</span>
        </div>
        <div className='likecount'>
            <p>{props.likes} Likes</p>
        </div>
        <div className='caption'>
            <p>{props.description}</p>
        </div>
        </div>
    )
}

export default function PostView() {
    
    const arr = data['user']

  return (
    <div className='container'>
    <h2 className='heading'><img className='logo' src='/images/logo.png' alt='logoInstaClone'/></h2>
    {arr.map(k => <DataRetreive name={k.name} location={k.location} likes={k.likes} description={k.description} PostImage={k.PostImage} date={k.date}/>)}
    </div>
  )
}
