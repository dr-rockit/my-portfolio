import Image from "next/image";
const MadeWithLove = () => {
  return (
    <div className="flex items-center justify-center gap-1 mt-8 text-sm">
      Made with
      <Image src={"/images/heart.svg"} width={16} height={16} alt="heart" />
      <span className="text-base my-2">+</span>
      <Image src={"/images/skull.svg"} width={16} height={16} alt="skull" />
    </div>
  );
};

export default MadeWithLove;
