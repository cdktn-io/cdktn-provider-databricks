# `dataDatabricksFeatureEngineeringFeatures` Submodule <a name="`dataDatabricksFeatureEngineeringFeatures` Submodule" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFeatureEngineeringFeatures <a name="DataDatabricksFeatureEngineeringFeatures" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features databricks_feature_engineering_features}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures(scope: Construct, id: string, config?: DataDatabricksFeatureEngineeringFeaturesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig">DataDatabricksFeatureEngineeringFeaturesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig">DataDatabricksFeatureEngineeringFeaturesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksFeatureEngineeringFeaturesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfig">DataDatabricksFeatureEngineeringFeaturesProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksFeatureEngineeringFeatures resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isConstruct"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isTerraformElement"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isTerraformDataSource"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.generateConfigForImport"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksFeatureEngineeringFeatures resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksFeatureEngineeringFeatures to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksFeatureEngineeringFeatures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksFeatureEngineeringFeatures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.features">features</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList">DataDatabricksFeatureEngineeringFeaturesFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference">DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfig">DataDatabricksFeatureEngineeringFeaturesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.features"></a>

```typescript
public readonly features: DataDatabricksFeatureEngineeringFeaturesFeaturesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList">DataDatabricksFeatureEngineeringFeaturesFeaturesList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference">DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksFeatureEngineeringFeaturesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfig">DataDatabricksFeatureEngineeringFeaturesProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFeatureEngineeringFeaturesConfig <a name="DataDatabricksFeatureEngineeringFeaturesConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesConfig: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#page_size DataDatabricksFeatureEngineeringFeatures#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfig">DataDatabricksFeatureEngineeringFeaturesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#provider_config DataDatabricksFeatureEngineeringFeatures#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#page_size DataDatabricksFeatureEngineeringFeatures#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksFeatureEngineeringFeaturesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfig">DataDatabricksFeatureEngineeringFeaturesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#provider_config DataDatabricksFeatureEngineeringFeatures#provider_config}.

---

### DataDatabricksFeatureEngineeringFeaturesFeatures <a name="DataDatabricksFeatureEngineeringFeaturesFeatures" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeatures: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#full_name DataDatabricksFeatureEngineeringFeatures#full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig">DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#provider_config DataDatabricksFeatureEngineeringFeatures#provider_config}. |

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#full_name DataDatabricksFeatureEngineeringFeatures#full_name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig">DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#provider_config DataDatabricksFeatureEngineeringFeatures#provider_config}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesFunction <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesFunction" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesFunction: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction.property.functionType">functionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#function_type DataDatabricksFeatureEngineeringFeatures#function_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction.property.extraParameters">extraParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#extra_parameters DataDatabricksFeatureEngineeringFeatures#extra_parameters}. |

---

##### `functionType`<sup>Required</sup> <a name="functionType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction.property.functionType"></a>

```typescript
public readonly functionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#function_type DataDatabricksFeatureEngineeringFeatures#function_type}.

---

##### `extraParameters`<sup>Optional</sup> <a name="extraParameters" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction.property.extraParameters"></a>

```typescript
public readonly extraParameters: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#extra_parameters DataDatabricksFeatureEngineeringFeatures#extra_parameters}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#key DataDatabricksFeatureEngineeringFeatures#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#value DataDatabricksFeatureEngineeringFeatures#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#key DataDatabricksFeatureEngineeringFeatures#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#value DataDatabricksFeatureEngineeringFeatures#value}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext.property.jobContext">jobContext</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext">DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#job_context DataDatabricksFeatureEngineeringFeatures#job_context}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext.property.notebookId">notebookId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#notebook_id DataDatabricksFeatureEngineeringFeatures#notebook_id}. |

---

##### `jobContext`<sup>Optional</sup> <a name="jobContext" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext.property.jobContext"></a>

```typescript
public readonly jobContext: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext">DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#job_context DataDatabricksFeatureEngineeringFeatures#job_context}.

---

##### `notebookId`<sup>Optional</sup> <a name="notebookId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext.property.notebookId"></a>

