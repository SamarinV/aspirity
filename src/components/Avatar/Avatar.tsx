import Image from "next/image";

type Props = {
	size: number
	url: any
}

const Avatar = ({ size, url }: Props) => {
  return <Image alt="avatar" src={url} width={size} height={size} className="rounded-full" />
}
 
export default Avatar;