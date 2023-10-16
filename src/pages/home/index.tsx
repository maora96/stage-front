import { Header } from "../../components/header";
import { useGetMany } from "../../hooks/departments";
import { Department } from "../../types";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate()

    const { data } = useGetMany();

    return <>
       <Header/>
       <section>
        {data && data.map((deparment: Department) => <div onClick={() => navigate(`/${deparment.id}`)}><h2>{deparment.name}</h2></div>)}
       </section>
    </>
}