import React from 'react';
import Link from 'next/link';
import { SearchBar } from './SearchBar';

interface HeaderProps {
  handleSearch: (query: string) => Promise<void>;
}

export const Header: React.FC<HeaderProps> = ({ handleSearch }) => {
    return (
        <div className="header-container">
            <Link href="/" legacyBehavior>
                <a><button className="home-click">Home</button></a>
            </Link>
            <h1>
                <Link href="/" legacyBehavior>
                    <a>Lexyeful Food Source</a>
                </Link>
            </h1>
            <SearchBar handleSearch={handleSearch} />
            <Link href="/cart" legacyBehavior>
                <a><button className="cart-click">Cart</button></a>
            </Link>
        </div>
    );
};


// export const Header: React.FC<HeaderProps> = ({ handleSearch }) => {
//   return (
//     <div className="header-container">
//       {/* Your header content */}
//       <SearchBar handleSearch={handleSearch} />
//     </div>
//   );
// };





// import React from "react";
// import Link from 'next/link';
// import { SearchBar } from "./SearchBar";

// interface HeaderProps {
//     handleSearch: (query: string) => Promise<any[]>;
// }
// export const Header: React.FC<HeaderProps> = ({ handleSearch }) => {
//     return (
//         <div className="header-container">
//             <Link href="/">
//                 <div className="home-click">Home</div>
//             </Link>
//             <h1>
//                 <Link href="/">Lexyeful Food Source</Link>
//             </h1>
//             <SearchBar handleSearch={handleSearch} />
//             <Link href="/">
//                 <div className="cart-click">Cart</div>
//             </Link>
//         </div>
//     );
// };
