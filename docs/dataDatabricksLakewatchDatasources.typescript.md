# `dataDatabricksLakewatchDatasources` Submodule <a name="`dataDatabricksLakewatchDatasources` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchDatasources <a name="DataDatabricksLakewatchDatasources" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources databricks_lakewatch_datasources}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources(scope: Construct, id: string, config: DataDatabricksLakewatchDatasourcesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig">DataDatabricksLakewatchDatasourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig">DataDatabricksLakewatchDatasourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetView">resetView</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksLakewatchDatasourcesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

##### `resetView` <a name="resetView" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetView"></a>

```typescript
public resetView(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchDatasources resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isConstruct"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformElement"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformDataSource"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksLakewatchDatasources resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksLakewatchDatasources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksLakewatchDatasources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchDatasources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.datasources">datasources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList">DataDatabricksLakewatchDatasourcesDatasourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference">DataDatabricksLakewatchDatasourcesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.viewInput">viewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.view">view</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `datasources`<sup>Required</sup> <a name="datasources" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.datasources"></a>

```typescript
public readonly datasources: DataDatabricksLakewatchDatasourcesDatasourcesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList">DataDatabricksLakewatchDatasourcesDatasourcesList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksLakewatchDatasourcesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference">DataDatabricksLakewatchDatasourcesProviderConfigOutputReference</a>

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksLakewatchDatasourcesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a>

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.viewInput"></a>

```typescript
public readonly viewInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.view"></a>

```typescript
public readonly view: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchDatasourcesConfig <a name="DataDatabricksLakewatchDatasourcesConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesConfig: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#filter DataDatabricksLakewatchDatasources#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#page_size DataDatabricksLakewatchDatasources#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.view">view</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#view DataDatabricksLakewatchDatasources#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#filter DataDatabricksLakewatchDatasources#filter}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#page_size DataDatabricksLakewatchDatasources#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksLakewatchDatasourcesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.view"></a>

```typescript
public readonly view: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#view DataDatabricksLakewatchDatasources#view}.

---

### DataDatabricksLakewatchDatasourcesDatasources <a name="DataDatabricksLakewatchDatasourcesDatasources" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasources: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloader <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloader" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesAutoloader: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format DataDatabricksLakewatchDatasources#format}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#location DataDatabricksLakewatchDatasources#location}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.rawTable">rawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#raw_table DataDatabricksLakewatchDatasources#raw_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.awsSecretScope">awsSecretScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#aws_secret_scope DataDatabricksLakewatchDatasources#aws_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#envelope DataDatabricksLakewatchDatasources#envelope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.formatOptions">formatOptions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format_options DataDatabricksLakewatchDatasources#format_options}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.includeExistingFiles">includeExistingFiles</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_files DataDatabricksLakewatchDatasources#include_existing_files}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.overridePartitionColumns">overridePartitionColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#override_partition_columns DataDatabricksLakewatchDatasources#override_partition_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.queueUrl">queueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#queue_url DataDatabricksLakewatchDatasources#queue_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.serviceCredentials">serviceCredentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#service_credentials DataDatabricksLakewatchDatasources#service_credentials}. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format DataDatabricksLakewatchDatasources#format}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#location DataDatabricksLakewatchDatasources#location}.

---

##### `rawTable`<sup>Required</sup> <a name="rawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.rawTable"></a>

```typescript
public readonly rawTable: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#raw_table DataDatabricksLakewatchDatasources#raw_table}.

---

##### `awsSecretScope`<sup>Optional</sup> <a name="awsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.awsSecretScope"></a>

```typescript
public readonly awsSecretScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#aws_secret_scope DataDatabricksLakewatchDatasources#aws_secret_scope}.

---

##### `envelope`<sup>Optional</sup> <a name="envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.envelope"></a>

```typescript
public readonly envelope: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#envelope DataDatabricksLakewatchDatasources#envelope}.

---

##### `formatOptions`<sup>Optional</sup> <a name="formatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.formatOptions"></a>

