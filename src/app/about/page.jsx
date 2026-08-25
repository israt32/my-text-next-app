import Image from 'next/image';
import React from 'react';
import john from '../../assets/images/john.png' 

const AboutPage = () => {
  return (
    <div>
      <h2>this is about page</h2>
      <Image width="500" height='300' src='https://plus.unsplash.com/premium_photo-1787073568269-b308af3135f1' alt='plant pic'></Image>
      <Image src='/don.png' alt='don pic' width='500' height='300'></Image>
      <Image width='500' height='300' src={john} alt='cena vai'></Image>
    </div>
  );
};

export default AboutPage;