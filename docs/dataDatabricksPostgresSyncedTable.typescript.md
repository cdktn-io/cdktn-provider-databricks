# `dataDatabricksPostgresSyncedTable` Submodule <a name="`dataDatabricksPostgresSyncedTable` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresSyncedTable <a name="DataDatabricksPostgresSyncedTable" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table databricks_postgres_synced_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable(scope: Construct, id: string, config: DataDatabricksPostgresSyncedTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig">DataDatabricksPostgresSyncedTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig">DataDatabricksPostgresSyncedTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksPostgresSyncedTableProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresSyncedTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isConstruct"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformElement"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformDataSource"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksPostgresSyncedTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresSyncedTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresSyncedTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresSyncedTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference">DataDatabricksPostgresSyncedTableProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference">DataDatabricksPostgresSyncedTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference">DataDatabricksPostgresSyncedTableStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.syncedTableId">syncedTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresSyncedTableProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference">DataDatabricksPostgresSyncedTableProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.spec"></a>

```typescript
public readonly spec: DataDatabricksPostgresSyncedTableSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference">DataDatabricksPostgresSyncedTableSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.status"></a>

```typescript
public readonly status: DataDatabricksPostgresSyncedTableStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference">DataDatabricksPostgresSyncedTableStatusOutputReference</a>

---

##### `syncedTableId`<sup>Required</sup> <a name="syncedTableId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.syncedTableId"></a>

```typescript
public readonly syncedTableId: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksPostgresSyncedTableProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresSyncedTableConfig <a name="DataDatabricksPostgresSyncedTableConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

const dataDatabricksPostgresSyncedTableConfig: dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#name DataDatabricksPostgresSyncedTable#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#provider_config DataDatabricksPostgresSyncedTable#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#name DataDatabricksPostgresSyncedTable#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresSyncedTableProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#provider_config DataDatabricksPostgresSyncedTable#provider_config}.

---

### DataDatabricksPostgresSyncedTableProviderConfig <a name="DataDatabricksPostgresSyncedTableProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

const dataDatabricksPostgresSyncedTableProviderConfig: dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#workspace_id DataDatabricksPostgresSyncedTable#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#workspace_id DataDatabricksPostgresSyncedTable#workspace_id}.

---

### DataDatabricksPostgresSyncedTableSpec <a name="DataDatabricksPostgresSyncedTableSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

const dataDatabricksPostgresSyncedTableSpec: dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.acceleratedSync">acceleratedSync</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#accelerated_sync DataDatabricksPostgresSyncedTable#accelerated_sync}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#branch DataDatabricksPostgresSyncedTable#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing">createDatabaseObjectsIfMissing</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#create_database_objects_if_missing DataDatabricksPostgresSyncedTable#create_database_objects_if_missing}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.existingPipelineId">existingPipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#existing_pipeline_id DataDatabricksPostgresSyncedTable#existing_pipeline_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.extraColumns">extraColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#extra_columns DataDatabricksPostgresSyncedTable#extra_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.newPipelineSpec">newPipelineSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#new_pipeline_spec DataDatabricksPostgresSyncedTable#new_pipeline_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.postgresDatabase">postgresDatabase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#postgres_database DataDatabricksPostgresSyncedTable#postgres_database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.primaryKeyColumns">primaryKeyColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#primary_key_columns DataDatabricksPostgresSyncedTable#primary_key_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.schedulingPolicy">schedulingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#scheduling_policy DataDatabricksPostgresSyncedTable#scheduling_policy}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.sourceTableFullName">sourceTableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#source_table_full_name DataDatabricksPostgresSyncedTable#source_table_full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.timeseriesKey">timeseriesKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#timeseries_key DataDatabricksPostgresSyncedTable#timeseries_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.typeOverrides">typeOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#type_overrides DataDatabricksPostgresSyncedTable#type_overrides}. |

---

##### `acceleratedSync`<sup>Optional</sup> <a name="acceleratedSync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.acceleratedSync"></a>

```typescript
public readonly acceleratedSync: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#accelerated_sync DataDatabricksPostgresSyncedTable#accelerated_sync}.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#branch DataDatabricksPostgresSyncedTable#branch}.

