import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostAction } from '../action/fetchPostAction';

function Posts() {
    const dispatch = useDispatch();
    const values = useSelector(state => state);
    const titles = values ? values.map((value) => <li key={value.id}>{value.title}</li>) : "No Data Found...";
    
    useEffect(() => {
        dispatch(fetchPostAction());
    },[]);

    return (
        <div>
            <h1>Getting data from API call: </h1>
            <p>
                {titles}
            </p>
        </div>
    );
}

export default Posts;