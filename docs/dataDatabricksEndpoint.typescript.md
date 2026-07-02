# `dataDatabricksEndpoint` Submodule <a name="`dataDatabricksEndpoint` Submodule" id="@cdktn/provider-databricks.dataDatabricksEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksEndpoint <a name="DataDatabricksEndpoint" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/endpoint databricks_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.Initializer"></a>

```typescript
import { dataDatabricksEndpoint } from '@cdktn/provider-databricks'

new dataDatabricksEndpoint.DataDatabricksEndpoint(scope: Construct, id: string, config: DataDatabricksEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig">DataDatabricksEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig">DataDatabricksEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.isConstruct"></a>

```typescript
import { dataDatabricksEndpoint } from '@cdktn/provider-databricks'

dataDatabricksEndpoint.DataDatabricksEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.isTerraformElement"></a>

```typescript
import { dataDatabricksEndpoint } from '@cdktn/provider-databricks'

dataDatabricksEndpoint.DataDatabricksEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.isTerraformDataSource"></a>

```typescript
import { dataDatabricksEndpoint } from '@cdktn/provider-databricks'

dataDatabricksEndpoint.DataDatabricksEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.generateConfigForImport"></a>

```typescript
import { dataDatabricksEndpoint } from '@cdktn/provider-databricks'

dataDatabricksEndpoint.DataDatabricksEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.azurePrivateEndpointInfo">azurePrivateEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference">DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.useCase">useCase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `azurePrivateEndpointInfo`<sup>Required</sup> <a name="azurePrivateEndpointInfo" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.azurePrivateEndpointInfo"></a>

```typescript
public readonly azurePrivateEndpointInfo: DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference">DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `useCase`<sup>Required</sup> <a name="useCase" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.useCase"></a>

```typescript
public readonly useCase: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksEndpointAzurePrivateEndpointInfo <a name="DataDatabricksEndpointAzurePrivateEndpointInfo" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfo.Initializer"></a>

```typescript
import { dataDatabricksEndpoint } from '@cdktn/provider-databricks'

const dataDatabricksEndpointAzurePrivateEndpointInfo: dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfo.property.privateEndpointName">privateEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/endpoint#private_endpoint_name DataDatabricksEndpoint#private_endpoint_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfo.property.privateEndpointResourceGuid">privateEndpointResourceGuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/endpoint#private_endpoint_resource_guid DataDatabricksEndpoint#private_endpoint_resource_guid}. |

---

##### `privateEndpointName`<sup>Required</sup> <a name="privateEndpointName" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfo.property.privateEndpointName"></a>

```typescript
public readonly privateEndpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/endpoint#private_endpoint_name DataDatabricksEndpoint#private_endpoint_name}.

---

##### `privateEndpointResourceGuid`<sup>Required</sup> <a name="privateEndpointResourceGuid" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfo.property.privateEndpointResourceGuid"></a>

```typescript
public readonly privateEndpointResourceGuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/endpoint#private_endpoint_resource_guid DataDatabricksEndpoint#private_endpoint_resource_guid}.

---

### DataDatabricksEndpointConfig <a name="DataDatabricksEndpointConfig" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.Initializer"></a>

```typescript
import { dataDatabricksEndpoint } from '@cdktn/provider-databricks'

const dataDatabricksEndpointConfig: dataDatabricksEndpoint.DataDatabricksEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/endpoint#name DataDatabricksEndpoint#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/endpoint#name DataDatabricksEndpoint#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference <a name="DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.Initializer"></a>

```typescript
import { dataDatabricksEndpoint } from '@cdktn/provider-databricks'

new dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceId">privateEndpointResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.privateLinkServiceId">privateLinkServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointNameInput">privateEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceGuidInput">privateEndpointResourceGuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointName">privateEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceGuid">privateEndpointResourceGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfo">DataDatabricksEndpointAzurePrivateEndpointInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateEndpointResourceId`<sup>Required</sup> <a name="privateEndpointResourceId" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceId"></a>

```typescript
public readonly privateEndpointResourceId: string;
```

- *Type:* string

---

##### `privateLinkServiceId`<sup>Required</sup> <a name="privateLinkServiceId" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.privateLinkServiceId"></a>

```typescript
public readonly privateLinkServiceId: string;
```

- *Type:* string

---

##### `privateEndpointNameInput`<sup>Optional</sup> <a name="privateEndpointNameInput" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointNameInput"></a>

```typescript
public readonly privateEndpointNameInput: string;
```

- *Type:* string

---

##### `privateEndpointResourceGuidInput`<sup>Optional</sup> <a name="privateEndpointResourceGuidInput" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceGuidInput"></a>

```typescript
public readonly privateEndpointResourceGuidInput: string;
```

- *Type:* string

---

##### `privateEndpointName`<sup>Required</sup> <a name="privateEndpointName" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointName"></a>

```typescript
public readonly privateEndpointName: string;
```

- *Type:* string

---

##### `privateEndpointResourceGuid`<sup>Required</sup> <a name="privateEndpointResourceGuid" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceGuid"></a>

```typescript
public readonly privateEndpointResourceGuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksEndpointAzurePrivateEndpointInfo;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEndpoint.DataDatabricksEndpointAzurePrivateEndpointInfo">DataDatabricksEndpointAzurePrivateEndpointInfo</a>

---



