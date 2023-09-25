import Image from "next/image";

interface MyImageProps {
    src: string;
    alt: string;
}
export default function MyImage({src, alt}: MyImageProps)
{
    return (
        <Image src={src} alt={alt} className="!relative object-cover" fill={true}  />
    )
}
