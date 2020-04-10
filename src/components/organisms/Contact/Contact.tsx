//@ts-ignore
//@ts-nocheck
import React from 'react'
import { animated } from "react-spring";
import { FaGoogle, FaGithub, FaBlogger } from "react-icons/fa";

const Contact = ({ style, closeModal }) => {
    return (
        <animated.div style={style} className="modal">
            <h3 className="modal-title">Contact Me</h3>
            <p className="modal-content">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:c.henry.9209@gmail.com"
                    className="mailto"
                >
                    c.henry.9209@gmail.com
                </a>
            </p>
            <p className="sns">
                <span className="sns-icon">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:c.henry.9209@gmail.com"
                    >
                        <FaGoogle size={20} />
                    </a>
                </span>
                <span className="sns-icon">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/o-henry"
                    >
                        <FaGithub size={20} />
                    </a>
                </span>
                <span className="sns-icon">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://o-henry.github.io/"
                    >
                        <FaBlogger size={20} />
                    </a>
                </span>
            </p>
            <button className="modal-close-button" onClick={closeModal}>
                X
            </button>
        </animated.div>
    )

}

export default Contact