import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalDetails: [],
  professionalDetails: [],
  equipDetails: [],
  documentDetails: [],
  ParticularempId:{},
  id: "",
  tab: false
};
export const DetailSlice = createSlice({
  name: "Details",
  initialState,
  reducers: {
    setpersonalDetails: (state, action) => {
      state.personalDetails = { ...state.personalDetails, ...action.payload };
    },
    setprofessionalDetails: (state, action) => {
      state.professionalDetails = { ...state.professionalDetails, ...action.payload };
    },
    setequipmentDetails: (state, action) => {
      state.equipDetails = { ...state.equipDetails, ...action.payload };
    },
    setdocumentDetails: (state, action) => {
      state.documentDetails = { ...state.documentDetails, ...action.payload };
    },
    setParticularEmpid:(state, action)=>{
      state.ParticularempId= action.payload
    },
    setId: (state, action) => {
      state.id = action.payload
      console.log("id", action.payload)
    },
    setTabs: (state, action) => {
      state.tab = action.payload
      console.log("setTab", action.payload)
    }
  },
});

export const { setpersonalDetails } = DetailSlice.actions;
export const { setprofessionalDetails } = DetailSlice.actions;
export const { setequipDetails } = DetailSlice.actions;
export const { setdocumentDetails } = DetailSlice.actions;
export const {setParticularEmpid} = DetailSlice.actions;
export const { setId } = DetailSlice.actions;
export const { setTabs } = DetailSlice.actions;

export default DetailSlice.reducer;
