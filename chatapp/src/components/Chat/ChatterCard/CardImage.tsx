import MyImage from "@/components/MyImage";

export default function CardImage() {
  return (
    <div className="aspect-square object-cover hover:cursor-pointer">
      <MyImage src="https://picsum.photos/id/237/200/300" alt="profilePic" />
    </div>
  );
}
