# `dataDatabricksApps` Submodule <a name="`dataDatabricksApps` Submodule" id="@cdktn/provider-databricks.dataDatabricksApps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksApps <a name="DataDatabricksApps" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps databricks_apps}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksApps(scope: Construct, id: string, config?: DataDatabricksAppsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig">DataDatabricksAppsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig">DataDatabricksAppsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAppsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksApps resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isConstruct"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

dataDatabricksApps.DataDatabricksApps.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformElement"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

dataDatabricksApps.DataDatabricksApps.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformDataSource"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

dataDatabricksApps.DataDatabricksApps.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

dataDatabricksApps.DataDatabricksApps.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksApps resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksApps to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksApps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksApps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList">DataDatabricksAppsAppList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference">DataDatabricksAppsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.app"></a>

```typescript
public readonly app: DataDatabricksAppsAppList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList">DataDatabricksAppsAppList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAppsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference">DataDatabricksAppsProviderConfigOutputReference</a>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAppsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAppsApp <a name="DataDatabricksAppsApp" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsApp: dataDatabricksApps.DataDatabricksAppsApp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#budget_policy_id DataDatabricksApps#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.computeMaxInstances">computeMaxInstances</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#compute_max_instances DataDatabricksApps#compute_max_instances}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.computeMinInstances">computeMinInstances</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#compute_min_instances DataDatabricksApps#compute_min_instances}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.computeSize">computeSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#compute_size DataDatabricksApps#compute_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#description DataDatabricksApps#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#git_repository DataDatabricksApps#git_repository}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.resources">resources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#resources DataDatabricksApps#resources}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.space">space</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#space DataDatabricksApps#space}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.telemetryExportDestinations">telemetryExportDestinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#telemetry_export_destinations DataDatabricksApps#telemetry_export_destinations}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.usagePolicyId">usagePolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#usage_policy_id DataDatabricksApps#usage_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.userApiScopes">userApiScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#user_api_scopes DataDatabricksApps#user_api_scopes}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#budget_policy_id DataDatabricksApps#budget_policy_id}.

---

##### `computeMaxInstances`<sup>Optional</sup> <a name="computeMaxInstances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.computeMaxInstances"></a>

```typescript
public readonly computeMaxInstances: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#compute_max_instances DataDatabricksApps#compute_max_instances}.

---

##### `computeMinInstances`<sup>Optional</sup> <a name="computeMinInstances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.computeMinInstances"></a>

```typescript
public readonly computeMinInstances: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#compute_min_instances DataDatabricksApps#compute_min_instances}.

---

##### `computeSize`<sup>Optional</sup> <a name="computeSize" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.computeSize"></a>

```typescript
public readonly computeSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#compute_size DataDatabricksApps#compute_size}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#description DataDatabricksApps#description}.

---

##### `gitRepository`<sup>Optional</sup> <a name="gitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.gitRepository"></a>

```typescript
public readonly gitRepository: DataDatabricksAppsAppGitRepository;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#git_repository DataDatabricksApps#git_repository}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.resources"></a>

```typescript
public readonly resources: IResolvable | DataDatabricksAppsAppResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#resources DataDatabricksApps#resources}.

---

##### `space`<sup>Optional</sup> <a name="space" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.space"></a>

```typescript
public readonly space: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#space DataDatabricksApps#space}.

---

##### `telemetryExportDestinations`<sup>Optional</sup> <a name="telemetryExportDestinations" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.telemetryExportDestinations"></a>

```typescript
public readonly telemetryExportDestinations: IResolvable | DataDatabricksAppsAppTelemetryExportDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#telemetry_export_destinations DataDatabricksApps#telemetry_export_destinations}.

---

##### `usagePolicyId`<sup>Optional</sup> <a name="usagePolicyId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.usagePolicyId"></a>

```typescript
public readonly usagePolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#usage_policy_id DataDatabricksApps#usage_policy_id}.

---

##### `userApiScopes`<sup>Optional</sup> <a name="userApiScopes" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.userApiScopes"></a>

```typescript
public readonly userApiScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#user_api_scopes DataDatabricksApps#user_api_scopes}.

---

### DataDatabricksAppsAppActiveDeployment <a name="DataDatabricksAppsAppActiveDeployment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppActiveDeployment: dataDatabricksApps.DataDatabricksAppsAppActiveDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.command">command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#command DataDatabricksApps#command}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.deploymentId">deploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.envVars">envVars</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#env_vars DataDatabricksApps#env_vars}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#git_source DataDatabricksApps#git_source}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#mode DataDatabricksApps#mode}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#command DataDatabricksApps#command}.

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}.

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.envVars"></a>

```typescript
public readonly envVars: IResolvable | DataDatabricksAppsAppActiveDeploymentEnvVars[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#env_vars DataDatabricksApps#env_vars}.

---

##### `gitSource`<sup>Optional</sup> <a name="gitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.gitSource"></a>

```typescript
public readonly gitSource: DataDatabricksAppsAppActiveDeploymentGitSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#git_source DataDatabricksApps#git_source}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#mode DataDatabricksApps#mode}.

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

### DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts <a name="DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppActiveDeploymentDeploymentArtifacts: dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

### DataDatabricksAppsAppActiveDeploymentEnvVars <a name="DataDatabricksAppsAppActiveDeploymentEnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppActiveDeploymentEnvVars: dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#value DataDatabricksApps#value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.valueFrom">valueFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#value_from DataDatabricksApps#value_from}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#value DataDatabricksApps#value}.

---

##### `valueFrom`<sup>Optional</sup> <a name="valueFrom" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#value_from DataDatabricksApps#value_from}.

---

### DataDatabricksAppsAppActiveDeploymentGitSource <a name="DataDatabricksAppsAppActiveDeploymentGitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppActiveDeploymentGitSource: dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#branch DataDatabricksApps#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.commit">commit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#commit DataDatabricksApps#commit}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.tag">tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#tag DataDatabricksApps#tag}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#branch DataDatabricksApps#branch}.

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#commit DataDatabricksApps#commit}.

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#tag DataDatabricksApps#tag}.

---

### DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository <a name="DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppActiveDeploymentGitSourceGitRepository: dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository.property.provider">provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#provider DataDatabricksApps#provider}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#url DataDatabricksApps#url}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#provider DataDatabricksApps#provider}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#url DataDatabricksApps#url}.

---

### DataDatabricksAppsAppActiveDeploymentStatus <a name="DataDatabricksAppsAppActiveDeploymentStatus" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppActiveDeploymentStatus: dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus = { ... }
```


### DataDatabricksAppsAppAppStatus <a name="DataDatabricksAppsAppAppStatus" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatus.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppAppStatus: dataDatabricksApps.DataDatabricksAppsAppAppStatus = { ... }
```