```typescript
public readonly notebookId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#notebook_id DataDatabricksFeatureEngineeringFeatures#notebook_id}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext.property.jobId">jobId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#job_id DataDatabricksFeatureEngineeringFeatures#job_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext.property.jobRunId">jobRunId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#job_run_id DataDatabricksFeatureEngineeringFeatures#job_run_id}. |

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext.property.jobId"></a>

```typescript
public readonly jobId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#job_id DataDatabricksFeatureEngineeringFeatures#job_id}.

---

##### `jobRunId`<sup>Optional</sup> <a name="jobRunId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext.property.jobRunId"></a>

```typescript
public readonly jobRunId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#job_run_id DataDatabricksFeatureEngineeringFeatures#job_run_id}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#workspace_id DataDatabricksFeatureEngineeringFeatures#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#workspace_id DataDatabricksFeatureEngineeringFeatures#workspace_id}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesSource <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesSource: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource.property.deltaTableSource">deltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#delta_table_source DataDatabricksFeatureEngineeringFeatures#delta_table_source}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource.property.kafkaSource">kafkaSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#kafka_source DataDatabricksFeatureEngineeringFeatures#kafka_source}. |

---

##### `deltaTableSource`<sup>Optional</sup> <a name="deltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource.property.deltaTableSource"></a>

```typescript
public readonly deltaTableSource: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#delta_table_source DataDatabricksFeatureEngineeringFeatures#delta_table_source}.

---

##### `kafkaSource`<sup>Optional</sup> <a name="kafkaSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource.property.kafkaSource"></a>

```typescript
public readonly kafkaSource: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#kafka_source DataDatabricksFeatureEngineeringFeatures#kafka_source}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource.property.entityColumns">entityColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#entity_columns DataDatabricksFeatureEngineeringFeatures#entity_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#full_name DataDatabricksFeatureEngineeringFeatures#full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource.property.timeseriesColumn">timeseriesColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#timeseries_column DataDatabricksFeatureEngineeringFeatures#timeseries_column}. |

---

##### `entityColumns`<sup>Required</sup> <a name="entityColumns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource.property.entityColumns"></a>

```typescript
public readonly entityColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#entity_columns DataDatabricksFeatureEngineeringFeatures#entity_columns}.

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#full_name DataDatabricksFeatureEngineeringFeatures#full_name}.

---

##### `timeseriesColumn`<sup>Required</sup> <a name="timeseriesColumn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource.property.timeseriesColumn"></a>

```typescript
public readonly timeseriesColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#timeseries_column DataDatabricksFeatureEngineeringFeatures#timeseries_column}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource.property.entityColumnIdentifiers">entityColumnIdentifiers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#entity_column_identifiers DataDatabricksFeatureEngineeringFeatures#entity_column_identifiers}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#name DataDatabricksFeatureEngineeringFeatures#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource.property.timeseriesColumnIdentifier">timeseriesColumnIdentifier</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#timeseries_column_identifier DataDatabricksFeatureEngineeringFeatures#timeseries_column_identifier}. |

---

##### `entityColumnIdentifiers`<sup>Required</sup> <a name="entityColumnIdentifiers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource.property.entityColumnIdentifiers"></a>

```typescript
public readonly entityColumnIdentifiers: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#entity_column_identifiers DataDatabricksFeatureEngineeringFeatures#entity_column_identifiers}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#name DataDatabricksFeatureEngineeringFeatures#name}.

---

##### `timeseriesColumnIdentifier`<sup>Required</sup> <a name="timeseriesColumnIdentifier" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource.property.timeseriesColumnIdentifier"></a>

```typescript
public readonly timeseriesColumnIdentifier: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#timeseries_column_identifier DataDatabricksFeatureEngineeringFeatures#timeseries_column_identifier}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers.property.variantExprPath">variantExprPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#variant_expr_path DataDatabricksFeatureEngineeringFeatures#variant_expr_path}. |

---

##### `variantExprPath`<sup>Required</sup> <a name="variantExprPath" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers.property.variantExprPath"></a>

```typescript
public readonly variantExprPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#variant_expr_path DataDatabricksFeatureEngineeringFeatures#variant_expr_path}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier.property.variantExprPath">variantExprPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#variant_expr_path DataDatabricksFeatureEngineeringFeatures#variant_expr_path}. |

