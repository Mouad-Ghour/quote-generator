import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState } from 'react';

//Components
import { BackgroundImage1, BackgroundImage2, FooterCon, FooterLink, GenerateQuoteButtonText, GradientBackgroundCon, QuoteGeneratorButton, QuoteGeneratorInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle, QuoteGenratorCon } from '@/Components/QuoteGenerator/QuoteGenerator'


//Images
import Clouds1 from "../assets/cloud_1.png"
import Clouds2 from "../assets/cloud_2.png"


//exports

export default function Home() {

  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0); 

  return (
    <>
      <Head>
        <title>Quotes Generator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Quotes Generator Modal Pop-up*/}
      {/* {<QuoteGeneratorModal
      />} */}

      {/*Quotes Generator*/}
      <QuoteGenratorCon>

        <QuoteGeneratorInnerCon>

          <QuoteGeneratorTitle>

            Quotes Generator

          </QuoteGeneratorTitle>

          <QuoteGeneratorSubTitle>

              <FooterLink 
              href="https://zenquotes.io/"
              target='_blank'
              rel="noopener noreferrer"
              > ZenQuotes API 
              </FooterLink>

          </QuoteGeneratorSubTitle>

          <QuoteGeneratorButton>

            <GenerateQuoteButtonText onClick={null}>

              Generate Quote

            </GenerateQuoteButtonText>

          </QuoteGeneratorButton>

        </QuoteGeneratorInnerCon>

      </QuoteGenratorCon>



      {/*Background*/}
      <GradientBackgroundCon> 

        {/*Bakcground Images*/}
        <BackgroundImage1
          src={Clouds1}
          height="300"
          alt="CloudyBakcgournd1"
          />

        <BackgroundImage2
          src={Clouds2}
          height="300"
          alt="CloudyBakcgournd2"
          />

        {/*Footer*/}
          <FooterCon>
            <>
              Quotes Generated: {numberOfQuotes}
              <br/>
              Developed with next by  &nbsp; 
              <FooterLink
                href="https://www.linkedin.com/in/mouadghourdou/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
               @MouadGh
              </FooterLink>

            </>
          </FooterCon>

      </GradientBackgroundCon>

    </>
    )
}