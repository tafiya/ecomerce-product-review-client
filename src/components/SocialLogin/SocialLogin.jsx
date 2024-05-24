import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/UseAxiosPublic";
import UseAuth from "../../hooks/UseAuth";
import toast from "react-hot-toast";
import google from '../../assets/image/Google.png'


const SocialLogin = () => {
    const { googleSignIn } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
           // console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                
                toast.success('Successfully login!')
                navigate(location ?. state ? location.state : '/');
            })
        })
    }

    return (
        <div className=" my-6">
            <form action="" onClick={handleGoogleSignIn}>
            <div className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
                <img src={google} className=" w-10 h-10" alt="" />
           Continue with Google
                    </div>
            </form>
   
        </div>
    );
};

export default SocialLogin;