---

##### `createDatabaseObjectsIfMissing`<sup>Optional</sup> <a name="createDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing"></a>

```typescript
public readonly createDatabaseObjectsIfMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#create_database_objects_if_missing DataDatabricksPostgresSyncedTable#create_database_objects_if_missing}.

---

##### `existingPipelineId`<sup>Optional</sup> <a name="existingPipelineId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.existingPipelineId"></a>

```typescript
public readonly existingPipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#existing_pipeline_id DataDatabricksPostgresSyncedTable#existing_pipeline_id}.

---

##### `extraColumns`<sup>Optional</sup> <a name="extraColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.extraColumns"></a>

```typescript
public readonly extraColumns: IResolvable | DataDatabricksPostgresSyncedTableSpecExtraColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#extra_columns DataDatabricksPostgresSyncedTable#extra_columns}.

---

##### `newPipelineSpec`<sup>Optional</sup> <a name="newPipelineSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.newPipelineSpec"></a>

```typescript
public readonly newPipelineSpec: DataDatabricksPostgresSyncedTableSpecNewPipelineSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#new_pipeline_spec DataDatabricksPostgresSyncedTable#new_pipeline_spec}.

---

##### `postgresDatabase`<sup>Optional</sup> <a name="postgresDatabase" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.postgresDatabase"></a>

```typescript
public readonly postgresDatabase: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#postgres_database DataDatabricksPostgresSyncedTable#postgres_database}.

---

##### `primaryKeyColumns`<sup>Optional</sup> <a name="primaryKeyColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.primaryKeyColumns"></a>

```typescript
public readonly primaryKeyColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#primary_key_columns DataDatabricksPostgresSyncedTable#primary_key_columns}.

---

##### `schedulingPolicy`<sup>Optional</sup> <a name="schedulingPolicy" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.schedulingPolicy"></a>

```typescript
public readonly schedulingPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#scheduling_policy DataDatabricksPostgresSyncedTable#scheduling_policy}.

---

##### `sourceTableFullName`<sup>Optional</sup> <a name="sourceTableFullName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.sourceTableFullName"></a>

```typescript
public readonly sourceTableFullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#source_table_full_name DataDatabricksPostgresSyncedTable#source_table_full_name}.

---

##### `timeseriesKey`<sup>Optional</sup> <a name="timeseriesKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.timeseriesKey"></a>

```typescript
public readonly timeseriesKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#timeseries_key DataDatabricksPostgresSyncedTable#timeseries_key}.

---

##### `typeOverrides`<sup>Optional</sup> <a name="typeOverrides" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.typeOverrides"></a>

```typescript
public readonly typeOverrides: IResolvable | DataDatabricksPostgresSyncedTableSpecTypeOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#type_overrides DataDatabricksPostgresSyncedTable#type_overrides}.

---

### DataDatabricksPostgresSyncedTableSpecExtraColumns <a name="DataDatabricksPostgresSyncedTableSpecExtraColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

const dataDatabricksPostgresSyncedTableSpecExtraColumns: dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.columnName">columnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#column_name DataDatabricksPostgresSyncedTable#column_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.columnType">columnType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#column_type DataDatabricksPostgresSyncedTable#column_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.compute">compute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#compute DataDatabricksPostgresSyncedTable#compute}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.maintenance">maintenance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#maintenance DataDatabricksPostgresSyncedTable#maintenance}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#column_name DataDatabricksPostgresSyncedTable#column_name}.

---

##### `columnType`<sup>Required</sup> <a name="columnType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.columnType"></a>

```typescript
public readonly columnType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#column_type DataDatabricksPostgresSyncedTable#column_type}.

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.compute"></a>

```typescript
public readonly compute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#compute DataDatabricksPostgresSyncedTable#compute}.

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.maintenance"></a>

