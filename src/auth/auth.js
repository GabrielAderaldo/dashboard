export const isAuth = () =>{

    //Chegando se o tolken está no localStorage.
    const auth = localStorage.getItem('token')
    if(!auth){
        return false
    }else{
        return true
    }

    
};