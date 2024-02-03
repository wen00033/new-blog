import { AspectRatio } from "./ui/aspect-ratio";
import { Badge } from "./ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Img } from "react-image";

function CardWork({ data, url }) {
  return (
    <Card className="flex flex-col overflow-hidden hover:scale-105 hover:shadow-2xl transition-all ease-in-out ">
      <a href={url}>
        <div className="overflow-hidden">
          <AspectRatio ratio={16 / 7.2}>
            <Img loading="lazy" src={data.images.src} />
          </AspectRatio>
        </div>
      </a>
      <CardHeader>
        <CardTitle className=" text-md ">{data.title.toUpperCase()}</CardTitle>
        <div className="flex gap-2">
          {data.category.map((el, i) => (
            <Badge key={i} className="hover:scale-110">
              {el.toUpperCase()}
            </Badge>
          ))}
        </div>
        <Badge variant="destructive" className="w-fit">
          {data.date}
        </Badge>
      </CardHeader>
    </Card>
  );
}
export default CardWork;
