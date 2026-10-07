# `dataDatabricksMasonManagedMemoryStore` Submodule <a name="`dataDatabricksMasonManagedMemoryStore` Submodule" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMasonManagedMemoryStore <a name="DataDatabricksMasonManagedMemoryStore" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store databricks_mason_managed_memory_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStore } from '@cdktn/provider-databricks'

new dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore(scope: Construct, id: string, config: DataDatabricksMasonManagedMemoryStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig">DataDatabricksMasonManagedMemoryStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig">DataDatabricksMasonManagedMemoryStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksMasonManagedMemoryStoreProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isConstruct"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStore } from '@cdktn/provider-databricks'

dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformElement"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStore } from '@cdktn/provider-databricks'

dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformDataSource"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStore } from '@cdktn/provider-databricks'

dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStore } from '@cdktn/provider-databricks'

dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMasonManagedMemoryStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMasonManagedMemoryStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMasonManagedMemoryStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.creatorUserId">creatorUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.ownerUserId">ownerUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.storageBackend">storageBackend</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference">DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.workspaceId">workspaceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creatorUserId`<sup>Required</sup> <a name="creatorUserId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.creatorUserId"></a>

```typescript
public readonly creatorUserId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `ownerUserId`<sup>Required</sup> <a name="ownerUserId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.ownerUserId"></a>

```typescript
public readonly ownerUserId: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference</a>

---

##### `storageBackend`<sup>Required</sup> <a name="storageBackend" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.storageBackend"></a>

```typescript
public readonly storageBackend: DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference">DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksMasonManagedMemoryStoreProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMasonManagedMemoryStoreConfig <a name="DataDatabricksMasonManagedMemoryStoreConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStore } from '@cdktn/provider-databricks'

const dataDatabricksMasonManagedMemoryStoreConfig: dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#name DataDatabricksMasonManagedMemoryStore#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#provider_config DataDatabricksMasonManagedMemoryStore#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#name DataDatabricksMasonManagedMemoryStore#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMasonManagedMemoryStoreProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#provider_config DataDatabricksMasonManagedMemoryStore#provider_config}.

---

### DataDatabricksMasonManagedMemoryStoreProviderConfig <a name="DataDatabricksMasonManagedMemoryStoreProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStore } from '@cdktn/provider-databricks'

const dataDatabricksMasonManagedMemoryStoreProviderConfig: dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#workspace_id DataDatabricksMasonManagedMemoryStore#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#workspace_id DataDatabricksMasonManagedMemoryStore#workspace_id}.

---

### DataDatabricksMasonManagedMemoryStoreStorageBackend <a name="DataDatabricksMasonManagedMemoryStoreStorageBackend" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackend.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStore } from '@cdktn/provider-databricks'

const dataDatabricksMasonManagedMemoryStoreStorageBackend: dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackend = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStore } from '@cdktn/provider-databricks'

new dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksMasonManagedMemoryStoreProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a>

---


### DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference <a name="DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStore } from '@cdktn/provider-databricks'

new dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.backendId">backendId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.backendType">backendType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackend">DataDatabricksMasonManagedMemoryStoreStorageBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendId`<sup>Required</sup> <a name="backendId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.backendId"></a>

```typescript
public readonly backendId: string;
```

- *Type:* string

---

##### `backendType`<sup>Required</sup> <a name="backendType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.backendType"></a>

```typescript
public readonly backendType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksMasonManagedMemoryStoreStorageBackend;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackend">DataDatabricksMasonManagedMemoryStoreStorageBackend</a>

---



