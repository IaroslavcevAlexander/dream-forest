import { Box } from "@mui/material";

const Profile = () =>{
    return(
        <>
            <Box component="img" src="img/icons/logo 3.svg" alt="logo-dream-forest" />
            <input></input>
            <input></input>
            <button>Войти</button>
            <p>или</p>
            <Box component="img" src="img/icons/facebook logo.svg" alt="facebook" />
            <Box component="img" src="img/icons/vk logo.svg" alt="VK" />
            <Box component="img" src="img/icons/google logo.svg" alt="Google" />
        </>
    )
}
export default Profile;