const Button1 = ({ userStatus, SetUserStatus }) => {
  function changeStatus() {
    SetUserStatus(!userStatus);
  }
  return (
    <>
      <button onClick={changeStatus} className="text-2xl">
        {userStatus ? "Logout" : "Signup/SignIn"}{" "}
      </button>
    </>
  );
};
export default Button1;
