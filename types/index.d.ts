export declare class UndakuSdk {
    private instance;
    private token;
    private baseUrl;
    private appId?;
    private appSecret?;
    private username?;
    private password?;
    constructor(instance: string, token?: string, baseUrl?: string, appId?: string | undefined, appSecret?: string | undefined, username?: string | undefined, password?: string | undefined);
    private fetchToken;
    getToken(): Promise<any>;
    login(): Promise<void>;
    private getHeaders;
    search(form: string, query: any, reportId?: string): Promise<SdkResponse<any[]>>;
    createRecord(form: string, record: Record): Promise<SdkResponse<string>>;
    getRecord(form: string, recordId: string): Promise<SdkResponse<Record>>;
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
        error: null;
    } | {
        error: unknown;
        data?: never;
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
//# sourceMappingURL=index.d.ts.map