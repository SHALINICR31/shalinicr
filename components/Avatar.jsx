import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:block absolute top-36 right-20 z-250">
      <div className="w-[350px] h-[350px] rounded-full overflow-hidden border-2 border-red-500">
        <Image
          src="/mypic.png" // uploaded image path
          alt="Shalini Avatar"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Avatar;
