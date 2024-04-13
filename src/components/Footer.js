import React from 'react'

export default function Footer() {

    const sections = [
        {
            title: "Doormat Navigation",
            links: [
                {title: "Home", url: "/"},
                {title: "About", url: "/about"},
                {title: "Menu", url: "/menu"},
                {title: "Reservations", url: "/reservations"},
                {title: "Order Online", url: "/order-online"},
                {title: "Login", url: "/login"},
            ]
        },
        {
            title: "Contact",
            links: [
                {title: "Address", url: "/address"},
                {title: "Phone number", url: "tel:+1329287472"},
                {title: "Phone number", url: "mailto:someone@email.com"},
            ]
        },
        {
            title: "Social Media Links",
            links: [
                {title: "Address", url: "/address"},
                {title: "Phone number", url: "tel:+1329287472"},
                {title: "Phone number", url: "mailto:someone@email.com"},
            ]
        },
    ]

  return (
    <footer>
        <center>
            <img src='/' alt='' />
            <div>
                {
                    sections.map((section)=>(
                        <div>
                            <h3>{section.title}</h3>
                            <ul>
                                {section.links.map((link)=>(
                                    <li> <a href={link.url} />{link.title}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </center>
    </footer>
  )
}
