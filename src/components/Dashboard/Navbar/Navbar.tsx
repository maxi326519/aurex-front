import userSvg from "../../../assets/svg/profile.svg";

interface Props {
  title: string;
}

export default function Navbar({ title }: Props) {
  return (
    <nav className="flex justify-between items-center h-[--navbar-height] p-6 pl-[30px] border-b-[1px] border bg-white">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex justify-center items-center w-[50px] h-[50px] border-[1px] border-[--border-color] overflow-hidden rounded-[50px]">
        <img className="icon-invert w-[60%] opacity-70" src={userSvg} alt="user" /> 
      </div>
    </nav>
  );
}
