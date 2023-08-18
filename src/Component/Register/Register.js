import React, { useContext} from "react";
import { AuthContext } from "../../Contexts/UserContext";
import { toast } from "react-hot-toast";

const Register = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name=form.name.value;
    const email = form.email.value;
    const currpassword = form.pass.value;
    createUser(email, currpassword)
      .then((result) => {
        const user = result.user;
        handleToast(user);
        form.reset();
        updateProfile(name);
      })
      .catch((e) => console.log(e));
     
  };
 
  const handleToast = (user) => {
    if (user) {
      toast.success("Successfully Account Created");
    } else {
      toast.error("Something Wrong Please Check");
    }
  };
  const updateProfile=(name)=>{
    const profile={  displayName:name,
      photoURL: ''
    }
    profileUpdate(profile)
    .then(()=>{})
    .catch(e=>console.error(e));
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="hero mt-4 min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              SignUp <span className="text-indigo-400">now!</span>
            </h1>
            <p className="py-6 font-medium">
              SignUp To explore Learning Platform
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="pass"
                  placeholder="Password"
                  className="input input-bordered"
                />
                <label className="label"></label>
              </div>
              <div className="form-control mt-3">
                <button className="btn text-white bg-indigo-400 hover:bg-indigo-500">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
