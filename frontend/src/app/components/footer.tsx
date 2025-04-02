import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <div className="w-screen h-40 flex justify-center content-center bg-[#FAEDCD]">
      <div className="flex justify-between items-center w-[90%] border-t-1 text-lg">
        <div className="h-full flex flex-col justify-center ">
          <p>Livskrafter ©</p>
          <p>emma@livskrafteremma.com</p>
        </div>
        <div className="w-1/4 flex justify-end gap-3">
          <FacebookIcon className="hover:cursor-pointer hover:text-[#545E56]" />
          <InstagramIcon className=" hover:cursor-pointer hover:text-[#545E56]" />
        </div>
      </div>
    </div>
  );
};
