import ModalTask from '@/component/ModalTask';
import TaskCart from '@/component/TaskCart';
import { createTask } from '@/lib/action';
import { getTask } from '@/lib/tasks';
import React from 'react';

const page = async () => {

    const data = await getTask()
    // console.log(data)

    return (
        <div>
            <h2 className='text-2xl font-bold text-center my-5'>My Task: {data.length}</h2>
            <div className='flex justify-center my-5'>
                <ModalTask createTask={createTask}></ModalTask>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-[80%] mx-auto'>
                {
                    data.map(v => <TaskCart key={v.id} p={v}></TaskCart>)
                }
            </div>
        </div>
    );
};

export default page;