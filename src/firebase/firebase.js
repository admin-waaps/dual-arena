import { initializeApp } from 'firebase/app';
import { getMessaging, getToken} from 'firebase/messaging';

// Replace this firebaseConfig object with the congurations for the project you created on your firebase console. 
var firebaseConfig = {
    projectId: "dualarena-a9443",
    //... 
};
initializeApp(firebaseConfig);



//...
const messaging = getMessaging();

export const requestForToken = async () => {
    return getToken(messaging, { vapidKey: "BLcd6eep3ngl0bf_4tdx0mRc-a_eSvSJQf2E0sA2oLTyTKD0zfFKfl0qAE21Y-wc-02V2k0x3LotCmhr7tZ1dEc" })
      .then((currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  };