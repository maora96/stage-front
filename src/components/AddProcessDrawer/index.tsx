import { Process } from "../../types";
import { MultiSelect } from "react-multi-select-component";
import { useGetManyProcesses } from "../../hooks/processes";
import { useState } from "react";
import { useMutation } from "react-query";
import { editSubprocesses } from "../../api/processes";
import styles from "./styles.module.scss";

interface IAddProcessDrawer {
  id: string;
  onClose: () => void;
  refetch: () => void;
}

type Option = {
  value: string;
  name: string;
};

export function AddProcessDrawer({ id, onClose, refetch }: IAddProcessDrawer) {
  const [selected, setSelected] = useState([]);

  const { data: processes } = useGetManyProcesses();

  const options = processes?.map((process: Process) => {
    return {
      label: process.name,
      value: process.id,
    };
  });

  const addSubprocessesMutation = useMutation(
    async (data: string[]) => editSubprocesses(id, data),
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

  const onSubmit = () => {
    const request = selected.map((option: Option) => option.value);

    addSubprocessesMutation.mutate(request);
  };

  return (
    <div className={styles["container"]}>
      <h2>Adicionar subprocesso</h2>

      {options && (
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
          className={styles["input"]}
        />
      )}
      <button onClick={onSubmit} className={styles["submit"]}>
        adicionar
      </button>
    </div>
  );
}
