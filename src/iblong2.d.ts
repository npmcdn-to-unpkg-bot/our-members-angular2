interface structRegistration {
    OrganisationName: string;
    RegisterUserName: string;
    Password: string;
    Email: string;
    CountryID: number;
    TermsOfUse: boolean;
}

interface structLogin {
    UserName: string;
    Password: string;
}

interface  structIdName{
    Id: number;
    name: string;
}

declare module modSharedTypes {
    export interface IHttpParameter {
        name: string,
        value: string
    }
}

interface ITokenresponse {
    access_token: string,
    expires_in: number,
    token_type: string
}
