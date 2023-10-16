import { useForm } from "react-hook-form";
import { Request } from "../../types";
import { useMutation } from "react-query";
import { createProcess } from "../../api/processes";
import styles from "./styles.module.scss";

interface IAddDrawer {
  onClose: () => void;
}

export function AddDrawer({ onClose }: IAddDrawer) {
  const createProcessMutation = useMutation(
    async (request: Request) => createProcess(request),
    {
      onSuccess: () => {
        onClose();
      },
      onError: () => {
        onClose();
      },
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const request = {
      name: data.name,
      description: data.description,
      cover: data.cover,
    };
    createProcessMutation.mutate(request);
  };
  return (
    <div className={styles["drawer-container"]}>
      <h2>Adicionar processo</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
        <input {...register("name", { required: true })} placeholder="Nome" />
        <input {...register("cover")} placeholder="Cover" />
        {errors.cover && <span>This field is required</span>}
        <textarea
          {...register("description", { required: true })}
          className={styles["textarea"]}
          placeholder="Descrição"
        />

        <input type="submit" className={styles["submit"]} />
      </form>
    </div>
  );
}
