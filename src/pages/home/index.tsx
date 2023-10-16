// import { Header } from "../../components/Header";
import { useGetMany } from "../../hooks/departments";
import { Department } from "../../types";
import styles from "./styles.module.scss";
import { DepartmentCard } from "../../components/DepartmentCard";

export function Home() {
  const { data } = useGetMany();

  return (
    <>
      {/* <Header /> */}
      <section className={styles["container"]}>
        {data &&
          data.map((department: Department) => (
            <DepartmentCard department={department} />
          ))}
      </section>
    </>
  );
}
