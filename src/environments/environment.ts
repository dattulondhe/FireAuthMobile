// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAtWP4Au80ByMTKhkaYvRENm1R1ZSHNll0",
    authDomain: "ionictest-ff798.firebaseapp.com",
    databaseURL: "https://ionictest-ff798.firebaseio.com",
    projectId: "ionictest-ff798",
    storageBucket: "ionictest-ff798.appspot.com",
    messagingSenderId: "867856115487",
    appId: "1:867856115487:web:af071a08882f8259f2722a",
    measurementId: "G-8Z1JE20C4M"
  }
};
