import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function MyAvatar() {
  return (
    <Avatar className="self-center">
      <AvatarFallback>BEN</AvatarFallback>
    </Avatar>
  );
}
export default MyAvatar;
