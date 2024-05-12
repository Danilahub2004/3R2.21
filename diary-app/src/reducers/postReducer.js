
const initialState = [
    {
      id: 1,
      title: "Сегодня было замечательное предложение пойти поужинать этим вечером. Главное, чтобы погода была преимущественно теплой.",
      comments: [
        { id: 1, text: "Самый яркий комментарий в этом посте" },
        { id: 2, text: "Один из бессмысленный комментарий в этом посте" }
      ]
    },
    {
      id: 2,
      title: "Краткосрочное вымышленное преломление может выполнять особую роль в   пространстве главной роли игрока",
      comments: [
        { id: 1, text: "Очень научно и непонятно" }
      ]
    }
  ];
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DELETE_POST':
        return state.filter(post => post.id !== action.payload);
      case 'EDIT_POST':
        return state.map(post =>
          post.id === action.payload.postId ? { ...post, title: action.payload.newText } : post
        );
      default:
        return state;
    }
  };
  
  export default postReducer;
  