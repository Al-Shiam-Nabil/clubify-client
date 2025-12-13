import axios from "axios";
import useAuthHook from "../../Hooks/useAuthHook";
import { sweetAlert } from "../../Utils/Alert/SweetAlert";

const GoogleLogin = () => {
  const { googleLogin, setLoading } = useAuthHook();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          photoURL: result?.user?.photoURL,
        };
        axios.post("http://localhost:4000/users", userInfo).then((res) => {
          console.log(res.data)
          if (res?.data?.insertedId) {
            sweetAlert("success", "Logged in successfully.");
            setLoading(false);
          }
        });
      })
      .catch((err) => {
        console.error(err.code);
        let message = "Something went wrong.Please try again later.";

        if (err.code === "auth/popup-closed-by-user") {
          message = "You closed the Google login window. Please try again.";
        } else if (err.code === "auth/cancelled-popup-request") {
          message = "Login cancelled. Please try again.";
        } else if (err.code === "auth/popup-blocked") {
          message = "Popup blocked. Allow popups to sign in with Google.";
        } else if (
          err.code === "auth/account-exists-with-different-credential"
        ) {
          message =
            "An account with this email already exists. Try another login method.";
        } else if (err.code === "auth/network-request-failed") {
          message = "Network error. Check your connection and try again.";
        }

        sweetAlert("error", message);
        setLoading(false);
      });
  };

  return (
    <>
      {/* Google */}
      <button
        onClick={handleGoogleLogin}
        className="btn bg-neutral text-accent border-[#e5e5e5] rounded-full hover:bg-[#e5e5e5]"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
    </>
  );
};

export default GoogleLogin;
