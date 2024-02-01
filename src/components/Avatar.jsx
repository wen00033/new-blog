import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function MyAvatar() {
  return (
    <Avatar className="self-center">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>BEN</AvatarFallback>
    </Avatar>
  );
}
export default MyAvatar;
