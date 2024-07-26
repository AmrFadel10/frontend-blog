import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/baseUrl";

export const brandsApiCall = createAsyncThunk(
	"brands/get-brands",
	async (_, thunkAPI) => {
		try {
			const { data } = await request.get("/brand/");
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);