```typescript
public readonly formatOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format_options DataDatabricksLakewatchDatasources#format_options}.

---

##### `includeExistingFiles`<sup>Optional</sup> <a name="includeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.includeExistingFiles"></a>

```typescript
public readonly includeExistingFiles: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_files DataDatabricksLakewatchDatasources#include_existing_files}.

---

##### `overridePartitionColumns`<sup>Optional</sup> <a name="overridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.overridePartitionColumns"></a>

```typescript
public readonly overridePartitionColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#override_partition_columns DataDatabricksLakewatchDatasources#override_partition_columns}.

---

##### `queueUrl`<sup>Optional</sup> <a name="queueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#queue_url DataDatabricksLakewatchDatasources#queue_url}.

---

##### `serviceCredentials`<sup>Optional</sup> <a name="serviceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.serviceCredentials"></a>

```typescript
public readonly serviceCredentials: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#service_credentials DataDatabricksLakewatchDatasources#service_credentials}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.property.cloudWatchLogs">cloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cloud_watch_logs DataDatabricksLakewatchDatasources#cloud_watch_logs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.property.jsonArray">jsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#json_array DataDatabricksLakewatchDatasources#json_array}. |

---

##### `cloudWatchLogs`<sup>Optional</sup> <a name="cloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.property.cloudWatchLogs"></a>

```typescript
public readonly cloudWatchLogs: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cloud_watch_logs DataDatabricksLakewatchDatasources#cloud_watch_logs}.

---

##### `jsonArray`<sup>Optional</sup> <a name="jsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.property.jsonArray"></a>

```typescript
public readonly jsonArray: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#json_array DataDatabricksLakewatchDatasources#json_array}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs.property.headerRetention">headerRetention</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#header_retention DataDatabricksLakewatchDatasources#header_retention}. |

---

##### `headerRetention`<sup>Optional</sup> <a name="headerRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs.property.headerRetention"></a>

```typescript
public readonly headerRetention: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#header_retention DataDatabricksLakewatchDatasources#header_retention}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#path DataDatabricksLakewatchDatasources#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#path DataDatabricksLakewatchDatasources#path}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy <a name="DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesCreatedBy: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesExistingTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesExistingTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesExistingTable: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.catalog">catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog DataDatabricksLakewatchDatasources#catalog}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.includeExistingRows">includeExistingRows</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_rows DataDatabricksLakewatchDatasources#include_existing_rows}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.schema">schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema DataDatabricksLakewatchDatasources#schema}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog DataDatabricksLakewatchDatasources#catalog}.

---

##### `includeExistingRows`<sup>Optional</sup> <a name="includeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.includeExistingRows"></a>

```typescript
public readonly includeExistingRows: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_rows DataDatabricksLakewatchDatasources#include_existing_rows}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema DataDatabricksLakewatchDatasources#schema}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesOwner <a name="DataDatabricksLakewatchDatasourcesDatasourcesOwner" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesOwner: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesParsers <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesParsers: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#version DataDatabricksLakewatchDatasources#version}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#target_table DataDatabricksLakewatchDatasources#target_table}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#version DataDatabricksLakewatchDatasources#version}.

---

##### `targetTable`<sup>Optional</sup> <a name="targetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.targetTable"></a>

```typescript
public readonly targetTable: DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#target_table DataDatabricksLakewatchDatasources#target_table}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig <a name="DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesProviderConfig: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesSchedule <a name="DataDatabricksLakewatchDatasourcesDatasourcesSchedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesSchedule: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.atLeastEvery">atLeastEvery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#at_least_every DataDatabricksLakewatchDatasources#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.computeGroup">computeGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#compute_group DataDatabricksLakewatchDatasources#compute_group}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.continuous">continuous</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#continuous DataDatabricksLakewatchDatasources#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.cronExpression">cronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cron_expression DataDatabricksLakewatchDatasources#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#enabled DataDatabricksLakewatchDatasources#enabled}. |

---

##### `atLeastEvery`<sup>Optional</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.atLeastEvery"></a>

```typescript
public readonly atLeastEvery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#at_least_every DataDatabricksLakewatchDatasources#at_least_every}.

---

##### `computeGroup`<sup>Optional</sup> <a name="computeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.computeGroup"></a>

