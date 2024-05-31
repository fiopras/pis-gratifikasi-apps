// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   // Url Live
  // api_url: 'https://ptmpisappdev01.pertamina.com/pis-gratifikasi-mobile/api',
  // Url Local
  api_url: 'https://localhost:7036/api',
  api_token_identifier: 'access_token',
  name_identifier : 'name_iden',
  nopek_identifier : 'nopek_iden',

  recaptcha: {
    siteKey: "6LfgzkopAAAAAPpaFUqcO-kJutd0gndjXgtEd-kv"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
