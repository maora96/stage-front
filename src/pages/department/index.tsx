import { Header } from "../../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useGetManyByDepartment } from "../../hooks/departments";
import { Process } from "../../types";
import styles from "./styles.module.scss";

export function DepartmentPage() {
  const navigate = useNavigate();

  let { id } = useParams();

  const { data } = useGetManyByDepartment(id!);

  return (
    <>
      <Header />
      <section className={styles["container"]}>
        {data && (
          <div className={styles["hero"]}>
            <img src={`${data.cover}`} />
            <h2>{data.name}</h2>
          </div>
        )}
      </section>
      <section className={styles["processes"]}>
        {data &&
          data.processes.map((process: Process) => (
            <div
              onClick={() => navigate(`/process/${process.id}`)}
              className={styles["process-card"]}
            >
              <div className={styles["overlay"]}></div>
              {process.cover && <img src={process.cover} />}
              <h2>{process.name}</h2>
            </div>
          ))}
      </section>
    </>
  );
}
