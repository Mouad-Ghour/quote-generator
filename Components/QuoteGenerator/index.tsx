import React from 'react'

// material ui imports

import { Backdrop, Fade, Modal } from '@mui/material'
import { ModalCircularProgress, QuoteGeneratorModalCon, QuoteGeneratorModalInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle } from './QuoteGenerator';
import ImageBlob from '../animations/imageBlob';
import { ImageBlobCon } from '../animations/AnimationElements';
import AnimatedDownloadButton from '../animations/AnimatedDownloadButton';




interface QuoteGeneratorModalProps {
    open: boolean;
    close: () => void;
    processingQuote: boolean;
    setProcessingQuote: React.Dispatch<React.SetStateAction<boolean>>;
    quoteReceived: String|null;
    setQuoteReceived: React.Dispatch<React.SetStateAction<String|null>>;
}

const style = {
    display: 'flex',
};

const QuoteGeneratorModal = ({
    open, 
    close,
    processingQuote,
    setProcessingQuote,
    quoteReceived,
    setQuoteReceived
}: QuoteGeneratorModalProps) => {

    const wiseDevQuote = "Patience is a virtue, but persistence to the point of success is a blessing.";
    const wiseDevAuthor = "Your Wise Dev";
  return (
    <Modal
        id="QuoteGeneratorModal"
        aria-labelledby="spring-modal-quotegenratormodal"
        aria-describedby="spring-modal-opens-and-closes-quotegenrator"
        open={open}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
    >
        <Fade in={open}>
            <QuoteGeneratorModalCon sx={style}>
                <QuoteGeneratorModalInnerCon>
                    {/* State #1: Processing request of quote + quote state is empty */}

                        {
                            (processingQuote === true && quoteReceived === null) &&
                            <>
                                <ModalCircularProgress
                                    style={{marginTop: "15%"}}
                                    size={"8rem"}
                                    thickness={2.5}
                                />
                                <QuoteGeneratorTitle>
                                    Creating Quote...
                                </QuoteGeneratorTitle>
                                <QuoteGeneratorSubTitle style={{marginTop: "20px"}}>
                                    {wiseDevQuote}
                                    <br></br>
                                    <span style={{fontSize: 26}}>- {wiseDevAuthor}</span>
                                </QuoteGeneratorSubTitle>  
                            </>
                        }



                    {/* State #2: Quote state fulfilled */}
                        {
                            quoteReceived !== null &&
                            
                            <>
                                <QuoteGeneratorTitle style={{marginTop: "10%"}}>
                                    Downloading your Quote!
                                </QuoteGeneratorTitle >
                                <QuoteGeneratorSubTitle style={{marginTop: "20px"}}>
                                    See a preview!
                                </QuoteGeneratorSubTitle>
                                <ImageBlobCon >
                                    <ImageBlob 
                                    />

                                </ImageBlobCon>
                                <AnimatedDownloadButton 
                                />

                            </>
                        }



                </QuoteGeneratorModalInnerCon>
            </QuoteGeneratorModalCon>
        </Fade>

    </Modal>
  )
}

export default QuoteGeneratorModal