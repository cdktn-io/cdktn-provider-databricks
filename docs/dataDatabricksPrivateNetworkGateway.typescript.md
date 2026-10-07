# `dataDatabricksPrivateNetworkGateway` Submodule <a name="`dataDatabricksPrivateNetworkGateway` Submodule" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPrivateNetworkGateway <a name="DataDatabricksPrivateNetworkGateway" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway databricks_private_network_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway(scope: Construct, id: string, config: DataDatabricksPrivateNetworkGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig">DataDatabricksPrivateNetworkGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig">DataDatabricksPrivateNetworkGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPrivateNetworkGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isConstruct"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformElement"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformDataSource"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksPrivateNetworkGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPrivateNetworkGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPrivateNetworkGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPrivateNetworkGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.awsCloudConnection">awsCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.azureCloudConnection">azureCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.bandwidthTierGigabitsPerSecond">bandwidthTierGigabitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList">DataDatabricksPrivateNetworkGatewayDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.privateDnsResolvers">privateDnsResolvers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList">DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.trafficMode">trafficMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `awsCloudConnection`<sup>Required</sup> <a name="awsCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.awsCloudConnection"></a>

```typescript
public readonly awsCloudConnection: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference</a>

---

##### `azureCloudConnection`<sup>Required</sup> <a name="azureCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.azureCloudConnection"></a>

```typescript
public readonly azureCloudConnection: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference</a>

---

##### `bandwidthTierGigabitsPerSecond`<sup>Required</sup> <a name="bandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.bandwidthTierGigabitsPerSecond"></a>

```typescript
public readonly bandwidthTierGigabitsPerSecond: number;
```

- *Type:* number

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.destinations"></a>

```typescript
public readonly destinations: DataDatabricksPrivateNetworkGatewayDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList">DataDatabricksPrivateNetworkGatewayDestinationsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `privateDnsResolvers`<sup>Required</sup> <a name="privateDnsResolvers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.privateDnsResolvers"></a>

```typescript
public readonly privateDnsResolvers: DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList">DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `trafficMode`<sup>Required</sup> <a name="trafficMode" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.trafficMode"></a>

```typescript
public readonly trafficMode: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPrivateNetworkGatewayAwsCloudConnection <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewayAwsCloudConnection: dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.crossAccountRole">crossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#cross_account_role DataDatabricksPrivateNetworkGateway#cross_account_role}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.gatewaySubnets">gatewaySubnets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#gateway_subnets DataDatabricksPrivateNetworkGateway#gateway_subnets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#security_group_ids DataDatabricksPrivateNetworkGateway#security_group_ids}. |

---

##### `crossAccountRole`<sup>Required</sup> <a name="crossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.crossAccountRole"></a>

```typescript
public readonly crossAccountRole: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#cross_account_role DataDatabricksPrivateNetworkGateway#cross_account_role}.

---

##### `gatewaySubnets`<sup>Required</sup> <a name="gatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.gatewaySubnets"></a>

```typescript
public readonly gatewaySubnets: IResolvable | DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#gateway_subnets DataDatabricksPrivateNetworkGateway#gateway_subnets}.

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#security_group_ids DataDatabricksPrivateNetworkGateway#security_group_ids}.

---

### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole: dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#role_arn DataDatabricksPrivateNetworkGateway#role_arn}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#role_arn DataDatabricksPrivateNetworkGateway#role_arn}.

---

### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets: dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#subnet_id DataDatabricksPrivateNetworkGateway#subnet_id}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#subnet_id DataDatabricksPrivateNetworkGateway#subnet_id}.

---

### DataDatabricksPrivateNetworkGatewayAzureCloudConnection <a name="DataDatabricksPrivateNetworkGatewayAzureCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewayAzureCloudConnection: dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection.property.gatewaySubnet">gatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#gateway_subnet DataDatabricksPrivateNetworkGateway#gateway_subnet}. |

---

##### `gatewaySubnet`<sup>Required</sup> <a name="gatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection.property.gatewaySubnet"></a>

```typescript
public readonly gatewaySubnet: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#gateway_subnet DataDatabricksPrivateNetworkGateway#gateway_subnet}.

---

### DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet <a name="DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet: dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#resource_id DataDatabricksPrivateNetworkGateway#resource_id}. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#resource_id DataDatabricksPrivateNetworkGateway#resource_id}.

---

### DataDatabricksPrivateNetworkGatewayConfig <a name="DataDatabricksPrivateNetworkGatewayConfig" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewayConfig: dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#name DataDatabricksPrivateNetworkGateway#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#name DataDatabricksPrivateNetworkGateway#name}.

