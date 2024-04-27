import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { storageKey } from '../../Const/Const';


export const SignUpUser = createAsyncThunk(
    "createUser/signUpUser",
    async function (data, { rejectWithValue }) {
        try {
            const res = await axios.post(`http://localhost:8000/user/register`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(res.data);
            if (res) {
                const localStorageData = JSON.stringify({
                    token: res?.data.Token
                })
                window.localStorage.setItem(storageKey, localStorageData)
                return res.data
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
    }
)

export const SignInNew = createAsyncThunk(
    "signInReducer",
    async function (data, { rejectWithValue }) {
        try {
            const res = await axios.post('http://localhost:8000/user/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            console.log(res);
            if (res) {
                const localStorageData = JSON.stringify({
                    token: res?.data.Token
                })
                window.localStorage.setItem(storageKey, localStorageData)
                return res.data
            }
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data)
        }
    }
)




export const UserData = createAsyncThunk(
    "userData/userlogged",
    async function (data, { rejectWithValue }) {
        try {
            const token = JSON.parse(localStorage.getItem(storageKey))
            console.log(token)
            const headers = {
                Authorization: `Bearer ${token}`
            }
            const response = await axios.get('http://localhost:8000/user/userlogged', data, {
                headers
            })
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response.data)
        }
    }
)


export const GetJobs = createAsyncThunk(
    "getjob/jobs",
    async function ({ rejectWithValue }) {
        try {
            console.log("working........")
            const response = await axios.get('http://localhost:8000/jobs/')
            console.log(response);
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
    }
)

