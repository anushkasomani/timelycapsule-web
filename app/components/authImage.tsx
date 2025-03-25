import Image from "next/image";
export default function AuthImage() {
  return (
    <div className="relative h-full w-[600px]">
      <div className="absolute right-0 h-full w-auto">
        <Image
          src="/images/auth_img.png"
          alt="Auth Image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
