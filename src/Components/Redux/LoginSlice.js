import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

let initialState = {
  status: "idle",
  redirectTo: null,
  isloggedIn: false,
  dataStore: [],
  profileData: {},
};

export const register = createAsyncThunk("register", async (formData) => {
  try {
    let res = await axiosInstance.post("/user/signup", formData);
    return res?.data;
  } catch (err) {
    throw err;
  }
});
export const login = createAsyncThunk("login", async (formData) => {
  let res = await axiosInstance.post("/user/signin", formData);
  let resData = res?.data;
  return resData;
});

export const profileDetails = createAsyncThunk("profile", async () => {
  let res = await axiosInstance.get("/user/profile-details");
  let resData = res?.data;
  return resData;
});

export const LoginSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    handleLogout: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem("userDetails");
      state.isloggedIn = false;
    },
    check_token: (state, { payload }) => {
      let token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.isloggedIn = true;
      }
    },
    reset_redirect: (state, { payload }) => {
      state.redirectTo = payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(register.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if (payload?.status == 200) {
          state.isloggedIn = true;
          state.dataStore = payload?.data;
          localStorage.setItem("token", payload?.token);
          localStorage.setItem("userDetails", JSON.stringify(payload?.data));
        }
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "idle";
      })

      .addCase(login.pending, (state, action) => {
        state.login_status = "loading";
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        if (payload?.status == 200) {
          state.redirectTo = "/";
          state.isloggedIn = true;
          state.dataStore = payload?.data;
          localStorage.setItem("token", payload?.token);
          localStorage.setItem("userDetails", JSON.stringify(payload?.data));
        }
      })
      .addCase(profileDetails.pending, (state, action) => {
        state.status = "idle";
      })
      .addCase(profileDetails.fulfilled, (state, { payload }) => {
        if (payload?.status === 200) {
          state.profileData = payload?.data;
        }
      })
      .addCase(profileDetails.rejected, (state, action) => {
        state.status = "loading";
      });
  },
});

export const { check_token, handleLogout, reset_redirect } = LoginSlice.actions;