```typescript
public readonly maintenance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#maintenance DataDatabricksPostgresSyncedTable#maintenance}.

---

### DataDatabricksPostgresSyncedTableSpecNewPipelineSpec <a name="DataDatabricksPostgresSyncedTableSpecNewPipelineSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

const dataDatabricksPostgresSyncedTableSpecNewPipelineSpec: dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#budget_policy_id DataDatabricksPostgresSyncedTable#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.pipelineChannel">pipelineChannel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#pipeline_channel DataDatabricksPostgresSyncedTable#pipeline_channel}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog">storageCatalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#storage_catalog DataDatabricksPostgresSyncedTable#storage_catalog}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.storageSchema">storageSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#storage_schema DataDatabricksPostgresSyncedTable#storage_schema}. |

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#budget_policy_id DataDatabricksPostgresSyncedTable#budget_policy_id}.

---

##### `pipelineChannel`<sup>Optional</sup> <a name="pipelineChannel" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.pipelineChannel"></a>

```typescript
public readonly pipelineChannel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#pipeline_channel DataDatabricksPostgresSyncedTable#pipeline_channel}.

---

##### `storageCatalog`<sup>Optional</sup> <a name="storageCatalog" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog"></a>

```typescript
public readonly storageCatalog: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#storage_catalog DataDatabricksPostgresSyncedTable#storage_catalog}.

---

##### `storageSchema`<sup>Optional</sup> <a name="storageSchema" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.storageSchema"></a>

```typescript
public readonly storageSchema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#storage_schema DataDatabricksPostgresSyncedTable#storage_schema}.

---

### DataDatabricksPostgresSyncedTableSpecTypeOverrides <a name="DataDatabricksPostgresSyncedTableSpecTypeOverrides" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

const dataDatabricksPostgresSyncedTableSpecTypeOverrides: dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.columnName">columnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#column_name DataDatabricksPostgresSyncedTable#column_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.pgType">pgType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#pg_type DataDatabricksPostgresSyncedTable#pg_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#size DataDatabricksPostgresSyncedTable#size}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#column_name DataDatabricksPostgresSyncedTable#column_name}.

---

##### `pgType`<sup>Required</sup> <a name="pgType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.pgType"></a>

```typescript
public readonly pgType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#pg_type DataDatabricksPostgresSyncedTable#pg_type}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#size DataDatabricksPostgresSyncedTable#size}.

---

### DataDatabricksPostgresSyncedTableStatus <a name="DataDatabricksPostgresSyncedTableStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

const dataDatabricksPostgresSyncedTableStatus: dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus = { ... }
```


### DataDatabricksPostgresSyncedTableStatusLastSync <a name="DataDatabricksPostgresSyncedTableStatusLastSync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

const dataDatabricksPostgresSyncedTableStatusLastSync: dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync = { ... }
```


### DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo <a name="DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

const dataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo: dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo = { ... }
```


### DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress <a name="DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

const dataDatabricksPostgresSyncedTableStatusOngoingSyncProgress: dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresSyncedTableProviderConfigOutputReference <a name="DataDatabricksPostgresSyncedTableProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresSyncedTableProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

---


### DataDatabricksPostgresSyncedTableSpecExtraColumnsList <a name="DataDatabricksPostgresSyncedTableSpecExtraColumnsList" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.get"></a>

```typescript
public get(index: number): DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresSyncedTableSpecExtraColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>[]

---


### DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference <a name="DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resetCompute">resetCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resetMaintenance">resetMaintenance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompute` <a name="resetCompute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resetCompute"></a>

```typescript
public resetCompute(): void
```

##### `resetMaintenance` <a name="resetMaintenance" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resetMaintenance"></a>

```typescript
public resetMaintenance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnTypeInput">columnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.computeInput">computeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenanceInput">maintenanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnType">columnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.compute">compute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenance">maintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `columnTypeInput`<sup>Optional</sup> <a name="columnTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnTypeInput"></a>

```typescript
public readonly columnTypeInput: string;
```

- *Type:* string

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.computeInput"></a>

```typescript
public readonly computeInput: string;
```

- *Type:* string

---

##### `maintenanceInput`<sup>Optional</sup> <a name="maintenanceInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenanceInput"></a>

```typescript
public readonly maintenanceInput: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `columnType`<sup>Required</sup> <a name="columnType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnType"></a>