---

### DataDatabricksPrivateNetworkGatewayDestinations <a name="DataDatabricksPrivateNetworkGatewayDestinations" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewayDestinations: dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations.property.destinationType">destinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#destination_type DataDatabricksPrivateNetworkGateway#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#value DataDatabricksPrivateNetworkGateway#value}. |

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#destination_type DataDatabricksPrivateNetworkGateway#destination_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#value DataDatabricksPrivateNetworkGateway#value}.

---

### DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers <a name="DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewayPrivateDnsResolvers: dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers.property.resolverType">resolverType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#resolver_type DataDatabricksPrivateNetworkGateway#resolver_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#value DataDatabricksPrivateNetworkGateway#value}. |

---

##### `resolverType`<sup>Required</sup> <a name="resolverType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers.property.resolverType"></a>

```typescript
public readonly resolverType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#resolver_type DataDatabricksPrivateNetworkGateway#resolver_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#value DataDatabricksPrivateNetworkGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---


### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get"></a>

```typescript
public get(index: number): DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]

---


### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>

---


### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole">putCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets">putGatewaySubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrossAccountRole` <a name="putCrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole"></a>

```typescript
public putCrossAccountRole(value: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---

##### `putGatewaySubnets` <a name="putGatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets"></a>

```typescript
public putGatewaySubnets(value: IResolvable | DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRole">crossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnets">gatewaySubnets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRoleInput">crossAccountRoleInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnetsInput">gatewaySubnetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection">DataDatabricksPrivateNetworkGatewayAwsCloudConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crossAccountRole`<sup>Required</sup> <a name="crossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRole"></a>

```typescript
public readonly crossAccountRole: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference</a>

---

##### `gatewaySubnets`<sup>Required</sup> <a name="gatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnets"></a>

```typescript
public readonly gatewaySubnets: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList</a>

---

##### `crossAccountRoleInput`<sup>Optional</sup> <a name="crossAccountRoleInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRoleInput"></a>

```typescript
public readonly crossAccountRoleInput: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---

##### `gatewaySubnetsInput`<sup>Optional</sup> <a name="gatewaySubnetsInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnetsInput"></a>

```typescript
public readonly gatewaySubnetsInput: IResolvable | DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPrivateNetworkGatewayAwsCloudConnection;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection">DataDatabricksPrivateNetworkGatewayAwsCloudConnection</a>

---


### DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference <a name="DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---


### DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference <a name="DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet">putGatewaySubnet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGatewaySubnet` <a name="putGatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet"></a>

```typescript
public putGatewaySubnet(value: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnet">gatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnetInput">gatewaySubnetInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection">DataDatabricksPrivateNetworkGatewayAzureCloudConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gatewaySubnet`<sup>Required</sup> <a name="gatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnet"></a>

```typescript
public readonly gatewaySubnet: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference</a>

---

##### `gatewaySubnetInput`<sup>Optional</sup> <a name="gatewaySubnetInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnetInput"></a>

```typescript
public readonly gatewaySubnetInput: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPrivateNetworkGatewayAzureCloudConnection;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection">DataDatabricksPrivateNetworkGatewayAzureCloudConnection</a>

---


### DataDatabricksPrivateNetworkGatewayDestinationsList <a name="DataDatabricksPrivateNetworkGatewayDestinationsList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.get"></a>

```typescript
public get(index: number): DataDatabricksPrivateNetworkGatewayDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations">DataDatabricksPrivateNetworkGatewayDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPrivateNetworkGatewayDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations">DataDatabricksPrivateNetworkGatewayDestinations</a>[]

---


### DataDatabricksPrivateNetworkGatewayDestinationsOutputReference <a name="DataDatabricksPrivateNetworkGatewayDestinationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations">DataDatabricksPrivateNetworkGatewayDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPrivateNetworkGatewayDestinations;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations">DataDatabricksPrivateNetworkGatewayDestinations</a>

---


### DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList <a name="DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.get"></a>

```typescript
public get(index: number): DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers</a>[]

---


### DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference <a name="DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateway } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverTypeInput">resolverTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverType">resolverType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resolverTypeInput`<sup>Optional</sup> <a name="resolverTypeInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverTypeInput"></a>

```typescript
public readonly resolverTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `resolverType`<sup>Required</sup> <a name="resolverType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverType"></a>

```typescript
public readonly resolverType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers</a>

---



