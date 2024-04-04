import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const SignUpUser = createAsyncThunk(
    "createUser/signUpUser",
    async function (data, { rejectWithValue }) {
        try {
            const res = await axios.post(`http://localhost:8000/user/register`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(res);
        } catch (error) {
            console.log(error);
            return rejectWithValue(error)
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
        } catch (error) {
            console.log(error);
            return rejectWithValue(error)
        }
    }
)