import { Header } from "../../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProcess } from "../../hooks/processes";
import { Process } from "../../types";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useState } from "react";
import { EditDrawer } from "../../components/EditDrawer";
import { DeleteDrawer } from "../../components/DeleteDrawer";
import { AddProcessDrawer } from "../../components/AddProcessDrawer";

export function ProcessPage() {
    const navigate = useNavigate()

    const [isEditOpen, setIsEditOpen] = useState<boolean>(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false)
    const [isAddProcessOpen, setIsAddProcessOpen] = useState<boolean>(false)

    const toggleEditDrawer = () => {
        setIsEditOpen((prevState) => !prevState)
    }
    const toggleDeleteDrawer = () => {
        setIsDeleteOpen((prevState) => !prevState)
    }
    const toggleAddProcessDrawer = () => {
        setIsAddProcessOpen((prevState) => !prevState)
    }

    let { id } = useParams()

    const { data } = useGetProcess(id!)

    return <div>
        <Header />
        <section>
            <h2>{data?.name}</h2>
            <button onClick={toggleEditDrawer}>editar</button>
            <button onClick={toggleDeleteDrawer}>deletar</button>
            <button onClick={toggleAddProcessDrawer}>adicionar subprocesso</button>
            <h3>{data?.description}</h3>

            <div>
                {data && data.processes.map((process: Process) => {
                    return <div onClick={() => navigate(`/process/${process.id}`)}>
                        {process.name}
                    </div>
                })}
            </div>
        </section>
        <Drawer
            open={isEditOpen}
            onClose={toggleEditDrawer}
            direction='right'
            className='bla bla bla'
        >
         <EditDrawer process={data}/>
        </Drawer>
        <Drawer
            open={isDeleteOpen}
            onClose={toggleDeleteDrawer}
            direction='right'
            className='bla bla bla'
        >
            <DeleteDrawer id={id!}/>
        </Drawer>
        <Drawer
            open={isAddProcessOpen}
            onClose={toggleAddProcessDrawer}
            direction='right'
            className='bla bla bla'
        >
         <AddProcessDrawer id={id!}/>
        </Drawer>
    </div>
}