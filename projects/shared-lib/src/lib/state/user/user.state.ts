import { createFeature, createReducer, on } from "@ngrx/store";

export interface User {
    name: string;
    email: string;
    mobile: number | undefined;
  }

const initialState: User = {
    name: 'Ansuman',
    email: 'sunmoon@gmail.com',
    mobile: 9007770
  };


    const reducer = createReducer(
        initialState,
    );

  export const userFeature = createFeature({
        name: 'user',
        reducer
    }
  )