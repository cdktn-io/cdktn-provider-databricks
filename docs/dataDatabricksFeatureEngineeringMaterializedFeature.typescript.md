# `dataDatabricksFeatureEngineeringMaterializedFeature` Submodule <a name="`dataDatabricksFeatureEngineeringMaterializedFeature` Submodule" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFeatureEngineeringMaterializedFeature <a name="DataDatabricksFeatureEngineeringMaterializedFeature" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature databricks_feature_engineering_materialized_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeature } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature(scope: Construct, id: string, config: DataDatabricksFeatureEngineeringMaterializedFeatureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig">DataDatabricksFeatureEngineeringMaterializedFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig">DataDatabricksFeatureEngineeringMaterializedFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksFeatureEngineeringMaterializedFeature resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isConstruct"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeature } from '@cdktn/provider-databricks'

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformElement"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeature } from '@cdktn/provider-databricks'

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformDataSource"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeature } from '@cdktn/provider-databricks'

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeature } from '@cdktn/provider-databricks'

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksFeatureEngineeringMaterializedFeature resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksFeatureEngineeringMaterializedFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksFeatureEngineeringMaterializedFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksFeatureEngineeringMaterializedFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cronSchedule">cronSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.featureName">featureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.isOnline">isOnline</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.lastMaterializationTime">lastMaterializationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.offlineStoreConfig">offlineStoreConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.onlineStoreConfig">onlineStoreConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.pipelineScheduleState">pipelineScheduleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.materializedFeatureIdInput">materializedFeatureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.materializedFeatureId">materializedFeatureId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `cronSchedule`<sup>Required</sup> <a name="cronSchedule" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cronSchedule"></a>

```typescript
public readonly cronSchedule: string;
```

- *Type:* string

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

---

##### `isOnline`<sup>Required</sup> <a name="isOnline" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.isOnline"></a>

```typescript
public readonly isOnline: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `lastMaterializationTime`<sup>Required</sup> <a name="lastMaterializationTime" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.lastMaterializationTime"></a>

```typescript
public readonly lastMaterializationTime: string;
```

- *Type:* string

---

##### `offlineStoreConfig`<sup>Required</sup> <a name="offlineStoreConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.offlineStoreConfig"></a>

```typescript
public readonly offlineStoreConfig: DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference</a>

---

##### `onlineStoreConfig`<sup>Required</sup> <a name="onlineStoreConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.onlineStoreConfig"></a>

```typescript
public readonly onlineStoreConfig: DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference</a>

---

##### `pipelineScheduleState`<sup>Required</sup> <a name="pipelineScheduleState" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.pipelineScheduleState"></a>

```typescript
public readonly pipelineScheduleState: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference</a>

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `materializedFeatureIdInput`<sup>Optional</sup> <a name="materializedFeatureIdInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.materializedFeatureIdInput"></a>

```typescript
public readonly materializedFeatureIdInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a>

---

##### `materializedFeatureId`<sup>Required</sup> <a name="materializedFeatureId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.materializedFeatureId"></a>

```typescript
public readonly materializedFeatureId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFeatureEngineeringMaterializedFeatureConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeatureConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeature } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringMaterializedFeatureConfig: dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.materializedFeatureId">materializedFeatureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeature#materialized_feature_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#provider_config DataDatabricksFeatureEngineeringMaterializedFeature#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `materializedFeatureId`<sup>Required</sup> <a name="materializedFeatureId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.materializedFeatureId"></a>

```typescript
public readonly materializedFeatureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeature#materialized_feature_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#provider_config DataDatabricksFeatureEngineeringMaterializedFeature#provider_config}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeature } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig: dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#catalog_name DataDatabricksFeatureEngineeringMaterializedFeature#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#schema_name DataDatabricksFeatureEngineeringMaterializedFeature#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeature#table_name_prefix}. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#catalog_name DataDatabricksFeatureEngineeringMaterializedFeature#catalog_name}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#schema_name DataDatabricksFeatureEngineeringMaterializedFeature#schema_name}.

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeature#table_name_prefix}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeature } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig: dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#catalog_name DataDatabricksFeatureEngineeringMaterializedFeature#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.onlineStoreName">onlineStoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#online_store_name DataDatabricksFeatureEngineeringMaterializedFeature#online_store_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#schema_name DataDatabricksFeatureEngineeringMaterializedFeature#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeature#table_name_prefix}. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#catalog_name DataDatabricksFeatureEngineeringMaterializedFeature#catalog_name}.

---

##### `onlineStoreName`<sup>Required</sup> <a name="onlineStoreName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.onlineStoreName"></a>

```typescript
public readonly onlineStoreName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#online_store_name DataDatabricksFeatureEngineeringMaterializedFeature#online_store_name}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#schema_name DataDatabricksFeatureEngineeringMaterializedFeature#schema_name}.

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeature#table_name_prefix}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeature } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig: dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#workspace_id DataDatabricksFeatureEngineeringMaterializedFeature#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_materialized_feature#workspace_id DataDatabricksFeatureEngineeringMaterializedFeature#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeature } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefixInput">tableNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNamePrefixInput`<sup>Optional</sup> <a name="tableNamePrefixInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefixInput"></a>

```typescript
public readonly tableNamePrefixInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeature } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.onlineStoreNameInput">onlineStoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.tableNamePrefixInput">tableNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.onlineStoreName">onlineStoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `onlineStoreNameInput`<sup>Optional</sup> <a name="onlineStoreNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.onlineStoreNameInput"></a>

```typescript
public readonly onlineStoreNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNamePrefixInput`<sup>Optional</sup> <a name="tableNamePrefixInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.tableNamePrefixInput"></a>

```typescript
public readonly tableNamePrefixInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `onlineStoreName`<sup>Required</sup> <a name="onlineStoreName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.onlineStoreName"></a>

```typescript
public readonly onlineStoreName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeature } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a>

---



