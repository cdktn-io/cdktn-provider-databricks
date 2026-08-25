# `dataDatabricksMaterializedFeaturesFeatureTags` Submodule <a name="`dataDatabricksMaterializedFeaturesFeatureTags` Submodule" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMaterializedFeaturesFeatureTags <a name="DataDatabricksMaterializedFeaturesFeatureTags" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags databricks_materialized_features_feature_tags}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTags } from '@cdktn/provider-databricks'

new dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags(scope: Construct, id: string, config: DataDatabricksMaterializedFeaturesFeatureTagsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig">DataDatabricksMaterializedFeaturesFeatureTagsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig">DataDatabricksMaterializedFeaturesFeatureTagsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMaterializedFeaturesFeatureTags resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isConstruct"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTags } from '@cdktn/provider-databricks'

dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformElement"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTags } from '@cdktn/provider-databricks'

dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformDataSource"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTags } from '@cdktn/provider-databricks'

dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTags } from '@cdktn/provider-databricks'

dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksMaterializedFeaturesFeatureTags resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMaterializedFeaturesFeatureTags to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMaterializedFeaturesFeatureTags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMaterializedFeaturesFeatureTags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureTags">featureTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureNameInput">featureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureName">featureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `featureTags`<sup>Required</sup> <a name="featureTags" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureTags"></a>

```typescript
public readonly featureTags: DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference</a>

---

##### `featureNameInput`<sup>Optional</sup> <a name="featureNameInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureNameInput"></a>

```typescript
public readonly featureNameInput: string;
```

- *Type:* string

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMaterializedFeaturesFeatureTagsConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagsConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.Initializer"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTags } from '@cdktn/provider-databricks'

const dataDatabricksMaterializedFeaturesFeatureTagsConfig: dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.featureName">featureName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#feature_name DataDatabricksMaterializedFeaturesFeatureTags#feature_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#table_name DataDatabricksMaterializedFeaturesFeatureTags#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#page_size DataDatabricksMaterializedFeaturesFeatureTags#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#provider_config DataDatabricksMaterializedFeaturesFeatureTags#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#feature_name DataDatabricksMaterializedFeaturesFeatureTags#feature_name}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#table_name DataDatabricksMaterializedFeaturesFeatureTags#table_name}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#page_size DataDatabricksMaterializedFeaturesFeatureTags#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#provider_config DataDatabricksMaterializedFeaturesFeatureTags#provider_config}.

---

### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.Initializer"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTags } from '@cdktn/provider-databricks'

const dataDatabricksMaterializedFeaturesFeatureTagsFeatureTags: dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#key DataDatabricksMaterializedFeaturesFeatureTags#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#provider_config DataDatabricksMaterializedFeaturesFeatureTags#provider_config}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#key DataDatabricksMaterializedFeaturesFeatureTags#key}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#provider_config DataDatabricksMaterializedFeaturesFeatureTags#provider_config}.

---

### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTags } from '@cdktn/provider-databricks'

const dataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig: dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#workspace_id DataDatabricksMaterializedFeaturesFeatureTags#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#workspace_id DataDatabricksMaterializedFeaturesFeatureTags#workspace_id}.

---

### DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTags } from '@cdktn/provider-databricks'

const dataDatabricksMaterializedFeaturesFeatureTagsProviderConfig: dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#workspace_id DataDatabricksMaterializedFeaturesFeatureTags#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/materialized_features_feature_tags#workspace_id DataDatabricksMaterializedFeaturesFeatureTags#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTags } from '@cdktn/provider-databricks'

new dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.get"></a>

```typescript
public get(index: number): DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags</a>[]

---


### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTags } from '@cdktn/provider-databricks'

new dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags</a>

---


### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTags } from '@cdktn/provider-databricks'

new dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a>

---


### DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference <a name="DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTags } from '@cdktn/provider-databricks'

new dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a>

---



