import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

let initialState = {
  status: "idle",
  allTravel: [],
  travelData: {},
  isDeleted: false,
  deletedData: {},
  totalPages: 0,
};
export const AllTravel = createAsyncThunk("/travel", async (data) => {
  let res = await axiosInstance.post("/product/list", data);
  return res?.data;
});

export const AddTravel = createAsyncThunk("/addTravel", async (data) => {
  let res = await axiosInstance.post("/product/create", data);

  return res?.data;
});
export const detail = createAsyncThunk("/detail", async (id) => {
  let res = await axiosInstance.get(`/product/detail/${id}`);
  return res?.data;
});
export const updateTravelData = createAsyncThunk(
  "/update",
  async (formData) => {
    let res = await axiosInstance.post(`/product/update`, formData);
    return res?.data;
  },
);
export const deleteData = createAsyncThunk("/delete", async (formData) => {
  let res = await axiosInstance.post(`/product/remove`, formData);
  return res?.data;
});

export const CrudSlice = createSlice({
  name: "Travel",
  initialState,
  reducers: {
    reset_to_travel: (state, { payload }) => {
      state.redirectToTravel = payload;
      localStorage.removeItem("travelDetails");
    },
    // reset_to_edit_travel:(state,{payload})=>{
    //   state.redirectEditToTravel = payload
    //   localStorage.removeItem('travelDetails')
    // },
  },

  extraReducers: (builder) => {
    builder

      .addCase(AllTravel.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(AllTravel.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if (payload.status === 200) {
          state.allTravel = payload?.data;
          state.totalPages = payload?.totalPages;
          // state.page = payload?.currentPage;
          // state.perpage = payload?.perPage;
        }
      })
      .addCase(AllTravel.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(AddTravel.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(AddTravel.fulfilled, (state, { payload }) => {
        state.status = "idle";

        if (payload.status === 200) {
          localStorage.setItem("travelDetails", payload?.data);
          console.log(payload.data);
        }
      })
      .addCase(AddTravel.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(detail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(detail.fulfilled, (state, { payload }) => {
        state.status = "idle";

        state.travelData = payload?.data;
        console.log(payload?.data);
      })
      .addCase(detail.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(deleteData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteData.fulfilled, (state, action, { payload }) => {
        state.status = "idle";
        state.isDeleted = true;
        state.deletedData = payload?.data;
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});

export const { reset_to_travel } = CrudSlice.actions;
