import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    id: number;
    title: string;
    context: string;
    time: number;
}

let nextId = 0;
const initialState: CounterState[] = [];

export const counterSlice = createSlice({
    name: "answer",
    initialState,
    reducers: {
        add: (state, actions) => {
            nextId++;
            state.push({
                id: nextId,
                title: actions.payload.title,
                context: actions.payload.context,
                time: 1,
            });
        },

        remove: (state, action) => {
            return state.filter((e) => e.id !== action.payload);
        },
    },
});

export const { add, remove } = counterSlice.actions;

export default counterSlice.reducer;
