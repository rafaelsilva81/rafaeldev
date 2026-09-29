import { ProfileIcon } from "./common/ProfileIcon";

const HeaderLogo = () => (
  <div className="flex items-center gap-3">
    <ProfileIcon
      color="var(--accent)"
      className="h-12 w-12 shrink-0 md:h-16 md:w-16"
    />
    <span className="text-xl md:text-2xl">
      rafael<span className="text-accent font-bold">galdino</span>silva
    </span>
  </div>
);

export default HeaderLogo;
