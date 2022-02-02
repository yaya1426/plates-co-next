import React from "react";
import Link from 'next/link'
import { useRouter } from "next/dist/client/router";

export const Header: React.FC = () => {
    const router = useRouter();

    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="ms-5">
                <strong className="navbar-brand">Plates Co</strong>
                <small>By: Yahya ElAraby</small>
            </div>
        </header>
    )
}