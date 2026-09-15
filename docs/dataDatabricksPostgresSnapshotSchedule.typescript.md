# `dataDatabricksPostgresSnapshotSchedule` Submodule <a name="`dataDatabricksPostgresSnapshotSchedule` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresSnapshotSchedule <a name="DataDatabricksPostgresSnapshotSchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule databricks_postgres_snapshot_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule(scope: Construct, id: string, config: DataDatabricksPostgresSnapshotScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig">DataDatabricksPostgresSnapshotScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig">DataDatabricksPostgresSnapshotScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksPostgresSnapshotScheduleProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresSnapshotSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isConstruct"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformElement"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformDataSource"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksPostgresSnapshotSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresSnapshotSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresSnapshotSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresSnapshotSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference">DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList">DataDatabricksPostgresSnapshotScheduleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference">DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.schedule"></a>

```typescript
public readonly schedule: DataDatabricksPostgresSnapshotScheduleScheduleList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList">DataDatabricksPostgresSnapshotScheduleScheduleList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksPostgresSnapshotScheduleProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresSnapshotScheduleConfig <a name="DataDatabricksPostgresSnapshotScheduleConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

const dataDatabricksPostgresSnapshotScheduleConfig: dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#name DataDatabricksPostgresSnapshotSchedule#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#provider_config DataDatabricksPostgresSnapshotSchedule#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#name DataDatabricksPostgresSnapshotSchedule#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresSnapshotScheduleProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#provider_config DataDatabricksPostgresSnapshotSchedule#provider_config}.

---

### DataDatabricksPostgresSnapshotScheduleProviderConfig <a name="DataDatabricksPostgresSnapshotScheduleProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

const dataDatabricksPostgresSnapshotScheduleProviderConfig: dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#workspace_id DataDatabricksPostgresSnapshotSchedule#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#workspace_id DataDatabricksPostgresSnapshotSchedule#workspace_id}.

---

### DataDatabricksPostgresSnapshotScheduleSchedule <a name="DataDatabricksPostgresSnapshotScheduleSchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.Initializer"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

const dataDatabricksPostgresSnapshotScheduleSchedule: dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.retention">retention</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#retention DataDatabricksPostgresSnapshotSchedule#retention}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule">DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#daily_schedule DataDatabricksPostgresSnapshotSchedule#daily_schedule}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.monthlySchedule">monthlySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule">DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#monthly_schedule DataDatabricksPostgresSnapshotSchedule#monthly_schedule}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule">DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#weekly_schedule DataDatabricksPostgresSnapshotSchedule#weekly_schedule}. |

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.retention"></a>

```typescript
public readonly retention: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#retention DataDatabricksPostgresSnapshotSchedule#retention}.

---

##### `dailySchedule`<sup>Optional</sup> <a name="dailySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule">DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#daily_schedule DataDatabricksPostgresSnapshotSchedule#daily_schedule}.

---

##### `monthlySchedule`<sup>Optional</sup> <a name="monthlySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.monthlySchedule"></a>

```typescript
public readonly monthlySchedule: DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule">DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#monthly_schedule DataDatabricksPostgresSnapshotSchedule#monthly_schedule}.

---

##### `weeklySchedule`<sup>Optional</sup> <a name="weeklySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule">DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#weekly_schedule DataDatabricksPostgresSnapshotSchedule#weekly_schedule}.

---

### DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule <a name="DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule.Initializer"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

const dataDatabricksPostgresSnapshotScheduleScheduleDailySchedule: dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule.property.hour">hour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}. |

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}.

---

### DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule <a name="DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule.Initializer"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

const dataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule: dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule.property.day">day</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#day DataDatabricksPostgresSnapshotSchedule#day}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule.property.hour">hour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#day DataDatabricksPostgresSnapshotSchedule#day}.

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}.

---

### DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule <a name="DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule.Initializer"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

const dataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule: dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#day_of_week DataDatabricksPostgresSnapshotSchedule#day_of_week}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule.property.hour">hour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#day_of_week DataDatabricksPostgresSnapshotSchedule#day_of_week}.

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference <a name="DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresSnapshotScheduleProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a>

---


### DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference <a name="DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHour` <a name="resetHour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resetHour"></a>

