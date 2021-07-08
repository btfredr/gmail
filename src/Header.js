import "./Header.css";
import { IconButton, Avatar } from "@material-ui/core";
import {
  Apps,
  ArrowDropDown,
  Notifications,
  Search,
  Menu,
} from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://storage.tweak.dk/computer/S%C3%A5dan%20filtreres%20e-mails%20i%20Gmail/gmail%20filtre%20guide.jpg"
          alt="Gmail"
        />
      </div>
      <div className="header__middle">
        <Search />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
