import React, { Component } from 'react'
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const links = [
    {icon: <FaFacebookF />, route: 'https://www.facebook.com/martik.avagyan.1'},
    {icon: <FaInstagram />, route: 'https://www.instagram.com/avagyan_069/'},
    {icon: <FaGithub />, route: 'https://github.com/m-avagyan'},
    {icon: <FaLinkedinIn />, route: 'https://am.linkedin.com/in/martik-avagyan-5985461b3'},
];

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='links'>
                    {
                        links.map((lnk, index) =>
                            <a href={lnk.route} key={index} target='_blank' rel='noopener noreferrer' className='link'>
                                {lnk.icon}
                            </a>
                        )
                    }
                </div>
            </div>
        )
    }
}