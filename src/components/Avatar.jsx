import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function MyAvatar() {
  return (
    <Avatar className="self-center animate-spin">
      <AvatarFallback>BEN</AvatarFallback>
    </Avatar>
  );
}
export default MyAvatar;
