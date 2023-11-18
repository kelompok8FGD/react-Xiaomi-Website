import Icon from "../../Atoms/Icon";
import Logo from "../../Atoms/Logo";
import List from "../../Atoms/Navbar/List";
import SearchButton from "../../Atoms/SearchButton";

const NavBar = () => {
  return (
    <header
      id="top-site-header"
      className=" bg-[#fff] px-5 lg:px-6 sticky h-[48px] xl:h-[56px] "
      role="banner"
    >
      <nav id="header-navigation" className="h-full ">
        <Logo />
        <List redirect="/store" text="Store" title="Store"></List>
        <List
          redirect="/smartphone"
          text="SmartPhone"
          isActive="active"
          title="SmartPhone"
        ></List>
        <List separator="navigation__separator"></List>
        <List redirect="#" text="Discover" title="Discover"></List>
        <List redirect="#" text="Support" title="Support"></List>
        <SearchButton />
        <Icon redirect="/cart" classname="shopping-cart"></Icon>
        <li class="navigation__item shortcut__item shortcut__item-user only-medium">
                        <div class="navigation__link" role="button" tabindex="0">
                            <div class="shortcut__item--wrapper">
                                <a href="/account">
                                    <i class="micon micon-account shortcut__icon"></i>
                                </a>
                            </div>
                        </div>
                    </li>
      </nav>
    </header>
  );
};

export default NavBar;