---

##### `variantExprPath`<sup>Required</sup> <a name="variantExprPath" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier.property.variantExprPath"></a>

```typescript
public readonly variantExprPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#variant_expr_path DataDatabricksFeatureEngineeringFeatures#variant_expr_path}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow.property.continuous">continuous</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#continuous DataDatabricksFeatureEngineeringFeatures#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow.property.sliding">sliding</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#sliding DataDatabricksFeatureEngineeringFeatures#sliding}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow.property.tumbling">tumbling</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#tumbling DataDatabricksFeatureEngineeringFeatures#tumbling}. |

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow.property.continuous"></a>

```typescript
public readonly continuous: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#continuous DataDatabricksFeatureEngineeringFeatures#continuous}.

---

##### `sliding`<sup>Optional</sup> <a name="sliding" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow.property.sliding"></a>

```typescript
public readonly sliding: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#sliding DataDatabricksFeatureEngineeringFeatures#sliding}.

---

##### `tumbling`<sup>Optional</sup> <a name="tumbling" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow.property.tumbling"></a>

```typescript
public readonly tumbling: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#tumbling DataDatabricksFeatureEngineeringFeatures#tumbling}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous.property.windowDuration">windowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous.property.offset">offset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#offset DataDatabricksFeatureEngineeringFeatures#offset}. |

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}.

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#offset DataDatabricksFeatureEngineeringFeatures#offset}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding.property.slideDuration">slideDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#slide_duration DataDatabricksFeatureEngineeringFeatures#slide_duration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding.property.windowDuration">windowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}. |

---

##### `slideDuration`<sup>Required</sup> <a name="slideDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding.property.slideDuration"></a>

