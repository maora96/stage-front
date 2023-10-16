import { useMutation } from "react-query";
import { deleteProcess } from "../../api/processes";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

interface IDeleteDrawer {
  id: string;
  onClose: () => void;
  refetch: () => void;
}

export function DeleteDrawer({ id, onClose, refetch }: IDeleteDrawer) {
  const navigate = useNavigate();

  const deleteProcessMutation = useMutation(
    async (id: string) => deleteProcess(id),
    {
      onSuccess: () => {
        refetch();
        navigate("/");
        onClose();
      },
      onError: () => {
        navigate("/");
      },
    }
  );

  return (
    <div className={styles["container"]}>
      <h2>Deletar processo?</h2>
      <div className={styles["buttons"]}>
        <button
          onClick={() => deleteProcessMutation.mutate(id)}
          className={styles["submit"]}
        >
          Sim
        </button>

        <button onClick={onClose} className={styles["submit-no"]}>
          Não
        </button>
      </div>
    </div>
  );
}
