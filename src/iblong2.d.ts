interface structRegistration {
    OrganisationName: string;
    RegisterUserName: string;
    Password: string;
    Email: string;
    CountryID: number;
    TermsOfUse: boolean;
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
