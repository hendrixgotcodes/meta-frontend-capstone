import React from 'react'

const links = [
    {title: "Home", url: "/"},
    {title: "About", url: "/about"},
    {title: "Menu", url: "/menu"},
    {title: "Reservations", url: "/reservations"},
    {title: "Order Online", url: "/order-online"},
    {title: "Login", url: "/login"},
]

export default function Nav() {
  return (
    <nav>
        <img src='' alt='logo'/>
        <ul>
            {links.map((link)=>(
                <li><a href={link.url} >{link.title}</a></li>
            ))}
        </ul>
    </nav>
  )
}
