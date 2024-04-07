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
            console.log(error);
            return rejectWithValue(error)
        }
    }
)