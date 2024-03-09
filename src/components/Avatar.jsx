import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function MyAvatar() {
  return (
    <a href="/" className="self-center transition-all">
      <Avatar className=" cursor-pointer hover:animate-bounce">
        <AvatarFallback className=" font-display ">BEN</AvatarFallback>
      </Avatar>
    </a>
  );
}
export default MyAvatar;
