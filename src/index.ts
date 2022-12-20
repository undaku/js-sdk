import axios from 'axios';

export class UndakuSdk {
  constructor(
    private instance: string,
    private token: string = '',
    private baseUrl: string = 'http://api/undaku.com',
    private appId?: string,
    private appSecret?: string,
    private username?: string,
    private password?: string,
  ) {}
  private async fetchToken() {
    let response;
    try {
      const url = `/api/session`;
      response = await axios.get(url, {
        headers: this.getHeaders({}),
        baseURL: this.baseUrl,
        params: { appId: this.appId, appSecret: this.appSecret },
      });
      return (
        (response.data &&
          response.data.data &&
          response.data.data.freshToken) ||
        null
      );
    } catch (error) {
      return null;
    }
  }

  async getToken() {
    try {
      const response = await axios.post(
        `/api/login`,
        {
          username: this.username,
          password: this.password,
          instance: this.instance,
        },
        {
          headers: this.getHeaders({}, true),
          baseURL: this.baseUrl,
        },
      );
      return response.data.createdId;
    } catch (error) {
      return null;
    }
  }

  async login() {
    if (this.appId && this.appSecret) {
      this.token = await this.fetchToken();
    } else {
      this.token = await this.getToken();
    }
  }

  private getHeaders(
    customHeaders: any,
    skipToken = false,
    instance?: string,
    token?: string,
  ) {
    token = token || this.token;
    const reqSource = 'Runtime';
    const defaultHeader: any = { 'request-source': reqSource };
    defaultHeader['un-origin'] = instance || this.instance;
    const headers =
      skipToken || !token || token.length === 0
        ? { ...defaultHeader, ...customHeaders }
        : { ...defaultHeader, Authorization: `bearer ${token}` };
    return headers;
  }

  async search(
    form: string,
    query: any,
    reportId?: string,
  ): Promise<SdkResponse<any[]>> {
    let response = null;
    const page = query.page || 1;
    const pageSize = query.pageSize || 1000;
    let records: any[] = [];
    try {
      const url = `/api/search/${form}`;
      response = await axios.post(url, query, {
        headers: this.getHeaders({}),
        baseURL: this.baseUrl,
      });
      const searchId = response.data.createdId;
      const searchPayload: {
        page: number;
        reportId?: string;
        form: string;
        searchId: string;
        pageSize: number;
        splitColumns: boolean;
      } = {
        page,
        pageSize,
        reportId,
        form,
        searchId,
        splitColumns: true,
      } as any;
      const recordsResponse = await axios.get(`/api/search`, {
        headers: this.getHeaders({}),
        baseURL: this.baseUrl,
        params: searchPayload,
      });
      records =
        (recordsResponse.data &&
          recordsResponse.data.data &&
          recordsResponse.data.data.records) ||
        [];
      return { data: records, error: null };
    } catch (ex) {
      return { data: [], error: ex };
    }
  }

  async createRecord(
    form: string,
    record: Record,
  ): Promise<SdkResponse<string>> {
    let response = null;
    try {
      const url = `/api/record/${form}`;
      response = await axios.post(url, record, {
        headers: this.getHeaders({}),
        baseURL: this.baseUrl,
      });
      return { data: response.data.createdId, error: null };
    } catch (error) {
      return { error };
    }
  }

  async getRecord(
    form: string,
    recordId: string,
  ): Promise<SdkResponse<Record>> {
    let response = null;
    try {
      const url = `/api/record/${form}/${recordId}`;
      response = await axios.get(url, {
        headers: this.getHeaders({}),
        baseURL: this.baseUrl,
      });
      return { data: response.data, error: null };
    } catch (error) {
      return { error };
    }
  }

  async deleteRecord(
    form: string,
    recordId: string,
  ): Promise<SdkResponse<Record>> {
    let response = null;
    try {
      const url = `/api/record/${form}/${recordId}`;
      response = await axios.delete(url, {
        headers: this.getHeaders({}),
        baseURL: this.baseUrl,
      });
      return { data: response.data, error: null };
    } catch (error) {
      return { error };
    }
  }

  async getRecordCount(form: string, query: any): Promise<number> {
    //-1=unknownDueToError
    const records = await this.search(form, query);
    return records.error ? -1 : (records.data && records.data.length) || 0;
  }

  async checkIfRecordExist(form: string, query: any): Promise<number> {
    //1=exist,0=notexist,-1=unknownDueToError
    const recordLength = await this.getRecordCount(form, query);
    return recordLength > 0 ? 1 : recordLength < 0 ? -1 : 1;
  }

  async updateRecord(
    form: string,
    record: Record,
  ): Promise<SdkResponse<string>> {
    let response = null;
    if (record.referenceId) delete record.referenceId;
    if (!record || !record.id) {
      return { error: 'Record Id Is Missing' };
    }
    try {
      const url = `/api/record/${form}/${record.id}`;
      response = await axios.put(url, record, {
        headers: this.getHeaders({}),
        baseURL: this.baseUrl,
      });
      return { data: response.data.createdId, error: null };
    } catch (error) {
      return { error };
    }
  }

  serializeToQueryString(obj: any, prefix?: string): string {
    const str = [];
    let p;
    for (p in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(p)) {
        const k = prefix ? prefix + '[' + p + ']' : p;
        const v = obj[p];
        str.push(
          v !== null && typeof v === 'object'
            ? this.serializeToQueryString(v, k)
            : encodeURIComponent(k) + '=' + encodeURIComponent(v),
        );
      }
    }
    return str.join('&');
  }

  async getReferences(query: {
    formAlias: string;
    recordId: string;
    fieldAlias: string;
    page: number;
    pageSize: number;
    childFields?: string[];
  }) {
    let response = null;
    const paramString = this.serializeToQueryString(query);
    try {
      const url = `/api/references?${paramString}`;
      response = await axios.get(url, {
        headers: this.getHeaders({}),
        baseURL: this.baseUrl,
      });
      return { data: response.data && response.data.data.records, error: null };
    } catch (error) {
      return { error };
    }
  }

  async fetchSubInstances(): Promise<SdkResponse<SubInstancesInfoModel[]>> {
    let response = null;
    try {
      const url = `/api/sub/${this.instance}`;
      response = await axios.get(url, {
        headers: this.getHeaders({}),
        baseURL: this.baseUrl,
      });
      return { data: (response.data && response.data.data) || [], error: null };
    } catch (error) {
      return { error };
    }
  }
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
  // Can Add names here
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

export enum PermissionLevel {
  None = 'None',
  Read = 'Read',
  Write = 'Write',
  Full = 'Full',
}
export enum ObjectPermissionSource {
  RecordPermissionField = 'RecordPermissionField',
  Form = 'Form',
  Action = 'Action',
  Default = 'Default',
}

export interface SubInstancesInfoModel {
  instance: string;
  appId: string;
  appSecret: string;
}
