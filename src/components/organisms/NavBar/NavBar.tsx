import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import { Contact } from 'components'
import { useTransition } from "react-spring";

function NavBar() {
    const [classes, setClasses] = useState('hidden')
    const [modalVisible, setModalVisible] = useState(false);
    const transitions = useTransition(modalVisible, null, {
        from: { opacity: 0, marginTop: -1000, transform: 'translateX(0,-100%,0)' },
        enter: { opacity: 1, marginTop: 0, transform: 'translateX(0,0%,0)' },
        leave: { opacity: 0, transform: 'translateX(0,50%,0)' },
    });

    useEffect(() => {
        setTimeout(() => setClasses('visible'), 13500)
    })

    return (

        <div className="navbar">
            <NavLink id="henry" to="/" style={{ textDecoration: 'none' }}>Henry</NavLink>
            <button
                className="show-modal-button"
                onClick={() => setModalVisible(true)}
            >
                <div className={classes}>
                    CONTACT
                </div>
            </button>
            <div className="contact-layout">
                {transitions.map(
                    ({ item, key, props: style }) =>
                        item && (
                            <Contact
                                style={style}
                                closeModal={() => setModalVisible(false)}
                                key={key}
                            />
                        )
                )}
            </div>
            <div id="layout-resume">
                <a href="https://www.notion.so/elt1992/Lee-Chan-Haeng-074a6e1fabd244ff830ae862a200dd5f">Resume</a>
            </div>
        </div>
    );
}

export default NavBar
