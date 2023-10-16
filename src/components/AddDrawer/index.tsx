import { useForm } from "react-hook-form"
import { Request } from "../../types";
import { useMutation } from "react-query";
import { createProcess } from "../../api/processes";

export function AddDrawer() {
    const createProcessMutation = useMutation(
        async (request: Request) => createProcess(request),
        {
          onSuccess: (data: any) => {
            console.log('nice', data.data.result)
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
        const request = {
            name: data.name,
            description: data.description,
            cover: data.cover
        }
        createProcessMutation.mutate(request)
    }
    return <div>
        <h2>Adicionar processo</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true })} />
            <input {...register("cover")} />
            {errors.cover && <span>This field is required</span>}
            <input {...register("description", { required: true })}/>

            <input type="submit" />
        </form>
    </div>
}