```typescript
public readonly computeGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#compute_group DataDatabricksLakewatchDatasources#compute_group}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.continuous"></a>

```typescript
public readonly continuous: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#continuous DataDatabricksLakewatchDatasources#continuous}.

---

##### `cronExpression`<sup>Optional</sup> <a name="cronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cron_expression DataDatabricksLakewatchDatasources#cron_expression}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#enabled DataDatabricksLakewatchDatasources#enabled}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesStatus <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatus" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesStatus: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus = { ... }
```


### DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob = { ... }
```


### DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline = { ... }
```


### DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection <a name="DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.connectionName">connectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#connection_name DataDatabricksLakewatchDatasources#connection_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.configuration">configuration</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#configuration DataDatabricksLakewatchDatasources#configuration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#start_time DataDatabricksLakewatchDatasources#start_time}. |

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#connection_name DataDatabricksLakewatchDatasources#connection_name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.configuration"></a>

```typescript
public readonly configuration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#configuration DataDatabricksLakewatchDatasources#configuration}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#start_time DataDatabricksLakewatchDatasources#start_time}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy <a name="DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}.

---

### DataDatabricksLakewatchDatasourcesProviderConfig <a name="DataDatabricksLakewatchDatasourcesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourcesProviderConfig: dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention">resetHeaderRetention</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderRetention` <a name="resetHeaderRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention"></a>

```typescript
public resetHeaderRetention(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput">headerRetentionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention">headerRetention</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerRetentionInput`<sup>Optional</sup> <a name="headerRetentionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput"></a>

