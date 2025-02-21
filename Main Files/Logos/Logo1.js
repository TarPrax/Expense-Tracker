import { LogoUrl1, LogoUrl2 } from "../../Constants/Links";

const Logo1 = ({ userStatus }) => {
  return (
    <>
      <div>
        <img src={userStatus ? LogoUrl1 : LogoUrl2} />
      </div>
    </>
  );
};

export default Logo1;
