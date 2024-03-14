const initialState={
    IsLoggedIn:localStorage.getItem("userid")!==null,
    Username: localStorage.getItem("uname")===null ? "":localStorage.getItem("uname"),
    Role: localStorage.getItem("role")===null ? "":localStorage.getItem("role")
}

const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case 'IsLoggedIn':
            return {...state,
                IsLoggedIn:true,
                Username:localStorage.getItem("uname"),
                Role:localStorage.getItem("role")
            } 
        case 'LogOut':
            localStorage.clear()
            return {
                ...state,
                IsLoggedIn:false,
                Username:'',
                Role:''
            }
        default:
            return state
    }
}

export default reducer;