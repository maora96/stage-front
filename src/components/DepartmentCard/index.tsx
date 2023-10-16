import { Department } from "../../types";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

interface IDepartmentCard {
  department: Department;
}

export function DepartmentCard({ department }: IDepartmentCard) {
  const navigate = useNavigate();

  return (
    <div
      className={styles["card"]}
      onClick={() => navigate(`/${department.id}`)}
    >
      <h2>{department.name}</h2>
    </div>
  );
}
