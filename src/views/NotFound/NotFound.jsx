import React from 'react';
import imgUrl from '../../notFound.png'

export default function NotFoud() {
    return (<>
        <h1 style={{ textAlign: "center", color: "rgba(16, 5, 109, 0.863)" }}>Nothing found</h1>
        <img src={imgUrl} alt="Nothing found img" style={{ margin: "30px auto 0 auto" }}></img>
    </>)
}