import React, { useState } from "react";
import { Contact } from 'components'
import { useTransition } from "react-spring";

function NavBar() {
    const [modalVisible, setModalVisible] = useState(false);
    const transitions = useTransition(modalVisible, null, {
        from: { opacity: 0, marginTop: -1000, transform: 'translateX(0,-100%,0)' },
        enter: { opacity: 1, marginTop: 0, transform: 'translateX(0,0%,0)' },
        leave: { opacity: 0, transform: 'translateX(0,50%,0)' },
    });

    return (
        <div className="navbar">
            <button
                className="show-modal-button"
                onClick={() => setModalVisible(true)}
            >
                CONTACT
            </button>
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
    );
}

export default NavBar