```typescript
public readonly columnType: string;
```

- *Type:* string

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.compute"></a>

```typescript
public readonly compute: string;
```

- *Type:* string

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenance"></a>

```typescript
public readonly maintenance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresSyncedTableSpecExtraColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>

---


### DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference <a name="DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId">resetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetPipelineChannel">resetPipelineChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog">resetStorageCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema">resetStorageSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBudgetPolicyId` <a name="resetBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId"></a>

```typescript
public resetBudgetPolicyId(): void
```

##### `resetPipelineChannel` <a name="resetPipelineChannel" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetPipelineChannel"></a>

```typescript
public resetPipelineChannel(): void
```

##### `resetStorageCatalog` <a name="resetStorageCatalog" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```typescript
public resetStorageCatalog(): void
```

##### `resetStorageSchema` <a name="resetStorageSchema" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```typescript
public resetStorageSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput">budgetPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.pipelineChannelInput">pipelineChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput">storageCatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput">storageSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.pipelineChannel">pipelineChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog">storageCatalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema">storageSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `budgetPolicyIdInput`<sup>Optional</sup> <a name="budgetPolicyIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput"></a>

```typescript
public readonly budgetPolicyIdInput: string;
```

- *Type:* string

---

##### `pipelineChannelInput`<sup>Optional</sup> <a name="pipelineChannelInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.pipelineChannelInput"></a>

```typescript
public readonly pipelineChannelInput: string;
```

- *Type:* string

---

##### `storageCatalogInput`<sup>Optional</sup> <a name="storageCatalogInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```typescript
public readonly storageCatalogInput: string;
```

- *Type:* string

---

##### `storageSchemaInput`<sup>Optional</sup> <a name="storageSchemaInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```typescript
public readonly storageSchemaInput: string;
```

- *Type:* string

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

---

##### `pipelineChannel`<sup>Required</sup> <a name="pipelineChannel" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.pipelineChannel"></a>

```typescript
public readonly pipelineChannel: string;
```

- *Type:* string

---

##### `storageCatalog`<sup>Required</sup> <a name="storageCatalog" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```typescript
public readonly storageCatalog: string;
```

- *Type:* string

---

##### `storageSchema`<sup>Required</sup> <a name="storageSchema" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```typescript
public readonly storageSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresSyncedTableSpecNewPipelineSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a>

---


### DataDatabricksPostgresSyncedTableSpecOutputReference <a name="DataDatabricksPostgresSyncedTableSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putExtraColumns">putExtraColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putNewPipelineSpec">putNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putTypeOverrides">putTypeOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetAcceleratedSync">resetAcceleratedSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing">resetCreateDatabaseObjectsIfMissing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetExistingPipelineId">resetExistingPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetExtraColumns">resetExtraColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetNewPipelineSpec">resetNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetPostgresDatabase">resetPostgresDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns">resetPrimaryKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetSchedulingPolicy">resetSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetSourceTableFullName">resetSourceTableFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetTimeseriesKey">resetTimeseriesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetTypeOverrides">resetTypeOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtraColumns` <a name="putExtraColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putExtraColumns"></a>

