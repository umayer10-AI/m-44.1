import { Button } from '@heroui/react';
import React from 'react';

const page = () => {
    return (
        <div className='w-[80%] mx-auto my-10'>
            <Button>Primary</Button>
            <Button variant='secondary'>Primary</Button>
            <Button variant='danger'>Primary</Button>
            <Button variant="ghost" className={'bg-yellow-300'}>Ghost</Button>
            <Button variant="outline" className={'bg-green-400'}>Outline</Button>
            <Button variant="tertiary" className={'text-black'}>Tertiary</Button>
            <Button variant="danger-soft">Danger Soft</Button>
        </div>
    );
};

export default page;