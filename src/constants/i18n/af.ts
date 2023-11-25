import { LanguageKeys } from '~/constants/i18n/languages';

export default <LanguageKeys>{
  text: {
    settingsTitle: 'Stellings',
    homeTitle: 'Tuisblad',
    profileTitle: 'Profiel',
    themeLabel: 'Tema',
    WelcomeLabel: 'RacePro',
    WelcomeTag: 'Jou Perfekte Wedloopmaat',
  },
  auth: {
    // labels
    confirmLabel: 'Bevestig Wagwoord',
    usernameLabel: 'E-posadres',
    enterEmail: 'Verskaf e-posadres',
    enterPassword: 'Verskaf wagwoord',
    forgotPasswordLabel: 'Wagwoord vergeet',
    loginLabel: 'Teken in',
    logoutLabel: 'Teken uit',
    passwordLabel: 'Wagwoord',
    registerLabel: 'Registreer',
    resetCodeLabel: 'Wagwoord Herstel Kode',
    resetLabel: 'Herstel Wagwoord',
    resetMessage: 'Sien e-pos boodskap om wagwoord herstel te voltooi.',
    // validation
    confirmPasswordIsRequired: 'Bevestig die wagwoord.',
    emailIsRequired: 'E-posadres word vereis.',
    mustBeValidEmail: 'E-posadres moet geldige e-posformaat wees.',
    passwordIsRequired: 'Wagwoord word vereis.',
    passwordFormat: 'Wagwoord vereis minimum 8 karakters met hoofletters, nommers en simbole.',
    passwordsMustMatch: 'Wagwoorde moet ooreenstem.',
    // error checking
    'auth/credential-already-in-use': "Die e-pos is reeds in gebruik. Meld aan of registreer met 'n unieke e-pos.",
    'auth/email-already-in-use': "Die e-pos is reeds in gebruik. Meld aan of registreer met 'n unieke e-pos.",
    'auth/invalid-email': 'Die e-pos en/of wagwoord is nie korrek nie.',
    'auth/invalid-login-credentials': 'Die e-pos en/of wagwoord is nie korrek nie.',
    'auth/missing-password': 'Wagwoord nie gespesifiseer nie.',
    'auth/unverified-email': 'Die e-pos is nie geverifieer nie.',
    'auth/weak-password': "Die gebruikte wagwoord is nie veilig nie. Gebruik 'n veiliger wagwoord.",
    'login-success': 'Inteken suksesvol',
    'register-success': 'Registrasie suksesvol',
    'reset-success': 'Wagwoord herstel suksesvol',
    default: 'Inteken het misluk. Probeer asseblief weer.',
  },
};