```typescript
public readonly headerRetentionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `headerRetention`<sup>Required</sup> <a name="headerRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention"></a>

```typescript
public readonly headerRetention: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putCloudWatchLogs">putCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putJsonArray">putJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resetCloudWatchLogs">resetCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resetJsonArray">resetJsonArray</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudWatchLogs` <a name="putCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putCloudWatchLogs"></a>

```typescript
public putCloudWatchLogs(value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putCloudWatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `putJsonArray` <a name="putJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putJsonArray"></a>

```typescript
public putJsonArray(value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putJsonArray.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a>

---

##### `resetCloudWatchLogs` <a name="resetCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resetCloudWatchLogs"></a>

```typescript
public resetCloudWatchLogs(): void
```

##### `resetJsonArray` <a name="resetJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resetJsonArray"></a>

```typescript
public resetJsonArray(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.cloudWatchLogs">cloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.jsonArray">jsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput">cloudWatchLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.jsonArrayInput">jsonArrayInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudWatchLogs`<sup>Required</sup> <a name="cloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.cloudWatchLogs"></a>

```typescript
public readonly cloudWatchLogs: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference</a>

---

##### `jsonArray`<sup>Required</sup> <a name="jsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.jsonArray"></a>

```typescript
public readonly jsonArray: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference</a>

---

##### `cloudWatchLogsInput`<sup>Optional</sup> <a name="cloudWatchLogsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput"></a>

```typescript
public readonly cloudWatchLogsInput: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `jsonArrayInput`<sup>Optional</sup> <a name="jsonArrayInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.jsonArrayInput"></a>

```typescript
public readonly jsonArrayInput: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putEnvelope">putEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putRawTable">putRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetAwsSecretScope">resetAwsSecretScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetEnvelope">resetEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetFormatOptions">resetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetIncludeExistingFiles">resetIncludeExistingFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetOverridePartitionColumns">resetOverridePartitionColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetQueueUrl">resetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetServiceCredentials">resetServiceCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvelope` <a name="putEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putEnvelope"></a>

```typescript
public putEnvelope(value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putEnvelope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a>

---

##### `putRawTable` <a name="putRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putRawTable"></a>

```typescript
public putRawTable(value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putRawTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a>

---

##### `resetAwsSecretScope` <a name="resetAwsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetAwsSecretScope"></a>

```typescript
public resetAwsSecretScope(): void
```

##### `resetEnvelope` <a name="resetEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetEnvelope"></a>

```typescript
public resetEnvelope(): void
```

##### `resetFormatOptions` <a name="resetFormatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetFormatOptions"></a>

```typescript
public resetFormatOptions(): void
```

##### `resetIncludeExistingFiles` <a name="resetIncludeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetIncludeExistingFiles"></a>

```typescript
public resetIncludeExistingFiles(): void
```

##### `resetOverridePartitionColumns` <a name="resetOverridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetOverridePartitionColumns"></a>

```typescript
public resetOverridePartitionColumns(): void
```

##### `resetQueueUrl` <a name="resetQueueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetQueueUrl"></a>

```typescript
public resetQueueUrl(): void
```

##### `resetServiceCredentials` <a name="resetServiceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetServiceCredentials"></a>

```typescript
public resetServiceCredentials(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.effectiveIncludeExistingFiles">effectiveIncludeExistingFiles</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.effectiveRawTable">effectiveRawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.rawTable">rawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.awsSecretScopeInput">awsSecretScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.envelopeInput">envelopeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatOptionsInput">formatOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.includeExistingFilesInput">includeExistingFilesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.overridePartitionColumnsInput">overridePartitionColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.rawTableInput">rawTableInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.serviceCredentialsInput">serviceCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.awsSecretScope">awsSecretScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatOptions">formatOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.includeExistingFiles">includeExistingFiles</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.overridePartitionColumns">overridePartitionColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.queueUrl">queueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.serviceCredentials">serviceCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader">DataDatabricksLakewatchDatasourcesDatasourcesAutoloader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveIncludeExistingFiles`<sup>Required</sup> <a name="effectiveIncludeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.effectiveIncludeExistingFiles"></a>

```typescript
public readonly effectiveIncludeExistingFiles: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `effectiveRawTable`<sup>Required</sup> <a name="effectiveRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.effectiveRawTable"></a>

```typescript
public readonly effectiveRawTable: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference</a>

---

##### `envelope`<sup>Required</sup> <a name="envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.envelope"></a>

```typescript
public readonly envelope: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference</a>

---

##### `rawTable`<sup>Required</sup> <a name="rawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.rawTable"></a>

```typescript
public readonly rawTable: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference</a>

---

##### `awsSecretScopeInput`<sup>Optional</sup> <a name="awsSecretScopeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.awsSecretScopeInput"></a>

```typescript
public readonly awsSecretScopeInput: string;
```

- *Type:* string

---

##### `envelopeInput`<sup>Optional</sup> <a name="envelopeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.envelopeInput"></a>

```typescript
public readonly envelopeInput: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `formatOptionsInput`<sup>Optional</sup> <a name="formatOptionsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatOptionsInput"></a>

```typescript
public readonly formatOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `includeExistingFilesInput`<sup>Optional</sup> <a name="includeExistingFilesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.includeExistingFilesInput"></a>

```typescript
public readonly includeExistingFilesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `overridePartitionColumnsInput`<sup>Optional</sup> <a name="overridePartitionColumnsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.overridePartitionColumnsInput"></a>

```typescript
public readonly overridePartitionColumnsInput: string[];
```

- *Type:* string[]

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.queueUrlInput"></a>

```typescript
public readonly queueUrlInput: string;
```

- *Type:* string

---

##### `rawTableInput`<sup>Optional</sup> <a name="rawTableInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.rawTableInput"></a>

```typescript
public readonly rawTableInput: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a>

---

##### `serviceCredentialsInput`<sup>Optional</sup> <a name="serviceCredentialsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.serviceCredentialsInput"></a>

```typescript
public readonly serviceCredentialsInput: string;
```

- *Type:* string

---

##### `awsSecretScope`<sup>Required</sup> <a name="awsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.awsSecretScope"></a>

```typescript
public readonly awsSecretScope: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatOptions"></a>

```typescript
public readonly formatOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `includeExistingFiles`<sup>Required</sup> <a name="includeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.includeExistingFiles"></a>

```typescript
public readonly includeExistingFiles: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `overridePartitionColumns`<sup>Required</sup> <a name="overridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.overridePartitionColumns"></a>

```typescript
public readonly overridePartitionColumns: string[];
```

- *Type:* string[]

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

---

##### `serviceCredentials`<sup>Required</sup> <a name="serviceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.serviceCredentials"></a>

```typescript
public readonly serviceCredentials: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourcesDatasourcesAutoloader;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader">DataDatabricksLakewatchDatasourcesDatasourcesAutoloader</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetPrincipalType"></a>

```typescript
public resetPrincipalType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy">DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy">DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetIncludeExistingRows">resetIncludeExistingRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetIncludeExistingRows` <a name="resetIncludeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetIncludeExistingRows"></a>

```typescript
public resetIncludeExistingRows(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveCatalog">effectiveCatalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveName">effectiveName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveSchema">effectiveSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.includeExistingRowsInput">includeExistingRowsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.includeExistingRows">includeExistingRows</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable">DataDatabricksLakewatchDatasourcesDatasourcesExistingTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveCatalog`<sup>Required</sup> <a name="effectiveCatalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveCatalog"></a>

```typescript
public readonly effectiveCatalog: string;
```

- *Type:* string

---

##### `effectiveName`<sup>Required</sup> <a name="effectiveName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveName"></a>

```typescript
public readonly effectiveName: string;
```

- *Type:* string

---

##### `effectiveSchema`<sup>Required</sup> <a name="effectiveSchema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveSchema"></a>

```typescript
public readonly effectiveSchema: string;
```

- *Type:* string

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `includeExistingRowsInput`<sup>Optional</sup> <a name="includeExistingRowsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.includeExistingRowsInput"></a>

```typescript
public readonly includeExistingRowsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `includeExistingRows`<sup>Required</sup> <a name="includeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.includeExistingRows"></a>

```typescript
public readonly includeExistingRows: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourcesDatasourcesExistingTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable">DataDatabricksLakewatchDatasourcesDatasourcesExistingTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesList <a name="DataDatabricksLakewatchDatasourcesDatasourcesList" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.get"></a>

```typescript
public get(index: number): DataDatabricksLakewatchDatasourcesDatasourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources">DataDatabricksLakewatchDatasourcesDatasources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchDatasourcesDatasources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources">DataDatabricksLakewatchDatasourcesDatasources</a>[]

---


### DataDatabricksLakewatchDatasourcesDatasourcesOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.annotations">annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.autoloader">autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.computeMode">computeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.computeWorkspaceId">computeWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.createdBy">createdBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.datasourceId">datasourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.datasourceName">datasourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveCatalogName">effectiveCatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveDatasourceName">effectiveDatasourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveRunAsPrincipal">effectiveRunAsPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveSchemaName">effectiveSchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.existingTable">existingTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.owner">owner</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.parsers">parsers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList">DataDatabricksLakewatchDatasourcesDatasourcesParsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.runAsPrincipal">runAsPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.unityCatalogConnection">unityCatalogConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.updatedBy">updatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources">DataDatabricksLakewatchDatasourcesDatasources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.annotations"></a>

```typescript
public readonly annotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `autoloader`<sup>Required</sup> <a name="autoloader" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.autoloader"></a>

```typescript
public readonly autoloader: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference</a>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `computeMode`<sup>Required</sup> <a name="computeMode" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.computeMode"></a>

```typescript
public readonly computeMode: string;
```

- *Type:* string

---

##### `computeWorkspaceId`<sup>Required</sup> <a name="computeWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.computeWorkspaceId"></a>

```typescript
public readonly computeWorkspaceId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `datasourceId`<sup>Required</sup> <a name="datasourceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.datasourceId"></a>

```typescript
public readonly datasourceId: string;
```

- *Type:* string

---

##### `datasourceName`<sup>Required</sup> <a name="datasourceName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.datasourceName"></a>

```typescript
public readonly datasourceName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `effectiveCatalogName`<sup>Required</sup> <a name="effectiveCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveCatalogName"></a>

```typescript
public readonly effectiveCatalogName: string;
```

- *Type:* string

---

##### `effectiveDatasourceName`<sup>Required</sup> <a name="effectiveDatasourceName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveDatasourceName"></a>

```typescript
public readonly effectiveDatasourceName: string;
```

- *Type:* string

---

##### `effectiveRunAsPrincipal`<sup>Required</sup> <a name="effectiveRunAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveRunAsPrincipal"></a>

```typescript
public readonly effectiveRunAsPrincipal: string;
```

- *Type:* string

---

##### `effectiveSchemaName`<sup>Required</sup> <a name="effectiveSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveSchemaName"></a>

```typescript
public readonly effectiveSchemaName: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `existingTable`<sup>Required</sup> <a name="existingTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.existingTable"></a>

```typescript
public readonly existingTable: DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.owner"></a>

```typescript
public readonly owner: DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference</a>

---

##### `parsers`<sup>Required</sup> <a name="parsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.parsers"></a>

```typescript
public readonly parsers: DataDatabricksLakewatchDatasourcesDatasourcesParsersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList">DataDatabricksLakewatchDatasourcesDatasourcesParsersList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference</a>

---

##### `runAsPrincipal`<sup>Required</sup> <a name="runAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.runAsPrincipal"></a>

```typescript
public readonly runAsPrincipal: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.schedule"></a>

```typescript
public readonly schedule: DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference</a>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.status"></a>

```typescript
public readonly status: DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference</a>

---

##### `unityCatalogConnection`<sup>Required</sup> <a name="unityCatalogConnection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.unityCatalogConnection"></a>

```typescript
public readonly unityCatalogConnection: DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourcesDatasources;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources">DataDatabricksLakewatchDatasourcesDatasources</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetPrincipalType"></a>

```typescript
public resetPrincipalType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner">DataDatabricksLakewatchDatasourcesDatasourcesOwner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourcesDatasourcesOwner;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner">DataDatabricksLakewatchDatasourcesDatasourcesOwner</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesParsersList <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersList" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.get"></a>

```typescript
public get(index: number): DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers">DataDatabricksLakewatchDatasourcesDatasourcesParsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesParsers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers">DataDatabricksLakewatchDatasourcesDatasourcesParsers</a>[]

---


### DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.putTargetTable">putTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resetTargetTable">resetTargetTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetTable` <a name="putTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.putTargetTable"></a>

```typescript
public putTargetTable(value: DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a>

---

##### `resetTargetTable` <a name="resetTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resetTargetTable"></a>

```typescript
public resetTargetTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.effectiveTargetTable">effectiveTargetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.targetTableInput">targetTableInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers">DataDatabricksLakewatchDatasourcesDatasourcesParsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveTargetTable`<sup>Required</sup> <a name="effectiveTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.effectiveTargetTable"></a>

```typescript
public readonly effectiveTargetTable: DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference</a>

---

##### `targetTable`<sup>Required</sup> <a name="targetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.targetTable"></a>

```typescript
public readonly targetTable: DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `targetTableInput`<sup>Optional</sup> <a name="targetTableInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.targetTableInput"></a>

```typescript
public readonly targetTableInput: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourcesDatasourcesParsers;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers">DataDatabricksLakewatchDatasourcesDatasourcesParsers</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetAtLeastEvery">resetAtLeastEvery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetComputeGroup">resetComputeGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetCronExpression">resetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAtLeastEvery` <a name="resetAtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetAtLeastEvery"></a>

```typescript
public resetAtLeastEvery(): void
```

##### `resetComputeGroup` <a name="resetComputeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetComputeGroup"></a>

```typescript
public resetComputeGroup(): void
```

##### `resetContinuous` <a name="resetContinuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetContinuous"></a>

```typescript
public resetContinuous(): void
```

##### `resetCronExpression` <a name="resetCronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetCronExpression"></a>

```typescript
public resetCronExpression(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.atLeastEveryInput">atLeastEveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.computeGroupInput">computeGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.continuousInput">continuousInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.atLeastEvery">atLeastEvery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.computeGroup">computeGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.continuous">continuous</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule">DataDatabricksLakewatchDatasourcesDatasourcesSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `atLeastEveryInput`<sup>Optional</sup> <a name="atLeastEveryInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.atLeastEveryInput"></a>

```typescript
public readonly atLeastEveryInput: string;
```

- *Type:* string

---

##### `computeGroupInput`<sup>Optional</sup> <a name="computeGroupInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.computeGroupInput"></a>

```typescript
public readonly computeGroupInput: string;
```

- *Type:* string

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.continuousInput"></a>

```typescript
public readonly continuousInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.cronExpressionInput"></a>

```typescript
public readonly cronExpressionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `atLeastEvery`<sup>Required</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.atLeastEvery"></a>

```typescript
public readonly atLeastEvery: string;
```

- *Type:* string

---

##### `computeGroup`<sup>Required</sup> <a name="computeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.computeGroup"></a>

```typescript
public readonly computeGroup: string;
```

- *Type:* string

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.continuous"></a>

```typescript
public readonly continuous: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourcesDatasourcesSchedule;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule">DataDatabricksLakewatchDatasourcesDatasourcesSchedule</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastCompleteTime">lastCompleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastErrorMessage">lastErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastStartTime">lastStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastStatusChangeTime">lastStatusChangeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.runState">runState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `lastCompleteTime`<sup>Required</sup> <a name="lastCompleteTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastCompleteTime"></a>

```typescript
public readonly lastCompleteTime: string;
```

- *Type:* string

---

##### `lastErrorMessage`<sup>Required</sup> <a name="lastErrorMessage" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastErrorMessage"></a>

```typescript
public readonly lastErrorMessage: string;
```

- *Type:* string

---

##### `lastStartTime`<sup>Required</sup> <a name="lastStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastStartTime"></a>

```typescript
public readonly lastStartTime: string;
```

- *Type:* string

---

##### `lastStatusChangeTime`<sup>Required</sup> <a name="lastStatusChangeTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastStatusChangeTime"></a>

```typescript
public readonly lastStatusChangeTime: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `runState`<sup>Required</sup> <a name="runState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.runState"></a>

```typescript
public readonly runState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastCompleteTime">lastCompleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastErrorMessage">lastErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastStartTime">lastStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastStatusChangeTime">lastStatusChangeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.runState">runState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `lastCompleteTime`<sup>Required</sup> <a name="lastCompleteTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastCompleteTime"></a>

```typescript
public readonly lastCompleteTime: string;
```

- *Type:* string

---

##### `lastErrorMessage`<sup>Required</sup> <a name="lastErrorMessage" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastErrorMessage"></a>

```typescript
public readonly lastErrorMessage: string;
```

- *Type:* string

---

##### `lastStartTime`<sup>Required</sup> <a name="lastStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastStartTime"></a>

```typescript
public readonly lastStartTime: string;
```

- *Type:* string

---

##### `lastStatusChangeTime`<sup>Required</sup> <a name="lastStatusChangeTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastStatusChangeTime"></a>

```typescript
public readonly lastStatusChangeTime: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `runState`<sup>Required</sup> <a name="runState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.runState"></a>

```typescript
public readonly runState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.ingestionJob">ingestionJob</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.ingestionPipeline">ingestionPipeline</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus">DataDatabricksLakewatchDatasourcesDatasourcesStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingestionJob`<sup>Required</sup> <a name="ingestionJob" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.ingestionJob"></a>

```typescript
public readonly ingestionJob: DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference</a>

---

##### `ingestionPipeline`<sup>Required</sup> <a name="ingestionPipeline" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.ingestionPipeline"></a>

```typescript
public readonly ingestionPipeline: DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourcesDatasourcesStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus">DataDatabricksLakewatchDatasourcesDatasourcesStatus</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connector">connector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.effectiveStartTime">effectiveStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.configurationInput">configurationInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.configuration">configuration</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection">DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connector"></a>

```typescript
public readonly connector: string;
```

- *Type:* string

---

##### `effectiveStartTime`<sup>Required</sup> <a name="effectiveStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.effectiveStartTime"></a>

```typescript
public readonly effectiveStartTime: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.configurationInput"></a>

```typescript
public readonly configurationInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.configuration"></a>

```typescript
public readonly configuration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection">DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetPrincipalType"></a>

```typescript
public resetPrincipalType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy">DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy">DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy</a>

---


### DataDatabricksLakewatchDatasourcesProviderConfigOutputReference <a name="DataDatabricksLakewatchDatasourcesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasources } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchDatasourcesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a>

---



