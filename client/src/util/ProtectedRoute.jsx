import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const teacher = JSON.parse(localStorage.getItem('teacher'));
    if (!teacher) {
        return <Navigate to="/teacher" replace />;
    }
    return (
        <Outlet />
    )
}

export default ProtectedRoute

