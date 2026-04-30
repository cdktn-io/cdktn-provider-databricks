# `dataDatabricksMaterializedFeaturesFeatureTag` Submodule <a name="`dataDatabricksMaterializedFeaturesFeatureTag` Submodule" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMaterializedFeaturesFeatureTag <a name="DataDatabricksMaterializedFeaturesFeatureTag" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/materialized_features_feature_tag databricks_materialized_features_feature_tag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTag } from '@cdktn/provider-databricks'

new dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag(scope: Construct, id: string, config: DataDatabricksMaterializedFeaturesFeatureTagConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig">DataDatabricksMaterializedFeaturesFeatureTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig">DataDatabricksMaterializedFeaturesFeatureTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksMaterializedFeaturesFeatureTagProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMaterializedFeaturesFeatureTag resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isConstruct"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTag } from '@cdktn/provider-databricks'

dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformElement"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTag } from '@cdktn/provider-databricks'

dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformDataSource"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTag } from '@cdktn/provider-databricks'

dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTag } from '@cdktn/provider-databricks'

dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksMaterializedFeaturesFeatureTag resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMaterializedFeaturesFeatureTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMaterializedFeaturesFeatureTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/materialized_features_feature_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMaterializedFeaturesFeatureTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.key">key</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksMaterializedFeaturesFeatureTagProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMaterializedFeaturesFeatureTagConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.Initializer"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTag } from '@cdktn/provider-databricks'

const dataDatabricksMaterializedFeaturesFeatureTagConfig: dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/materialized_features_feature_tag#key DataDatabricksMaterializedFeaturesFeatureTag#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/materialized_features_feature_tag#provider_config DataDatabricksMaterializedFeaturesFeatureTag#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/materialized_features_feature_tag#key DataDatabricksMaterializedFeaturesFeatureTag#key}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMaterializedFeaturesFeatureTagProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/materialized_features_feature_tag#provider_config DataDatabricksMaterializedFeaturesFeatureTag#provider_config}.

---

### DataDatabricksMaterializedFeaturesFeatureTagProviderConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTag } from '@cdktn/provider-databricks'

const dataDatabricksMaterializedFeaturesFeatureTagProviderConfig: dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/materialized_features_feature_tag#workspace_id DataDatabricksMaterializedFeaturesFeatureTag#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/materialized_features_feature_tag#workspace_id DataDatabricksMaterializedFeaturesFeatureTag#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference <a name="DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMaterializedFeaturesFeatureTag } from '@cdktn/provider-databricks'

new dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksMaterializedFeaturesFeatureTagProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a>

---



