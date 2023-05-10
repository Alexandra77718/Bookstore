import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getAllPosts, getSinglePost, setAllPosts, setSinglePost } from '../reducers/cardSlice';
import { ApiResponse } from 'apisauce';
import API from '../api';
import { CardType } from 'src/utils/@globalTypes';



function* getAllPostsWorker() {
    const { ok, data, problem }: ApiResponse<any> = yield call(API.getAllPosts);
    if (ok) {
        yield put(setAllPosts(data.books));
    } else {
        console.warn('Error getting all posts', problem);
    }
}

function* getSinglePostWorker(action: PayloadAction<string>) {
    const { ok, data, problem }: ApiResponse<CardType> = yield call(
        API.getSinglePost, action.payload);
    if (ok && data) {
        yield put(setSinglePost(data));
    } else {
        console.warn('Error getting single post', problem);
    }
}


export default function* postsSaga() {
    yield all([
        takeLatest(getAllPosts, getAllPostsWorker),
        takeLatest(getSinglePost, getSinglePostWorker),
    ]);

 }