[[libraryNameWithSpacesAndUpperCases]](../README.md) / UndakuSdk

# Class: UndakuSdk

## Table of contents

### Constructors

- [constructor](UndakuSdk.md#constructor)

### Methods

- [checkIfRecordExist](UndakuSdk.md#checkifrecordexist)
- [createRecord](UndakuSdk.md#createrecord)
- [deleteRecord](UndakuSdk.md#deleterecord)
- [fetchSubInstances](UndakuSdk.md#fetchsubinstances)
- [fetchToken](UndakuSdk.md#fetchtoken)
- [getHeaders](UndakuSdk.md#getheaders)
- [getRecord](UndakuSdk.md#getrecord)
- [getRecordCount](UndakuSdk.md#getrecordcount)
- [getReferences](UndakuSdk.md#getreferences)
- [getToken](UndakuSdk.md#gettoken)
- [login](UndakuSdk.md#login)
- [search](UndakuSdk.md#search)
- [serializeToQueryString](UndakuSdk.md#serializetoquerystring)
- [updateRecord](UndakuSdk.md#updaterecord)

## Constructors

### constructor

• **new UndakuSdk**(`instance`, `token?`, `baseUrl?`, `appId?`, `appSecret?`, `username?`, `password?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `instance` | `string` | `undefined` |
| `token` | `string` | `''` |
| `baseUrl` | `string` | `'http://api/undaku.com'` |
| `appId?` | `string` | `undefined` |
| `appSecret?` | `string` | `undefined` |
| `username?` | `string` | `undefined` |
| `password?` | `string` | `undefined` |

## Methods

### checkIfRecordExist

▸ **checkIfRecordExist**(`form`, `query`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `form` | `string` |
| `query` | `any` |

#### Returns

`Promise`<`number`\>

___

### createRecord

▸ **createRecord**(`form`, `record`): `Promise`<[`SdkResponse`](../interfaces/SdkResponse.md)<`string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `form` | `string` |
| `record` | [`Record`](../interfaces/Record.md) |

#### Returns

`Promise`<[`SdkResponse`](../interfaces/SdkResponse.md)<`string`\>\>

___

### deleteRecord

▸ **deleteRecord**(`form`, `recordId`): `Promise`<[`SdkResponse`](../interfaces/SdkResponse.md)<[`Record`](../interfaces/Record.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `form` | `string` |
| `recordId` | `string` |

#### Returns

`Promise`<[`SdkResponse`](../interfaces/SdkResponse.md)<[`Record`](../interfaces/Record.md)\>\>

___

### fetchSubInstances

▸ **fetchSubInstances**(): `Promise`<[`SdkResponse`](../interfaces/SdkResponse.md)<[`SubInstancesInfoModel`](../interfaces/SubInstancesInfoModel.md)[]\>\>

#### Returns

`Promise`<[`SdkResponse`](../interfaces/SdkResponse.md)<[`SubInstancesInfoModel`](../interfaces/SubInstancesInfoModel.md)[]\>\>

___

### fetchToken

▸ `Private` **fetchToken**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

___

### getHeaders

▸ `Private` **getHeaders**(`customHeaders`, `skipToken?`, `instance?`, `token?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `customHeaders` | `any` | `undefined` |
| `skipToken` | `boolean` | `false` |
| `instance?` | `string` | `undefined` |
| `token?` | `string` | `undefined` |

#### Returns

`any`

___

### getRecord

▸ **getRecord**(`form`, `recordId`): `Promise`<[`SdkResponse`](../interfaces/SdkResponse.md)<[`Record`](../interfaces/Record.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `form` | `string` |
| `recordId` | `string` |

#### Returns

`Promise`<[`SdkResponse`](../interfaces/SdkResponse.md)<[`Record`](../interfaces/Record.md)\>\>

___

### getRecordCount

▸ **getRecordCount**(`form`, `query`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `form` | `string` |
| `query` | `any` |

#### Returns

`Promise`<`number`\>

___

### getReferences

▸ **getReferences**(`query`): `Promise`<{ `data`: `any` ; `error`: `any` = null } \| { `data`: `undefined` ; `error`: `unknown`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Object` |
| `query.childFields?` | `string`[] |
| `query.fieldAlias` | `string` |
| `query.formAlias` | `string` |
| `query.page` | `number` |
| `query.pageSize` | `number` |
| `query.recordId` | `string` |

#### Returns

`Promise`<{ `data`: `any` ; `error`: `any` = null } \| { `data`: `undefined` ; `error`: `unknown`  }\>

___

### getToken

▸ **getToken**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

___

### login

▸ **login**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

___

### search

▸ **search**(`form`, `query`, `reportId?`): `Promise`<[`SdkResponse`](../interfaces/SdkResponse.md)<`any`[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `form` | `string` |
| `query` | `any` |
| `reportId?` | `string` |

#### Returns

`Promise`<[`SdkResponse`](../interfaces/SdkResponse.md)<`any`[]\>\>

___

### serializeToQueryString

▸ **serializeToQueryString**(`obj`, `prefix?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `prefix?` | `string` |

#### Returns

`string`

___

### updateRecord

▸ **updateRecord**(`form`, `record`): `Promise`<[`SdkResponse`](../interfaces/SdkResponse.md)<`string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `form` | `string` |
| `record` | [`Record`](../interfaces/Record.md) |

#### Returns

`Promise`<[`SdkResponse`](../interfaces/SdkResponse.md)<`string`\>\>
