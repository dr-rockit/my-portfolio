import Image from "next/image";
const MadeWithLove = () => {
  return (
    <div className="flex items-center justify-center gap-1 mt-8 text-sm">
      Made with
      <Image src={"/images/heart.svg"} width={16} height={16} alt="heart" />
      <Image
        src={"/images/robot.svg"}
        width={16}
        height={16}
        alt="robot"
        className="mb-1"
      />
    </div>
  );
};

export default MadeWithLove;
