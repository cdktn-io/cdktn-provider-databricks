# `privateNetworkGateway` Submodule <a name="`privateNetworkGateway` Submodule" id="@cdktn/provider-databricks.privateNetworkGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateNetworkGateway <a name="PrivateNetworkGateway" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway databricks_private_network_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

new privateNetworkGateway.PrivateNetworkGateway(scope: Construct, id: string, config: PrivateNetworkGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig">PrivateNetworkGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig">PrivateNetworkGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection">putAwsCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAzureCloudConnection">putAzureCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putPrivateDnsResolvers">putPrivateDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAwsCloudConnection">resetAwsCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAzureCloudConnection">resetAzureCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetBandwidthTierGigabitsPerSecond">resetBandwidthTierGigabitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetPrivateDnsResolvers">resetPrivateDnsResolvers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAwsCloudConnection` <a name="putAwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection"></a>

```typescript
public putAwsCloudConnection(value: PrivateNetworkGatewayAwsCloudConnection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

---

##### `putAzureCloudConnection` <a name="putAzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAzureCloudConnection"></a>

```typescript
public putAzureCloudConnection(value: PrivateNetworkGatewayAzureCloudConnection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAzureCloudConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

---

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | PrivateNetworkGatewayDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>[]

---

##### `putPrivateDnsResolvers` <a name="putPrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putPrivateDnsResolvers"></a>

```typescript
public putPrivateDnsResolvers(value: IResolvable | PrivateNetworkGatewayPrivateDnsResolvers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putPrivateDnsResolvers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>[]

---

##### `resetAwsCloudConnection` <a name="resetAwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAwsCloudConnection"></a>

```typescript
public resetAwsCloudConnection(): void
```

##### `resetAzureCloudConnection` <a name="resetAzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAzureCloudConnection"></a>

```typescript
public resetAzureCloudConnection(): void
```

##### `resetBandwidthTierGigabitsPerSecond` <a name="resetBandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetBandwidthTierGigabitsPerSecond"></a>

```typescript
public resetBandwidthTierGigabitsPerSecond(): void
```

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetDestinations"></a>

```typescript
public resetDestinations(): void
```

##### `resetPrivateDnsResolvers` <a name="resetPrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetPrivateDnsResolvers"></a>

```typescript
public resetPrivateDnsResolvers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PrivateNetworkGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isConstruct"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

privateNetworkGateway.PrivateNetworkGateway.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformElement"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

privateNetworkGateway.PrivateNetworkGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformResource"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

privateNetworkGateway.PrivateNetworkGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PrivateNetworkGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivateNetworkGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivateNetworkGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PrivateNetworkGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnection">awsCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference">PrivateNetworkGatewayAwsCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnection">azureCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference">PrivateNetworkGatewayAzureCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList">PrivateNetworkGatewayDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolvers">privateDnsResolvers</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList">PrivateNetworkGatewayPrivateDnsResolversList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnectionInput">awsCloudConnectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnectionInput">azureCloudConnectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecondInput">bandwidthTierGigabitsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinationsInput">destinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolversInput">privateDnsResolversInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficModeInput">trafficModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecond">bandwidthTierGigabitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficMode">trafficMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `awsCloudConnection`<sup>Required</sup> <a name="awsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnection"></a>

```typescript
public readonly awsCloudConnection: PrivateNetworkGatewayAwsCloudConnectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference">PrivateNetworkGatewayAwsCloudConnectionOutputReference</a>

---

##### `azureCloudConnection`<sup>Required</sup> <a name="azureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnection"></a>

```typescript
public readonly azureCloudConnection: PrivateNetworkGatewayAzureCloudConnectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference">PrivateNetworkGatewayAzureCloudConnectionOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinations"></a>

```typescript
public readonly destinations: PrivateNetworkGatewayDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList">PrivateNetworkGatewayDestinationsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateDnsResolvers`<sup>Required</sup> <a name="privateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolvers"></a>

```typescript
public readonly privateDnsResolvers: PrivateNetworkGatewayPrivateDnsResolversList;
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList">PrivateNetworkGatewayPrivateDnsResolversList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `awsCloudConnectionInput`<sup>Optional</sup> <a name="awsCloudConnectionInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnectionInput"></a>

```typescript
public readonly awsCloudConnectionInput: IResolvable | PrivateNetworkGatewayAwsCloudConnection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

---

##### `azureCloudConnectionInput`<sup>Optional</sup> <a name="azureCloudConnectionInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnectionInput"></a>

```typescript
public readonly azureCloudConnectionInput: IResolvable | PrivateNetworkGatewayAzureCloudConnection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

---

##### `bandwidthTierGigabitsPerSecondInput`<sup>Optional</sup> <a name="bandwidthTierGigabitsPerSecondInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecondInput"></a>

```typescript
public readonly bandwidthTierGigabitsPerSecondInput: number;
```

- *Type:* number

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | PrivateNetworkGatewayDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `privateDnsResolversInput`<sup>Optional</sup> <a name="privateDnsResolversInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolversInput"></a>

```typescript
public readonly privateDnsResolversInput: IResolvable | PrivateNetworkGatewayPrivateDnsResolvers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>[]

---

##### `trafficModeInput`<sup>Optional</sup> <a name="trafficModeInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficModeInput"></a>

```typescript
public readonly trafficModeInput: string;
```

- *Type:* string

---

##### `bandwidthTierGigabitsPerSecond`<sup>Required</sup> <a name="bandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecond"></a>

```typescript
public readonly bandwidthTierGigabitsPerSecond: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `trafficMode`<sup>Required</sup> <a name="trafficMode" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficMode"></a>

```typescript
public readonly trafficMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateNetworkGatewayAwsCloudConnection <a name="PrivateNetworkGatewayAwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

const privateNetworkGatewayAwsCloudConnection: privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.crossAccountRole">crossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#cross_account_role PrivateNetworkGateway#cross_account_role}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.gatewaySubnets">gatewaySubnets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnets PrivateNetworkGateway#gateway_subnets}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#security_group_ids PrivateNetworkGateway#security_group_ids}. |

---

##### `crossAccountRole`<sup>Required</sup> <a name="crossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.crossAccountRole"></a>

```typescript
public readonly crossAccountRole: PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole;
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#cross_account_role PrivateNetworkGateway#cross_account_role}.

---

##### `gatewaySubnets`<sup>Required</sup> <a name="gatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.gatewaySubnets"></a>

```typescript
public readonly gatewaySubnets: IResolvable | PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnets PrivateNetworkGateway#gateway_subnets}.

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#security_group_ids PrivateNetworkGateway#security_group_ids}.

---

### PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole <a name="PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

const privateNetworkGatewayAwsCloudConnectionCrossAccountRole: privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#role_arn PrivateNetworkGateway#role_arn}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#role_arn PrivateNetworkGateway#role_arn}.

---

### PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets <a name="PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

const privateNetworkGatewayAwsCloudConnectionGatewaySubnets: privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#subnet_id PrivateNetworkGateway#subnet_id}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#subnet_id PrivateNetworkGateway#subnet_id}.

---

### PrivateNetworkGatewayAzureCloudConnection <a name="PrivateNetworkGatewayAzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

const privateNetworkGatewayAzureCloudConnection: privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection.property.gatewaySubnet">gatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnet PrivateNetworkGateway#gateway_subnet}. |

---

##### `gatewaySubnet`<sup>Required</sup> <a name="gatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection.property.gatewaySubnet"></a>

```typescript
public readonly gatewaySubnet: PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet;
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnet PrivateNetworkGateway#gateway_subnet}.

---

### PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet <a name="PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

const privateNetworkGatewayAzureCloudConnectionGatewaySubnet: privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resource_id PrivateNetworkGateway#resource_id}. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resource_id PrivateNetworkGateway#resource_id}.

---

### PrivateNetworkGatewayConfig <a name="PrivateNetworkGatewayConfig" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

const privateNetworkGatewayConfig: privateNetworkGateway.PrivateNetworkGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#display_name PrivateNetworkGateway#display_name}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#parent PrivateNetworkGateway#parent}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.trafficMode">trafficMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#traffic_mode PrivateNetworkGateway#traffic_mode}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.awsCloudConnection">awsCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#aws_cloud_connection PrivateNetworkGateway#aws_cloud_connection}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.azureCloudConnection">azureCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#azure_cloud_connection PrivateNetworkGateway#azure_cloud_connection}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.bandwidthTierGigabitsPerSecond">bandwidthTierGigabitsPerSecond</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#bandwidth_tier_gigabits_per_second PrivateNetworkGateway#bandwidth_tier_gigabits_per_second}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destinations PrivateNetworkGateway#destinations}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.privateDnsResolvers">privateDnsResolvers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#private_dns_resolvers PrivateNetworkGateway#private_dns_resolvers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#display_name PrivateNetworkGateway#display_name}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#parent PrivateNetworkGateway#parent}.

---

##### `trafficMode`<sup>Required</sup> <a name="trafficMode" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.trafficMode"></a>

```typescript
public readonly trafficMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#traffic_mode PrivateNetworkGateway#traffic_mode}.

---

##### `awsCloudConnection`<sup>Optional</sup> <a name="awsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.awsCloudConnection"></a>

```typescript
public readonly awsCloudConnection: PrivateNetworkGatewayAwsCloudConnection;
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#aws_cloud_connection PrivateNetworkGateway#aws_cloud_connection}.

---

##### `azureCloudConnection`<sup>Optional</sup> <a name="azureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.azureCloudConnection"></a>

```typescript
public readonly azureCloudConnection: PrivateNetworkGatewayAzureCloudConnection;
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#azure_cloud_connection PrivateNetworkGateway#azure_cloud_connection}.

---

##### `bandwidthTierGigabitsPerSecond`<sup>Optional</sup> <a name="bandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.bandwidthTierGigabitsPerSecond"></a>

```typescript
public readonly bandwidthTierGigabitsPerSecond: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#bandwidth_tier_gigabits_per_second PrivateNetworkGateway#bandwidth_tier_gigabits_per_second}.

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | PrivateNetworkGatewayDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destinations PrivateNetworkGateway#destinations}.

---

##### `privateDnsResolvers`<sup>Optional</sup> <a name="privateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.privateDnsResolvers"></a>

```typescript
public readonly privateDnsResolvers: IResolvable | PrivateNetworkGatewayPrivateDnsResolvers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#private_dns_resolvers PrivateNetworkGateway#private_dns_resolvers}.

---

### PrivateNetworkGatewayDestinations <a name="PrivateNetworkGatewayDestinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

const privateNetworkGatewayDestinations: privateNetworkGateway.PrivateNetworkGatewayDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.destinationType">destinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destination_type PrivateNetworkGateway#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}. |

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destination_type PrivateNetworkGateway#destination_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}.

---

### PrivateNetworkGatewayPrivateDnsResolvers <a name="PrivateNetworkGatewayPrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

const privateNetworkGatewayPrivateDnsResolvers: privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.resolverType">resolverType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resolver_type PrivateNetworkGateway#resolver_type}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}. |

---

##### `resolverType`<sup>Required</sup> <a name="resolverType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.resolverType"></a>

```typescript
public readonly resolverType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resolver_type PrivateNetworkGateway#resolver_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference <a name="PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

new privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---


### PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList <a name="PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

new privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get"></a>

```typescript
public get(index: number): PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]

---


### PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference <a name="PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

new privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>

---


### PrivateNetworkGatewayAwsCloudConnectionOutputReference <a name="PrivateNetworkGatewayAwsCloudConnectionOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

new privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole">putCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets">putGatewaySubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrossAccountRole` <a name="putCrossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole"></a>

```typescript
public putCrossAccountRole(value: PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---

##### `putGatewaySubnets` <a name="putGatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets"></a>

```typescript
public putGatewaySubnets(value: IResolvable | PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRole">crossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnets">gatewaySubnets</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRoleInput">crossAccountRoleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnetsInput">gatewaySubnetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crossAccountRole`<sup>Required</sup> <a name="crossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRole"></a>

```typescript
public readonly crossAccountRole: PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference</a>

---

##### `gatewaySubnets`<sup>Required</sup> <a name="gatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnets"></a>

```typescript
public readonly gatewaySubnets: PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList</a>

---

##### `crossAccountRoleInput`<sup>Optional</sup> <a name="crossAccountRoleInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRoleInput"></a>

```typescript
public readonly crossAccountRoleInput: IResolvable | PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---

##### `gatewaySubnetsInput`<sup>Optional</sup> <a name="gatewaySubnetsInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnetsInput"></a>

```typescript
public readonly gatewaySubnetsInput: IResolvable | PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateNetworkGatewayAwsCloudConnection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

---


### PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference <a name="PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

new privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---


### PrivateNetworkGatewayAzureCloudConnectionOutputReference <a name="PrivateNetworkGatewayAzureCloudConnectionOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

new privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet">putGatewaySubnet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGatewaySubnet` <a name="putGatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet"></a>

```typescript
public putGatewaySubnet(value: PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnet">gatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnetInput">gatewaySubnetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gatewaySubnet`<sup>Required</sup> <a name="gatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnet"></a>

```typescript
public readonly gatewaySubnet: PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference</a>

---

##### `gatewaySubnetInput`<sup>Optional</sup> <a name="gatewaySubnetInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnetInput"></a>

```typescript
public readonly gatewaySubnetInput: IResolvable | PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateNetworkGatewayAzureCloudConnection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

---


### PrivateNetworkGatewayDestinationsList <a name="PrivateNetworkGatewayDestinationsList" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

new privateNetworkGateway.PrivateNetworkGatewayDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.get"></a>

```typescript
public get(index: number): PrivateNetworkGatewayDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateNetworkGatewayDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>[]

---


### PrivateNetworkGatewayDestinationsOutputReference <a name="PrivateNetworkGatewayDestinationsOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

new privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateNetworkGatewayDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>

---


### PrivateNetworkGatewayPrivateDnsResolversList <a name="PrivateNetworkGatewayPrivateDnsResolversList" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

new privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.get"></a>

```typescript
public get(index: number): PrivateNetworkGatewayPrivateDnsResolversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateNetworkGatewayPrivateDnsResolvers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>[]

---


### PrivateNetworkGatewayPrivateDnsResolversOutputReference <a name="PrivateNetworkGatewayPrivateDnsResolversOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer"></a>

```typescript
import { privateNetworkGateway } from '@cdktn/provider-databricks'

new privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverTypeInput">resolverTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverType">resolverType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resolverTypeInput`<sup>Optional</sup> <a name="resolverTypeInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverTypeInput"></a>

```typescript
public readonly resolverTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `resolverType`<sup>Required</sup> <a name="resolverType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverType"></a>

```typescript
public readonly resolverType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateNetworkGatewayPrivateDnsResolvers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>

---



