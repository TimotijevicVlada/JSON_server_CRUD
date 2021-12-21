import React, {useContext} from 'react';
import { CrudContext } from '../context/Context';

const Posts = () => {

    const {data} = useContext(CrudContext);
   

    return (
        <div className='posts'>
            {data.posts?.map((item, index) => (
                <div className='post' key={item.id}>
                    <span className='index'>#{index + 1}</span>
                    <span className='title'>{item.title}</span>
                    <span className='author'>{item.author}</span>
                </div>
            ))}
        </div>
    )
}

export default Posts;
