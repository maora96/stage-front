import { useForm } from "react-hook-form"
import { Process, Request } from "../../types";
import { useMutation } from "react-query";
import { editProcess } from "../../api/processes";

interface IEditDrawer {
    process: Process;
}

export function EditDrawer({process}: IEditDrawer) {

    const editProcessMutation = useMutation(
        async (data: {request: Request, id: string}) => editProcess(data.id, data.request),
        {
          onSuccess: () => {
            console.log('nice')
          },
          onError: () => {
            console.log(':(')
          },
        }
    );

    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data: any) => {
        editProcessMutation.mutate({id: process.id, request: data})
    }
    return <div>
        <h2>Editar processo</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            {process && <><input {...register("name", { required: true })} defaultValue={process?.name} />
            <input {...register("cover")} defaultValue={process?.cover ?? ""} />
            {errors.cover && <span>This field is required</span>}

            <input {...register("description", { required: true })} defaultValue={process.description} /></>
}
            <input type="submit" />
        </form>
    </div>
}