```typescript
public putExtraColumns(value: IResolvable | DataDatabricksPostgresSyncedTableSpecExtraColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putExtraColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>[]

---

##### `putNewPipelineSpec` <a name="putNewPipelineSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putNewPipelineSpec"></a>

```typescript
public putNewPipelineSpec(value: DataDatabricksPostgresSyncedTableSpecNewPipelineSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putNewPipelineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a>

---

##### `putTypeOverrides` <a name="putTypeOverrides" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putTypeOverrides"></a>

```typescript
public putTypeOverrides(value: IResolvable | DataDatabricksPostgresSyncedTableSpecTypeOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putTypeOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>[]

---

##### `resetAcceleratedSync` <a name="resetAcceleratedSync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetAcceleratedSync"></a>

```typescript
public resetAcceleratedSync(): void
```

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetCreateDatabaseObjectsIfMissing` <a name="resetCreateDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```typescript
public resetCreateDatabaseObjectsIfMissing(): void
```

##### `resetExistingPipelineId` <a name="resetExistingPipelineId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetExistingPipelineId"></a>

```typescript
public resetExistingPipelineId(): void
```

##### `resetExtraColumns` <a name="resetExtraColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetExtraColumns"></a>

```typescript
public resetExtraColumns(): void
```

##### `resetNewPipelineSpec` <a name="resetNewPipelineSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetNewPipelineSpec"></a>

```typescript
public resetNewPipelineSpec(): void
```

##### `resetPostgresDatabase` <a name="resetPostgresDatabase" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetPostgresDatabase"></a>

```typescript
public resetPostgresDatabase(): void
```

##### `resetPrimaryKeyColumns` <a name="resetPrimaryKeyColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```typescript
public resetPrimaryKeyColumns(): void
```

##### `resetSchedulingPolicy` <a name="resetSchedulingPolicy" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetSchedulingPolicy"></a>

```typescript
public resetSchedulingPolicy(): void
```

##### `resetSourceTableFullName` <a name="resetSourceTableFullName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetSourceTableFullName"></a>

```typescript
public resetSourceTableFullName(): void
```

##### `resetTimeseriesKey` <a name="resetTimeseriesKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetTimeseriesKey"></a>

```typescript
public resetTimeseriesKey(): void
```

##### `resetTypeOverrides` <a name="resetTypeOverrides" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetTypeOverrides"></a>

```typescript
public resetTypeOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.extraColumns">extraColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList">DataDatabricksPostgresSyncedTableSpecExtraColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.newPipelineSpec">newPipelineSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference">DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.typeOverrides">typeOverrides</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList">DataDatabricksPostgresSyncedTableSpecTypeOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.acceleratedSyncInput">acceleratedSyncInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput">createDatabaseObjectsIfMissingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput">existingPipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.extraColumnsInput">extraColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput">newPipelineSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput">postgresDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput">primaryKeyColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput">schedulingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput">sourceTableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput">timeseriesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.typeOverridesInput">typeOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.acceleratedSync">acceleratedSync</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing">createDatabaseObjectsIfMissing</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.existingPipelineId">existingPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.postgresDatabase">postgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.primaryKeyColumns">primaryKeyColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.schedulingPolicy">schedulingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.sourceTableFullName">sourceTableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.timeseriesKey">timeseriesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec">DataDatabricksPostgresSyncedTableSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extraColumns`<sup>Required</sup> <a name="extraColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.extraColumns"></a>

```typescript
public readonly extraColumns: DataDatabricksPostgresSyncedTableSpecExtraColumnsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList">DataDatabricksPostgresSyncedTableSpecExtraColumnsList</a>

---

##### `newPipelineSpec`<sup>Required</sup> <a name="newPipelineSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.newPipelineSpec"></a>

```typescript
public readonly newPipelineSpec: DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference">DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference</a>

---

##### `typeOverrides`<sup>Required</sup> <a name="typeOverrides" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.typeOverrides"></a>

```typescript
public readonly typeOverrides: DataDatabricksPostgresSyncedTableSpecTypeOverridesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList">DataDatabricksPostgresSyncedTableSpecTypeOverridesList</a>

---

##### `acceleratedSyncInput`<sup>Optional</sup> <a name="acceleratedSyncInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.acceleratedSyncInput"></a>

```typescript
public readonly acceleratedSyncInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `createDatabaseObjectsIfMissingInput`<sup>Optional</sup> <a name="createDatabaseObjectsIfMissingInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```typescript
public readonly createDatabaseObjectsIfMissingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `existingPipelineIdInput`<sup>Optional</sup> <a name="existingPipelineIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput"></a>

```typescript
public readonly existingPipelineIdInput: string;
```

- *Type:* string

---

##### `extraColumnsInput`<sup>Optional</sup> <a name="extraColumnsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.extraColumnsInput"></a>

```typescript
public readonly extraColumnsInput: IResolvable | DataDatabricksPostgresSyncedTableSpecExtraColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>[]

---

##### `newPipelineSpecInput`<sup>Optional</sup> <a name="newPipelineSpecInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput"></a>

```typescript
public readonly newPipelineSpecInput: IResolvable | DataDatabricksPostgresSyncedTableSpecNewPipelineSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a>

---

##### `postgresDatabaseInput`<sup>Optional</sup> <a name="postgresDatabaseInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput"></a>

```typescript
public readonly postgresDatabaseInput: string;
```

- *Type:* string

---

##### `primaryKeyColumnsInput`<sup>Optional</sup> <a name="primaryKeyColumnsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```typescript
public readonly primaryKeyColumnsInput: string[];
```

- *Type:* string[]

---

##### `schedulingPolicyInput`<sup>Optional</sup> <a name="schedulingPolicyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput"></a>

```typescript
public readonly schedulingPolicyInput: string;
```

- *Type:* string

---

##### `sourceTableFullNameInput`<sup>Optional</sup> <a name="sourceTableFullNameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```typescript
public readonly sourceTableFullNameInput: string;
```

- *Type:* string

---

##### `timeseriesKeyInput`<sup>Optional</sup> <a name="timeseriesKeyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput"></a>

```typescript
public readonly timeseriesKeyInput: string;
```

- *Type:* string

---

##### `typeOverridesInput`<sup>Optional</sup> <a name="typeOverridesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.typeOverridesInput"></a>

```typescript
public readonly typeOverridesInput: IResolvable | DataDatabricksPostgresSyncedTableSpecTypeOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>[]

---

##### `acceleratedSync`<sup>Required</sup> <a name="acceleratedSync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.acceleratedSync"></a>

```typescript
public readonly acceleratedSync: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `createDatabaseObjectsIfMissing`<sup>Required</sup> <a name="createDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```typescript
public readonly createDatabaseObjectsIfMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `existingPipelineId`<sup>Required</sup> <a name="existingPipelineId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.existingPipelineId"></a>

```typescript
public readonly existingPipelineId: string;
```

- *Type:* string

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.postgresDatabase"></a>

```typescript
public readonly postgresDatabase: string;
```

- *Type:* string

---

##### `primaryKeyColumns`<sup>Required</sup> <a name="primaryKeyColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.primaryKeyColumns"></a>

```typescript
public readonly primaryKeyColumns: string[];
```

- *Type:* string[]

---

##### `schedulingPolicy`<sup>Required</sup> <a name="schedulingPolicy" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.schedulingPolicy"></a>

```typescript
public readonly schedulingPolicy: string;
```

- *Type:* string

---

##### `sourceTableFullName`<sup>Required</sup> <a name="sourceTableFullName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.sourceTableFullName"></a>

```typescript
public readonly sourceTableFullName: string;
```

- *Type:* string

---

##### `timeseriesKey`<sup>Required</sup> <a name="timeseriesKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.timeseriesKey"></a>

```typescript
public readonly timeseriesKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresSyncedTableSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec">DataDatabricksPostgresSyncedTableSpec</a>

---


### DataDatabricksPostgresSyncedTableSpecTypeOverridesList <a name="DataDatabricksPostgresSyncedTableSpecTypeOverridesList" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.get"></a>

```typescript
public get(index: number): DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresSyncedTableSpecTypeOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>[]

---


### DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference <a name="DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.resetSize">resetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSize` <a name="resetSize" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.pgTypeInput">pgTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.pgType">pgType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `pgTypeInput`<sup>Optional</sup> <a name="pgTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.pgTypeInput"></a>

```typescript
public readonly pgTypeInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `pgType`<sup>Required</sup> <a name="pgType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.pgType"></a>

```typescript
public readonly pgType: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresSyncedTableSpecTypeOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>

---


### DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference <a name="DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime">deltaCommitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">deltaCommitVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deltaCommitTime`<sup>Required</sup> <a name="deltaCommitTime" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime"></a>

```typescript
public readonly deltaCommitTime: string;
```

- *Type:* string

---

##### `deltaCommitVersion`<sup>Required</sup> <a name="deltaCommitVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```typescript
public readonly deltaCommitVersion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a>

---


### DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference <a name="DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo">deltaTableSyncInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime">syncEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime">syncStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync">DataDatabricksPostgresSyncedTableStatusLastSync</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deltaTableSyncInfo`<sup>Required</sup> <a name="deltaTableSyncInfo" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```typescript
public readonly deltaTableSyncInfo: DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `syncEndTime`<sup>Required</sup> <a name="syncEndTime" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime"></a>

```typescript
public readonly syncEndTime: string;
```

- *Type:* string

---

##### `syncStartTime`<sup>Required</sup> <a name="syncStartTime" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime"></a>

```typescript
public readonly syncStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresSyncedTableStatusLastSync;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync">DataDatabricksPostgresSyncedTableStatusLastSync</a>

---


### DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference <a name="DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimatedCompletionTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latestVersionCurrentlyProcessing</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount">syncedRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion">syncProgressCompletion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount">totalRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress">DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `estimatedCompletionTimeSeconds`<sup>Required</sup> <a name="estimatedCompletionTimeSeconds" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```typescript
public readonly estimatedCompletionTimeSeconds: number;
```

- *Type:* number

---

##### `latestVersionCurrentlyProcessing`<sup>Required</sup> <a name="latestVersionCurrentlyProcessing" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```typescript
public readonly latestVersionCurrentlyProcessing: number;
```

- *Type:* number

---

##### `syncedRowCount`<sup>Required</sup> <a name="syncedRowCount" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount"></a>

```typescript
public readonly syncedRowCount: number;
```

- *Type:* number

---

##### `syncProgressCompletion`<sup>Required</sup> <a name="syncProgressCompletion" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion"></a>

```typescript
public readonly syncProgressCompletion: number;
```

- *Type:* number

---

##### `totalRowCount`<sup>Required</sup> <a name="totalRowCount" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount"></a>

```typescript
public readonly totalRowCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress">DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress</a>

---


### DataDatabricksPostgresSyncedTableStatusOutputReference <a name="DataDatabricksPostgresSyncedTableStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresSyncedTable } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.detailedState">detailedState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion">lastProcessedCommitVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastSync">lastSync</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference">DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastSyncTime">lastSyncTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress">ongoingSyncProgress</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference">DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.provisioningPhase">provisioningPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState">unityCatalogProvisioningState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus">DataDatabricksPostgresSyncedTableStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `detailedState`<sup>Required</sup> <a name="detailedState" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.detailedState"></a>

```typescript
public readonly detailedState: string;
```

- *Type:* string

---

##### `lastProcessedCommitVersion`<sup>Required</sup> <a name="lastProcessedCommitVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion"></a>

```typescript
public readonly lastProcessedCommitVersion: number;
```

- *Type:* number

---

##### `lastSync`<sup>Required</sup> <a name="lastSync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastSync"></a>

```typescript
public readonly lastSync: DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference">DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference</a>

---

##### `lastSyncTime`<sup>Required</sup> <a name="lastSyncTime" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastSyncTime"></a>

```typescript
public readonly lastSyncTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `ongoingSyncProgress`<sup>Required</sup> <a name="ongoingSyncProgress" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress"></a>

```typescript
public readonly ongoingSyncProgress: DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference">DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference</a>

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `provisioningPhase`<sup>Required</sup> <a name="provisioningPhase" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.provisioningPhase"></a>

```typescript
public readonly provisioningPhase: string;
```

- *Type:* string

---

##### `unityCatalogProvisioningState`<sup>Required</sup> <a name="unityCatalogProvisioningState" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState"></a>

```typescript
public readonly unityCatalogProvisioningState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresSyncedTableStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus">DataDatabricksPostgresSyncedTableStatus</a>

---



