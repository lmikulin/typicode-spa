export const authInitialState = {
  user: {
    name: null,
    username: null,
    email: null,
    id: null
  },
  fetching: false,
  auth: false,
  error: null
};

export const postsInitialState = {
  posts: [],
  fetching: false,
  fetched: false,
  error: null,
  maxPostId: 100
};

export const commentsInitialState = {
  comments: {},
  fetching: false,
  fetched: false,
  error: null,
  maxComments: 500
};
