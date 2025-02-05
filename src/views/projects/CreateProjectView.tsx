import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ProjectForm from "@/components/projects/ProjectForm";

export default function CreateProjectView() {

    const initialValues = {
        projectName: '',
        clientName: '',
        description: ''
    }

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

    const handleForm = (data) => {
        console.log(data)
    }

    return (
        <>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-black">Crear proyectos</h1>
                <p className="text-2xl font-light text-gray-500 mt-5">Llena el siguiente formulario para crear proyecto</p>
                <nav className="my-5">
                    <Link to='/'
                        className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors">
                        Volver a proyectos
                    </Link>
                </nav>
                <form className="mt-10 bg-white shadow-lg p-10 rounded-lg"
                    onSubmit={handleSubmit(handleForm)}
                    noValidate
                >
                    <ProjectForm register={register}

                    />
                    <input type="submit" value='Crear proyecto'
                        className="bg-fuchsia-600 w-full p-3 hover:bg-fuchsia-700 text-white uppercase font-bold cursor-pointer transition-colors"
                    />
                </form>
            </div>

        </>
    )
}