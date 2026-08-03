# `dataDatabricksDatabaseDatabaseCatalog` Submodule <a name="`dataDatabricksDatabaseDatabaseCatalog` Submodule" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseDatabaseCatalog <a name="DataDatabricksDatabaseDatabaseCatalog" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/database_database_catalog databricks_database_database_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalog } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog(scope: Construct, id: string, config: DataDatabricksDatabaseDatabaseCatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig">DataDatabricksDatabaseDatabaseCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig">DataDatabricksDatabaseDatabaseCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksDatabaseDatabaseCatalogProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig">DataDatabricksDatabaseDatabaseCatalogProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksDatabaseDatabaseCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isConstruct"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalog } from '@cdktn/provider-databricks'

dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformElement"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalog } from '@cdktn/provider-databricks'

dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformDataSource"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalog } from '@cdktn/provider-databricks'

dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalog } from '@cdktn/provider-databricks'

dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksDatabaseDatabaseCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDatabaseDatabaseCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDatabaseDatabaseCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/database_database_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseDatabaseCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.createDatabaseIfNotExists">createDatabaseIfNotExists</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.databaseInstanceName">databaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference">DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig">DataDatabricksDatabaseDatabaseCatalogProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createDatabaseIfNotExists`<sup>Required</sup> <a name="createDatabaseIfNotExists" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.createDatabaseIfNotExists"></a>

```typescript
public readonly createDatabaseIfNotExists: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `databaseInstanceName`<sup>Required</sup> <a name="databaseInstanceName" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.databaseInstanceName"></a>

```typescript
public readonly databaseInstanceName: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference">DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksDatabaseDatabaseCatalogProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig">DataDatabricksDatabaseDatabaseCatalogProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseDatabaseCatalogConfig <a name="DataDatabricksDatabaseDatabaseCatalogConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.Initializer"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalog } from '@cdktn/provider-databricks'

const dataDatabricksDatabaseDatabaseCatalogConfig: dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/database_database_catalog#name DataDatabricksDatabaseDatabaseCatalog#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig">DataDatabricksDatabaseDatabaseCatalogProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/database_database_catalog#provider_config DataDatabricksDatabaseDatabaseCatalog#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/database_database_catalog#name DataDatabricksDatabaseDatabaseCatalog#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksDatabaseDatabaseCatalogProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig">DataDatabricksDatabaseDatabaseCatalogProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/database_database_catalog#provider_config DataDatabricksDatabaseDatabaseCatalog#provider_config}.

---

### DataDatabricksDatabaseDatabaseCatalogProviderConfig <a name="DataDatabricksDatabaseDatabaseCatalogProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalog } from '@cdktn/provider-databricks'

const dataDatabricksDatabaseDatabaseCatalogProviderConfig: dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/database_database_catalog#workspace_id DataDatabricksDatabaseDatabaseCatalog#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/database_database_catalog#workspace_id DataDatabricksDatabaseDatabaseCatalog#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference <a name="DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalog } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig">DataDatabricksDatabaseDatabaseCatalogProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDatabaseDatabaseCatalogProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig">DataDatabricksDatabaseDatabaseCatalogProviderConfig</a>

---



