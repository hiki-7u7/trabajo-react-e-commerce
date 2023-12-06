import { useState } from 'react';

import PropTypes from 'prop-types';

import { UiContext } from './';
import { useNavbar } from '../../hooks';

export const UiProvider = ({ children }) => {

    const [openSidebar, setOpenSidebar] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const {categories} = useNavbar();

    const toggleSidebar = () => {
        setOpenSidebar( !openSidebar )
    }

    const toggleOpenModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <UiContext.Provider value={{
            openSidebar,
            toggleSidebar,
            openModal,
            toggleOpenModal,
            categories
        }}>
            { children }
        </UiContext.Provider>
    )
};


UiProvider.propTypes = {
    children: PropTypes.element.isRequired
}