```typescript
public resetHour(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule">DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hourInput"></a>

```typescript
public readonly hourInput: number;
```

- *Type:* number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule">DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule</a>

---


### DataDatabricksPostgresSnapshotScheduleScheduleList <a name="DataDatabricksPostgresSnapshotScheduleScheduleList" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.get"></a>

```typescript
public get(index: number): DataDatabricksPostgresSnapshotScheduleScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule">DataDatabricksPostgresSnapshotScheduleSchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresSnapshotScheduleSchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule">DataDatabricksPostgresSnapshotScheduleSchedule</a>[]

---


### DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference <a name="DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHour` <a name="resetHour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resetHour"></a>

```typescript
public resetHour(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule">DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hourInput"></a>

```typescript
public readonly hourInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule">DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule</a>

---


### DataDatabricksPostgresSnapshotScheduleScheduleOutputReference <a name="DataDatabricksPostgresSnapshotScheduleScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putDailySchedule">putDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule">putMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule">putWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetDailySchedule">resetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetMonthlySchedule">resetMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetWeeklySchedule">resetWeeklySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDailySchedule` <a name="putDailySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putDailySchedule"></a>

```typescript
public putDailySchedule(value: DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule">DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule</a>

---

##### `putMonthlySchedule` <a name="putMonthlySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule"></a>

```typescript
public putMonthlySchedule(value: DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule">DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule</a>

---

##### `putWeeklySchedule` <a name="putWeeklySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule"></a>

```typescript
public putWeeklySchedule(value: DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule">DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule</a>

---

##### `resetDailySchedule` <a name="resetDailySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetDailySchedule"></a>

```typescript
public resetDailySchedule(): void
```

##### `resetMonthlySchedule` <a name="resetMonthlySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetMonthlySchedule"></a>

```typescript
public resetMonthlySchedule(): void
```

##### `resetWeeklySchedule` <a name="resetWeeklySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetWeeklySchedule"></a>

```typescript
public resetWeeklySchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.monthlySchedule">monthlySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.dailyScheduleInput">dailyScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule">DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.monthlyScheduleInput">monthlyScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule">DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.retentionInput">retentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.weeklyScheduleInput">weeklyScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule">DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.retention">retention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule">DataDatabricksPostgresSnapshotScheduleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dailySchedule`<sup>Required</sup> <a name="dailySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference</a>

---

##### `monthlySchedule`<sup>Required</sup> <a name="monthlySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.monthlySchedule"></a>

```typescript
public readonly monthlySchedule: DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference</a>

---

##### `weeklySchedule`<sup>Required</sup> <a name="weeklySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference</a>

---

##### `dailyScheduleInput`<sup>Optional</sup> <a name="dailyScheduleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.dailyScheduleInput"></a>

```typescript
public readonly dailyScheduleInput: IResolvable | DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule">DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule</a>

---

##### `monthlyScheduleInput`<sup>Optional</sup> <a name="monthlyScheduleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.monthlyScheduleInput"></a>

```typescript
public readonly monthlyScheduleInput: IResolvable | DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule">DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule</a>

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.retentionInput"></a>

```typescript
public readonly retentionInput: string;
```

- *Type:* string

---

##### `weeklyScheduleInput`<sup>Optional</sup> <a name="weeklyScheduleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.weeklyScheduleInput"></a>

```typescript
public readonly weeklyScheduleInput: IResolvable | DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule">DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule</a>

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.retention"></a>

```typescript
public readonly retention: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresSnapshotScheduleSchedule;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule">DataDatabricksPostgresSnapshotScheduleSchedule</a>

---


### DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference <a name="DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresSnapshotSchedule } from '@cdktn/provider-databricks'

new dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHour` <a name="resetHour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resetHour"></a>

```typescript
public resetHour(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule">DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hourInput"></a>

```typescript
public readonly hourInput: number;
```

- *Type:* number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule">DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule</a>

---



