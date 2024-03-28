import React from "react";
import Link from 'next/link';

interface HeaderProps {
    handleSearch: (query: string) => Promise<any[]>;
}
export const Header: React.FC<HeaderProps> = ({ handleSearch }) => {
    return (
        <div>
        <Link href="/">
            <a className="home-click">Home</a>
        </Link> 
        </div>      
    )
}
// export const Header = ({ handleSearch, calculateTotalQuantity }) => { 
//     return (
//         <div className="header-container">
//             {/* <NavLink to="/"> */}
//                 <button className="home-click">Home</button>
//             {/* </NavLink> */}
//             <h1>
//                 {/* <Link to="/">Lexyeful Food Source</Link> */}
//                 </h1>
//             {/* <SearchBar handleSearch={handleSearch} />  */}
//             {/* <NavLink to="/cart"> */}
//                 <button className="cart-click">Cart <span>{calculateTotalQuantity || 0}</span></button>
//             {/* </NavLink> */}
//         </div>
//     );
// };