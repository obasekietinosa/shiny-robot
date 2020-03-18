import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="Navbar">
            <h3>
                <Link to="/">
                    FireNotes
                </Link>
            </h3>
            <small>A Note App with React and Firebase</small>
        </div>
    )
}
