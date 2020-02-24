import React from 'react'

function Banner({children,title,subTitle}){
    return <React.Fragment>
        <div className='banner'>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            {children}

        </div>

         </React.Fragment>

}
export default Banner;

