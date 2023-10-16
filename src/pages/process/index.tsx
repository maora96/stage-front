import { Header } from "../../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProcess } from "../../hooks/processes";
import { Process } from "../../types";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
import { EditDrawer } from "../../components/EditDrawer";
import { DeleteDrawer } from "../../components/DeleteDrawer";
import { AddProcessDrawer } from "../../components/AddProcessDrawer";
import styles from "./styles.module.scss";

export function ProcessPage() {
  const navigate = useNavigate();

  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [isAddProcessOpen, setIsAddProcessOpen] = useState<boolean>(false);

  const toggleEditDrawer = () => {
    setIsEditOpen((prevState) => !prevState);
  };
  const toggleDeleteDrawer = () => {
    setIsDeleteOpen((prevState) => !prevState);
  };
  const toggleAddProcessDrawer = () => {
    setIsAddProcessOpen((prevState) => !prevState);
  };

  let { id } = useParams();

  const { data, refetch } = useGetProcess(id!);

  return (
    <div>
      <Header />
      <section className={styles["container"]}>
        {data && (
          <div className={styles["hero"]}>
            <img src={`${data.cover}`} />
            <h2>{data.name}</h2>
          </div>
        )}
        <div className={styles["buttons"]}>
          <button onClick={toggleEditDrawer}>editar</button>
          <button onClick={toggleAddProcessDrawer}>
            adicionar subprocesso
          </button>
          <button onClick={toggleDeleteDrawer}>deletar</button>
        </div>
        <p className={styles["paragraph"]}>{data?.description}</p>

        <div className={styles["processes"]}>
          {data &&
            data.processes.map((process: Process) => {
              console.log(process.name);
              return (
                <div
                  onClick={() => navigate(`/process/${process.id}`)}
                  className={styles["process-card"]}
                >
                  <div className={styles["overlay"]}></div>
                  {process.cover && <img src={process.cover} />}
                  <h2>{process.name}</h2>
                </div>
              );
            })}
        </div>
      </section>
      <Drawer
        open={isEditOpen}
        onClose={toggleEditDrawer}
        direction="right"
        className={styles["drawer"]}
        size={500}
      >
        <EditDrawer
          process={data}
          onClose={toggleEditDrawer}
          refetch={refetch}
        />
      </Drawer>
      <Drawer
        open={isDeleteOpen}
        onClose={toggleDeleteDrawer}
        direction="right"
        className={styles["drawer"]}
        size={500}
      >
        <DeleteDrawer id={id!} onClose={toggleDeleteDrawer} refetch={refetch} />
      </Drawer>
      <Drawer
        open={isAddProcessOpen}
        onClose={toggleAddProcessDrawer}
        direction="right"
        className={styles["drawer"]}
        size={500}
      >
        <AddProcessDrawer
          id={id!}
          onClose={toggleAddProcessDrawer}
          refetch={refetch}
        />
      </Drawer>
    </div>
  );
}
