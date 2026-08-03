# `dataDatabricksWarehousesDefaultWarehouseOverrides` Submodule <a name="`dataDatabricksWarehousesDefaultWarehouseOverrides` Submodule" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWarehousesDefaultWarehouseOverrides <a name="DataDatabricksWarehousesDefaultWarehouseOverrides" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/warehouses_default_warehouse_overrides databricks_warehouses_default_warehouse_overrides}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer"></a>

```typescript
import { dataDatabricksWarehousesDefaultWarehouseOverrides } from '@cdktn/provider-databricks'

new dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides(scope: Construct, id: string, config?: DataDatabricksWarehousesDefaultWarehouseOverridesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig">DataDatabricksWarehousesDefaultWarehouseOverridesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig">DataDatabricksWarehousesDefaultWarehouseOverridesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksWarehousesDefaultWarehouseOverrides resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isConstruct"></a>

```typescript
import { dataDatabricksWarehousesDefaultWarehouseOverrides } from '@cdktn/provider-databricks'

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformElement"></a>

```typescript
import { dataDatabricksWarehousesDefaultWarehouseOverrides } from '@cdktn/provider-databricks'

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformDataSource"></a>

```typescript
import { dataDatabricksWarehousesDefaultWarehouseOverrides } from '@cdktn/provider-databricks'

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport"></a>

```typescript
import { dataDatabricksWarehousesDefaultWarehouseOverrides } from '@cdktn/provider-databricks'

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksWarehousesDefaultWarehouseOverrides resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksWarehousesDefaultWarehouseOverrides to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksWarehousesDefaultWarehouseOverrides that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/warehouses_default_warehouse_overrides#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWarehousesDefaultWarehouseOverrides to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.defaultWarehouseOverrides">defaultWarehouseOverrides</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `defaultWarehouseOverrides`<sup>Required</sup> <a name="defaultWarehouseOverrides" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.defaultWarehouseOverrides"></a>

```typescript
public readonly defaultWarehouseOverrides: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWarehousesDefaultWarehouseOverridesConfig <a name="DataDatabricksWarehousesDefaultWarehouseOverridesConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.Initializer"></a>

```typescript
import { dataDatabricksWarehousesDefaultWarehouseOverrides } from '@cdktn/provider-databricks'

const dataDatabricksWarehousesDefaultWarehouseOverridesConfig: dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/warehouses_default_warehouse_overrides#page_size DataDatabricksWarehousesDefaultWarehouseOverrides#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/warehouses_default_warehouse_overrides#page_size DataDatabricksWarehousesDefaultWarehouseOverrides#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}.

---

### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.Initializer"></a>

```typescript
import { dataDatabricksWarehousesDefaultWarehouseOverrides } from '@cdktn/provider-databricks'

const dataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides: dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/warehouses_default_warehouse_overrides#name DataDatabricksWarehousesDefaultWarehouseOverrides#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/warehouses_default_warehouse_overrides#name DataDatabricksWarehousesDefaultWarehouseOverrides#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}.

---

### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksWarehousesDefaultWarehouseOverrides } from '@cdktn/provider-databricks'

const dataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig: dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}.

---

### DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig <a name="DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksWarehousesDefaultWarehouseOverrides } from '@cdktn/provider-databricks'

const dataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig: dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer"></a>

```typescript
import { dataDatabricksWarehousesDefaultWarehouseOverrides } from '@cdktn/provider-databricks'

new dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.get"></a>

```typescript
public get(index: number): DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides</a>[]

---


### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksWarehousesDefaultWarehouseOverrides } from '@cdktn/provider-databricks'

new dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.defaultWarehouseOverrideId">defaultWarehouseOverrideId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultWarehouseOverrideId`<sup>Required</sup> <a name="defaultWarehouseOverrideId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.defaultWarehouseOverrideId"></a>

```typescript
public readonly defaultWarehouseOverrideId: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides</a>

---


### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksWarehousesDefaultWarehouseOverrides } from '@cdktn/provider-databricks'

new dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a>

---


### DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference <a name="DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksWarehousesDefaultWarehouseOverrides } from '@cdktn/provider-databricks'

new dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a>

---



