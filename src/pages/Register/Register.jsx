import { FaGoogle } from "react-icons/fa6";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { Link } from "react-router";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, loading, setLoading } = useAuthContext();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await createUser(email, password);

      if (res.user.accessToken) {
        await updateProfile(res.user, {
          displayName: name,
        });

        toast.success("Registration successful.");
        setLoading(false);
      }
    } catch (err) {
      toast.error("Something went wrong!")
      console.log(err);
      setLoading(false)
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    console.log("google login");
  };

  return (
    <section className="py-[80px] bg-accent">
      <div className="container mx-auto">
        <div>
          <h2 className="text-primary text-medium text-center">
            Register
          </h2>
          <h3 className="text-3xl text-center font-semibold">
            Start for free Today
          </h3>
          <p className="text-center text-[13px] mt-2 text-[#6c757d] font-medium">
            Access to all features. No credit card required.
          </p>
        </div>
        <div className="text-center mt-5 w-2/5 mx-auto">
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5] text-center"
          >
            <span>
              <FaGoogle />
            </span>
            Signup with Google
          </button>
          <div className="divider text-[12px]">OR continue with</div>
        </div>
        <div className="mt-5 w-2/5 mx-auto">
          <form onSubmit={handleRegister}>
            <div className="mb-5">
              <label htmlFor="name" className="mb-1 inline-block">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John doe."
                className="input w-full"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="mb-1 inline-block">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="input w-full"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="mb-1 inline-block">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                className="input w-full"
              />
            </div>
            <div className="mb-5">
              <button
                disabled={loading}
                className="btn btn-secondary text-white w-full"
              >
                Register
              </button>
              <p className="mt-2 text-center text-secondary text-[14px]">
                Already have an account?{" "}
                <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
