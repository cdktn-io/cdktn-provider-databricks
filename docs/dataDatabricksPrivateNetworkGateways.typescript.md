# `dataDatabricksPrivateNetworkGateways` Submodule <a name="`dataDatabricksPrivateNetworkGateways` Submodule" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPrivateNetworkGateways <a name="DataDatabricksPrivateNetworkGateways" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways databricks_private_network_gateways}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways(scope: Construct, id: string, config: DataDatabricksPrivateNetworkGatewaysConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig">DataDatabricksPrivateNetworkGatewaysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig">DataDatabricksPrivateNetworkGatewaysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPrivateNetworkGateways resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isConstruct"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformElement"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformDataSource"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksPrivateNetworkGateways resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPrivateNetworkGateways to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPrivateNetworkGateways that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPrivateNetworkGateways to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.privateNetworkGateways">privateNetworkGateways</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `privateNetworkGateways`<sup>Required</sup> <a name="privateNetworkGateways" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.privateNetworkGateways"></a>

```typescript
public readonly privateNetworkGateways: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPrivateNetworkGatewaysConfig <a name="DataDatabricksPrivateNetworkGatewaysConfig" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewaysConfig: dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#parent DataDatabricksPrivateNetworkGateways#parent}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#parent DataDatabricksPrivateNetworkGateways#parent}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways: dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#name DataDatabricksPrivateNetworkGateways#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#name DataDatabricksPrivateNetworkGateways#name}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection: dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.crossAccountRole">crossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#cross_account_role DataDatabricksPrivateNetworkGateways#cross_account_role}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.gatewaySubnets">gatewaySubnets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnets DataDatabricksPrivateNetworkGateways#gateway_subnets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#security_group_ids DataDatabricksPrivateNetworkGateways#security_group_ids}. |

---

##### `crossAccountRole`<sup>Required</sup> <a name="crossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.crossAccountRole"></a>

```typescript
public readonly crossAccountRole: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#cross_account_role DataDatabricksPrivateNetworkGateways#cross_account_role}.

---

##### `gatewaySubnets`<sup>Required</sup> <a name="gatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.gatewaySubnets"></a>

```typescript
public readonly gatewaySubnets: IResolvable | DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnets DataDatabricksPrivateNetworkGateways#gateway_subnets}.

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#security_group_ids DataDatabricksPrivateNetworkGateways#security_group_ids}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole: dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#role_arn DataDatabricksPrivateNetworkGateways#role_arn}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#role_arn DataDatabricksPrivateNetworkGateways#role_arn}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets: dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#subnet_id DataDatabricksPrivateNetworkGateways#subnet_id}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#subnet_id DataDatabricksPrivateNetworkGateways#subnet_id}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection: dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection.property.gatewaySubnet">gatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnet DataDatabricksPrivateNetworkGateways#gateway_subnet}. |

---

##### `gatewaySubnet`<sup>Required</sup> <a name="gatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection.property.gatewaySubnet"></a>

```typescript
public readonly gatewaySubnet: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnet DataDatabricksPrivateNetworkGateways#gateway_subnet}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet: dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resource_id DataDatabricksPrivateNetworkGateways#resource_id}. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resource_id DataDatabricksPrivateNetworkGateways#resource_id}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations: dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.property.destinationType">destinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#destination_type DataDatabricksPrivateNetworkGateways#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}. |

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#destination_type DataDatabricksPrivateNetworkGateways#destination_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

const dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers: dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.property.resolverType">resolverType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resolver_type DataDatabricksPrivateNetworkGateways#resolver_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}. |

---

##### `resolverType`<sup>Required</sup> <a name="resolverType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.property.resolverType"></a>

```typescript
public readonly resolverType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resolver_type DataDatabricksPrivateNetworkGateways#resolver_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.get"></a>

```typescript
public get(index: number): DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>[]

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putCrossAccountRole">putCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putGatewaySubnets">putGatewaySubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrossAccountRole` <a name="putCrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putCrossAccountRole"></a>

```typescript
public putCrossAccountRole(value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putCrossAccountRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a>

---

##### `putGatewaySubnets` <a name="putGatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putGatewaySubnets"></a>

```typescript
public putGatewaySubnets(value: IResolvable | DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putGatewaySubnets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.crossAccountRole">crossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.gatewaySubnets">gatewaySubnets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.crossAccountRoleInput">crossAccountRoleInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.gatewaySubnetsInput">gatewaySubnetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crossAccountRole`<sup>Required</sup> <a name="crossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.crossAccountRole"></a>

```typescript
public readonly crossAccountRole: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference</a>

---

##### `gatewaySubnets`<sup>Required</sup> <a name="gatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.gatewaySubnets"></a>

```typescript
public readonly gatewaySubnets: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList</a>

---

##### `crossAccountRoleInput`<sup>Optional</sup> <a name="crossAccountRoleInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.crossAccountRoleInput"></a>

```typescript
public readonly crossAccountRoleInput: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a>

---

##### `gatewaySubnetsInput`<sup>Optional</sup> <a name="gatewaySubnetsInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.gatewaySubnetsInput"></a>

```typescript
public readonly gatewaySubnetsInput: IResolvable | DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>[]

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.putGatewaySubnet">putGatewaySubnet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGatewaySubnet` <a name="putGatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.putGatewaySubnet"></a>

```typescript
public putGatewaySubnet(value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.putGatewaySubnet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.gatewaySubnet">gatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.gatewaySubnetInput">gatewaySubnetInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gatewaySubnet`<sup>Required</sup> <a name="gatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.gatewaySubnet"></a>

```typescript
public readonly gatewaySubnet: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference</a>

---

##### `gatewaySubnetInput`<sup>Optional</sup> <a name="gatewaySubnetInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.gatewaySubnetInput"></a>

```typescript
public readonly gatewaySubnetInput: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.get"></a>

```typescript
public get(index: number): DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations</a>[]

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.get"></a>

```typescript
public get(index: number): DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways</a>[]

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.awsCloudConnection">awsCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.azureCloudConnection">azureCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.bandwidthTierGigabitsPerSecond">bandwidthTierGigabitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.privateDnsResolvers">privateDnsResolvers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.trafficMode">trafficMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsCloudConnection`<sup>Required</sup> <a name="awsCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.awsCloudConnection"></a>

```typescript
public readonly awsCloudConnection: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference</a>

---

##### `azureCloudConnection`<sup>Required</sup> <a name="azureCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.azureCloudConnection"></a>

```typescript
public readonly azureCloudConnection: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference</a>

---

##### `bandwidthTierGigabitsPerSecond`<sup>Required</sup> <a name="bandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.bandwidthTierGigabitsPerSecond"></a>

```typescript
public readonly bandwidthTierGigabitsPerSecond: number;
```

- *Type:* number

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.destinations"></a>

```typescript
public readonly destinations: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `privateDnsResolvers`<sup>Required</sup> <a name="privateDnsResolvers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.privateDnsResolvers"></a>

```typescript
public readonly privateDnsResolvers: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `trafficMode`<sup>Required</sup> <a name="trafficMode" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.trafficMode"></a>

```typescript
public readonly trafficMode: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.get"></a>

```typescript
public get(index: number): DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers</a>[]

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPrivateNetworkGateways } from '@cdktn/provider-databricks'

new dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.resolverTypeInput">resolverTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.resolverType">resolverType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resolverTypeInput`<sup>Optional</sup> <a name="resolverTypeInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.resolverTypeInput"></a>

```typescript
public readonly resolverTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `resolverType`<sup>Required</sup> <a name="resolverType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.resolverType"></a>

```typescript
public readonly resolverType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers</a>

---



