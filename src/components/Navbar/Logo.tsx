import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png"
        alt="logo"
        height={100}
        width={100}
        priority
      />
    </Link>
  );
}
