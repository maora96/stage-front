import { useForm } from "react-hook-form";
import { Process, Request } from "../../types";
import { useMutation } from "react-query";
import { editProcess } from "../../api/processes";
import styles from "./styles.module.scss";

interface IEditDrawer {
  process: Process;
  onClose: () => void;
  refetch: () => void;
}

export function EditDrawer({ process, onClose, refetch }: IEditDrawer) {
  const editProcessMutation = useMutation(
    async (data: { request: Request; id: string }) =>
      editProcess(data.id, data.request),
    {
      onSuccess: () => {
        refetch();
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
    editProcessMutation.mutate({ id: process.id, request: data });
  };
  return (
    <div className={styles["container"]}>
      <h2>Editar processo</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
        {process && (
          <>
            <input
              {...register("name", { required: true })}
              defaultValue={process?.name}
            />
            <input {...register("cover")} defaultValue={process?.cover ?? ""} />
            {errors.cover && <span>This field is required</span>}

            <textarea
              {...register("description", { required: true })}
              className={styles["textarea"]}
              defaultValue={process.description}
            />
          </>
        )}
        <input type="submit" className={styles["submit"]} />
      </form>
    </div>
  );
}
