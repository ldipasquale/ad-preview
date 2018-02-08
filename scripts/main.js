var ads = '{{ads}}'

/*
var ads = [, {
  width: 768,
  height: 1024,
  tag: "%3Cmeta%20charset%3D'UTF-8'%3E%3Cmeta%20name%3D'viewport'%20content%3D'width%3Ddevice-width%2C%20initial-scale%3D1.0%2C%20maximum-scale%3D1.0%2C%20user-scalable%3D0'%3E%3Cstyle%3Ebody%7Bmargin%3A0%3Bpadding%3A0%3B-webkit-font-smoothing%3Aantialiased%3B-moz-osx-font-smoothing%3Agrayscale%3B-webkit-text-size-adjust%3A100%25%3B-o-text-size-adjust%3A100%25%3B-ms-text-size-adjust%3A100%25%3B-moz-text-size-adjust%3A100%25%3Btext-size-adjust%3A100%25%7D.ad%7Bdisplay%3Ablock%3Bposition%3Aabsolute%3Btext-align%3Acenter%3Bwidth%3A100%25%3Bheight%3A100%25%3Bmin-width%3A768px%3Bmin-height%3A1024px%3Boverflow%3Ahidden%3Btext-decoration%3Anone%20!important%3Bfont-family%3A'Helvetica%20Neue'%2Csans-serif%3Bfont-size%3A0%3Bbackground%3Ano-repeat%20center%3Bbackground-size%3Acover%7D.icon%7Bbackground-size%3Acover%3Bdisplay%3Ainline-block%3Bmargin-top%3A60px%3Bwidth%3A64px%3Bheight%3A64px%3Bborder-radius%3A10px%7Dh1%7Bmargin%3A0%3Bmargin-top%3A12px%3Bcolor%3A%23000%3Bfont-size%3A32px%7D.advertiser-container%7Bposition%3Aabsolute%3Bleft%3A0%3Bright%3A0%3Btop%3A50px%3Bwidth%3A100%25%3Bheight%3A125px%7D.advertiser%7Bdisplay%3Ainline-block%3Bbackground%3A%23fff%3Bwidth%3A248px%3Bheight%3A248px%3Bborder-radius%3A100%25%7D.button-container%7Bposition%3Aabsolute%3Bleft%3A10px%3Bright%3A10px%3Bbottom%3A30px%3Bpadding%3A48px%3Bbackground-color%3A%23fff%3Bborder-radius%3A15px%7D.button-container%20p%7Bmargin%3A0%3Bfont-size%3A40px%3Bline-height%3A1.3em%3Bletter-spacing%3A0.1px%3Bmargin-bottom%3A48px%3Bcolor%3A%23000%3Bfont-weight%3A200%7Dbutton%7Bpadding%3A13px%2045px%3Bbackground%3A%234a90e2%3Bfont-size%3A36px%3Bborder%3A0%3Boutline%3A0%3Bborder-radius%3A0%3Bfont-weight%3A200%3Bcolor%3A%23fff%3Btext-transform%3Auppercase%3Bletter-spacing%3A0.5px%3B%7D%3C%2Fstyle%3E%3Ca%20class%3D'ad'%20data-field%3D'media'%20style%3D'background-image%3Aurl(https%3A%2F%2Fs3.amazonaws.com%2Fcreatives.jampp.com%2Fassets%2F285%2F1200x627_6MfMZTpCc4NqcQ8qd1cwUA.jpg)'%20href%3D'%7Bclick_url%7D'%3E%3Cdiv%20class%3D'advertiser-container'%3E%3Cdiv%20class%3D'advertiser'%20data-field%3D'advertiserContainer'%3E%3Cdiv%20class%3D'icon'%20style%3D'background-image%3Aurl(https%3A%2F%2Fs3.amazonaws.com%2Fcreatives.jampp.com%2FaXrvdRCnmGNmAbBBwGst9w.png)'%3E%3C%2Fdiv%3E%3Ch1%20data-field%3D'appName'%3EApp%20Name%3C%2Fh1%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cdiv%20class%3D'button-container'%20data-field%3D'contentContainer'%3E%3Cp%20data-field%3D'headline'%3EHeaasd%20asda%20asdf%3C%2Fp%3E%3Cbutton%20data-field%3D'callToAction'%3EOrder%20Now%3C%2Fbutton%3E%3C%2Fdiv%3E%3C%2Fa%3E",
}, {
  width: 320,
  height: 50,
  tag: "%3Cmeta%20charset%3D'UTF-8'%3E%3Cmeta%20name%3D'viewport'%20content%3D'width%3Ddevice-width%2C%20initial-scale%3D1.0%2C%20maximum-scale%3D1.0%2C%20user-scalable%3D0'%3E%3Cstyle%3Ebody%7Bmargin%3A0%3Bpadding%3A0%3B-webkit-font-smoothing%3Aantialiased%3B-moz-osx-font-smoothing%3Agrayscale%3B-webkit-text-size-adjust%3A100%25%3B-o-text-size-adjust%3A100%25%3B-ms-text-size-adjust%3A100%25%3B-moz-text-size-adjust%3A100%25%3Btext-size-adjust%3A100%25%7D%40keyframes%20slidein_out%7Bfrom%7Bopacity%3A1%7Dto%7Bopacity%3A0%7D%7D%40keyframes%20slidein_in%7Bfrom%7Bopacity%3A0%7Dto%7Bopacity%3A1%7D%7D.ad%7Bdisplay%3Ablock%3Bposition%3Arelative%3Btext-align%3Acenter%3Bwidth%3A100%25%3Bheight%3A50px%3Bmin-width%3A320px%3Boverflow%3Ahidden%3Btext-decoration%3Anone%20!important%3Bfont-family%3A'Helvetica%20Neue'%2Csans-serif%3Bfont-size%3A0%3Bbackground%3Ano-repeat%20center%3Bbackground-size%3Acover%7D.advertiser-container%7Bposition%3Aabsolute%3Bleft%3A5px%3Btop%3A-10px%3Bbottom%3A-10px%3Bdisplay%3Aflex%3Bflex-direction%3Acolumn%3Bjustify-content%3Acenter%3Balign-items%3Acenter%3Bbackground%3A%23fff%3Bwidth%3A70px%3Bheight%3A70px%3Bborder-radius%3A100%25%7D.icon%7Bbackground-size%3Acover%3Bdisplay%3Ainline-block%3Bwidth%3A18px%3Bheight%3A18px%3Bborder-radius%3A5px%7Dh1%7Bmargin%3A0%3Bmargin-top%3A4px%3Bcolor%3A%23000%3Bletter-spacing%3A-0.1px%3Bfont-size%3A11px%7D.button-container%7Bpadding%3A5px%3Bposition%3Aabsolute%3Bwidth%3Aauto%3Btop%3A0%3Bleft%3A40%25%3Bright%3A0%3Bbottom%3A0%3Bbackground-color%3A%23fff%3Btext-align%3Acenter%3Bborder-radius%3A10px%3Bborder-top-right-radius%3A0%3Bborder-bottom-right-radius%3A0%7D.frame%7Bposition%3Aabsolute%3Btop%3A0%3Bleft%3A0%3Bright%3A0%3Bbottom%3A0%3Bdisplay%3Aflex%3Bjustify-content%3Acenter%3Balign-items%3Acenter%7D.frame-1%7Banimation-name%3Aslidein_out%3Banimation-delay%3A2.5s%3Banimation-duration%3A1s%3Banimation-fill-mode%3Aforwards%3B-webkit-animation-delay%3A%201s%3B-webkit-animation-name%3Aslidein_out%3B-webkit-animation-duration%3A1s%3B-webkit-animation-fill-mode%3Aforwards%7Dp%7Bfont-size%3A11px%3Bline-height%3A1.3em%3Bcolor%3A%23000%3Bfont-weight%3A200%7D.frame-2%7Bopacity%3A0%3Banimation-name%3Aslidein_in%3Banimation-delay%3A3s%3Banimation-duration%3A1s%3Banimation-fill-mode%3Aforwards%3B-webkit-animation-delay%3A%201.5s%3B-webkit-animation-name%3Aslidein_in%3B-webkit-animation-duration%3A1s%3B-webkit-animation-fill-mode%3Aforwards%7Dbutton%7Bpadding%3A5px%2030px%3Bbackground%3A%234a90e2%3Bfont-size%3A10px%3Bletter-spacing%3A0%3Bborder%3A0%3Boutline%3A0%3Bborder-radius%3A0%3Bfont-weight%3A200%3Bcolor%3A%23fff%3Btext-transform%3Auppercase%7D%3C%2Fstyle%3E%3Ca%20class%3D'ad'%20data-field%3D'media'%20style%3D'background-image%3Aurl(https%3A%2F%2Fs3.amazonaws.com%2Fcreatives.jampp.com%2Fassets%2F285%2F1200x627_6MfMZTpCc4NqcQ8qd1cwUA.jpg)'%20href%3D'%7Bclick_url%7D'%3E%3Cdiv%20class%3D'advertiser-container'%20data-field%3D'advertiserContainer'%3E%3Cdiv%20class%3D'icon'%20style%3D'background-image%3Aurl(https%3A%2F%2Fs3.amazonaws.com%2Fcreatives.jampp.com%2FaXrvdRCnmGNmAbBBwGst9w.png)'%3E%3C%2Fdiv%3E%3Ch1%20data-field%3D'appName'%3EApp%20Name%3C%2Fh1%3E%3C%2Fdiv%3E%3Cdiv%20class%3D'button-container'%20data-field%3D'contentContainer'%3E%3Cdiv%20class%3D'frame%20frame-1'%3E%3Cp%20data-field%3D'headline'%3EHeaasd%20asda%20asdf%3C%2Fp%3E%3C%2Fdiv%3E%3Cdiv%20class%3D'frame%20frame-2'%3E%3Cbutton%20data-field%3D'callToAction'%3EOrder%20Now%3C%2Fbutton%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fa%3E",
}, {
  width: 320,
  height: 480,
  tag: "%3Cmeta%20charset%3D'UTF-8'%3E%3Cmeta%20name%3D'viewport'%20content%3D'width%3Ddevice-width%2C%20initial-scale%3D1.0%2C%20maximum-scale%3D1.0%2C%20user-scalable%3D0'%3E%3Cstyle%3Ebody%7Bmargin%3A0%3Bpadding%3A0%3B-webkit-font-smoothing%3Aantialiased%3B-moz-osx-font-smoothing%3Agrayscale%3B-webkit-text-size-adjust%3A100%25%3B-o-text-size-adjust%3A100%25%3B-ms-text-size-adjust%3A100%25%3B-moz-text-size-adjust%3A100%25%3Btext-size-adjust%3A100%25%7D.ad%7Bdisplay%3Ablock%3Bposition%3Aabsolute%3Btext-align%3Acenter%3Bwidth%3A100%25%3Bheight%3A100%25%3Bmin-width%3A320px%3Bmin-height%3A480px%3Boverflow%3Ahidden%3Btext-decoration%3Anone%20!important%3Bfont-family%3A'Helvetica%20Neue'%2Csans-serif%3Bfont-size%3A0%3Bbackground%3Ano-repeat%20center%3Bbackground-size%3Acover%7D.icon%7Bbackground-size%3Acover%3Bdisplay%3Ainline-block%3Bmargin-top%3A27px%3Bwidth%3A30px%3Bheight%3A30px%3Bborder-radius%3A5px%7Dh1%7Bmargin%3A0%3Bmargin-top%3A12px%3Bcolor%3A%23000%3Bfont-size%3A18px%7D.advertiser-container%7Bposition%3Aabsolute%3Bleft%3A0%3Bright%3A0%3Btop%3A50px%3Bwidth%3A100%25%3Bheight%3A125px%7D.advertiser%7Bdisplay%3Ainline-block%3Bbackground%3A%23fff%3Bwidth%3A125px%3Bheight%3A125px%3Bborder-radius%3A100px%7D.button-container%7Bposition%3Aabsolute%3Bleft%3A10px%3Bright%3A10px%3Bbottom%3A10px%3Bpadding%3A24px%3Bbackground-color%3A%23fff%3Bborder-radius%3A15px%7D.button-container%20p%7Bmargin%3A0%3Bfont-size%3A20px%3Bline-height%3A1.3em%3Bletter-spacing%3A0.1px%3Bmargin-bottom%3A24px%3Bcolor%3A%23000%3Bfont-weight%3A200%7Dbutton%7Bpadding%3A13px%2045px%3Bbackground%3A%234a90e2%3Bfont-size%3A18px%3Bborder%3A0%3Boutline%3A0%3Bborder-radius%3A0%3Bfont-weight%3A200%3Bcolor%3A%23fff%3Btext-transform%3Auppercase%7D%3C%2Fstyle%3E%3Ca%20class%3D'ad'%20data-field%3D'media'%20style%3D'background-image%3Aurl(https%3A%2F%2Fs3.amazonaws.com%2Fcreatives.jampp.com%2Fassets%2F285%2F1200x627_6MfMZTpCc4NqcQ8qd1cwUA.jpg)'%20href%3D'%7Bclick_url%7D'%3E%3Cdiv%20class%3D'advertiser-container'%3E%3Cdiv%20class%3D'advertiser'%20data-field%3D'advertiserContainer'%3E%3Cdiv%20class%3D'icon'%20style%3D'background-image%3Aurl(https%3A%2F%2Fs3.amazonaws.com%2Fcreatives.jampp.com%2FaXrvdRCnmGNmAbBBwGst9w.png)'%3E%3C%2Fdiv%3E%3Ch1%20data-field%3D'appName'%3EApp%20Name%3C%2Fh1%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cdiv%20class%3D'button-container'%20data-field%3D'contentContainer'%3E%3Cp%20data-field%3D'headline'%3EHeaasd%20asda%20asdf%3C%2Fp%3E%3Cbutton%20data-field%3D'callToAction'%3EOrder%20Now%3C%2Fbutton%3E%3C%2Fdiv%3E%3C%2Fa%3E",
}, {
  width: 480,
  height: 320,
  tag: "%3Cmeta%20charset%3D'UTF-8'%3E%3Cmeta%20name%3D'viewport'%20content%3D'width%3Ddevice-width%2C%20initial-scale%3D1.0%2C%20maximum-scale%3D1.0%2C%20user-scalable%3D0'%3E%3Cstyle%3Ebody%7Bmargin%3A0%3Bpadding%3A0%3B-webkit-font-smoothing%3Aantialiased%3B-moz-osx-font-smoothing%3Agrayscale%3B-webkit-text-size-adjust%3A100%25%3B-o-text-size-adjust%3A100%25%3B-ms-text-size-adjust%3A100%25%3B-moz-text-size-adjust%3A100%25%3Btext-size-adjust%3A100%25%7D.ad%7Bdisplay%3Ablock%3Bposition%3Aabsolute%3Btext-align%3Acenter%3Bwidth%3A100%25%3Bheight%3A100%25%3Bmin-width%3A480px%3Bmin-height%3A320px%3Boverflow%3Ahidden%3Btext-decoration%3Anone%20!important%3Bfont-family%3A'Helvetica%20Neue'%2Csans-serif%3Bfont-size%3A0%3Bbackground%3Ano-repeat%20center%3Bbackground-size%3Acover%7D.icon%7Bbackground-size%3Acover%3Bdisplay%3Ainline-block%3Bmargin-top%3A27px%3Bwidth%3A30px%3Bheight%3A30px%3Bborder-radius%3A5px%7Dh1%7Bmargin%3A0%3Bmargin-top%3A12px%3Bcolor%3A%23000%3Bfont-size%3A18px%7D.advertiser-container%7Bposition%3Aabsolute%3Bleft%3A0%3Bright%3A0%3Btop%3A10px%3Bwidth%3A100%25%3Bheight%3A125px%7D.advertiser%7Bdisplay%3Ainline-block%3Bbackground%3A%23fff%3Bwidth%3A125px%3Bheight%3A125px%3Bborder-radius%3A100px%7D.button-container%7Bposition%3Aabsolute%3Bmax-width%3A60%25%3Bmargin%3A%200%20auto%3Bleft%3A10px%3Bright%3A10px%3Bbottom%3A10px%3Bpadding%3A24px%3Bbackground-color%3A%23fff%3Bborder-radius%3A15px%7D.button-container%20p%7Bmargin%3A0%3Bfont-size%3A20px%3Bline-height%3A1.3em%3Bletter-spacing%3A0.1px%3Bmargin-bottom%3A24px%3Bcolor%3A%23000%3Bfont-weight%3A200%7Dbutton%7Bpadding%3A13px%2045px%3Bbackground%3A%234a90e2%3Bfont-size%3A18px%3Bborder%3A0%3Boutline%3A0%3Bborder-radius%3A0%3Bfont-weight%3A200%3Bcolor%3A%23fff%3Btext-transform%3Auppercase%7D%3C%2Fstyle%3E%3Ca%20class%3D'ad'%20data-field%3D'media'%20style%3D'background-image%3Aurl(https%3A%2F%2Fs3.amazonaws.com%2Fcreatives.jampp.com%2Fassets%2F285%2F1200x627_6MfMZTpCc4NqcQ8qd1cwUA.jpg)'%20href%3D'%7Bclick_url%7D'%3E%3Cdiv%20class%3D'advertiser-container'%3E%3Cdiv%20class%3D'advertiser'%20data-field%3D'advertiserContainer'%3E%3Cdiv%20class%3D'icon'%20style%3D'background-image%3Aurl(https%3A%2F%2Fs3.amazonaws.com%2Fcreatives.jampp.com%2FaXrvdRCnmGNmAbBBwGst9w.png)'%3E%3C%2Fdiv%3E%3Ch1%20data-field%3D'appName'%3EApp%20Name%3C%2Fh1%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cdiv%20class%3D'button-container'%20data-field%3D'contentContainer'%3E%3Cp%20data-field%3D'headline'%3EHeaasd%20asda%20asdf%3C%2Fp%3E%3Cbutton%20data-field%3D'callToAction'%3EOrder%20Now%3C%2Fbutton%3E%3C%2Fdiv%3E%3C%2Fa%3E",
}, {
  width: 1024,
  height: 768,
  tag: "%3Cmeta%20charset%3D'UTF-8'%3E%3Cmeta%20name%3D'viewport'%20content%3D'width%3Ddevice-width%2C%20initial-scale%3D1.0%2C%20maximum-scale%3D1.0%2C%20user-scalable%3D0'%3E%3Cstyle%3Ebody%7Bmargin%3A0%3Bpadding%3A0%3B-webkit-font-smoothing%3Aantialiased%3B-moz-osx-font-smoothing%3Agrayscale%3B-webkit-text-size-adjust%3A100%25%3B-o-text-size-adjust%3A100%25%3B-ms-text-size-adjust%3A100%25%3B-moz-text-size-adjust%3A100%25%3Btext-size-adjust%3A100%25%7D.ad%7Bdisplay%3Ablock%3Bposition%3Aabsolute%3Btext-align%3Acenter%3Bwidth%3A100%25%3Bheight%3A100%25%3Bmin-width%3A1024px%3Bmin-height%3A768px%3Boverflow%3Ahidden%3Btext-decoration%3Anone%20!important%3Bfont-family%3A'Helvetica%20Neue'%2Csans-serif%3Bfont-size%3A0%3Bbackground%3Ano-repeat%20center%3Bbackground-size%3Acover%7D.icon%7Bbackground-size%3Acover%3Bdisplay%3Ainline-block%3Bmargin-top%3A60px%3Bwidth%3A64px%3Bheight%3A64px%3Bborder-radius%3A10px%7Dh1%7Bmargin%3A0%3Bmargin-top%3A12px%3Bcolor%3A%23000%3Bfont-size%3A32px%7D.advertiser-container%7Bposition%3Aabsolute%3Bleft%3A0%3Bright%3A0%3Btop%3A50px%3Bwidth%3A100%25%3Bheight%3A125px%7D.advertiser%7Bdisplay%3Ainline-block%3Bbackground%3A%23fff%3Bwidth%3A248px%3Bheight%3A248px%3Bborder-radius%3A100%25%7D.button-container%7Bposition%3Aabsolute%3Bmax-width%3A60%25%3Bmargin%3A%200%20auto%3Bleft%3A10px%3Bright%3A10px%3Bbottom%3A30px%3Bpadding%3A48px%3Bbackground-color%3A%23fff%3Bborder-radius%3A15px%7D.button-container%20p%7Bmargin%3A0%3Bfont-size%3A40px%3Bline-height%3A1.3em%3Bletter-spacing%3A0.1px%3Bmargin-bottom%3A48px%3Bcolor%3A%23000%3Bfont-weight%3A200%7Dbutton%7Bpadding%3A13px%2045px%3Bbackground%3A%234a90e2%3Bfont-size%3A36px%3Bborder%3A0%3Boutline%3A0%3Bborder-radius%3A0%3Bfont-weight%3A200%3Bcolor%3A%23fff%3Btext-transform%3Auppercase%3Bletter-spacing%3A0.5px%3B%7D%3C%2Fstyle%3E%3Ca%20class%3D'ad'%20data-field%3D'media'%20style%3D'background-image%3Aurl(https%3A%2F%2Fs3.amazonaws.com%2Fcreatives.jampp.com%2Fassets%2F285%2F1200x627_6MfMZTpCc4NqcQ8qd1cwUA.jpg)'%20href%3D'%7Bclick_url%7D'%3E%3Cdiv%20class%3D'advertiser-container'%3E%3Cdiv%20class%3D'advertiser'%20data-field%3D'advertiserContainer'%3E%3Cdiv%20class%3D'icon'%20style%3D'background-image%3Aurl(https%3A%2F%2Fs3.amazonaws.com%2Fcreatives.jampp.com%2FaXrvdRCnmGNmAbBBwGst9w.png)'%3E%3C%2Fdiv%3E%3Ch1%20data-field%3D'appName'%3EApp%20Name%3C%2Fh1%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cdiv%20class%3D'button-container'%20data-field%3D'contentContainer'%3E%3Cp%20data-field%3D'headline'%3EHeaasd%20asda%20asdf%3C%2Fp%3E%3Cbutton%20data-field%3D'callToAction'%3EOrder%20Now%3C%2Fbutton%3E%3C%2Fdiv%3E%3C%2Fa%3E",
}, {
  width: 728,
  height: 90,
  tag: "%3Cmeta%20charset%3D'UTF-8'%3E%3Cmeta%20name%3D'viewport'%20content%3D'width%3Ddevice-width%2C%20initial-scale%3D1.0%2C%20maximum-scale%3D1.0%2C%20user-scalable%3D0'%3E%3Cstyle%3Ebody%7Bmargin%3A0%3Bpadding%3A0%3B-webkit-font-smoothing%3Aantialiased%3B-moz-osx-font-smoothing%3Agrayscale%3B-webkit-text-size-adjust%3A100%25%3B-o-text-size-adjust%3A100%25%3B-ms-text-size-adjust%3A100%25%3B-moz-text-size-adjust%3A100%25%3Btext-size-adjust%3A100%25%7D.ad%7Bdisplay%3Ablock%3Bposition%3Arelative%3Btext-align%3Acenter%3Bwidth%3A100%25%3Bheight%3A90px%3Bmin-width%3A768px%3Boverflow%3Ahidden%3Btext-decoration%3Anone%20!important%3Bfont-family%3A'Helvetica%20Neue'%2Csans-serif%3Bfont-size%3A0%3Bbackground%3Ano-repeat%20center%3Bbackground-size%3Acover%7D.advertiser-container%7Bposition%3Aabsolute%3Bleft%3A15px%3Btop%3A-15px%3Bbottom%3A-15px%3Bdisplay%3Aflex%3Bflex-direction%3Acolumn%3Bjustify-content%3Acenter%3Balign-items%3Acenter%3Bbackground%3A%23fff%3Bwidth%3A120px%3Bheight%3A120px%3Bborder-radius%3A100%25%7D.icon%7Bbackground-size%3Acover%3Bdisplay%3Ainline-block%3Bwidth%3A36px%3Bheight%3A36px%3Bborder-radius%3A5px%7Dh1%7Bmargin%3A0%3Bmargin-top%3A4px%3Bcolor%3A%23000%3Bletter-spacing%3A-0.1px%3Bfont-size%3A16px%7D.button-container%7Bdisplay%3Aflex%3Bjustify-content%3Acenter%3Balign-items%3Acenter%3Bpadding%3A5px%3Bposition%3Aabsolute%3Bwidth%3Aauto%3Btop%3A0%3Bleft%3A300px%3Bright%3A0%3Bbottom%3A0%3Bbackground-color%3A%23fff%3Btext-align%3Acenter%3Bborder-radius%3A10px%3Bborder-top-right-radius%3A0%3Bborder-bottom-right-radius%3A0%7Dp%7Bflex%3A1%3Bmargin%3A0%3Bfont-size%3A18px%3Bline-height%3A1.3em%3Bcolor%3A%23000%3Bfont-weight%3A200%3Bmargin-right%3A28px%7Dbutton%7Bpadding%3A8px%2030px%3Bbackground%3A%234a90e2%3Bfont-size%3A16px%3Bletter-spacing%3A0%3Bborder%3A0%3Boutline%3A0%3Bborder-radius%3A0%3Bfont-weight%3A200%3Bcolor%3A%23fff%3Btext-transform%3Auppercase%3Bvertical-align%3Amiddle%3Bmargin-right%3A16px%7D%3C%2Fstyle%3E%3Ca%20class%3D'ad'%20data-field%3D'media'%20style%3D'background-image%3Aurl(https%3A%2F%2Fs3.amazonaws.com%2Fcreatives.jampp.com%2Fassets%2F285%2F1200x627_6MfMZTpCc4NqcQ8qd1cwUA.jpg)'%20href%3D'%7Bclick_url%7D'%3E%3Cdiv%20class%3D'advertiser-container'%20data-field%3D'advertiserContainer'%3E%3Cdiv%20class%3D'icon'%20style%3D'background-image%3Aurl(https%3A%2F%2Fs3.amazonaws.com%2Fcreatives.jampp.com%2FaXrvdRCnmGNmAbBBwGst9w.png)'%3E%3C%2Fdiv%3E%3Ch1%20data-field%3D'appName'%3EApp%20Name%3C%2Fh1%3E%3C%2Fdiv%3E%3Cdiv%20class%3D'button-container'%20data-field%3D'contentContainer'%3E%3Cp%20data-field%3D'headline'%3EHeaasd%20asda%20asdf%3C%2Fp%3E%3Cbutton%20data-field%3D'callToAction'%3EOrder%20Now%3C%2Fbutton%3E%3C%2Fdiv%3E%3C%2Fa%3E",
}, {
  width: 300,
  height: 250,
  tag: "%3Cmeta%20charset%3D'UTF-8'%3E%3Cmeta%20name%3D'viewport'%20content%3D'width%3Ddevice-width%2C%20initial-scale%3D1.0%2C%20maximum-scale%3D1.0%2C%20user-scalable%3D0'%3E%3Cstyle%3Ebody%7Bmargin%3A0%3Bpadding%3A0%3B-webkit-font-smoothing%3Aantialiased%3B-moz-osx-font-smoothing%3Agrayscale%3B-webkit-text-size-adjust%3A100%25%3B-o-text-size-adjust%3A100%25%3B-ms-text-size-adjust%3A100%25%3B-moz-text-size-adjust%3A100%25%3Btext-size-adjust%3A100%25%7D.ad%7Bdisplay%3Ablock%3Bposition%3Arelative%3Btext-align%3Acenter%3Bwidth%3A100%25%3Bheight%3A100%25%3Bmin-width%3A300px%3Bmin-height%3A250px%3Boverflow%3Ahidden%3Btext-decoration%3Anone%20!important%3Bfont-family%3A'Helvetica%20Neue'%2Csans-serif%3Bfont-size%3A0%3Bbackground%3Ano-repeat%20center%3Bbackground-size%3Acover%7D.icon%7Bbackground-size%3Acover%3Bdisplay%3Ainline-block%3Bmargin-top%3A14px%3Bwidth%3A24px%3Bheight%3A24px%3Bborder-radius%3A5px%7Dh1%7Bcolor%3A%23000%3Bfont-size%3A12px%3Bmargin%3A0%3Bmargin-top%3A2px%3B%7D.advertiser-container%7Bposition%3Aabsolute%3Bleft%3A0%3Bright%3A0%3Btop%3A10px%3Bwidth%3A100%25%3Bheight%3A74px%7D.advertiser%7Bdisplay%3Ainline-block%3Bbackground%3A%23fff%3Bwidth%3A74px%3Bheight%3A74px%3Bborder-radius%3A100px%7D.button-container%7Bposition%3Aabsolute%3Bleft%3A20px%3Bright%3A20px%3Bbottom%3A10px%3Bpadding%3A16px%3Bbackground-color%3A%23fff%3Bborder-radius%3A15px%7Dp%7Bmargin%3A0%3Bfont-size%3A16px%3Bline-height%3A1.3em%3Bletter-spacing%3A0.1px%3Bmargin-bottom%3A16px%3Bcolor%3A%23000%3Bfont-weight%3A200%7Dbutton%7Bpadding%3A10px%2035px%3Bbackground%3A%234a90e2%3Bfont-size%3A16px%3Bborder%3A0%3Boutline%3A0%3Bborder-radius%3A0%3Bfont-weight%3A200%3Bcolor%3A%23fff%3Btext-transform%3Auppercase%7D%3C%2Fstyle%3E%3Ca%20class%3D'ad'%20data-field%3D'media'%20style%3D'background-image%3Aurl(https%3A%2F%2Fs3.amazonaws.com%2Fcreatives.jampp.com%2Fassets%2F285%2F1200x627_6MfMZTpCc4NqcQ8qd1cwUA.jpg)'%20href%3D'%7Bclick_url%7D'%3E%3Cdiv%20class%3D'advertiser-container'%3E%3Cdiv%20class%3D'advertiser'%20data-field%3D'advertiserContainer'%3E%3Cdiv%20class%3D'icon'%20style%3D'background-image%3Aurl(https%3A%2F%2Fs3.amazonaws.com%2Fcreatives.jampp.com%2FaXrvdRCnmGNmAbBBwGst9w.png)'%3E%3C%2Fdiv%3E%3Ch1%20data-field%3D'appName'%3EApp%20Name%3C%2Fh1%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cdiv%20class%3D'button-container'%20data-field%3D'contentContainer'%3E%3Cp%20data-field%3D'headline'%3EHeaasd%20asda%20asdf%3C%2Fp%3E%3Cbutton%20data-field%3D'callToAction'%3EOrder%20Now%3C%2Fbutton%3E%3C%2Fdiv%3E%3C%2Fa%3E",
}]
*/

