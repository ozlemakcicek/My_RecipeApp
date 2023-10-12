import styled from 'styled-components';
import {Link} from "react-router-dom";

// Navbardaki yonlendirmelieri cogunlukla Link ile asagidaki yonlendirmeleri de navigate ile yapariz

export const Nav = styled.nav`
  /* SALMON olan navbar */
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  // varsayilan olarak esnek ögeler tek bir satira sigmaya calisirlar.Gerektiginde birden fazla satira yaymak icin bu özelligi kullanabiliriz
  background: cadetblue;
  border-radius: 0 0 10px 10px;
  height: 75px;
  font-size: 2rem;
`;




export const Menu = styled.div`
  /* navbar daki 3 kelime about.. hepsini icine alan sarmalin (kutunun)özellikleri */
  background: lightseagreen;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: -1.8rem;
  // icinde bulundugu div in stillerine gore ayarla kendini, bunu yazmazsak food app in altinda kalacak

  // 3 kelime acilinca üstteki ozelliklerde olsun

  @media (max-width: 768px) {
    overflow: hidden;
    // uzun yazi olursa  ve tasarsa gizle(hamburgere donusurse)
    flex-direction: column;
    width: 100%;
    //props olarak osman=true geldi mesela. yukarida overflow:hidden demistik acilinca gozuksun diye bir height veya display: flex verebiliriz
    // max-height:${({ osman }) => (osman ? "300px" : "0")}

    // alttaki gibi de kontrol edebiliriz. Menu divi display :flex ve flex-direction:column o.i. alt altalar

    display: ${({ osman }) => (osman ? "flex" : "none")};

    /* max-height:300px; */
    /* 3 çizgiye ilk tıklandığında 300 px açılsın, sonraki tıklamada kapansın */
    /* max-height:300px yazarsak hep açık olur */
  }

  a {
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #02475e;
    transition: all 0.3s ease-in;
    font-size: 1.5rem;
    font-family: "Girassol", sans-serif;
    border: 1px solid #00adb5;
    border-radius: 10px;

    &:hover {
      color: #01abf0;
      background: mediumturquoise;
      font-weight: bold;
    }
    @media (max-width: 768px) {
      /* hamburger meydana çıktığında 
    /* ekran küçülünce alttaki stiller olsun */
      border: 1px solid #00adb5;
      border-radius: 10px;
      width: 91%;
    }
  }
`;


// direkt Link ten turetilmis.yanci degil yani.o yuzden Linki de yukarida import etmeliyiz react-router dom dan
export const MenuLink = styled(Link)`
  /* navbardaki 3 kelime. tek tek about vs yazanlarin ozellikleri YESIL*/
  background: mediumaquamarine;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #02475e;
  transition: all 0.3s ease-in;
  font-size: 2rem;
  font-family: "Girassol", sans-serif;
  border: 1px solid #00adb5;
  border-radius: 10px;
  &:hover {
    color: #00adb5;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    // hamburger meydana ciktiginda sonrasinda linklerde tiklaninca ekran kuculunce alttaki stiller olsun
    border: 1px solid #00adb5;
    border-radius: 10px;
    width: 91%;
  }
`;


// yukarida olusturdugumuz MenuLink den de Logo yu turetiyoruz.aynisi olsun sadece sunlari degistir diyecegiz
export const Logo = styled(MenuLink)`
  background: sandybrown;
  padding: 1rem;
  border: 1px solid #00adb5;
  border-radius: 10px;
 margin-left:-1.8rem;
  color: #393e46;
  font-weight: 600;

  span {
    font-weight: 400;
    color: #00adb5;

    &:hover{
        color: black;
    }
  }
`;





export const Hamburger=styled.div`

display: none;
cursor: pointer;

@media (max-width: 768px) {
    display: flex;
}

`;







