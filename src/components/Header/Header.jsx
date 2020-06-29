import React,{ memo } from "react";
import './header.scss';

const Header = (props)=>{
    return(
        <nav className="header">
            <h1>Hacker News</h1>
           <ul className='navigation'>
               <li><a href='/news'>news</a></li>
               <li><a href='/past'>past</a></li>
               <li><a href='/comments'>comments</a></li>
               <li><a href='/ask'>ask</a></li>
               <li><a href='/show'>show</a></li>
               <li><a href='/jobs'>jobs</a></li>
               <li><a href='/submit'>submit</a></li>
           </ul>
           <div className='login'>
               <a href='#'>login</a>
           </div>
        </nav>
    );

}

export default memo(Header);