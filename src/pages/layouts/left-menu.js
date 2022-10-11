import React from "react";
import Label from "../../components/label";
import MenuItem from "../../components/menu-item";
import UserAvatar from "../../components/user-avatar";

const LeftMenu = () => {

  const leftMenuHeaderStyle = {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 35
  }

  return (
    <div className="left-menu-container">
      <div style={leftMenuHeaderStyle}>
        <UserAvatar />
        <Label
          text="Menu"
        />
      </div>

      <MenuItem
        iconColor="#6969DF"
        text="Anasayfa"
        imagePath={require('../../assets/img/home.png')}
        to={"/dashboard"}
      />
      <MenuItem
        iconColor="#32A7E2"
        text="Para Transferi"
        imagePath={require('../../assets/img/money-bills.png')}
        to={"/money-transfer"}
      />
      <MenuItem
        iconColor="#B548C6"
        text="Hesaplarım"
        imagePath={require('../../assets/img/wallet.png')}
        to={"/my-accounts"}
      />
      <MenuItem
        iconColor="#FF8700"
        text="Hesap Hareketleri"
        imagePath={require('../../assets/img/transaction.png')}
        to={"/account-activities"}
      />
    </div >
  )
};

export default LeftMenu;
