import { createSlice } from '@reduxjs/toolkit';

export const blogSlice = createSlice({
  name: 'counter',
  initialState: {
    title: '',
    subtitle: '',
    image: '',
    author: '',
    date: ''
  },
  reducers: {
    saveTitle: (state, action) => {
      state.title += action.payload
    },
    saveSubtitle: (state, action) => {
      state.subtitle += action.payload
    },
    saveImage: (state, action) => {
      state.image += action.payload
    },
    saveAuthor: (state, action) => {
      state.author += action.payload
    },
    saveDate: (state, action) => {
      state.date += action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveTitle, saveSubtitle, saveImage, saveAuthor, saveDate } = blogSlice.actions;

export const saveTitleAsync = value => dispatch => {
    setTimeout(() => {
      dispatch(saveTitle(value));
    }, 1000);
};

export const saveSubtitleAsync = value => dispatch => {
    setTimeout(() => {
      dispatch(saveSubtitle(value));
    }, 1000);
};

export const saveImageAsync = value => dispatch => {
    setTimeout(() => {
      dispatch(saveImage(value));
    }, 1000);
};

export const saveAuthorAsync = value => dispatch => {
    setTimeout(() => {
      dispatch(saveAuthor(value));
    }, 1000);
};

export const saveDateAsync = value => dispatch => {
  setTimeout(() => {
    dispatch(saveDate(value));
  }, 1000);
};

export const selectTitle = state => state.title;
export const selectSubtitle = state => state.subtitle;
export const selectImage = state => state.image;
export const selectAuthor = state => state.author;
export const selectDate = state => state.date;

export default blogSlice.reducer;