import React from 'react'
import { Link } from 'react-router-dom';

export default function Default() {
    return (
        <div>
            <h1>Page not found!</h1>
            <p>Go back <Link to="/">home.</Link></p>
        </div>
    )
}
