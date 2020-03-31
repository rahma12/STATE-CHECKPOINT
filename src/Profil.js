import React from 'react'

const Profil = (props) => {

    return(
        
        <div>
          <img src={props.per.photo} alt='..' width='200px' />
          <h1>{props.per.name}</h1>
          <p>{props.per.description}</p>
        </div>

    )


}

export default Profil;