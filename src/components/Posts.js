import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostAction } from '../action/fetchPostAction';

function Posts(props) {
    const dispatch = useDispatch();
    const value = useSelector(state => state);
    
    useEffect(() => {
        dispatch(fetchPostAction());
    },[]);

    return (
        <div>
            <h1> Getting data from API call: {value}</h1>
        </div>
    );
}

export default Posts;