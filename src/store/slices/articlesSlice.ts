import { IArticle, IGetArticlesRequest } from 'types/IArticles.types.ts';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, BASE_URL } from 'services/api.ts';

interface ArticlesState {
  articles: IArticle[];
  // searchForArticle: string;
  isLoading: 'loading' | 'resolved' | 'rejected' | null;
  error: string;
}

const initialState: ArticlesState = {
  articles: [],
  // searchForArticle: '',
  isLoading: null,
  error: '',
};

export const fetchAllArticles = createAsyncThunk<
  IGetArticlesRequest,
  { q: string },
  { rejectValue: string }
>('articles/fetchAllArticles', async (params, { rejectWithValue }) => {
  try {
    const { q } = params;
    const response = await axios.get<IGetArticlesRequest>(
      `${BASE_URL}?country=us&apiKey=${API_KEY}`,
      {
        params: { q },
      },
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
  reducers: {
    // setSearchForArticle: (state, action: PayloadAction<string>) => {
    //   state.searchForArticle = action.payload;
    //   // data.map((obj) => obj.name.toLowerCase().includes(e.target.value.toLowerCase())
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllArticles.pending, (state) => {
        state.isLoading = 'loading';
        state.error = '';
      })
      .addCase(fetchAllArticles.fulfilled, (state, action: PayloadAction<IGetArticlesRequest>) => {
        state.isLoading = 'resolved';
        state.articles = action.payload.articles;
        state.error = '';
      })
      .addCase(fetchAllArticles.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = 'rejected';
        state.error = action.payload as string;
      });
  },
});

// export const { setSearchForArticle } = articlesSlice.actions;

export default articlesSlice.reducer;
