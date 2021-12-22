import React, {useContext} from 'react';
import { CrudContext } from '../context/Context';

const Navbar = () => {

    const {setCreateVisible} = useContext(CrudContext);

    return (
        <div className='navbar'>
            <div className='logo'>CRUD</div>
            <div className='menu'><i onClick={() => setCreateVisible(true)} className="fas fa-plus-circle"></i></div>
        </div>
    )
}

export default Navbar;
