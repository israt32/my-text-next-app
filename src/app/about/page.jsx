import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <h2>this is about page</h2>
      <Image src='/don.png' alt='don pic' width='500' height='300'></Image>
    </div>
  );
};

export default AboutPage;