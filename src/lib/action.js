"use server"
import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";
import { redirect } from "next/navigation";

export const createTask = async (formData) => {
    "use server"

    // const name = formData.get('name')

    const newTask = Object.fromEntries(formData.entries());
    console.log(newTask)

    if(!newTask.title){
        return {success: false, messege: "Title is required"}
    }

    if(newTask.title.trim().length < 5){
        return {success: false, messege: "Title is must be 5 character or longer"}
    }

    const res = await postTask(newTask)

    if(res.ok){
        revalidatePath('/tasks')
    }

    return res
}

export const newTaskAction = async (formData) => {
    const newTask = Object.fromEntries(formData.entries());
    console.log(newTask)

    const res = await postTask(newTask)

    if(res.ok){
        revalidatePath('/tasks')
        redirect('/tasks')
    }

    return res
}