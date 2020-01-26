import React from 'react'

export default function Home({len}) {
    return (
        <div className="container-fluid">
            <h3>Applications received:&nbsp;<span className="badge badge-info">{len}</span></h3>
        </div>
    )
}


