import { postTask } from "./tasks";

export const createTask = async (formData) => {
    "use server"

    // const name = formData.get('name')

    const newTask = Object.fromEntries(formData.entries());
    console.log(newTask)

    const res = await postTask(newTask)
    return res
}