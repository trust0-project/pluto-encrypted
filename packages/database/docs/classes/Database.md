[pluto-encrypted - v0.0.0](../README.md) / [Exports](../modules.md) / Database

# Class: Database

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

## Implements

- `Pluto`

## Table of contents

### Constructors

- [constructor](Database.md#constructor)

### Properties

- [\_db](Database.md#_db)
- [dbOptions](Database.md#dboptions)

### Accessors

- [db](Database.md#db)

### Methods

- [backup](Database.md#backup)
- [clear](Database.md#clear)
- [fetchCredentialMetadata](Database.md#fetchcredentialmetadata)
- [getAllCredentials](Database.md#getallcredentials)
- [getAllDidPairs](Database.md#getalldidpairs)
- [getAllMediators](Database.md#getallmediators)
- [getAllMessages](Database.md#getallmessages)
- [getAllMessagesByDID](Database.md#getallmessagesbydid)
- [getAllMessagesByFromToDID](Database.md#getallmessagesbyfromtodid)
- [getAllMessagesOfType](Database.md#getallmessagesoftype)
- [getAllMessagesReceived](Database.md#getallmessagesreceived)
- [getAllMessagesReceivedFrom](Database.md#getallmessagesreceivedfrom)
- [getAllMessagesSent](Database.md#getallmessagessent)
- [getAllMessagesSentTo](Database.md#getallmessagessentto)
- [getAllPeerDIDs](Database.md#getallpeerdids)
- [getAllPrismDIDs](Database.md#getallprismdids)
- [getDIDInfoByAlias](Database.md#getdidinfobyalias)
- [getDIDInfoByDID](Database.md#getdidinfobydid)
- [getDIDPrivateKeyByID](Database.md#getdidprivatekeybyid)
- [getDIDPrivateKeysByDID](Database.md#getdidprivatekeysbydid)
- [getLinkSecret](Database.md#getlinksecret)
- [getMessage](Database.md#getmessage)
- [getPairByDID](Database.md#getpairbydid)
- [getPairByName](Database.md#getpairbyname)
- [getPrismDIDKeyPathIndex](Database.md#getprismdidkeypathindex)
- [getPrismLastKeyPathIndex](Database.md#getprismlastkeypathindex)
- [getPrivateKeyFromDB](Database.md#getprivatekeyfromdb)
- [start](Database.md#start)
- [storeCredential](Database.md#storecredential)
- [storeCredentialMetadata](Database.md#storecredentialmetadata)
- [storeDIDPair](Database.md#storedidpair)
- [storeLinkSecret](Database.md#storelinksecret)
- [storeMediator](Database.md#storemediator)
- [storeMessage](Database.md#storemessage)
- [storeMessages](Database.md#storemessages)
- [storePeerDID](Database.md#storepeerdid)
- [storePrismDID](Database.md#storeprismdid)
- [storePrivateKeys](Database.md#storeprivatekeys)
- [createEncrypted](Database.md#createencrypted)

## Constructors

### constructor

• **new Database**(`dbOptions`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbOptions` | `RxDatabaseCreator`\<`any`, `any`\> |

#### Defined in

[index.ts:87](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L87)

## Properties

### \_db

• **\_db**: [`PlutoDatabase`](../modules.md#plutodatabase)

#### Defined in

[index.ts:79](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L79)

___

### dbOptions

• `Private` **dbOptions**: `RxDatabaseCreator`\<`any`, `any`\>

#### Defined in

[index.ts:87](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L87)

## Accessors

### db

• `get` **db**(): [`PlutoDatabase`](../modules.md#plutodatabase)

#### Returns

[`PlutoDatabase`](../modules.md#plutodatabase)

#### Defined in

[index.ts:80](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L80)

## Methods

### backup

▸ **backup**(): `Promise`\<`RxDumpDatabase`\<[`PlutoCollections`](../modules.md#plutocollections)\>\>

#### Returns

`Promise`\<`RxDumpDatabase`\<[`PlutoCollections`](../modules.md#plutocollections)\>\>

#### Defined in

[index.ts:89](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L89)

___

### clear

▸ **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[index.ts:93](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L93)

___

### fetchCredentialMetadata

▸ **fetchCredentialMetadata**(`linkSecretName`): `Promise`\<``null`` \| `CredentialRequestMeta`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecretName` | `string` |

#### Returns

`Promise`\<``null`` \| `CredentialRequestMeta`\>

#### Implementation of

Domain.Pluto.fetchCredentialMetadata

#### Defined in

[index.ts:711](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L711)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<`Credential`[]\>

#### Returns

`Promise`\<`Credential`[]\>

#### Implementation of

Domain.Pluto.getAllCredentials

#### Defined in

[index.ts:669](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L669)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<`DIDPair`[]\>

#### Returns

`Promise`\<`DIDPair`[]\>

#### Implementation of

Domain.Pluto.getAllDidPairs

#### Defined in

[index.ts:321](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L321)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<`Mediator`[]\>

#### Returns

`Promise`\<`Mediator`[]\>

#### Implementation of

Domain.Pluto.getAllMediators

#### Defined in

[index.ts:663](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L663)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessages

#### Defined in

[index.ts:162](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L162)

___

### getAllMessagesByDID

▸ **getAllMessagesByDID**(`did`): `Promise`\<`Message`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesByDID

#### Defined in

[index.ts:487](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L487)

___

### getAllMessagesByFromToDID

▸ **getAllMessagesByFromToDID**(`from`, `to`): `Promise`\<`Message`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `DID` |
| `to` | `DID` |

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesByFromToDID

#### Defined in

[index.ts:596](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L596)

___

### getAllMessagesOfType

▸ **getAllMessagesOfType**(`type`, `relatedWithDID?`): `Promise`\<`Message`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `relatedWithDID?` | `DID` |

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesOfType

#### Defined in

[index.ts:566](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L566)

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceived

#### Defined in

[index.ts:518](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L518)

___

### getAllMessagesReceivedFrom

▸ **getAllMessagesReceivedFrom**(`did`): `Promise`\<`Message`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesReceivedFrom

#### Defined in

[index.ts:549](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L549)

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`\<`Message`[]\>

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSent

#### Defined in

[index.ts:504](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L504)

___

### getAllMessagesSentTo

▸ **getAllMessagesSentTo**(`did`): `Promise`\<`Message`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`\<`Message`[]\>

#### Implementation of

Domain.Pluto.getAllMessagesSentTo

#### Defined in

[index.ts:532](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L532)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<`PeerDID`[]\>

#### Returns

`Promise`\<`PeerDID`[]\>

#### Implementation of

Domain.Pluto.getAllPeerDIDs

#### Defined in

[index.ts:632](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L632)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<`PrismDIDInfo`[]\>

#### Returns

`Promise`\<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getAllPrismDIDs

#### Defined in

[index.ts:409](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L409)

___

### getDIDInfoByAlias

▸ **getDIDInfoByAlias**(`alias`): `Promise`\<`PrismDIDInfo`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `alias` | `string` |

#### Returns

`Promise`\<`PrismDIDInfo`[]\>

#### Implementation of

Domain.Pluto.getDIDInfoByAlias

#### Defined in

[index.ts:466](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L466)

___

### getDIDInfoByDID

▸ **getDIDInfoByDID**(`did`): `Promise`\<``null`` \| `PrismDIDInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`\<``null`` \| `PrismDIDInfo`\>

#### Implementation of

Domain.Pluto.getDIDInfoByDID

#### Defined in

[index.ts:435](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L435)

___

### getDIDPrivateKeyByID

▸ **getDIDPrivateKeyByID**(`id`): `Promise`\<``null`` \| `PrivateKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<``null`` \| `PrivateKey`\>

#### Implementation of

Domain.Pluto.getDIDPrivateKeyByID

#### Defined in

[index.ts:391](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L391)

___

### getDIDPrivateKeysByDID

▸ **getDIDPrivateKeysByDID**(`did`): `Promise`\<`PrivateKey`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`\<`PrivateKey`[]\>

#### Implementation of

Domain.Pluto.getDIDPrivateKeysByDID

#### Defined in

[index.ts:383](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L383)

___

### getLinkSecret

▸ **getLinkSecret**(`linkSecretName?`): `Promise`\<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecretName?` | `string` |

#### Returns

`Promise`\<``null`` \| `string`\>

#### Implementation of

Domain.Pluto.getLinkSecret

#### Defined in

[index.ts:675](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L675)

___

### getMessage

▸ **getMessage**(`id`): `Promise`\<``null`` \| `Message`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<``null`` \| `Message`\>

#### Implementation of

Domain.Pluto.getMessage

#### Defined in

[index.ts:129](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L129)

___

### getPairByDID

▸ **getPairByDID**(`did`): `Promise`\<``null`` \| `DIDPair`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`\<``null`` \| `DIDPair`\>

#### Implementation of

Domain.Pluto.getPairByDID

#### Defined in

[index.ts:330](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L330)

___

### getPairByName

▸ **getPairByName**(`name`): `Promise`\<``null`` \| `DIDPair`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`\<``null`` \| `DIDPair`\>

#### Implementation of

Domain.Pluto.getPairByName

#### Defined in

[index.ts:355](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L355)

___

### getPrismDIDKeyPathIndex

▸ **getPrismDIDKeyPathIndex**(`did`): `Promise`\<``null`` \| `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |

#### Returns

`Promise`\<``null`` \| `number`\>

#### Implementation of

Domain.Pluto.getPrismDIDKeyPathIndex

#### Defined in

[index.ts:616](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L616)

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Implementation of

Domain.Pluto.getPrismLastKeyPathIndex

#### Defined in

[index.ts:624](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L624)

___

### getPrivateKeyFromDB

▸ `Private` **getPrivateKeyFromDB**(`privateKey`): `PrivateKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`PrivateKeyDocument`](../modules.md#privatekeydocument) |

#### Returns

`PrivateKey`

#### Defined in

[index.ts:377](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L377)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.start

#### Defined in

[index.ts:167](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L167)

___

### storeCredential

▸ **storeCredential**(`credential`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | `Credential` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storeCredential

#### Defined in

[index.ts:653](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L653)

___

### storeCredentialMetadata

▸ **storeCredentialMetadata**(`metadata`, `linkSecret`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `CredentialRequestMeta` |
| `linkSecret` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storeCredentialMetadata

#### Defined in

[index.ts:700](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L700)

___

### storeDIDPair

▸ **storeDIDPair**(`host`, `receiver`, `name`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `DID` |
| `receiver` | `DID` |
| `name` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storeDIDPair

#### Defined in

[index.ts:274](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L274)

___

### storeLinkSecret

▸ **storeLinkSecret**(`linkSecret`, `linkSecretName`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecret` | `string` |
| `linkSecretName` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storeLinkSecret

#### Defined in

[index.ts:690](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L690)

___

### storeMediator

▸ **storeMediator**(`mediator`, `host`, `routing`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediator` | `DID` |
| `host` | `DID` |
| `routing` | `DID` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storeMediator

#### Defined in

[index.ts:396](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L396)

___

### storeMessage

▸ **storeMessage**(`message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storeMessage

#### Defined in

[index.ts:137](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L137)

___

### storeMessages

▸ **storeMessages**(`messages`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | `Message`[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storeMessages

#### Defined in

[index.ts:158](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L158)

___

### storePeerDID

▸ **storePeerDID**(`did`, `privateKeys`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |
| `privateKeys` | `PrivateKey`[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storePeerDID

#### Defined in

[index.ts:235](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L235)

___

### storePrismDID

▸ **storePrismDID**(`did`, `keyPathIndex`, `privateKey`, `privateKeyMetaId?`, `alias?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `DID` |
| `keyPathIndex` | `number` |
| `privateKey` | `PrivateKey` |
| `privateKeyMetaId?` | ``null`` \| `string` |
| `alias?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storePrismDID

#### Defined in

[index.ts:213](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L213)

___

### storePrivateKeys

▸ **storePrivateKeys**(`privateKey`, `did`, `keyPathIndex`, `metaId?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `PrivateKey` |
| `did` | `DID` |
| `keyPathIndex` | `number` |
| `metaId?` | ``null`` \| `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

Domain.Pluto.storePrivateKeys

#### Defined in

[index.ts:286](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L286)

___

### createEncrypted

▸ `Static` **createEncrypted**(`options`): `Promise`\<[`Database`](Database.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.encryptionKey` | `Uint8Array` |
| `options.importData?` | `RxDumpDatabase`\<[`PlutoCollections`](../modules.md#plutocollections)\> |
| `options.name` | `string` |
| `options.storage` | `RxStorage`\<`any`, `any`\> |

#### Returns

`Promise`\<[`Database`](Database.md)\>

#### Defined in

[index.ts:101](https://github.com/elribonazo/pluto-encrypted/blob/913e0b0/packages/database/src/index.ts#L101)