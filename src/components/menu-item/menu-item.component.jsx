import React from 'react';

import  './menu-item.styles.scss'

const MenuItem = ({title,imageUrl,size}) =>{
    return (
      
        <div 
       
        className={`${size} menu-item`}>
          <div className='backgound-image'  style={{backgroundImage:`url(${imageUrl})`}}>
            <div className="content">
              <h1 className="title">{titleUpperCase()} </h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
         
        </div>
      
    );
}

export default MenuItem;