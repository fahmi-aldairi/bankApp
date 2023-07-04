import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersAsync = createAsyncThunk(
  "bank/getUsersAsync",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (response) {
      const data = await response.data.slice(0, 20);
      console.log(data);
      return { data };
    }
  }
);

export const bankSlice = createSlice({
  name: "bank",
  initialState: [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
  ],

  reducers: {
    addAccount: (state, action) => {
      const newUser = {
        id: new Date().getFullYear(),
        userId: 5,
        title: action.payload.title,
        body: action.payload.body,
      };
      state.push(newUser);
    },
    deleteUser: (state, action) => {
      return state.filter((data) => data.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getUsersAsync.fulfilled]: (state, action) => {
      return action.payload.data;
    },
  },
});

export const { addAccount, deleteUser } = bankSlice.actions;

export default bankSlice.reducer;