### DataDatabricksAppsAppComputeStatus <a name="DataDatabricksAppsAppComputeStatus" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatus.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppComputeStatus: dataDatabricksApps.DataDatabricksAppsAppComputeStatus = { ... }
```


### DataDatabricksAppsAppGitRepository <a name="DataDatabricksAppsAppGitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppGitRepository: dataDatabricksApps.DataDatabricksAppsAppGitRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository.property.provider">provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#provider DataDatabricksApps#provider}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#url DataDatabricksApps#url}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#provider DataDatabricksApps#provider}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#url DataDatabricksApps#url}.

---

### DataDatabricksAppsAppPendingDeployment <a name="DataDatabricksAppsAppPendingDeployment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppPendingDeployment: dataDatabricksApps.DataDatabricksAppsAppPendingDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.command">command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#command DataDatabricksApps#command}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.deploymentId">deploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.envVars">envVars</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#env_vars DataDatabricksApps#env_vars}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#git_source DataDatabricksApps#git_source}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#mode DataDatabricksApps#mode}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#command DataDatabricksApps#command}.

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}.

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.envVars"></a>

```typescript
public readonly envVars: IResolvable | DataDatabricksAppsAppPendingDeploymentEnvVars[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#env_vars DataDatabricksApps#env_vars}.

---

##### `gitSource`<sup>Optional</sup> <a name="gitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.gitSource"></a>

```typescript
public readonly gitSource: DataDatabricksAppsAppPendingDeploymentGitSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#git_source DataDatabricksApps#git_source}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#mode DataDatabricksApps#mode}.

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

### DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts <a name="DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppPendingDeploymentDeploymentArtifacts: dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

### DataDatabricksAppsAppPendingDeploymentEnvVars <a name="DataDatabricksAppsAppPendingDeploymentEnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppPendingDeploymentEnvVars: dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#value DataDatabricksApps#value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.valueFrom">valueFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#value_from DataDatabricksApps#value_from}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#value DataDatabricksApps#value}.

---

##### `valueFrom`<sup>Optional</sup> <a name="valueFrom" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#value_from DataDatabricksApps#value_from}.

---

### DataDatabricksAppsAppPendingDeploymentGitSource <a name="DataDatabricksAppsAppPendingDeploymentGitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppPendingDeploymentGitSource: dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#branch DataDatabricksApps#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.commit">commit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#commit DataDatabricksApps#commit}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.tag">tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#tag DataDatabricksApps#tag}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#branch DataDatabricksApps#branch}.

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#commit DataDatabricksApps#commit}.

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#tag DataDatabricksApps#tag}.

---

### DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository <a name="DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppPendingDeploymentGitSourceGitRepository: dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository.property.provider">provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#provider DataDatabricksApps#provider}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#url DataDatabricksApps#url}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#provider DataDatabricksApps#provider}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#url DataDatabricksApps#url}.

---

### DataDatabricksAppsAppPendingDeploymentStatus <a name="DataDatabricksAppsAppPendingDeploymentStatus" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppPendingDeploymentStatus: dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus = { ... }
```


### DataDatabricksAppsAppResources <a name="DataDatabricksAppsAppResources" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppResources: dataDatabricksApps.DataDatabricksAppsAppResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#app DataDatabricksApps#app}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.database">database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#database DataDatabricksApps#database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#description DataDatabricksApps#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.experiment">experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#experiment DataDatabricksApps#experiment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.genieSpace">genieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#genie_space DataDatabricksApps#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.job">job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#job DataDatabricksApps#job}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.postgres">postgres</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#postgres DataDatabricksApps#postgres}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#secret DataDatabricksApps#secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.servingEndpoint">servingEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#serving_endpoint DataDatabricksApps#serving_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.sqlWarehouse">sqlWarehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#sql_warehouse DataDatabricksApps#sql_warehouse}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.ucSecurable">ucSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#uc_securable DataDatabricksApps#uc_securable}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `app`<sup>Optional</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.app"></a>

```typescript
public readonly app: DataDatabricksAppsAppResourcesApp;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#app DataDatabricksApps#app}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.database"></a>

```typescript
public readonly database: DataDatabricksAppsAppResourcesDatabase;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#database DataDatabricksApps#database}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#description DataDatabricksApps#description}.

---

##### `experiment`<sup>Optional</sup> <a name="experiment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.experiment"></a>

```typescript
public readonly experiment: DataDatabricksAppsAppResourcesExperiment;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#experiment DataDatabricksApps#experiment}.

---

##### `genieSpace`<sup>Optional</sup> <a name="genieSpace" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.genieSpace"></a>

```typescript
public readonly genieSpace: DataDatabricksAppsAppResourcesGenieSpace;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#genie_space DataDatabricksApps#genie_space}.

---

##### `job`<sup>Optional</sup> <a name="job" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.job"></a>

```typescript
public readonly job: DataDatabricksAppsAppResourcesJob;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#job DataDatabricksApps#job}.

---

##### `postgres`<sup>Optional</sup> <a name="postgres" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.postgres"></a>

```typescript
public readonly postgres: DataDatabricksAppsAppResourcesPostgres;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#postgres DataDatabricksApps#postgres}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.secret"></a>

```typescript
public readonly secret: DataDatabricksAppsAppResourcesSecret;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#secret DataDatabricksApps#secret}.

---

##### `servingEndpoint`<sup>Optional</sup> <a name="servingEndpoint" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.servingEndpoint"></a>

```typescript
public readonly servingEndpoint: DataDatabricksAppsAppResourcesServingEndpoint;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#serving_endpoint DataDatabricksApps#serving_endpoint}.

---

##### `sqlWarehouse`<sup>Optional</sup> <a name="sqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.sqlWarehouse"></a>

```typescript
public readonly sqlWarehouse: DataDatabricksAppsAppResourcesSqlWarehouse;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#sql_warehouse DataDatabricksApps#sql_warehouse}.

---

##### `ucSecurable`<sup>Optional</sup> <a name="ucSecurable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.ucSecurable"></a>

```typescript
public readonly ucSecurable: DataDatabricksAppsAppResourcesUcSecurable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#uc_securable DataDatabricksApps#uc_securable}.

---

### DataDatabricksAppsAppResourcesApp <a name="DataDatabricksAppsAppResourcesApp" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppResourcesApp: dataDatabricksApps.DataDatabricksAppsAppResourcesApp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesDatabase <a name="DataDatabricksAppsAppResourcesDatabase" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppResourcesDatabase: dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#database_name DataDatabricksApps#database_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.instanceName">instanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#instance_name DataDatabricksApps#instance_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#database_name DataDatabricksApps#database_name}.

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#instance_name DataDatabricksApps#instance_name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesExperiment <a name="DataDatabricksAppsAppResourcesExperiment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppResourcesExperiment: dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment.property.experimentId">experimentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#experiment_id DataDatabricksApps#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `experimentId`<sup>Required</sup> <a name="experimentId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment.property.experimentId"></a>

```typescript
public readonly experimentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#experiment_id DataDatabricksApps#experiment_id}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesGenieSpace <a name="DataDatabricksAppsAppResourcesGenieSpace" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppResourcesGenieSpace: dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.spaceId">spaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#space_id DataDatabricksApps#space_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#space_id DataDatabricksApps#space_id}.

---

### DataDatabricksAppsAppResourcesJob <a name="DataDatabricksAppsAppResourcesJob" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppResourcesJob: dataDatabricksApps.DataDatabricksAppsAppResourcesJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#id DataDatabricksApps#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#id DataDatabricksApps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesPostgres <a name="DataDatabricksAppsAppResourcesPostgres" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppResourcesPostgres: dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#branch DataDatabricksApps#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#database DataDatabricksApps#database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#branch DataDatabricksApps#branch}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#database DataDatabricksApps#database}.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesSecret <a name="DataDatabricksAppsAppResourcesSecret" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppResourcesSecret: dataDatabricksApps.DataDatabricksAppsAppResourcesSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#key DataDatabricksApps#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#scope DataDatabricksApps#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#key DataDatabricksApps#key}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#scope DataDatabricksApps#scope}.

---

### DataDatabricksAppsAppResourcesServingEndpoint <a name="DataDatabricksAppsAppResourcesServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppResourcesServingEndpoint: dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesSqlWarehouse <a name="DataDatabricksAppsAppResourcesSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppResourcesSqlWarehouse: dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#id DataDatabricksApps#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#id DataDatabricksApps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesUcSecurable <a name="DataDatabricksAppsAppResourcesUcSecurable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppResourcesUcSecurable: dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.securableFullName">securableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#securable_full_name DataDatabricksApps#securable_full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.securableType">securableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#securable_type DataDatabricksApps#securable_type}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `securableFullName`<sup>Required</sup> <a name="securableFullName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.securableFullName"></a>

```typescript
public readonly securableFullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#securable_full_name DataDatabricksApps#securable_full_name}.

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#securable_type DataDatabricksApps#securable_type}.

---

### DataDatabricksAppsAppTelemetryExportDestinations <a name="DataDatabricksAppsAppTelemetryExportDestinations" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppTelemetryExportDestinations: dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations.property.unityCatalog">unityCatalog</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#unity_catalog DataDatabricksApps#unity_catalog}. |

---

##### `unityCatalog`<sup>Optional</sup> <a name="unityCatalog" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations.property.unityCatalog"></a>

```typescript
public readonly unityCatalog: DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#unity_catalog DataDatabricksApps#unity_catalog}.

---

### DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog <a name="DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog: dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.logsTable">logsTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#logs_table DataDatabricksApps#logs_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.metricsTable">metricsTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#metrics_table DataDatabricksApps#metrics_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.tracesTable">tracesTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#traces_table DataDatabricksApps#traces_table}. |

---

##### `logsTable`<sup>Required</sup> <a name="logsTable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.logsTable"></a>

```typescript
public readonly logsTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#logs_table DataDatabricksApps#logs_table}.

---

##### `metricsTable`<sup>Required</sup> <a name="metricsTable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.metricsTable"></a>

```typescript
public readonly metricsTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#metrics_table DataDatabricksApps#metrics_table}.

---

##### `tracesTable`<sup>Required</sup> <a name="tracesTable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.tracesTable"></a>

```typescript
public readonly tracesTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#traces_table DataDatabricksApps#traces_table}.

---

### DataDatabricksAppsConfig <a name="DataDatabricksAppsConfig" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsConfig: dataDatabricksApps.DataDatabricksAppsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#provider_config DataDatabricksApps#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAppsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#provider_config DataDatabricksApps#provider_config}.

---

### DataDatabricksAppsProviderConfig <a name="DataDatabricksAppsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

const dataDatabricksAppsProviderConfig: dataDatabricksApps.DataDatabricksAppsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#workspace_id DataDatabricksApps#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/apps#workspace_id DataDatabricksApps#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference <a name="DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath"></a>

```typescript
public resetSourceCodePath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts">DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput"></a>

```typescript
public readonly sourceCodePathInput: string;
```

- *Type:* string

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts">DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts</a>

---


### DataDatabricksAppsAppActiveDeploymentEnvVarsList <a name="DataDatabricksAppsAppActiveDeploymentEnvVarsList" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.get"></a>

```typescript
public get(index: number): DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppActiveDeploymentEnvVars[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>[]

---


### DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference <a name="DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetValueFrom">resetValueFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueFrom` <a name="resetValueFrom" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetValueFrom"></a>

```typescript
public resetValueFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueFromInput">valueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueFrom">valueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueFromInput"></a>

```typescript
public readonly valueFromInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppActiveDeploymentEnvVars;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>

---


### DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference <a name="DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository">DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository">DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository</a>

---


### DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference <a name="DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetCommit">resetCommit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetCommit` <a name="resetCommit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetCommit"></a>

```typescript
public resetCommit(): void
```

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetSourceCodePath"></a>

```typescript
public resetSourceCodePath(): void
```

##### `resetTag` <a name="resetTag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference">DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.resolvedCommit">resolvedCommit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.commitInput">commitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.commit">commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.gitRepository"></a>

```typescript
public readonly gitRepository: DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference">DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference</a>

---

##### `resolvedCommit`<sup>Required</sup> <a name="resolvedCommit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.resolvedCommit"></a>

```typescript
public readonly resolvedCommit: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.commitInput"></a>

```typescript
public readonly commitInput: string;
```

- *Type:* string

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.sourceCodePathInput"></a>

```typescript
public readonly sourceCodePathInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppActiveDeploymentGitSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a>

---


### DataDatabricksAppsAppActiveDeploymentOutputReference <a name="DataDatabricksAppsAppActiveDeploymentOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putEnvVars">putEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putGitSource">putGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetEnvVars">resetEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetGitSource">resetGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvVars` <a name="putEnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putEnvVars"></a>

```typescript
public putEnvVars(value: IResolvable | DataDatabricksAppsAppActiveDeploymentEnvVars[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putEnvVars.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>[]

---

##### `putGitSource` <a name="putGitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putGitSource"></a>

```typescript
public putGitSource(value: DataDatabricksAppsAppActiveDeploymentGitSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putGitSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a>

---

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetDeploymentId` <a name="resetDeploymentId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetDeploymentId"></a>

```typescript
public resetDeploymentId(): void
```

##### `resetEnvVars` <a name="resetEnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetEnvVars"></a>

```typescript
public resetEnvVars(): void
```

##### `resetGitSource` <a name="resetGitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetGitSource"></a>

```typescript
public resetGitSource(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetSourceCodePath"></a>

```typescript
public resetSourceCodePath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentArtifacts">deploymentArtifacts</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.envVars">envVars</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList">DataDatabricksAppsAppActiveDeploymentEnvVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference">DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference">DataDatabricksAppsAppActiveDeploymentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.envVarsInput">envVarsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.gitSourceInput">gitSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment">DataDatabricksAppsAppActiveDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `deploymentArtifacts`<sup>Required</sup> <a name="deploymentArtifacts" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentArtifacts"></a>

```typescript
public readonly deploymentArtifacts: DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference</a>

---

##### `envVars`<sup>Required</sup> <a name="envVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.envVars"></a>

```typescript
public readonly envVars: DataDatabricksAppsAppActiveDeploymentEnvVarsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList">DataDatabricksAppsAppActiveDeploymentEnvVarsList</a>

---

##### `gitSource`<sup>Required</sup> <a name="gitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.gitSource"></a>

```typescript
public readonly gitSource: DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference">DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.status"></a>

```typescript
public readonly status: DataDatabricksAppsAppActiveDeploymentStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference">DataDatabricksAppsAppActiveDeploymentStatusOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `envVarsInput`<sup>Optional</sup> <a name="envVarsInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.envVarsInput"></a>

```typescript
public readonly envVarsInput: IResolvable | DataDatabricksAppsAppActiveDeploymentEnvVars[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>[]

---

##### `gitSourceInput`<sup>Optional</sup> <a name="gitSourceInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.gitSourceInput"></a>

```typescript
public readonly gitSourceInput: IResolvable | DataDatabricksAppsAppActiveDeploymentGitSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.sourceCodePathInput"></a>

```typescript
public readonly sourceCodePathInput: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAppsAppActiveDeployment;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment">DataDatabricksAppsAppActiveDeployment</a>

---


### DataDatabricksAppsAppActiveDeploymentStatusOutputReference <a name="DataDatabricksAppsAppActiveDeploymentStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus">DataDatabricksAppsAppActiveDeploymentStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAppsAppActiveDeploymentStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus">DataDatabricksAppsAppActiveDeploymentStatus</a>

---


### DataDatabricksAppsAppAppStatusOutputReference <a name="DataDatabricksAppsAppAppStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.runningInstances">runningInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatus">DataDatabricksAppsAppAppStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `runningInstances`<sup>Required</sup> <a name="runningInstances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.runningInstances"></a>

```typescript
public readonly runningInstances: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAppsAppAppStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatus">DataDatabricksAppsAppAppStatus</a>

---


### DataDatabricksAppsAppComputeStatusOutputReference <a name="DataDatabricksAppsAppComputeStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.activeInstances">activeInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatus">DataDatabricksAppsAppComputeStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeInstances`<sup>Required</sup> <a name="activeInstances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.activeInstances"></a>

```typescript
public readonly activeInstances: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAppsAppComputeStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatus">DataDatabricksAppsAppComputeStatus</a>

---


### DataDatabricksAppsAppGitRepositoryOutputReference <a name="DataDatabricksAppsAppGitRepositoryOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppGitRepository;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a>

---


### DataDatabricksAppsAppList <a name="DataDatabricksAppsAppList" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.get"></a>

```typescript
public get(index: number): DataDatabricksAppsAppOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp">DataDatabricksAppsApp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsApp[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp">DataDatabricksAppsApp</a>[]

---


### DataDatabricksAppsAppOutputReference <a name="DataDatabricksAppsAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putGitRepository">putGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putTelemetryExportDestinations">putTelemetryExportDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetBudgetPolicyId">resetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetComputeMaxInstances">resetComputeMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetComputeMinInstances">resetComputeMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetComputeSize">resetComputeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetGitRepository">resetGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetSpace">resetSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetTelemetryExportDestinations">resetTelemetryExportDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetUsagePolicyId">resetUsagePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetUserApiScopes">resetUserApiScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGitRepository` <a name="putGitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putGitRepository"></a>

```typescript
public putGitRepository(value: DataDatabricksAppsAppGitRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putGitRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a>

---

##### `putResources` <a name="putResources" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putResources"></a>

```typescript
public putResources(value: IResolvable | DataDatabricksAppsAppResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>[]

---

##### `putTelemetryExportDestinations` <a name="putTelemetryExportDestinations" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putTelemetryExportDestinations"></a>

```typescript
public putTelemetryExportDestinations(value: IResolvable | DataDatabricksAppsAppTelemetryExportDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putTelemetryExportDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>[]

---

##### `resetBudgetPolicyId` <a name="resetBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetBudgetPolicyId"></a>

```typescript
public resetBudgetPolicyId(): void
```

##### `resetComputeMaxInstances` <a name="resetComputeMaxInstances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetComputeMaxInstances"></a>

```typescript
public resetComputeMaxInstances(): void
```

##### `resetComputeMinInstances` <a name="resetComputeMinInstances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetComputeMinInstances"></a>

```typescript
public resetComputeMinInstances(): void
```

##### `resetComputeSize` <a name="resetComputeSize" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetComputeSize"></a>

```typescript
public resetComputeSize(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGitRepository` <a name="resetGitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetGitRepository"></a>

```typescript
public resetGitRepository(): void
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetSpace` <a name="resetSpace" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetSpace"></a>

```typescript
public resetSpace(): void
```

##### `resetTelemetryExportDestinations` <a name="resetTelemetryExportDestinations" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetTelemetryExportDestinations"></a>

```typescript
public resetTelemetryExportDestinations(): void
```

##### `resetUsagePolicyId` <a name="resetUsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetUsagePolicyId"></a>

```typescript
public resetUsagePolicyId(): void
```

##### `resetUserApiScopes` <a name="resetUserApiScopes" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetUserApiScopes"></a>

```typescript
public resetUserApiScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.activeDeployment">activeDeployment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference">DataDatabricksAppsAppActiveDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.appStatus">appStatus</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference">DataDatabricksAppsAppAppStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeStatus">computeStatus</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference">DataDatabricksAppsAppComputeStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.defaultSourceCodePath">defaultSourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveBudgetPolicyId">effectiveBudgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveUsagePolicyId">effectiveUsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveUserApiScopes">effectiveUserApiScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference">DataDatabricksAppsAppGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.oauth2AppClientId">oauth2AppClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.oauth2AppIntegrationId">oauth2AppIntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.pendingDeployment">pendingDeployment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference">DataDatabricksAppsAppPendingDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList">DataDatabricksAppsAppResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalClientId">servicePrincipalClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalId">servicePrincipalId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalName">servicePrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.telemetryExportDestinations">telemetryExportDestinations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList">DataDatabricksAppsAppTelemetryExportDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.thumbnailUrl">thumbnailUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.updater">updater</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.budgetPolicyIdInput">budgetPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeMaxInstancesInput">computeMaxInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeMinInstancesInput">computeMinInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeSizeInput">computeSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.gitRepositoryInput">gitRepositoryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.spaceInput">spaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.telemetryExportDestinationsInput">telemetryExportDestinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.usagePolicyIdInput">usagePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.userApiScopesInput">userApiScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeMaxInstances">computeMaxInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeMinInstances">computeMinInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeSize">computeSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.space">space</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.usagePolicyId">usagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.userApiScopes">userApiScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp">DataDatabricksAppsApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDeployment`<sup>Required</sup> <a name="activeDeployment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.activeDeployment"></a>

```typescript
public readonly activeDeployment: DataDatabricksAppsAppActiveDeploymentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference">DataDatabricksAppsAppActiveDeploymentOutputReference</a>

---

##### `appStatus`<sup>Required</sup> <a name="appStatus" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.appStatus"></a>

```typescript
public readonly appStatus: DataDatabricksAppsAppAppStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference">DataDatabricksAppsAppAppStatusOutputReference</a>

---

##### `computeStatus`<sup>Required</sup> <a name="computeStatus" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeStatus"></a>

```typescript
public readonly computeStatus: DataDatabricksAppsAppComputeStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference">DataDatabricksAppsAppComputeStatusOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `defaultSourceCodePath`<sup>Required</sup> <a name="defaultSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.defaultSourceCodePath"></a>

```typescript
public readonly defaultSourceCodePath: string;
```

- *Type:* string

---

##### `effectiveBudgetPolicyId`<sup>Required</sup> <a name="effectiveBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveBudgetPolicyId"></a>

```typescript
public readonly effectiveBudgetPolicyId: string;
```

- *Type:* string

---

##### `effectiveUsagePolicyId`<sup>Required</sup> <a name="effectiveUsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveUsagePolicyId"></a>

```typescript
public readonly effectiveUsagePolicyId: string;
```

- *Type:* string

---

##### `effectiveUserApiScopes`<sup>Required</sup> <a name="effectiveUserApiScopes" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveUserApiScopes"></a>

```typescript
public readonly effectiveUserApiScopes: string[];
```

- *Type:* string[]

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.gitRepository"></a>

```typescript
public readonly gitRepository: DataDatabricksAppsAppGitRepositoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference">DataDatabricksAppsAppGitRepositoryOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `oauth2AppClientId`<sup>Required</sup> <a name="oauth2AppClientId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.oauth2AppClientId"></a>

```typescript
public readonly oauth2AppClientId: string;
```

- *Type:* string

---

##### `oauth2AppIntegrationId`<sup>Required</sup> <a name="oauth2AppIntegrationId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.oauth2AppIntegrationId"></a>

```typescript
public readonly oauth2AppIntegrationId: string;
```

- *Type:* string

---

##### `pendingDeployment`<sup>Required</sup> <a name="pendingDeployment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.pendingDeployment"></a>

```typescript
public readonly pendingDeployment: DataDatabricksAppsAppPendingDeploymentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference">DataDatabricksAppsAppPendingDeploymentOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.resources"></a>

```typescript
public readonly resources: DataDatabricksAppsAppResourcesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList">DataDatabricksAppsAppResourcesList</a>

---

##### `servicePrincipalClientId`<sup>Required</sup> <a name="servicePrincipalClientId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalClientId"></a>

```typescript
public readonly servicePrincipalClientId: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: number;
```

- *Type:* number

---

##### `servicePrincipalName`<sup>Required</sup> <a name="servicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalName"></a>

```typescript
public readonly servicePrincipalName: string;
```

- *Type:* string

---

##### `telemetryExportDestinations`<sup>Required</sup> <a name="telemetryExportDestinations" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.telemetryExportDestinations"></a>

```typescript
public readonly telemetryExportDestinations: DataDatabricksAppsAppTelemetryExportDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList">DataDatabricksAppsAppTelemetryExportDestinationsList</a>

---

##### `thumbnailUrl`<sup>Required</sup> <a name="thumbnailUrl" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.thumbnailUrl"></a>

```typescript
public readonly thumbnailUrl: string;
```

- *Type:* string

---

##### `updater`<sup>Required</sup> <a name="updater" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.updater"></a>

```typescript
public readonly updater: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `budgetPolicyIdInput`<sup>Optional</sup> <a name="budgetPolicyIdInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.budgetPolicyIdInput"></a>

```typescript
public readonly budgetPolicyIdInput: string;
```

- *Type:* string

---

##### `computeMaxInstancesInput`<sup>Optional</sup> <a name="computeMaxInstancesInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeMaxInstancesInput"></a>

```typescript
public readonly computeMaxInstancesInput: number;
```

- *Type:* number

---

##### `computeMinInstancesInput`<sup>Optional</sup> <a name="computeMinInstancesInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeMinInstancesInput"></a>

```typescript
public readonly computeMinInstancesInput: number;
```

- *Type:* number

---

##### `computeSizeInput`<sup>Optional</sup> <a name="computeSizeInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeSizeInput"></a>

```typescript
public readonly computeSizeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `gitRepositoryInput`<sup>Optional</sup> <a name="gitRepositoryInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.gitRepositoryInput"></a>

```typescript
public readonly gitRepositoryInput: IResolvable | DataDatabricksAppsAppGitRepository;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: IResolvable | DataDatabricksAppsAppResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>[]

---

##### `spaceInput`<sup>Optional</sup> <a name="spaceInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.spaceInput"></a>

```typescript
public readonly spaceInput: string;
```

- *Type:* string

---

##### `telemetryExportDestinationsInput`<sup>Optional</sup> <a name="telemetryExportDestinationsInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.telemetryExportDestinationsInput"></a>

```typescript
public readonly telemetryExportDestinationsInput: IResolvable | DataDatabricksAppsAppTelemetryExportDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>[]

---

##### `usagePolicyIdInput`<sup>Optional</sup> <a name="usagePolicyIdInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.usagePolicyIdInput"></a>

```typescript
public readonly usagePolicyIdInput: string;
```

- *Type:* string

---

##### `userApiScopesInput`<sup>Optional</sup> <a name="userApiScopesInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.userApiScopesInput"></a>

```typescript
public readonly userApiScopesInput: string[];
```

- *Type:* string[]

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

---

##### `computeMaxInstances`<sup>Required</sup> <a name="computeMaxInstances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeMaxInstances"></a>

```typescript
public readonly computeMaxInstances: number;
```

- *Type:* number

---

##### `computeMinInstances`<sup>Required</sup> <a name="computeMinInstances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeMinInstances"></a>

```typescript
public readonly computeMinInstances: number;
```

- *Type:* number

---

##### `computeSize`<sup>Required</sup> <a name="computeSize" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeSize"></a>

```typescript
public readonly computeSize: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.space"></a>

```typescript
public readonly space: string;
```

- *Type:* string

---

##### `usagePolicyId`<sup>Required</sup> <a name="usagePolicyId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.usagePolicyId"></a>

```typescript
public readonly usagePolicyId: string;
```

- *Type:* string

---

##### `userApiScopes`<sup>Required</sup> <a name="userApiScopes" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.userApiScopes"></a>

```typescript
public readonly userApiScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAppsApp;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp">DataDatabricksAppsApp</a>

---


### DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference <a name="DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath"></a>

```typescript
public resetSourceCodePath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts">DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput"></a>

```typescript
public readonly sourceCodePathInput: string;
```

- *Type:* string

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts">DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts</a>

---


### DataDatabricksAppsAppPendingDeploymentEnvVarsList <a name="DataDatabricksAppsAppPendingDeploymentEnvVarsList" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.get"></a>

```typescript
public get(index: number): DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppPendingDeploymentEnvVars[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>[]

---


### DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference <a name="DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetValueFrom">resetValueFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueFrom` <a name="resetValueFrom" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetValueFrom"></a>

```typescript
public resetValueFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueFromInput">valueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueFrom">valueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueFromInput"></a>

```typescript
public readonly valueFromInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppPendingDeploymentEnvVars;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>

---


### DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference <a name="DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository">DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository">DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository</a>

---


### DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference <a name="DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetCommit">resetCommit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetCommit` <a name="resetCommit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetCommit"></a>

```typescript
public resetCommit(): void
```

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetSourceCodePath"></a>

```typescript
public resetSourceCodePath(): void
```

##### `resetTag` <a name="resetTag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference">DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.resolvedCommit">resolvedCommit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.commitInput">commitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.commit">commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.gitRepository"></a>

```typescript
public readonly gitRepository: DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference">DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference</a>

---

##### `resolvedCommit`<sup>Required</sup> <a name="resolvedCommit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.resolvedCommit"></a>

```typescript
public readonly resolvedCommit: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.commitInput"></a>

```typescript
public readonly commitInput: string;
```

- *Type:* string

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.sourceCodePathInput"></a>

```typescript
public readonly sourceCodePathInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppPendingDeploymentGitSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a>

---


### DataDatabricksAppsAppPendingDeploymentOutputReference <a name="DataDatabricksAppsAppPendingDeploymentOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putEnvVars">putEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putGitSource">putGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetEnvVars">resetEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetGitSource">resetGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvVars` <a name="putEnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putEnvVars"></a>

```typescript
public putEnvVars(value: IResolvable | DataDatabricksAppsAppPendingDeploymentEnvVars[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putEnvVars.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>[]

---

##### `putGitSource` <a name="putGitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putGitSource"></a>

```typescript
public putGitSource(value: DataDatabricksAppsAppPendingDeploymentGitSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putGitSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a>

---

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetDeploymentId` <a name="resetDeploymentId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetDeploymentId"></a>

```typescript
public resetDeploymentId(): void
```

##### `resetEnvVars` <a name="resetEnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetEnvVars"></a>

```typescript
public resetEnvVars(): void
```

##### `resetGitSource` <a name="resetGitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetGitSource"></a>

```typescript
public resetGitSource(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetSourceCodePath"></a>

```typescript
public resetSourceCodePath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentArtifacts">deploymentArtifacts</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.envVars">envVars</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList">DataDatabricksAppsAppPendingDeploymentEnvVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference">DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference">DataDatabricksAppsAppPendingDeploymentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.envVarsInput">envVarsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.gitSourceInput">gitSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment">DataDatabricksAppsAppPendingDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `deploymentArtifacts`<sup>Required</sup> <a name="deploymentArtifacts" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentArtifacts"></a>

```typescript
public readonly deploymentArtifacts: DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference</a>

---

##### `envVars`<sup>Required</sup> <a name="envVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.envVars"></a>

```typescript
public readonly envVars: DataDatabricksAppsAppPendingDeploymentEnvVarsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList">DataDatabricksAppsAppPendingDeploymentEnvVarsList</a>

---

##### `gitSource`<sup>Required</sup> <a name="gitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.gitSource"></a>

```typescript
public readonly gitSource: DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference">DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.status"></a>

```typescript
public readonly status: DataDatabricksAppsAppPendingDeploymentStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference">DataDatabricksAppsAppPendingDeploymentStatusOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `envVarsInput`<sup>Optional</sup> <a name="envVarsInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.envVarsInput"></a>

```typescript
public readonly envVarsInput: IResolvable | DataDatabricksAppsAppPendingDeploymentEnvVars[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>[]

---

##### `gitSourceInput`<sup>Optional</sup> <a name="gitSourceInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.gitSourceInput"></a>

```typescript
public readonly gitSourceInput: IResolvable | DataDatabricksAppsAppPendingDeploymentGitSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.sourceCodePathInput"></a>

```typescript
public readonly sourceCodePathInput: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAppsAppPendingDeployment;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment">DataDatabricksAppsAppPendingDeployment</a>

---


### DataDatabricksAppsAppPendingDeploymentStatusOutputReference <a name="DataDatabricksAppsAppPendingDeploymentStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus">DataDatabricksAppsAppPendingDeploymentStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAppsAppPendingDeploymentStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus">DataDatabricksAppsAppPendingDeploymentStatus</a>

---


### DataDatabricksAppsAppResourcesAppOutputReference <a name="DataDatabricksAppsAppResourcesAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppResourcesApp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a>

---


### DataDatabricksAppsAppResourcesDatabaseOutputReference <a name="DataDatabricksAppsAppResourcesDatabaseOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.instanceNameInput">instanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.instanceName">instanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.instanceNameInput"></a>

```typescript
public readonly instanceNameInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppResourcesDatabase;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a>

---


### DataDatabricksAppsAppResourcesExperimentOutputReference <a name="DataDatabricksAppsAppResourcesExperimentOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.experimentIdInput">experimentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.experimentId">experimentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `experimentIdInput`<sup>Optional</sup> <a name="experimentIdInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.experimentIdInput"></a>

```typescript
public readonly experimentIdInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `experimentId`<sup>Required</sup> <a name="experimentId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.experimentId"></a>

```typescript
public readonly experimentId: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppResourcesExperiment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a>

---


### DataDatabricksAppsAppResourcesGenieSpaceOutputReference <a name="DataDatabricksAppsAppResourcesGenieSpaceOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.spaceIdInput">spaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.spaceId">spaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `spaceIdInput`<sup>Optional</sup> <a name="spaceIdInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.spaceIdInput"></a>

```typescript
public readonly spaceIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppResourcesGenieSpace;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a>

---


### DataDatabricksAppsAppResourcesJobOutputReference <a name="DataDatabricksAppsAppResourcesJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppResourcesJob;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a>

---


### DataDatabricksAppsAppResourcesList <a name="DataDatabricksAppsAppResourcesList" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.get"></a>

```typescript
public get(index: number): DataDatabricksAppsAppResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>[]

---


### DataDatabricksAppsAppResourcesOutputReference <a name="DataDatabricksAppsAppResourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putApp">putApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putExperiment">putExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putGenieSpace">putGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putJob">putJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putPostgres">putPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putServingEndpoint">putServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSqlWarehouse">putSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putUcSecurable">putUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetApp">resetApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetExperiment">resetExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetGenieSpace">resetGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetJob">resetJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetPostgres">resetPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetServingEndpoint">resetServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetSqlWarehouse">resetSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetUcSecurable">resetUcSecurable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApp` <a name="putApp" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putApp"></a>

```typescript
public putApp(value: DataDatabricksAppsAppResourcesApp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putApp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a>

---

##### `putDatabase` <a name="putDatabase" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putDatabase"></a>

```typescript
public putDatabase(value: DataDatabricksAppsAppResourcesDatabase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a>

---

##### `putExperiment` <a name="putExperiment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putExperiment"></a>

```typescript
public putExperiment(value: DataDatabricksAppsAppResourcesExperiment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putExperiment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a>

---

##### `putGenieSpace` <a name="putGenieSpace" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putGenieSpace"></a>

```typescript
public putGenieSpace(value: DataDatabricksAppsAppResourcesGenieSpace): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putGenieSpace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a>

---

##### `putJob` <a name="putJob" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putJob"></a>

```typescript
public putJob(value: DataDatabricksAppsAppResourcesJob): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a>

---

##### `putPostgres` <a name="putPostgres" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putPostgres"></a>

```typescript
public putPostgres(value: DataDatabricksAppsAppResourcesPostgres): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putPostgres.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a>

---

##### `putSecret` <a name="putSecret" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSecret"></a>

```typescript
public putSecret(value: DataDatabricksAppsAppResourcesSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a>

---

##### `putServingEndpoint` <a name="putServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putServingEndpoint"></a>

```typescript
public putServingEndpoint(value: DataDatabricksAppsAppResourcesServingEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putServingEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a>

---

##### `putSqlWarehouse` <a name="putSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSqlWarehouse"></a>

```typescript
public putSqlWarehouse(value: DataDatabricksAppsAppResourcesSqlWarehouse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSqlWarehouse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a>

---

##### `putUcSecurable` <a name="putUcSecurable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putUcSecurable"></a>

```typescript
public putUcSecurable(value: DataDatabricksAppsAppResourcesUcSecurable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putUcSecurable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a>

---

##### `resetApp` <a name="resetApp" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetApp"></a>

```typescript
public resetApp(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExperiment` <a name="resetExperiment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetExperiment"></a>

```typescript
public resetExperiment(): void
```

##### `resetGenieSpace` <a name="resetGenieSpace" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetGenieSpace"></a>

```typescript
public resetGenieSpace(): void
```

##### `resetJob` <a name="resetJob" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetJob"></a>

```typescript
public resetJob(): void
```

##### `resetPostgres` <a name="resetPostgres" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetPostgres"></a>

```typescript
public resetPostgres(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetServingEndpoint` <a name="resetServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetServingEndpoint"></a>

```typescript
public resetServingEndpoint(): void
```

##### `resetSqlWarehouse` <a name="resetSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetSqlWarehouse"></a>

```typescript
public resetSqlWarehouse(): void
```

##### `resetUcSecurable` <a name="resetUcSecurable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetUcSecurable"></a>

```typescript
public resetUcSecurable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference">DataDatabricksAppsAppResourcesAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference">DataDatabricksAppsAppResourcesDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.experiment">experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference">DataDatabricksAppsAppResourcesExperimentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.genieSpace">genieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference">DataDatabricksAppsAppResourcesGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.job">job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference">DataDatabricksAppsAppResourcesJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.postgres">postgres</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference">DataDatabricksAppsAppResourcesPostgresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference">DataDatabricksAppsAppResourcesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.servingEndpoint">servingEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference">DataDatabricksAppsAppResourcesServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.sqlWarehouse">sqlWarehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference">DataDatabricksAppsAppResourcesSqlWarehouseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.ucSecurable">ucSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference">DataDatabricksAppsAppResourcesUcSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.appInput">appInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.databaseInput">databaseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.experimentInput">experimentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.genieSpaceInput">genieSpaceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.jobInput">jobInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.postgresInput">postgresInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.secretInput">secretInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.servingEndpointInput">servingEndpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.sqlWarehouseInput">sqlWarehouseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.ucSecurableInput">ucSecurableInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.app"></a>

```typescript
public readonly app: DataDatabricksAppsAppResourcesAppOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference">DataDatabricksAppsAppResourcesAppOutputReference</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.database"></a>

```typescript
public readonly database: DataDatabricksAppsAppResourcesDatabaseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference">DataDatabricksAppsAppResourcesDatabaseOutputReference</a>

---

##### `experiment`<sup>Required</sup> <a name="experiment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.experiment"></a>

```typescript
public readonly experiment: DataDatabricksAppsAppResourcesExperimentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference">DataDatabricksAppsAppResourcesExperimentOutputReference</a>

---

##### `genieSpace`<sup>Required</sup> <a name="genieSpace" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.genieSpace"></a>

```typescript
public readonly genieSpace: DataDatabricksAppsAppResourcesGenieSpaceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference">DataDatabricksAppsAppResourcesGenieSpaceOutputReference</a>

---

##### `job`<sup>Required</sup> <a name="job" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.job"></a>

```typescript
public readonly job: DataDatabricksAppsAppResourcesJobOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference">DataDatabricksAppsAppResourcesJobOutputReference</a>

---

##### `postgres`<sup>Required</sup> <a name="postgres" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.postgres"></a>

```typescript
public readonly postgres: DataDatabricksAppsAppResourcesPostgresOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference">DataDatabricksAppsAppResourcesPostgresOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.secret"></a>

```typescript
public readonly secret: DataDatabricksAppsAppResourcesSecretOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference">DataDatabricksAppsAppResourcesSecretOutputReference</a>

---

##### `servingEndpoint`<sup>Required</sup> <a name="servingEndpoint" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.servingEndpoint"></a>

```typescript
public readonly servingEndpoint: DataDatabricksAppsAppResourcesServingEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference">DataDatabricksAppsAppResourcesServingEndpointOutputReference</a>

---

##### `sqlWarehouse`<sup>Required</sup> <a name="sqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.sqlWarehouse"></a>

```typescript
public readonly sqlWarehouse: DataDatabricksAppsAppResourcesSqlWarehouseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference">DataDatabricksAppsAppResourcesSqlWarehouseOutputReference</a>

---

##### `ucSecurable`<sup>Required</sup> <a name="ucSecurable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.ucSecurable"></a>

```typescript
public readonly ucSecurable: DataDatabricksAppsAppResourcesUcSecurableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference">DataDatabricksAppsAppResourcesUcSecurableOutputReference</a>

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.appInput"></a>

```typescript
public readonly appInput: IResolvable | DataDatabricksAppsAppResourcesApp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: IResolvable | DataDatabricksAppsAppResourcesDatabase;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `experimentInput`<sup>Optional</sup> <a name="experimentInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.experimentInput"></a>

```typescript
public readonly experimentInput: IResolvable | DataDatabricksAppsAppResourcesExperiment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a>

---

##### `genieSpaceInput`<sup>Optional</sup> <a name="genieSpaceInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.genieSpaceInput"></a>

```typescript
public readonly genieSpaceInput: IResolvable | DataDatabricksAppsAppResourcesGenieSpace;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a>

---

##### `jobInput`<sup>Optional</sup> <a name="jobInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.jobInput"></a>

```typescript
public readonly jobInput: IResolvable | DataDatabricksAppsAppResourcesJob;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `postgresInput`<sup>Optional</sup> <a name="postgresInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.postgresInput"></a>

```typescript
public readonly postgresInput: IResolvable | DataDatabricksAppsAppResourcesPostgres;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a>

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: IResolvable | DataDatabricksAppsAppResourcesSecret;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a>

---

##### `servingEndpointInput`<sup>Optional</sup> <a name="servingEndpointInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.servingEndpointInput"></a>

```typescript
public readonly servingEndpointInput: IResolvable | DataDatabricksAppsAppResourcesServingEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a>

---

##### `sqlWarehouseInput`<sup>Optional</sup> <a name="sqlWarehouseInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.sqlWarehouseInput"></a>

```typescript
public readonly sqlWarehouseInput: IResolvable | DataDatabricksAppsAppResourcesSqlWarehouse;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a>

---

##### `ucSecurableInput`<sup>Optional</sup> <a name="ucSecurableInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.ucSecurableInput"></a>

```typescript
public readonly ucSecurableInput: IResolvable | DataDatabricksAppsAppResourcesUcSecurable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>

---


### DataDatabricksAppsAppResourcesPostgresOutputReference <a name="DataDatabricksAppsAppResourcesPostgresOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppResourcesPostgres;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a>

---


### DataDatabricksAppsAppResourcesSecretOutputReference <a name="DataDatabricksAppsAppResourcesSecretOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppResourcesSecret;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a>

---


### DataDatabricksAppsAppResourcesServingEndpointOutputReference <a name="DataDatabricksAppsAppResourcesServingEndpointOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppResourcesServingEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a>

---


### DataDatabricksAppsAppResourcesSqlWarehouseOutputReference <a name="DataDatabricksAppsAppResourcesSqlWarehouseOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppResourcesSqlWarehouse;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a>

---


### DataDatabricksAppsAppResourcesUcSecurableOutputReference <a name="DataDatabricksAppsAppResourcesUcSecurableOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableKind">securableKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableFullNameInput">securableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableTypeInput">securableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableFullName">securableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableType">securableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securableKind`<sup>Required</sup> <a name="securableKind" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableKind"></a>

```typescript
public readonly securableKind: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `securableFullNameInput`<sup>Optional</sup> <a name="securableFullNameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableFullNameInput"></a>

```typescript
public readonly securableFullNameInput: string;
```

- *Type:* string

---

##### `securableTypeInput`<sup>Optional</sup> <a name="securableTypeInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableTypeInput"></a>

```typescript
public readonly securableTypeInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `securableFullName`<sup>Required</sup> <a name="securableFullName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableFullName"></a>

```typescript
public readonly securableFullName: string;
```

- *Type:* string

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppResourcesUcSecurable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a>

---


### DataDatabricksAppsAppTelemetryExportDestinationsList <a name="DataDatabricksAppsAppTelemetryExportDestinationsList" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.get"></a>

```typescript
public get(index: number): DataDatabricksAppsAppTelemetryExportDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppTelemetryExportDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>[]

---


### DataDatabricksAppsAppTelemetryExportDestinationsOutputReference <a name="DataDatabricksAppsAppTelemetryExportDestinationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.putUnityCatalog">putUnityCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.resetUnityCatalog">resetUnityCatalog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUnityCatalog` <a name="putUnityCatalog" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.putUnityCatalog"></a>

```typescript
public putUnityCatalog(value: DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.putUnityCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a>

---

##### `resetUnityCatalog` <a name="resetUnityCatalog" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.resetUnityCatalog"></a>

```typescript
public resetUnityCatalog(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.unityCatalog">unityCatalog</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.unityCatalogInput">unityCatalogInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unityCatalog`<sup>Required</sup> <a name="unityCatalog" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.unityCatalog"></a>

```typescript
public readonly unityCatalog: DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference</a>

---

##### `unityCatalogInput`<sup>Optional</sup> <a name="unityCatalogInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.unityCatalogInput"></a>

```typescript
public readonly unityCatalogInput: IResolvable | DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppTelemetryExportDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>

---


### DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference <a name="DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTableInput">logsTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTableInput">metricsTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTableInput">tracesTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTable">logsTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTable">metricsTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTable">tracesTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logsTableInput`<sup>Optional</sup> <a name="logsTableInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTableInput"></a>

```typescript
public readonly logsTableInput: string;
```

- *Type:* string

---

##### `metricsTableInput`<sup>Optional</sup> <a name="metricsTableInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTableInput"></a>

```typescript
public readonly metricsTableInput: string;
```

- *Type:* string

---

##### `tracesTableInput`<sup>Optional</sup> <a name="tracesTableInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTableInput"></a>

```typescript
public readonly tracesTableInput: string;
```

- *Type:* string

---

##### `logsTable`<sup>Required</sup> <a name="logsTable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTable"></a>

```typescript
public readonly logsTable: string;
```

- *Type:* string

---

##### `metricsTable`<sup>Required</sup> <a name="metricsTable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTable"></a>

```typescript
public readonly metricsTable: string;
```

- *Type:* string

---

##### `tracesTable`<sup>Required</sup> <a name="tracesTable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTable"></a>

```typescript
public readonly tracesTable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a>

---


### DataDatabricksAppsProviderConfigOutputReference <a name="DataDatabricksAppsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksApps } from '@cdktn/provider-databricks'

new dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a>

---



