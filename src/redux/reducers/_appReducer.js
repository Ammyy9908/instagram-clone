const intialState = {
    user: false,
    likes:[],
    bookmarks:[]
  };
  
  const AppReducer = (state = intialState, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user
        };

        case "ADD_LIKED_POST":
                return{
                    ...state,
                    likes: [...state.likes, action.post]
        }

        case "REMOVE_LIKED_POST":{
            const index = state.likes.findIndex(post => post.id === action.id);
            const newLikes = [...state.likes];
            newLikes.splice(index, 1);
            return{
                ...state,
                likes: newLikes
            }
        }



        case "ADD_BOOKMARK":
            return{
                ...state,
                bookmarks: [...state.bookmarks, action.post]
    }

    case "REMOVE_BOOKMARK":{
        const index = state.bookmarks.findIndex(post => post.id === action.id);
        const newBookmarks = [...state.bookmarks];
        newBookmarks.splice(index, 1);
        return{
            ...state,
            bookmarks: newBookmarks
        }
    }
  
        
  
      default:
        return state;
    }
  };
  
  export default AppReducer;