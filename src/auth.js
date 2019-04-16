import Strategy from 'passport-ldapauth';
import passport from 'passport';

passport.use(new Strategy({
    url:"ldap://ntdz03.dz.azo.autozone.com:389",    
    searchBase:"dc=dz,dc=azo,dc=autozone,dc=com",
    bindDn: "dz",
    usernameField: "visitor",
    passwordField: "visitor123"
}));


