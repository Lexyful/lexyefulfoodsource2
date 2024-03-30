import React from "react";
import Link from 'next/link';

interface HeaderProps {
    handleSearch: (query: string) => Promise<any[]>;
}
export const Header: React.FC<HeaderProps> = ({ handleSearch }) => {
    return (
        <div>
        <Link href="/">
            <div className="home-click">Home</div>
        </Link> 
        </div>      
    )
}
