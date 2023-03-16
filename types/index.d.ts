export declare class UndakuSdk {
    private instance;
    private token;
    private baseUrl;
    private appId?;
    private appSecret?;
    private username?;
    private password?;
    constructor(instance: string, token?: string, baseUrl?: string, appId?: string, appSecret?: string, username?: string, password?: string);
    private fetchToken;
    getToken(): Promise<any>;
    login(): Promise<void>;
    private getHeaders;
    search(form: string, query: any, reportId?: string): Promise<SdkResponse<any[]>>;
    createRecord(form: string, record: Record): Promise<SdkResponse<string>>;
    private createReferenceRecords;
    private createReferenceRecord;
    getRecord(form: string, recordId: string): Promise<SdkResponse<Record>>;
    getRecordsByModel(form: string, model: Record): Promise<SdkResponse<Record[]>>;
    deleteRecord(form: string, recordId: string): Promise<SdkResponse<Record>>;
    getRecordCount(form: string, query: any): Promise<number>;
    checkIfRecordExist(form: string, query: any): Promise<number>;
    updateRecord(form: string, record: Record): Promise<SdkResponse<string>>;
    serializeToQueryString(obj: any, prefix?: string): string;
    getReferences(query: {
        formAlias: string;
        recordId: string;
        fieldAlias: string;
        page: number;
        pageSize: number;
        childFields?: string[];
    }): Promise<{
        data: any;
        error: any;
    } | {
        error: unknown;
        data?: undefined;
    }>;
    fetchSubInstances(): Promise<SdkResponse<SubInstancesInfoModel[]>>;
}
export interface SdkResponse<T> {
    data?: T;
    error?: any;
    message?: any;
}
export interface Record {
    id?: string;
    form: string;
    currentLayoutId?: string;
    currentWFNodeId?: string;
    workflowInProgress?: boolean;
    actions?: string[];
    permission?: PermissionLevel;
    referencesToAdd: Reference[];
    referencesToRemove: string[];
    referenceRecordsToAdd?: {
        [fieldAlias: string]: Record[];
    };
    reverseReferenceRecordsToAdd?: {
        [fieldAlias: string]: Record[];
    };
    referenceId?: string;
    [key: string]: any;
}
export interface Reference extends BaseDto {
    referencingFormAlias?: string;
    referencingFieldAlias?: string;
    referencingRecordId?: string;
    referencedFormAlias?: string;
    referencedFieldAlias?: string;
    referencedRecordId?: string;
}
export interface BaseDto {
    id?: string;
    createdBy?: string;
    createdOn?: Date;
    updatedBy?: string;
    updatedOn?: Date;
    isSystemOwned?: boolean;
}
export declare enum PermissionLevel {
    None = "None",
    Read = "Read",
    Write = "Write",
    Full = "Full"
}
export declare enum ObjectPermissionSource {
    RecordPermissionField = "RecordPermissionField",
    Form = "Form",
    Action = "Action",
    Default = "Default"
}
export interface SubInstancesInfoModel {
    instance: string;
    appId: string;
    appSecret: string;
}
export interface KeyValuePair<Tvalue> {
    [key: string]: Tvalue;
}
export interface Record extends KeyValuePair<any> {
    id?: string;
    form: string;
    currentLayoutId?: string;
    currentWFNodeId?: string;
    workflowInProgress?: boolean;
    actions?: string[];
    permission?: PermissionLevel;
    referencesToAdd: Reference[];
    referencesToRemove: string[];
    referenceId?: string;
}
//# sourceMappingURL=index.d.ts.map