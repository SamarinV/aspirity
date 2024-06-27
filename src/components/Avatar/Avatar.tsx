import Image from "next/image";

type Props = {
	size: number
	url: any
}

export const Avatar = ({ size, url }: Props) => {
  return <Image alt="avatar" src={url} width={size} height={size} className="rounded-full" />
}