import Link from "next/link";
import TextWithLineBreaks from "@/utils/text/LineBreaks";

interface CardProps {
  title: string;
  href: string;
  image?: string;
  size?: string;
}

export default function Card({ title, href, image, size = 'w-48' }: CardProps) {
    return (
        <Link href={href}>
            <div className={`bg-white rounded-lg shadow-md ${size} mx-auto mr-6 ml-6`}>
                {image ? 
                    <img className='h-48 w-full object-cover' src={image} alt={title} /> 
                    : 
                    <div className='bg-gray-500 h-48 w-full'></div>
                }
                <div className="h-16 text-center flex justify-center items-center "><h3><TextWithLineBreaks text={title} /></h3></div>
            </div>
        </Link>
    );
}