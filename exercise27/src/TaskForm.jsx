import React, {useRef, useContext} from 'react';
import { ADD_TASK, TaskDispatchContext  } from './container/TaskContainer';



const TaskForm = () => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');

    const {dispatch} = TaskDispatchContext();

    
    const submit = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_TASK,
            payload: {
                name: nameRef.current.value,
                description: descriptionRef.current.value
            }
        })

        nameRef.current.value = '';
        descriptionRef.current.value = '';
    }

    return (
        <div>
                <form onSubmit={submit}>
                            <input 
                            type='text'
                            placeholder='Task Name'
                            ref={nameRef}
                            />
                            
                            <input 
                            type='text'
                            placeholder='description'
                            ref={descriptionRef}/>
                            <button type='submit'>Create Task</button>
                        </form>
        </div>
    );
}

export default TaskForm;
