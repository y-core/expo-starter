import { LanguageKeys } from '~/constants/i18n/languages';

export default <LanguageKeys>{
  text: {
    settingsTitle: 'Ajustes',
    homeTitle: 'Inicio',
    profileTitle: 'Perfil',
    themeLabel: 'Tema',
    WelcomeLabel: 'RacePro',
    WelcomeTag: 'Tu Compañero de Carreras Perfecto',
  },
  auth: {
    // etiquetas
    confirmLabel: 'Confirmar Contraseña',
    emailLabel: 'Correo Electrónico',
    enterEmail: 'Ingresa tu correo electrónico',
    enterPassword: 'Ingresa tu contraseña',
    forgotPasswordLabel: 'Olvidé la Contraseña',
    loginLabel: 'Iniciar Sesión',
    logoutLabel: 'Cerrar Sesión',
    passwordLabel: 'Contraseña',
    registerLabel: 'Registrarse',
    resetCodeLabel: 'Código de Restablecimiento de Contraseña',
    resetLabel: 'Restablecer Contraseña',
    resetMessage: 'Por favor, revisa tu correo electrónico para completar el restablecimiento de contraseña.',
    // validación
    confirmPasswordIsRequired: 'Se requiere confirmar la contraseña.',
    emailIsRequired: 'Se requiere un correo electrónico.',
    mustBeValidEmail: 'El correo electrónico debe tener un formato válido.',
    passwordIsRequired: 'Se requiere una contraseña.',
    passwordFormat: 'La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, números y símbolos.',
    passwordsMustMatch: 'Las contraseñas deben coincidir.',
    // comprobación de errores
    'auth/credential-already-in-use': 'El correo electrónico ya está en uso. Inicia sesión o regístrate con un correo electrónico único.',
    'auth/email-already-in-use': 'El correo electrónico ya está en uso. Inicia sesión o regístrate con un correo electrónico único.',
    'auth/invalid-email': 'El correo electrónico y/o contraseña utilizados son incorrectos.',
    'auth/invalid-login-credentials': 'El correo electrónico y/o contraseña utilizados son incorrectos.',
    'auth/missing-password': 'Contraseña no especificada.',
    'auth/unverified-email': 'El correo electrónico no está verificado.',
    'auth/weak-password': 'La contraseña utilizada no es segura. Utiliza una contraseña más fuerte.',
    'login-success': 'Inicio de sesión exitoso',
    'register-success': 'Registro exitoso',
    'reset-success': 'Restablecimiento de contraseña exitoso',
    default: 'Intento de inicio de sesión fallido. Por favor, inténtalo de nuevo.',
  },
};
