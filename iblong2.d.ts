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

interface structIdName {
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

interface structJustAnInt {
    i: number;
}

interface structCountry {
    CountryID: number;
    Name: string;
}


interface structOrganisationMember {
    OrganisationMemberID: number;
    FirstName: string;
    LastName: string;
    Phone1: string;
    Phone2: string;
    Phone3: string;
    StreetAddress1: string;
    StreetAddress2: string;
    Suburb: string;
    Postcode: string;
    State: string;
    CountryID: number;
    EmailAddress: string;
    MemberNumber: string;
    LicenseNumber: string;
    MedicalNotes: string;
    PlayerNumber: string;
    MembershipTypeID: number;
    MembershipPaidTo: string; //date
    InvoicedTo: string;
    BalanceOwing: string;
    Gender: string;
    DateOfBirth: string; //date
    ContactPerson: string;
    Comments: string;
    GroupIDArray: number[];
    Active: boolean;
    Fax: string;
    Title: string;
    StartDate: string; //date
    PhoneName1: string;
    PhoneName2: string;
    PhoneName3: string;
    MiddleName: string;
    MedicareNumber: string;
    Ambulance: string;
    PhotoVideo: string;
    BirthCertificateNumber: string;
    HairColour: string;
    EyeColour: string;
    Volunteer: string;
    Accreditation: string;
    ReceivesMail: boolean;
    //does this member have any membership invoices? Used to enable / disable PaidTo date edit 
    boolMmembershipInvoiceEntered: boolean;
}

// interface structNextMemberNumber {
//     organisationUsesIncrementingMemberNumbers: boolean;
//     memberNumber: number;
// }

interface structMemberListData {
    Members: any[];
    Countries: structCountry[];
    Groups: any[];
    MembershipTypes: any[];
    defaultCountryId: number;
    IncrementMemberNumber: boolean;
    NextMemberNumber: number;
}

interface structGroup {
    GroupID: number;
    Name: string;
}

interface  structMembershipType {
    MembershipTypeID: number;
    Name: string;
    Cost: number;
    Months: number;
}

interface structErrorDetails {
    ErrorID: number;
    ErrorDate: Date;
    Message: string;
    Stack: string;
    UserName: string;
    OrganisationName: string;
}

interface structError {
    boolError: boolean;
    ErrorMessage: string;
}

interface structRegisterMemberFormData {
    sThisSeasonEndDate: string;
    sInvoicedToDate: string;
}

interface structsaveRegisterForSeasonData {
    OrganisationMemberID: number;
    sEndDate: string;
    comment: string;
    sCurrentDate: string;
}

