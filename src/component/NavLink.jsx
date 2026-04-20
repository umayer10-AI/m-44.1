"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = () => {

    const p = usePathname()

    return (
        <ul className="flex items-center gap-4">
            <li><Link className={p==='/'? "btn btn-accent btn-outline" : "btn"} href="/">Home</Link></li>
            <li><Link className={p==='/hero'? "btn btn-accent btn-outline" : "btn"} href="/hero">Hero</Link></li>
            <li><Link className={p==='/tasks'? "btn btn-accent btn-outline" : "btn"} href="/tasks">Task</Link></li>
            <li><Link className={p==='/card'? "btn btn-accent btn-outline" : "btn"} href="/card">Card</Link></li>
        </ul>
    );
};

export default NavLink;