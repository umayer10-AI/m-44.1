export const createTask = async (formData) => {
    "use server"

    const name = formData.get('name')
    console.log(formData)
}