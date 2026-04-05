import { useForm,  } from "react-hook-form"

const login= ()=>{

    const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

// register => it is use to collect the data from input
// handleSubmit=> handleSubmit validate krne ka kaam kr raha hai saare input ko jo bhi
//                data user input krne wala hai
  function handleLogin(data){
    console.log(data)
  }

return(
    <div>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
            <label ><b>Username : </b></label>
            <input type="text" {...register("username",{required : true})} id="Name" placeholder="Enter the name" />
            <br />
             {errors.username?.type === "required" && (
                <p role="alert">User name is required</p>
                    )}
            <br />
            <label ><b>Password : </b></label>
            <input type="password" {...register("password",{required:true,minLength:6})} id="Pass" placeholder="Enter the name" />
            <br />
                {errors.password && <p style={{color:"red"}}>Password is required</p>}
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
)
}
export default login;