import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { useNavigate, useParams } from "react-router-dom";
import { useGetMany, useGetManyByDepartment } from "../../hooks/departments";
import { Process } from "../../types";

export function DepartmentPage() {
    const navigate = useNavigate()

    let { id } = useParams()
    
    const { data } = useGetManyByDepartment(id!);

    return <>
       <Header/>
       <section>
        {data && <div>
           <img src={`${data.cover}`}/>
           <h2>{data.name}</h2>
        </div>}
        </section>
       <section>
        {data && data.processes.map((process: Process) => <div onClick={() => navigate(`/process/${process.id}`)}>
            <h2>{process.name}</h2>
            <h3>{process.description}</h3>
        </div>)}
       </section>
    </>
}