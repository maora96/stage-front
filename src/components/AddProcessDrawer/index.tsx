import { Process } from "../../types";
import { MultiSelect } from "react-multi-select-component";
import { useGetManyProcesses } from "../../hooks/processes";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { editSubprocesses } from "../../api/processes";

interface IAddProcessDrawer {
    id: string;
}

type Option  = {
    value: string;
    name: string;
}

export function AddProcessDrawer({ id }: IAddProcessDrawer) {
    const [selected, setSelected] = useState([]);

    const { data: processes } = useGetManyProcesses()

    const options = processes?.map((process: Process) => {
        return {
            label: process.name, value: process.id
        }
    }) 

    const addSubprocessesMutation = useMutation(
        async (data: string[]) => editSubprocesses(id, data),
        {
          onSuccess: () => {
            console.log('nice')
          },
          onError: () => {
            console.log(':(')
          },
        }
      );

    const navigate = useNavigate();


    const onSubmit = () => {

        const request = selected.map((option: Option) => option.value)

        console.log(request)

        addSubprocessesMutation.mutate(request);
    }

    return <div>
        <h2>Adicionar subprocesso</h2>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true })} />
            <input {...register("coverURL")} />
            {errors.coverURL && <span>This field is required</span>}
            <select>
                {data && data.map((department: Department) => <option value={department.id}>{department.name}</option>)}
            </select>
            <textarea></textarea>

            <input type="submit" />
        </form> */}
        {options && <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
        />}
        <button onClick={onSubmit}>adicionar</button>
    </div>
}