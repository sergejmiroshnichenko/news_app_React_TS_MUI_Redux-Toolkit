import { IArticle, IGetArticlesRequest } from 'types/IArticles.types.ts';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, BASE_URL } from 'services/api.ts';

interface ArticlesState {
  articles: IArticle[];
  isLoading: 'loading' | 'resolved' | 'rejected' | null;
  error: string;
}

const initialState: ArticlesState = {
  articles: [],
  isLoading: null,
  error: '',
};

export const fetchAllArticles = createAsyncThunk<
  IGetArticlesRequest,
  undefined,
  { rejectValue: string }
>('articles/fetchAllArticles', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<IGetArticlesRequest>(
      `${BASE_URL}?country=us&apiKey=${API_KEY}`,
    );
    if (response.status !== 200) {
      return rejectWithValue('Server error');
    }

    console.log('response.data', response.data);
    return response.data;
  } catch (e) {
    return rejectWithValue('Error fetching data');
  }
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllArticles.pending, (state) => {
        state.isLoading = 'loading';
        state.error = '';
      })
      .addCase(fetchAllArticles.fulfilled, (state, action) => {
        state.isLoading = 'resolved';
        state.articles = action.payload.articles;
        state.error = '';
      })
      .addCase(fetchAllArticles.rejected, (state, action) => {
        state.isLoading = 'rejected';
        state.error = action.payload as string;
      });
  },
});

export default articlesSlice.reducer;
