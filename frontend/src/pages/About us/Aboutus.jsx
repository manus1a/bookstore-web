import React from 'react'

const Aboutus = () => {
    return(
        <div className=''>
         <h1>About Us</h1>
         <h2>Anggota Tim Kami :</h2>
         <br></br>
            <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
                <h4>Nicholas Salvadore</h4>
                <h4>Alex Federico</h4>
                <h4>Vincent Chaislie</h4>
            </div>
        </div>
    )
}

export default Aboutus;