window.cipher = {
  encode: (offset,string) => {

    let newMessage="";

      for (let i = 0; i < string.length; i++) {
        if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <=90) {
          let numberAscii =((string[i].charCodeAt())-65+offset)%26+65;
           //alert(numberAscii);
          let lettercipher =String.fromCharCode(numberAscii);
          // alert(lettercipher);
          newMessage = newMessage+lettercipher;
        } else {
          newMessage = newMessage+string[i];
        }

      }
      return newMessage;
      //alert(newMessage);
      //console.log(newMessage);
    },
  decode: (offset,string) => {

    let newMessage="";

      for (let i = 0; i < string.length; i++) {
    if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <=90) {
        let numberAscii =((string[i].charCodeAt())+65-offset)%26+65;
         //alert(numberAscii);
        let lettercipher =String.fromCharCode(numberAscii);
        // alert(lettercipher);
        newMessage = newMessage+lettercipher;
      } else {
        newMessage = newMessage+string[i];
      }

    }
      return newMessage;
}
}
