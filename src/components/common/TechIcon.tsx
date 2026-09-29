import Image from "next/image";

const TechIcon = ({ icon, label }: { icon: string; label: string }) => (
  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark p-2 dark:bg-light">
    <Image src={icon} alt={label} className="invert dark:invert-0" />
  </div>
);

export default TechIcon;
