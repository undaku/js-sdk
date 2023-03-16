[[libraryNameWithSpacesAndUpperCases]](../README.md) / Record

# Interface: Record

## Hierarchy

- [`KeyValuePair`](KeyValuePair.md)<`any`\>

  ↳ **`Record`**

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [actions](Record.md#actions)
- [currentLayoutId](Record.md#currentlayoutid)
- [currentWFNodeId](Record.md#currentwfnodeid)
- [form](Record.md#form)
- [id](Record.md#id)
- [permission](Record.md#permission)
- [referenceId](Record.md#referenceid)
- [referenceRecordsToAdd](Record.md#referencerecordstoadd)
- [referencesToAdd](Record.md#referencestoadd)
- [referencesToRemove](Record.md#referencestoremove)
- [reverseReferenceRecordsToAdd](Record.md#reversereferencerecordstoadd)
- [workflowInProgress](Record.md#workflowinprogress)

## Properties

### actions

• `Optional` **actions**: `string`[]

#### Defined in

[index.ts:389](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L389)

[index.ts:446](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L446)

___

### currentLayoutId

• `Optional` **currentLayoutId**: `string`

#### Defined in

[index.ts:386](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L386)

[index.ts:443](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L443)

___

### currentWFNodeId

• `Optional` **currentWFNodeId**: `string`

#### Defined in

[index.ts:387](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L387)

[index.ts:444](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L444)

___

### form

• **form**: `string`

#### Defined in

[index.ts:385](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L385)

[index.ts:442](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L442)

___

### id

• `Optional` **id**: `string`

#### Defined in

[index.ts:384](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L384)

[index.ts:441](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L441)

___

### permission

• `Optional` **permission**: [`PermissionLevel`](../enums/PermissionLevel.md)

#### Defined in

[index.ts:390](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L390)

[index.ts:447](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L447)

___

### referenceId

• `Optional` **referenceId**: `string`

#### Defined in

[index.ts:395](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L395)

[index.ts:450](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L450)

___

### referenceRecordsToAdd

• `Optional` **referenceRecordsToAdd**: `Object`

#### Index signature

▪ [fieldAlias: `string`]: [`Record`](Record.md)[]

#### Defined in

[index.ts:393](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L393)

___

### referencesToAdd

• **referencesToAdd**: [`Reference`](Reference.md)[]

#### Defined in

[index.ts:391](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L391)

[index.ts:448](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L448)

___

### referencesToRemove

• **referencesToRemove**: `string`[]

#### Defined in

[index.ts:392](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L392)

[index.ts:449](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L449)

___

### reverseReferenceRecordsToAdd

• `Optional` **reverseReferenceRecordsToAdd**: `Object`

#### Index signature

▪ [fieldAlias: `string`]: [`Record`](Record.md)[]

#### Defined in

[index.ts:394](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L394)

___

### workflowInProgress

• `Optional` **workflowInProgress**: `boolean`

#### Defined in

[index.ts:388](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L388)

[index.ts:445](https://github.com/undaku/js-sdk/blob/08957cb/src/index.ts#L445)
