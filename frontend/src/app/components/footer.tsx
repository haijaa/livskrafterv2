import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <div className="w-screen h-40 flex justify-center content-center bg-[#f7f6eb] pb-5 pt-5 md:pb-0">
      <div className="flex flex-col md:flex-row justify-between items-center w-[90%] 2xl:w-[70%] border-t-1 text-lg">
        <div className="h-full gap-2 md:gap-0 flex flex-col justify-between md:justify-center pt-5 md:pt-0">
          <p>Livskrafter ©</p>
          <p>EMMA@LIVSKRAFTEREMMA.COM</p>
        </div>
        <div className="w-1/4 flex justify-center md:justify-end gap-3 pt-5 md:pt-0 b-0">
          <FacebookIcon className="hover:cursor-pointer hover:text-[#545E56]" />
          <InstagramIcon className=" hover:cursor-pointer hover:text-[#545E56]" />
        </div>
      </div>
    </div>
  );
};
