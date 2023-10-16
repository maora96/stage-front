import { useState } from "react"
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { AddDrawer } from "../AddDrawer"

export function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return <header>
        hello from the header
        <button onClick={toggleDrawer}>adicionar processo</button>
        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            className='bla bla bla'
        >
         <AddDrawer/>
        </Drawer>
    </header>

}