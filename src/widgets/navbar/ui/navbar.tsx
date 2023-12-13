import { classNames } from "shared/helpers";
import { AppLink, AppLinkTheme } from "shared/ui";
import styles from "./navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div></div>
      <div className={classNames(styles["navbar-links"])}>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
          О нас
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/">
          На главную
        </AppLink>
      </div>
    </div>
  );
};