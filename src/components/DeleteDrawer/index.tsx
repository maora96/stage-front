import { useMutation } from "react-query";
import { deleteProcess } from "../../api/processes";

interface IDeleteDrawer {
    id: string;
}

export function DeleteDrawer({id}: IDeleteDrawer) {

    const deleteProcessMutation = useMutation(
        async (id: string) => deleteProcess(id),
        {
          onSuccess: () => {
            console.log('nice')
          },
          onError: () => {
            console.log(':(')
          },
        }
    );

    return <div>
        <h2>Deletar processo?</h2>
        <button onClick={() => deleteProcessMutation.mutate(id)}>Sim</button>
    </div>
}