```typescript
public readonly slideDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#slide_duration DataDatabricksFeatureEngineeringFeatures#slide_duration}.

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling.property.windowDuration">windowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}. |

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}.

---

### DataDatabricksFeatureEngineeringFeaturesProviderConfig <a name="DataDatabricksFeatureEngineeringFeaturesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesProviderConfig: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#workspace_id DataDatabricksFeatureEngineeringFeatures#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/feature_engineering_features#workspace_id DataDatabricksFeatureEngineeringFeatures#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.get"></a>

```typescript
public get(index: number): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a>[]

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.putExtraParameters">putExtraParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.resetExtraParameters">resetExtraParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtraParameters` <a name="putExtraParameters" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.putExtraParameters"></a>

```typescript
public putExtraParameters(value: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.putExtraParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a>[]

---

##### `resetExtraParameters` <a name="resetExtraParameters" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.resetExtraParameters"></a>

```typescript
public resetExtraParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.extraParameters">extraParameters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.extraParametersInput">extraParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.functionTypeInput">functionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.functionType">functionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction">DataDatabricksFeatureEngineeringFeaturesFeaturesFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extraParameters`<sup>Required</sup> <a name="extraParameters" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.extraParameters"></a>

```typescript
public readonly extraParameters: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList</a>

---

##### `extraParametersInput`<sup>Optional</sup> <a name="extraParametersInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.extraParametersInput"></a>

```typescript
public readonly extraParametersInput: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a>[]

---

##### `functionTypeInput`<sup>Optional</sup> <a name="functionTypeInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.functionTypeInput"></a>

```typescript
public readonly functionTypeInput: string;
```

- *Type:* string

---

##### `functionType`<sup>Required</sup> <a name="functionType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.functionType"></a>

```typescript
public readonly functionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringFeaturesFeaturesFunction;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction">DataDatabricksFeatureEngineeringFeaturesFeaturesFunction</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.resetJobId">resetJobId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.resetJobRunId">resetJobRunId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJobId` <a name="resetJobId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.resetJobId"></a>

```typescript
public resetJobId(): void
```

##### `resetJobRunId` <a name="resetJobRunId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.resetJobRunId"></a>

```typescript
public resetJobRunId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.property.jobIdInput">jobIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.property.jobRunIdInput">jobRunIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.property.jobId">jobId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.property.jobRunId">jobRunId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext">DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.property.jobIdInput"></a>

```typescript
public readonly jobIdInput: number;
```

- *Type:* number

---

##### `jobRunIdInput`<sup>Optional</sup> <a name="jobRunIdInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.property.jobRunIdInput"></a>

```typescript
public readonly jobRunIdInput: number;
```

- *Type:* number

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.property.jobId"></a>

```typescript
public readonly jobId: number;
```

- *Type:* number

---

##### `jobRunId`<sup>Required</sup> <a name="jobRunId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.property.jobRunId"></a>

```typescript
public readonly jobRunId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext">DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.putJobContext">putJobContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.resetJobContext">resetJobContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.resetNotebookId">resetNotebookId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJobContext` <a name="putJobContext" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.putJobContext"></a>

```typescript
public putJobContext(value: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.putJobContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext">DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext</a>

---

##### `resetJobContext` <a name="resetJobContext" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.resetJobContext"></a>

```typescript
public resetJobContext(): void
```

##### `resetNotebookId` <a name="resetNotebookId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.resetNotebookId"></a>

```typescript
public resetNotebookId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.property.jobContext">jobContext</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.property.jobContextInput">jobContextInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext">DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.property.notebookIdInput">notebookIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.property.notebookId">notebookId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext">DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobContext`<sup>Required</sup> <a name="jobContext" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.property.jobContext"></a>

```typescript
public readonly jobContext: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference</a>

---

##### `jobContextInput`<sup>Optional</sup> <a name="jobContextInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.property.jobContextInput"></a>

```typescript
public readonly jobContextInput: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext">DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext</a>

---

##### `notebookIdInput`<sup>Optional</sup> <a name="notebookIdInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.property.notebookIdInput"></a>

```typescript
public readonly notebookIdInput: number;
```

- *Type:* number

---

##### `notebookId`<sup>Required</sup> <a name="notebookId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.property.notebookId"></a>

```typescript
public readonly notebookId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext">DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesList <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesList" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.get"></a>

```typescript
public get(index: number): DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures">DataDatabricksFeatureEngineeringFeaturesFeatures</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeatures[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures">DataDatabricksFeatureEngineeringFeaturesFeatures</a>[]

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig">DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.filterCondition">filterCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.function">function</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.inputs">inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.lineageContext">lineageContext</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig">DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures">DataDatabricksFeatureEngineeringFeaturesFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filterCondition`<sup>Required</sup> <a name="filterCondition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.filterCondition"></a>

```typescript
public readonly filterCondition: string;
```

- *Type:* string

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.function"></a>

```typescript
public readonly function: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference</a>

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.inputs"></a>

```typescript
public readonly inputs: string[];
```

- *Type:* string[]

---

##### `lineageContext`<sup>Required</sup> <a name="lineageContext" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.lineageContext"></a>

```typescript
public readonly lineageContext: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.source"></a>

```typescript
public readonly source: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference</a>

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.timeWindow"></a>

```typescript
public readonly timeWindow: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference</a>

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig">DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig</a>

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringFeaturesFeatures;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures">DataDatabricksFeatureEngineeringFeaturesFeatures</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig">DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig">DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.entityColumnsInput">entityColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">timeseriesColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.entityColumns">entityColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.timeseriesColumn">timeseriesColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityColumnsInput`<sup>Optional</sup> <a name="entityColumnsInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```typescript
public readonly entityColumnsInput: string[];
```

- *Type:* string[]

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `timeseriesColumnInput`<sup>Optional</sup> <a name="timeseriesColumnInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```typescript
public readonly timeseriesColumnInput: string;
```

- *Type:* string

---

##### `entityColumns`<sup>Required</sup> <a name="entityColumns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```typescript
public readonly entityColumns: string[];
```

- *Type:* string[]

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `timeseriesColumn`<sup>Required</sup> <a name="timeseriesColumn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```typescript
public readonly timeseriesColumn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.get"></a>

```typescript
public get(index: number): DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers</a>[]

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.variantExprPathInput">variantExprPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.variantExprPath">variantExprPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `variantExprPathInput`<sup>Optional</sup> <a name="variantExprPathInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.variantExprPathInput"></a>

```typescript
public readonly variantExprPathInput: string;
```

- *Type:* string

---

##### `variantExprPath`<sup>Required</sup> <a name="variantExprPath" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.variantExprPath"></a>

```typescript
public readonly variantExprPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.putEntityColumnIdentifiers">putEntityColumnIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.putTimeseriesColumnIdentifier">putTimeseriesColumnIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntityColumnIdentifiers` <a name="putEntityColumnIdentifiers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.putEntityColumnIdentifiers"></a>

```typescript
public putEntityColumnIdentifiers(value: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.putEntityColumnIdentifiers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers</a>[]

---

##### `putTimeseriesColumnIdentifier` <a name="putTimeseriesColumnIdentifier" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.putTimeseriesColumnIdentifier"></a>

```typescript
public putTimeseriesColumnIdentifier(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.putTimeseriesColumnIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.entityColumnIdentifiers">entityColumnIdentifiers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.timeseriesColumnIdentifier">timeseriesColumnIdentifier</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.entityColumnIdentifiersInput">entityColumnIdentifiersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.timeseriesColumnIdentifierInput">timeseriesColumnIdentifierInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityColumnIdentifiers`<sup>Required</sup> <a name="entityColumnIdentifiers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.entityColumnIdentifiers"></a>

```typescript
public readonly entityColumnIdentifiers: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList</a>

---

##### `timeseriesColumnIdentifier`<sup>Required</sup> <a name="timeseriesColumnIdentifier" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.timeseriesColumnIdentifier"></a>

```typescript
public readonly timeseriesColumnIdentifier: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference</a>

---

##### `entityColumnIdentifiersInput`<sup>Optional</sup> <a name="entityColumnIdentifiersInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.entityColumnIdentifiersInput"></a>

```typescript
public readonly entityColumnIdentifiersInput: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeseriesColumnIdentifierInput`<sup>Optional</sup> <a name="timeseriesColumnIdentifierInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.timeseriesColumnIdentifierInput"></a>

```typescript
public readonly timeseriesColumnIdentifierInput: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.variantExprPathInput">variantExprPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.variantExprPath">variantExprPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `variantExprPathInput`<sup>Optional</sup> <a name="variantExprPathInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.variantExprPathInput"></a>

```typescript
public readonly variantExprPathInput: string;
```

- *Type:* string

---

##### `variantExprPath`<sup>Required</sup> <a name="variantExprPath" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.variantExprPath"></a>

```typescript
public readonly variantExprPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.putDeltaTableSource">putDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.putKafkaSource">putKafkaSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.resetDeltaTableSource">resetDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.resetKafkaSource">resetKafkaSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeltaTableSource` <a name="putDeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.putDeltaTableSource"></a>

```typescript
public putDeltaTableSource(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.putDeltaTableSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource</a>

---

##### `putKafkaSource` <a name="putKafkaSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.putKafkaSource"></a>

```typescript
public putKafkaSource(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.putKafkaSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource</a>

---

##### `resetDeltaTableSource` <a name="resetDeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.resetDeltaTableSource"></a>

```typescript
public resetDeltaTableSource(): void
```

##### `resetKafkaSource` <a name="resetKafkaSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.resetKafkaSource"></a>

```typescript
public resetKafkaSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.deltaTableSource">deltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.kafkaSource">kafkaSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.deltaTableSourceInput">deltaTableSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.kafkaSourceInput">kafkaSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deltaTableSource`<sup>Required</sup> <a name="deltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.deltaTableSource"></a>

```typescript
public readonly deltaTableSource: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference</a>

---

##### `kafkaSource`<sup>Required</sup> <a name="kafkaSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.kafkaSource"></a>

```typescript
public readonly kafkaSource: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference</a>

---

##### `deltaTableSourceInput`<sup>Optional</sup> <a name="deltaTableSourceInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.deltaTableSourceInput"></a>

```typescript
public readonly deltaTableSourceInput: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource</a>

---

##### `kafkaSourceInput`<sup>Optional</sup> <a name="kafkaSourceInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.kafkaSourceInput"></a>

```typescript
public readonly kafkaSourceInput: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringFeaturesFeaturesSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSource</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.resetOffset">resetOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffset` <a name="resetOffset" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.property.offsetInput">offsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.property.windowDurationInput">windowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.property.offset">offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.property.windowDuration">windowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: string;
```

- *Type:* string

---

##### `windowDurationInput`<sup>Optional</sup> <a name="windowDurationInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.property.windowDurationInput"></a>

```typescript
public readonly windowDurationInput: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.putContinuous">putContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.putSliding">putSliding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.putTumbling">putTumbling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.resetSliding">resetSliding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.resetTumbling">resetTumbling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContinuous` <a name="putContinuous" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.putContinuous"></a>

```typescript
public putContinuous(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.putContinuous.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous</a>

---

##### `putSliding` <a name="putSliding" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.putSliding"></a>

```typescript
public putSliding(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.putSliding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding</a>

---

##### `putTumbling` <a name="putTumbling" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.putTumbling"></a>

```typescript
public putTumbling(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.putTumbling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling</a>

---

##### `resetContinuous` <a name="resetContinuous" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.resetContinuous"></a>

```typescript
public resetContinuous(): void
```

##### `resetSliding` <a name="resetSliding" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.resetSliding"></a>

```typescript
public resetSliding(): void
```

##### `resetTumbling` <a name="resetTumbling" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.resetTumbling"></a>

```typescript
public resetTumbling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.continuous">continuous</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.sliding">sliding</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.tumbling">tumbling</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.continuousInput">continuousInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.slidingInput">slidingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.tumblingInput">tumblingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.continuous"></a>

```typescript
public readonly continuous: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference</a>

---

##### `sliding`<sup>Required</sup> <a name="sliding" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.sliding"></a>

```typescript
public readonly sliding: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference</a>

---

##### `tumbling`<sup>Required</sup> <a name="tumbling" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.tumbling"></a>

```typescript
public readonly tumbling: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference</a>

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.continuousInput"></a>

```typescript
public readonly continuousInput: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous</a>

---

##### `slidingInput`<sup>Optional</sup> <a name="slidingInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.slidingInput"></a>

```typescript
public readonly slidingInput: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding</a>

---

##### `tumblingInput`<sup>Optional</sup> <a name="tumblingInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.tumblingInput"></a>

```typescript
public readonly tumblingInput: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.property.slideDurationInput">slideDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.property.windowDurationInput">windowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.property.slideDuration">slideDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.property.windowDuration">windowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `slideDurationInput`<sup>Optional</sup> <a name="slideDurationInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.property.slideDurationInput"></a>

```typescript
public readonly slideDurationInput: string;
```

- *Type:* string

---

##### `windowDurationInput`<sup>Optional</sup> <a name="windowDurationInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.property.windowDurationInput"></a>

```typescript
public readonly windowDurationInput: string;
```

- *Type:* string

---

##### `slideDuration`<sup>Required</sup> <a name="slideDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.property.slideDuration"></a>

```typescript
public readonly slideDuration: string;
```

- *Type:* string

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.property.windowDurationInput">windowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.property.windowDuration">windowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `windowDurationInput`<sup>Optional</sup> <a name="windowDurationInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.property.windowDurationInput"></a>

```typescript
public readonly windowDurationInput: string;
```

- *Type:* string

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling</a>

---


### DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfig">DataDatabricksFeatureEngineeringFeaturesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringFeaturesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesProviderConfig">DataDatabricksFeatureEngineeringFeaturesProviderConfig</a>

---



