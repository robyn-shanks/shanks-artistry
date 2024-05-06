import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./AdminPage.scss";


export default function ProductsPage () {
    return (
        <>
        <Link to="/admin/add" className="button">Add new painting</Link>
        <Link to="/admin/remove" className="button">Remove new painting</Link>
        </>
    );
}