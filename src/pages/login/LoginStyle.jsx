
//! esc ile degilde direkt elimizle yazdik bunnlari.Cunku tek tek componenet acmadan butun login ile alakali style lari tek bir comp.de yazacagiz.esc ile olsaydi export u her etiket icin ayri olurdu.bu da tek comp.de sadece bir element icin olurdu

import styled from 'styled-components';

export const LoginContainer = styled.div`
  //resmin oldugu div

  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const FormContainer = styled.div`

// yuvarlak alan
width: 600px;
min-width: 600px;
height: 600px;
background-color: rgba(0,173,181,0.5);
border-radius: 50%;
border: 2px solid #e1f1dd;
padding: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`;



export const StyledImg = styled.img`
  /* yuvarlagin icindeki ustteki kucuk resim */

  width: 150px;
  margin: 1rem;
`;


export const Header= styled.h1`
  /* clarusway basligi yazan yer */

  color: white;
  font-family: "Girassol", sans-serif;
  font-size: 3rem;
`;



export const StyledForm=styled.form`
// 3 kutunun oldugu form

background-color:aqua;
display: flex;
flex-direction: column;




`;
export const StyledInput=styled.input`
// username giris inputlari

height: 50px;
font-size: 2rem;
width: 250px;
border-radius: 5px;
font-family: "Girassol", sans-serif;
//inputa girilen yaziyi buyuk harf yapar
background-color: rgba(0,0,0,0.6);
border: none;
color: white;
margin: 1rem;
text-indent: 20px; // inputa giris yapildiginda biraz icerden baslasin diye kullanilir
`;


export const StyledButton = styled.button`
  /* Login butonu */
  font-size: 2rem;
  font-family: "Girassol", sans-serif;
  background-color: rgba(0,0,0,0.6);
  color: white;
  border: none;
  cursor: pointer;
  margin: 1rem;
`;


























