import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { SignIn } from "../Pages/SingIn";

 export default function(){
    const user = useSelector((user)=> user.login.logged);
    return user ? <Outlet/> : <SignIn/>
}
