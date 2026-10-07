# `dataDatabricksMasonManagedMemoryStores` Submodule <a name="`dataDatabricksMasonManagedMemoryStores` Submodule" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMasonManagedMemoryStores <a name="DataDatabricksMasonManagedMemoryStores" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores databricks_mason_managed_memory_stores}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStores } from '@cdktn/provider-databricks'

new dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores(scope: Construct, id: string, config?: DataDatabricksMasonManagedMemoryStoresConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig">DataDatabricksMasonManagedMemoryStoresConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig">DataDatabricksMasonManagedMemoryStoresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksMasonManagedMemoryStoresProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryStores resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isConstruct"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStores } from '@cdktn/provider-databricks'

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformElement"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStores } from '@cdktn/provider-databricks'

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformDataSource"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStores } from '@cdktn/provider-databricks'

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStores } from '@cdktn/provider-databricks'

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryStores resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMasonManagedMemoryStores to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMasonManagedMemoryStores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMasonManagedMemoryStores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.managedMemoryStores">managedMemoryStores</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `managedMemoryStores`<sup>Required</sup> <a name="managedMemoryStores" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.managedMemoryStores"></a>

```typescript
public readonly managedMemoryStores: DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksMasonManagedMemoryStoresProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMasonManagedMemoryStoresConfig <a name="DataDatabricksMasonManagedMemoryStoresConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStores } from '@cdktn/provider-databricks'

const dataDatabricksMasonManagedMemoryStoresConfig: dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#page_size DataDatabricksMasonManagedMemoryStores#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#provider_config DataDatabricksMasonManagedMemoryStores#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#page_size DataDatabricksMasonManagedMemoryStores#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMasonManagedMemoryStoresProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#provider_config DataDatabricksMasonManagedMemoryStores#provider_config}.

---

### DataDatabricksMasonManagedMemoryStoresManagedMemoryStores <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStores" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStores } from '@cdktn/provider-databricks'

const dataDatabricksMasonManagedMemoryStoresManagedMemoryStores: dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#name DataDatabricksMasonManagedMemoryStores#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#provider_config DataDatabricksMasonManagedMemoryStores#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#name DataDatabricksMasonManagedMemoryStores#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#provider_config DataDatabricksMasonManagedMemoryStores#provider_config}.

---

### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStores } from '@cdktn/provider-databricks'

const dataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig: dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#workspace_id DataDatabricksMasonManagedMemoryStores#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#workspace_id DataDatabricksMasonManagedMemoryStores#workspace_id}.

---

### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStores } from '@cdktn/provider-databricks'

const dataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend: dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend = { ... }
```


### DataDatabricksMasonManagedMemoryStoresProviderConfig <a name="DataDatabricksMasonManagedMemoryStoresProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStores } from '@cdktn/provider-databricks'

const dataDatabricksMasonManagedMemoryStoresProviderConfig: dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#workspace_id DataDatabricksMasonManagedMemoryStores#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#workspace_id DataDatabricksMasonManagedMemoryStores#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStores } from '@cdktn/provider-databricks'

new dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.get"></a>

```typescript
public get(index: number): DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores">DataDatabricksMasonManagedMemoryStoresManagedMemoryStores</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksMasonManagedMemoryStoresManagedMemoryStores[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores">DataDatabricksMasonManagedMemoryStoresManagedMemoryStores</a>[]

---


### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStores } from '@cdktn/provider-databricks'

new dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.creatorUserId">creatorUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.ownerUserId">ownerUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.storageBackend">storageBackend</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.workspaceId">workspaceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores">DataDatabricksMasonManagedMemoryStoresManagedMemoryStores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creatorUserId`<sup>Required</sup> <a name="creatorUserId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.creatorUserId"></a>

```typescript
public readonly creatorUserId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `ownerUserId`<sup>Required</sup> <a name="ownerUserId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.ownerUserId"></a>

```typescript
public readonly ownerUserId: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference</a>

---

##### `storageBackend`<sup>Required</sup> <a name="storageBackend" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.storageBackend"></a>

```typescript
public readonly storageBackend: DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksMasonManagedMemoryStoresManagedMemoryStores;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores">DataDatabricksMasonManagedMemoryStoresManagedMemoryStores</a>

---


### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStores } from '@cdktn/provider-databricks'

new dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

---


### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStores } from '@cdktn/provider-databricks'

new dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendId">backendId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendType">backendType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendId`<sup>Required</sup> <a name="backendId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendId"></a>

```typescript
public readonly backendId: string;
```

- *Type:* string

---

##### `backendType`<sup>Required</sup> <a name="backendType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendType"></a>

```typescript
public readonly backendType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend</a>

---


### DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMasonManagedMemoryStores } from '@cdktn/provider-databricks'

new dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksMasonManagedMemoryStoresProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a>

---



