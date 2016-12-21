export const authInitialState = {
  user: {
    name: null,
    username: null,
    email: null,
    id: null
  },
  auth: false,
  error: null
};

export const postsInitialState = {
  posts: [],
  error: null,
  maxPostId: 100
};

export const commentsInitialState = {
  comments: {},
  error: null,
  maxComments: 500
};

export const albumsInitialState = {
  albums: [],
  error: null
};

export const photosInitialState = {
  photos: [],
  album: null,
  user: null,
  error: null
};
