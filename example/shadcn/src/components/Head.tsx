//import { Routes, Route, Link } from 'react-router-dom';
import {Link } from 'react-router-dom';
//
function Page() {
    return (
    <div>
        <a href="/">[ Home ]</a>
        <a href="/button" className="ms-2">[ Button ]</a>
        <a href="/card" className="ms-2">[ Card ]</a>
        <hr />
    </div>
    );
}
export default Page;
/*
        <a href="/about" className="ms-2">[ about ]</a>
*/