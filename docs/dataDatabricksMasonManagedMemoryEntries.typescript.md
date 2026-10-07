# `dataDatabricksMasonManagedMemoryEntries` Submodule <a name="`dataDatabricksMasonManagedMemoryEntries` Submodule" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMasonManagedMemoryEntries <a name="DataDatabricksMasonManagedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries databricks_mason_managed_memory_entries}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryEntries } from '@cdktn/provider-databricks'

new dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries(scope: Construct, id: string, config: DataDatabricksMasonManagedMemoryEntriesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig">DataDatabricksMasonManagedMemoryEntriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig">DataDatabricksMasonManagedMemoryEntriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetPathPrefix">resetPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetReadMask">resetReadMask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetSessionId">resetSessionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksMasonManagedMemoryEntriesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetPathPrefix` <a name="resetPathPrefix" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetPathPrefix"></a>

```typescript
public resetPathPrefix(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetReadMask` <a name="resetReadMask" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetReadMask"></a>

```typescript
public resetReadMask(): void
```

##### `resetSessionId` <a name="resetSessionId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetSessionId"></a>

```typescript
public resetSessionId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryEntries resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isConstruct"></a>

```typescript
import { dataDatabricksMasonManagedMemoryEntries } from '@cdktn/provider-databricks'

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformElement"></a>

```typescript
import { dataDatabricksMasonManagedMemoryEntries } from '@cdktn/provider-databricks'

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformDataSource"></a>

```typescript
import { dataDatabricksMasonManagedMemoryEntries } from '@cdktn/provider-databricks'

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport"></a>

```typescript
import { dataDatabricksMasonManagedMemoryEntries } from '@cdktn/provider-databricks'

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryEntries resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMasonManagedMemoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMasonManagedMemoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMasonManagedMemoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.managedMemoryEntries">managedMemoryEntries</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.actorIdInput">actorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pathPrefixInput">pathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.readMaskInput">readMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.sessionIdInput">sessionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.actorId">actorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.readMask">readMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.sessionId">sessionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `managedMemoryEntries`<sup>Required</sup> <a name="managedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.managedMemoryEntries"></a>

```typescript
public readonly managedMemoryEntries: DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference</a>

---

##### `actorIdInput`<sup>Optional</sup> <a name="actorIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.actorIdInput"></a>

```typescript
public readonly actorIdInput: string;
```

- *Type:* string

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `pathPrefixInput`<sup>Optional</sup> <a name="pathPrefixInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pathPrefixInput"></a>

```typescript
public readonly pathPrefixInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksMasonManagedMemoryEntriesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a>

---

##### `readMaskInput`<sup>Optional</sup> <a name="readMaskInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.readMaskInput"></a>

```typescript
public readonly readMaskInput: string;
```

- *Type:* string

---

##### `sessionIdInput`<sup>Optional</sup> <a name="sessionIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.sessionIdInput"></a>

```typescript
public readonly sessionIdInput: string;
```

- *Type:* string

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.actorId"></a>

```typescript
public readonly actorId: string;
```

- *Type:* string

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

---

##### `readMask`<sup>Required</sup> <a name="readMask" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.readMask"></a>

```typescript
public readonly readMask: string;
```

- *Type:* string

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMasonManagedMemoryEntriesConfig <a name="DataDatabricksMasonManagedMemoryEntriesConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryEntries } from '@cdktn/provider-databricks'

const dataDatabricksMasonManagedMemoryEntriesConfig: dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.actorId">actorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#actor_id DataDatabricksMasonManagedMemoryEntries#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#parent DataDatabricksMasonManagedMemoryEntries#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#page_size DataDatabricksMasonManagedMemoryEntries#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#path_prefix DataDatabricksMasonManagedMemoryEntries#path_prefix}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.readMask">readMask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#read_mask DataDatabricksMasonManagedMemoryEntries#read_mask}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.sessionId">sessionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#session_id DataDatabricksMasonManagedMemoryEntries#session_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.actorId"></a>

```typescript
public readonly actorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#actor_id DataDatabricksMasonManagedMemoryEntries#actor_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#parent DataDatabricksMasonManagedMemoryEntries#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#page_size DataDatabricksMasonManagedMemoryEntries#page_size}.

---

##### `pathPrefix`<sup>Optional</sup> <a name="pathPrefix" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#path_prefix DataDatabricksMasonManagedMemoryEntries#path_prefix}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMasonManagedMemoryEntriesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}.

---

##### `readMask`<sup>Optional</sup> <a name="readMask" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.readMask"></a>

```typescript
public readonly readMask: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#read_mask DataDatabricksMasonManagedMemoryEntries#read_mask}.

---

##### `sessionId`<sup>Optional</sup> <a name="sessionId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#session_id DataDatabricksMasonManagedMemoryEntries#session_id}.

---

### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryEntries } from '@cdktn/provider-databricks'

const dataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries: dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#name DataDatabricksMasonManagedMemoryEntries#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#name DataDatabricksMasonManagedMemoryEntries#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}.

---

### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryEntries } from '@cdktn/provider-databricks'

const dataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig: dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}.

---

### DataDatabricksMasonManagedMemoryEntriesProviderConfig <a name="DataDatabricksMasonManagedMemoryEntriesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryEntries } from '@cdktn/provider-databricks'

const dataDatabricksMasonManagedMemoryEntriesProviderConfig: dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryEntries } from '@cdktn/provider-databricks'

new dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.get"></a>

```typescript
public get(index: number): DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries</a>[]

---


### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryEntries } from '@cdktn/provider-databricks'

new dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.actorId">actorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sessionId">sessionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.actorId"></a>

```typescript
public readonly actorId: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference</a>

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries</a>

---


### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryEntries } from '@cdktn/provider-databricks'

new dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

---


### DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryEntries } from '@cdktn/provider-databricks'

new dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksMasonManagedMemoryEntriesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a>

---