var adsHasBeenAppended = false

const getDevice = (width, height) => {
  const orientation = width >= 320 && height >= 320 && width > height
    ? 'landscape'
    : 'portait'

  let shape = 'phone'
  let model = 'nexus5'

  if (width > 480 || height > 480) {
    shape = 'tablet'
    model = 'ipad'
  }

  return { shape, model, orientation }
}

$(document).ready(function() {
  if (!adsHasBeenAppended) {
    adsHasBeenAppended = true

    var deviceTemplate = $('#jampp__Carousel__Slide')

    ads.forEach((ad, adIndex) => {
      // Define adTag and create adNode with its dimensions
      var adTag = `<div>${decodeURIComponent(ad.tag).replace(new RegExp('<style>', 'g'), '<style scoped>')}</div>`

      var adNode = $('<div></div>')
        .addClass('jampp__Ad__Content')
        .addClass(`jampp__Ad__Content--width-${ad.width}`)
        .addClass(`jampp__Ad__Content--height-${ad.height}`)
        .css({
          width: `${ad.width}px`,
          height: `${ad.height}px`,
        })
        .html(adTag)

      // Define device based on the template
      var device = $(deviceTemplate.clone().html())

      const { shape, orientation, model } = getDevice(parseInt(ad.width), parseInt(ad.height))

      // Define its device type (tablet/phone) based on the dimensions
      device
        .find('.jampp__Device')
        .addClass(`jampp__Device--shape-${shape}`)
        .addClass(`jampp__Device--orientation-${orientation}`)
        .addClass(`jampp__Device--shape-${shape}--orientation-${orientation}`)

      // Define its device model based on the dimensions
      device
        .find('.jampp__Device__Model')
        .addClass(`jampp__Device__Model--${model}`)
        .addClass(`jampp__Device__Model--${model}--${orientation}`)

      // Put adNode in the device
      device
        .find('.jampp__Ad')
        .html(adNode)

      // Add device slide to carousel
      $('.jampp__Carousel').append(device)

      // Scope ad style only in this device
      var carouselSlideInserted = $('.jampp__Carousel').children(':last')

      scopeCss(
        carouselSlideInserted.find('.jampp__Ad__Content > div')[0], 
        carouselSlideInserted.find('.jampp__Ad__Content')[0], 
        'adId' + adIndex
      )
    })

    // Initialize carousel
    $('.jampp__Carousel').slick({
      arrows: false,
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,
    })
  }
})
