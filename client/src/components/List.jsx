


import React, { useState, useEffect } from 'react'
export const List = (props) => {


useEffect(() => {

} ,[props])



    return(
    <>
    <div>
    { props.data.length > 0 ? props.data.map((item , i) => <p key={i}>{item}</p>)  : <p>no results</p> }
    </div>
    </>
    )
}