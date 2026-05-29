# `dataDatabricksFeatureEngineeringKafkaConfig` Submodule <a name="`dataDatabricksFeatureEngineeringKafkaConfig` Submodule" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFeatureEngineeringKafkaConfig <a name="DataDatabricksFeatureEngineeringKafkaConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config databricks_feature_engineering_kafka_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig(scope: Construct, id: string, config: DataDatabricksFeatureEngineeringKafkaConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig">DataDatabricksFeatureEngineeringKafkaConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig">DataDatabricksFeatureEngineeringKafkaConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksFeatureEngineeringKafkaConfigProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksFeatureEngineeringKafkaConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isConstruct"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isTerraformElement"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isTerraformDataSource"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.generateConfigForImport"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksFeatureEngineeringKafkaConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksFeatureEngineeringKafkaConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksFeatureEngineeringKafkaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksFeatureEngineeringKafkaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.authConfig">authConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.backfillSource">backfillSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.bootstrapServers">bootstrapServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.extraOptions">extraOptions</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.keySchema">keySchema</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference">DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.subscriptionMode">subscriptionMode</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference">DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.valueSchema">valueSchema</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference">DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `authConfig`<sup>Required</sup> <a name="authConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.authConfig"></a>

```typescript
public readonly authConfig: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference</a>

---

##### `backfillSource`<sup>Required</sup> <a name="backfillSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.backfillSource"></a>

```typescript
public readonly backfillSource: DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference</a>

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.bootstrapServers"></a>

```typescript
public readonly bootstrapServers: string;
```

- *Type:* string

---

##### `extraOptions`<sup>Required</sup> <a name="extraOptions" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.extraOptions"></a>

```typescript
public readonly extraOptions: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `keySchema`<sup>Required</sup> <a name="keySchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.keySchema"></a>

```typescript
public readonly keySchema: DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference">DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference</a>

---

##### `subscriptionMode`<sup>Required</sup> <a name="subscriptionMode" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.subscriptionMode"></a>

```typescript
public readonly subscriptionMode: DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference">DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference</a>

---

##### `valueSchema`<sup>Required</sup> <a name="valueSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.valueSchema"></a>

```typescript
public readonly valueSchema: DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference">DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFeatureEngineeringKafkaConfigAuthConfig <a name="DataDatabricksFeatureEngineeringKafkaConfigAuthConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfig.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringKafkaConfigAuthConfig: dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfig.property.mtlsConfig">mtlsConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#mtls_config DataDatabricksFeatureEngineeringKafkaConfig#mtls_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfig.property.ucServiceCredentialName">ucServiceCredentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#uc_service_credential_name DataDatabricksFeatureEngineeringKafkaConfig#uc_service_credential_name}. |

---

##### `mtlsConfig`<sup>Optional</sup> <a name="mtlsConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfig.property.mtlsConfig"></a>

```typescript
public readonly mtlsConfig: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#mtls_config DataDatabricksFeatureEngineeringKafkaConfig#mtls_config}.

---

##### `ucServiceCredentialName`<sup>Optional</sup> <a name="ucServiceCredentialName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfig.property.ucServiceCredentialName"></a>

```typescript
public readonly ucServiceCredentialName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#uc_service_credential_name DataDatabricksFeatureEngineeringKafkaConfig#uc_service_credential_name}.

---

### DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig <a name="DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig: dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keyPasswordRef">keyPasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#key_password_ref DataDatabricksFeatureEngineeringKafkaConfig#key_password_ref}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keystoreLocation">keystoreLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#keystore_location DataDatabricksFeatureEngineeringKafkaConfig#keystore_location}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keystorePasswordRef">keystorePasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#keystore_password_ref DataDatabricksFeatureEngineeringKafkaConfig#keystore_password_ref}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.truststoreLocation">truststoreLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#truststore_location DataDatabricksFeatureEngineeringKafkaConfig#truststore_location}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.truststorePasswordRef">truststorePasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#truststore_password_ref DataDatabricksFeatureEngineeringKafkaConfig#truststore_password_ref}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.disableHostnameVerification">disableHostnameVerification</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#disable_hostname_verification DataDatabricksFeatureEngineeringKafkaConfig#disable_hostname_verification}. |

---

##### `keyPasswordRef`<sup>Required</sup> <a name="keyPasswordRef" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keyPasswordRef"></a>

```typescript
public readonly keyPasswordRef: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#key_password_ref DataDatabricksFeatureEngineeringKafkaConfig#key_password_ref}.

---

##### `keystoreLocation`<sup>Required</sup> <a name="keystoreLocation" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keystoreLocation"></a>

```typescript
public readonly keystoreLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#keystore_location DataDatabricksFeatureEngineeringKafkaConfig#keystore_location}.

---

##### `keystorePasswordRef`<sup>Required</sup> <a name="keystorePasswordRef" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keystorePasswordRef"></a>

```typescript
public readonly keystorePasswordRef: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#keystore_password_ref DataDatabricksFeatureEngineeringKafkaConfig#keystore_password_ref}.

---

##### `truststoreLocation`<sup>Required</sup> <a name="truststoreLocation" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.truststoreLocation"></a>

```typescript
public readonly truststoreLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#truststore_location DataDatabricksFeatureEngineeringKafkaConfig#truststore_location}.

---

##### `truststorePasswordRef`<sup>Required</sup> <a name="truststorePasswordRef" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.truststorePasswordRef"></a>

```typescript
public readonly truststorePasswordRef: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#truststore_password_ref DataDatabricksFeatureEngineeringKafkaConfig#truststore_password_ref}.

---

##### `disableHostnameVerification`<sup>Optional</sup> <a name="disableHostnameVerification" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.disableHostnameVerification"></a>

```typescript
public readonly disableHostnameVerification: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#disable_hostname_verification DataDatabricksFeatureEngineeringKafkaConfig#disable_hostname_verification}.

---

### DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef <a name="DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef: dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#key DataDatabricksFeatureEngineeringKafkaConfig#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#scope DataDatabricksFeatureEngineeringKafkaConfig#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#key DataDatabricksFeatureEngineeringKafkaConfig#key}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#scope DataDatabricksFeatureEngineeringKafkaConfig#scope}.

---

### DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef <a name="DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef: dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#key DataDatabricksFeatureEngineeringKafkaConfig#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#scope DataDatabricksFeatureEngineeringKafkaConfig#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#key DataDatabricksFeatureEngineeringKafkaConfig#key}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#scope DataDatabricksFeatureEngineeringKafkaConfig#scope}.

---

### DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef <a name="DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef: dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#key DataDatabricksFeatureEngineeringKafkaConfig#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#scope DataDatabricksFeatureEngineeringKafkaConfig#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#key DataDatabricksFeatureEngineeringKafkaConfig#key}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#scope DataDatabricksFeatureEngineeringKafkaConfig#scope}.

---

### DataDatabricksFeatureEngineeringKafkaConfigBackfillSource <a name="DataDatabricksFeatureEngineeringKafkaConfigBackfillSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSource.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringKafkaConfigBackfillSource: dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSource.property.deltaTableName">deltaTableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#delta_table_name DataDatabricksFeatureEngineeringKafkaConfig#delta_table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSource.property.deltaTableSource">deltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#delta_table_source DataDatabricksFeatureEngineeringKafkaConfig#delta_table_source}. |

---

##### `deltaTableName`<sup>Optional</sup> <a name="deltaTableName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSource.property.deltaTableName"></a>

```typescript
public readonly deltaTableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#delta_table_name DataDatabricksFeatureEngineeringKafkaConfig#delta_table_name}.

---

##### `deltaTableSource`<sup>Optional</sup> <a name="deltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSource.property.deltaTableSource"></a>

```typescript
public readonly deltaTableSource: DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#delta_table_source DataDatabricksFeatureEngineeringKafkaConfig#delta_table_source}.

---

### DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource <a name="DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource: dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#full_name DataDatabricksFeatureEngineeringKafkaConfig#full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.dataframeSchema">dataframeSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#dataframe_schema DataDatabricksFeatureEngineeringKafkaConfig#dataframe_schema}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.entityColumns">entityColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#entity_columns DataDatabricksFeatureEngineeringKafkaConfig#entity_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.filterCondition">filterCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#filter_condition DataDatabricksFeatureEngineeringKafkaConfig#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.timeseriesColumn">timeseriesColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#timeseries_column DataDatabricksFeatureEngineeringKafkaConfig#timeseries_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.transformationSql">transformationSql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#transformation_sql DataDatabricksFeatureEngineeringKafkaConfig#transformation_sql}. |

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#full_name DataDatabricksFeatureEngineeringKafkaConfig#full_name}.

---

##### `dataframeSchema`<sup>Optional</sup> <a name="dataframeSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.dataframeSchema"></a>

```typescript
public readonly dataframeSchema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#dataframe_schema DataDatabricksFeatureEngineeringKafkaConfig#dataframe_schema}.

---

##### `entityColumns`<sup>Optional</sup> <a name="entityColumns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.entityColumns"></a>

```typescript
public readonly entityColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#entity_columns DataDatabricksFeatureEngineeringKafkaConfig#entity_columns}.

---

##### `filterCondition`<sup>Optional</sup> <a name="filterCondition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.filterCondition"></a>

```typescript
public readonly filterCondition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#filter_condition DataDatabricksFeatureEngineeringKafkaConfig#filter_condition}.

---

##### `timeseriesColumn`<sup>Optional</sup> <a name="timeseriesColumn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.timeseriesColumn"></a>

```typescript
public readonly timeseriesColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#timeseries_column DataDatabricksFeatureEngineeringKafkaConfig#timeseries_column}.

---

##### `transformationSql`<sup>Optional</sup> <a name="transformationSql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.transformationSql"></a>

```typescript
public readonly transformationSql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#transformation_sql DataDatabricksFeatureEngineeringKafkaConfig#transformation_sql}.

---

### DataDatabricksFeatureEngineeringKafkaConfigConfig <a name="DataDatabricksFeatureEngineeringKafkaConfigConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringKafkaConfigConfig: dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#name DataDatabricksFeatureEngineeringKafkaConfig#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#provider_config DataDatabricksFeatureEngineeringKafkaConfig#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#name DataDatabricksFeatureEngineeringKafkaConfig#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksFeatureEngineeringKafkaConfigProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#provider_config DataDatabricksFeatureEngineeringKafkaConfig#provider_config}.

---

### DataDatabricksFeatureEngineeringKafkaConfigKeySchema <a name="DataDatabricksFeatureEngineeringKafkaConfigKeySchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchema.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringKafkaConfigKeySchema: dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchema.property.jsonSchema">jsonSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#json_schema DataDatabricksFeatureEngineeringKafkaConfig#json_schema}. |

---

##### `jsonSchema`<sup>Optional</sup> <a name="jsonSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchema.property.jsonSchema"></a>

```typescript
public readonly jsonSchema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#json_schema DataDatabricksFeatureEngineeringKafkaConfig#json_schema}.

---

### DataDatabricksFeatureEngineeringKafkaConfigProviderConfig <a name="DataDatabricksFeatureEngineeringKafkaConfigProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringKafkaConfigProviderConfig: dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#workspace_id DataDatabricksFeatureEngineeringKafkaConfig#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#workspace_id DataDatabricksFeatureEngineeringKafkaConfig#workspace_id}.

---

### DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode <a name="DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode: dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode.property.assign">assign</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#assign DataDatabricksFeatureEngineeringKafkaConfig#assign}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode.property.subscribe">subscribe</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#subscribe DataDatabricksFeatureEngineeringKafkaConfig#subscribe}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode.property.subscribePattern">subscribePattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#subscribe_pattern DataDatabricksFeatureEngineeringKafkaConfig#subscribe_pattern}. |

---

##### `assign`<sup>Optional</sup> <a name="assign" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode.property.assign"></a>

```typescript
public readonly assign: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#assign DataDatabricksFeatureEngineeringKafkaConfig#assign}.

---

##### `subscribe`<sup>Optional</sup> <a name="subscribe" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode.property.subscribe"></a>

```typescript
public readonly subscribe: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#subscribe DataDatabricksFeatureEngineeringKafkaConfig#subscribe}.

---

##### `subscribePattern`<sup>Optional</sup> <a name="subscribePattern" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode.property.subscribePattern"></a>

```typescript
public readonly subscribePattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#subscribe_pattern DataDatabricksFeatureEngineeringKafkaConfig#subscribe_pattern}.

---

### DataDatabricksFeatureEngineeringKafkaConfigValueSchema <a name="DataDatabricksFeatureEngineeringKafkaConfigValueSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchema.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const dataDatabricksFeatureEngineeringKafkaConfigValueSchema: dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchema.property.jsonSchema">jsonSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#json_schema DataDatabricksFeatureEngineeringKafkaConfig#json_schema}. |

---

##### `jsonSchema`<sup>Optional</sup> <a name="jsonSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchema.property.jsonSchema"></a>

```typescript
public readonly jsonSchema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/feature_engineering_kafka_config#json_schema DataDatabricksFeatureEngineeringKafkaConfig#json_schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeyPasswordRef">putKeyPasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef">putKeystorePasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef">putTruststorePasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resetDisableHostnameVerification">resetDisableHostnameVerification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKeyPasswordRef` <a name="putKeyPasswordRef" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeyPasswordRef"></a>

```typescript
public putKeyPasswordRef(value: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeyPasswordRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a>

---

##### `putKeystorePasswordRef` <a name="putKeystorePasswordRef" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef"></a>

```typescript
public putKeystorePasswordRef(value: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a>

---

##### `putTruststorePasswordRef` <a name="putTruststorePasswordRef" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef"></a>

```typescript
public putTruststorePasswordRef(value: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a>

---

##### `resetDisableHostnameVerification` <a name="resetDisableHostnameVerification" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resetDisableHostnameVerification"></a>

```typescript
public resetDisableHostnameVerification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keyPasswordRef">keyPasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystorePasswordRef">keystorePasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststorePasswordRef">truststorePasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.disableHostnameVerificationInput">disableHostnameVerificationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keyPasswordRefInput">keyPasswordRefInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystoreLocationInput">keystoreLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystorePasswordRefInput">keystorePasswordRefInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststoreLocationInput">truststoreLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststorePasswordRefInput">truststorePasswordRefInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.disableHostnameVerification">disableHostnameVerification</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystoreLocation">keystoreLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststoreLocation">truststoreLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyPasswordRef`<sup>Required</sup> <a name="keyPasswordRef" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keyPasswordRef"></a>

```typescript
public readonly keyPasswordRef: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference</a>

---

##### `keystorePasswordRef`<sup>Required</sup> <a name="keystorePasswordRef" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystorePasswordRef"></a>

```typescript
public readonly keystorePasswordRef: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference</a>

---

##### `truststorePasswordRef`<sup>Required</sup> <a name="truststorePasswordRef" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststorePasswordRef"></a>

```typescript
public readonly truststorePasswordRef: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference</a>

---

##### `disableHostnameVerificationInput`<sup>Optional</sup> <a name="disableHostnameVerificationInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.disableHostnameVerificationInput"></a>

```typescript
public readonly disableHostnameVerificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyPasswordRefInput`<sup>Optional</sup> <a name="keyPasswordRefInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keyPasswordRefInput"></a>

```typescript
public readonly keyPasswordRefInput: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a>

---

##### `keystoreLocationInput`<sup>Optional</sup> <a name="keystoreLocationInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystoreLocationInput"></a>

```typescript
public readonly keystoreLocationInput: string;
```

- *Type:* string

---

##### `keystorePasswordRefInput`<sup>Optional</sup> <a name="keystorePasswordRefInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystorePasswordRefInput"></a>

```typescript
public readonly keystorePasswordRefInput: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a>

---

##### `truststoreLocationInput`<sup>Optional</sup> <a name="truststoreLocationInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststoreLocationInput"></a>

```typescript
public readonly truststoreLocationInput: string;
```

- *Type:* string

---

##### `truststorePasswordRefInput`<sup>Optional</sup> <a name="truststorePasswordRefInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststorePasswordRefInput"></a>

```typescript
public readonly truststorePasswordRefInput: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a>

---

##### `disableHostnameVerification`<sup>Required</sup> <a name="disableHostnameVerification" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.disableHostnameVerification"></a>

```typescript
public readonly disableHostnameVerification: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keystoreLocation`<sup>Required</sup> <a name="keystoreLocation" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystoreLocation"></a>

```typescript
public readonly keystoreLocation: string;
```

- *Type:* string

---

##### `truststoreLocation`<sup>Required</sup> <a name="truststoreLocation" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststoreLocation"></a>

```typescript
public readonly truststoreLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig">putMtlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.resetMtlsConfig">resetMtlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.resetUcServiceCredentialName">resetUcServiceCredentialName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMtlsConfig` <a name="putMtlsConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig"></a>

```typescript
public putMtlsConfig(value: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a>

---

##### `resetMtlsConfig` <a name="resetMtlsConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.resetMtlsConfig"></a>

```typescript
public resetMtlsConfig(): void
```

##### `resetUcServiceCredentialName` <a name="resetUcServiceCredentialName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.resetUcServiceCredentialName"></a>

```typescript
public resetUcServiceCredentialName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.mtlsConfig">mtlsConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.mtlsConfigInput">mtlsConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialNameInput">ucServiceCredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialName">ucServiceCredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfig">DataDatabricksFeatureEngineeringKafkaConfigAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mtlsConfig`<sup>Required</sup> <a name="mtlsConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.mtlsConfig"></a>

```typescript
public readonly mtlsConfig: DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference</a>

---

##### `mtlsConfigInput`<sup>Optional</sup> <a name="mtlsConfigInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.mtlsConfigInput"></a>

```typescript
public readonly mtlsConfigInput: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a>

---

##### `ucServiceCredentialNameInput`<sup>Optional</sup> <a name="ucServiceCredentialNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialNameInput"></a>

```typescript
public readonly ucServiceCredentialNameInput: string;
```

- *Type:* string

---

##### `ucServiceCredentialName`<sup>Required</sup> <a name="ucServiceCredentialName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialName"></a>

```typescript
public readonly ucServiceCredentialName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringKafkaConfigAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfig">DataDatabricksFeatureEngineeringKafkaConfigAuthConfig</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema">resetDataframeSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns">resetEntityColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition">resetFilterCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn">resetTimeseriesColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql">resetTransformationSql</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataframeSchema` <a name="resetDataframeSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema"></a>

```typescript
public resetDataframeSchema(): void
```

##### `resetEntityColumns` <a name="resetEntityColumns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns"></a>

```typescript
public resetEntityColumns(): void
```

##### `resetFilterCondition` <a name="resetFilterCondition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition"></a>

```typescript
public resetFilterCondition(): void
```

##### `resetTimeseriesColumn` <a name="resetTimeseriesColumn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn"></a>

```typescript
public resetTimeseriesColumn(): void
```

##### `resetTransformationSql` <a name="resetTransformationSql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql"></a>

```typescript
public resetTransformationSql(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput">dataframeSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput">entityColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput">filterConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">timeseriesColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput">transformationSqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema">dataframeSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns">entityColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition">filterCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn">timeseriesColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql">transformationSql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataframeSchemaInput`<sup>Optional</sup> <a name="dataframeSchemaInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput"></a>

```typescript
public readonly dataframeSchemaInput: string;
```

- *Type:* string

---

##### `entityColumnsInput`<sup>Optional</sup> <a name="entityColumnsInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```typescript
public readonly entityColumnsInput: string[];
```

- *Type:* string[]

---

##### `filterConditionInput`<sup>Optional</sup> <a name="filterConditionInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput"></a>

```typescript
public readonly filterConditionInput: string;
```

- *Type:* string

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `timeseriesColumnInput`<sup>Optional</sup> <a name="timeseriesColumnInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```typescript
public readonly timeseriesColumnInput: string;
```

- *Type:* string

---

##### `transformationSqlInput`<sup>Optional</sup> <a name="transformationSqlInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput"></a>

```typescript
public readonly transformationSqlInput: string;
```

- *Type:* string

---

##### `dataframeSchema`<sup>Required</sup> <a name="dataframeSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema"></a>

```typescript
public readonly dataframeSchema: string;
```

- *Type:* string

---

##### `entityColumns`<sup>Required</sup> <a name="entityColumns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```typescript
public readonly entityColumns: string[];
```

- *Type:* string[]

---

##### `filterCondition`<sup>Required</sup> <a name="filterCondition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition"></a>

```typescript
public readonly filterCondition: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `timeseriesColumn`<sup>Required</sup> <a name="timeseriesColumn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```typescript
public readonly timeseriesColumn: string;
```

- *Type:* string

---

##### `transformationSql`<sup>Required</sup> <a name="transformationSql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql"></a>

```typescript
public readonly transformationSql: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource">putDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableName">resetDeltaTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableSource">resetDeltaTableSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeltaTableSource` <a name="putDeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource"></a>

```typescript
public putDeltaTableSource(value: DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

---

##### `resetDeltaTableName` <a name="resetDeltaTableName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableName"></a>

```typescript
public resetDeltaTableName(): void
```

##### `resetDeltaTableSource` <a name="resetDeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableSource"></a>

```typescript
public resetDeltaTableSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSource">deltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableNameInput">deltaTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSourceInput">deltaTableSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableName">deltaTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSource">DataDatabricksFeatureEngineeringKafkaConfigBackfillSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deltaTableSource`<sup>Required</sup> <a name="deltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSource"></a>

```typescript
public readonly deltaTableSource: DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference</a>

---

##### `deltaTableNameInput`<sup>Optional</sup> <a name="deltaTableNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableNameInput"></a>

```typescript
public readonly deltaTableNameInput: string;
```

- *Type:* string

---

##### `deltaTableSourceInput`<sup>Optional</sup> <a name="deltaTableSourceInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSourceInput"></a>

```typescript
public readonly deltaTableSourceInput: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

---

##### `deltaTableName`<sup>Required</sup> <a name="deltaTableName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableName"></a>

```typescript
public readonly deltaTableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringKafkaConfigBackfillSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSource">DataDatabricksFeatureEngineeringKafkaConfigBackfillSource</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.resetJsonSchema">resetJsonSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJsonSchema` <a name="resetJsonSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.resetJsonSchema"></a>

```typescript
public resetJsonSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchemaInput">jsonSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchema">jsonSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchema">DataDatabricksFeatureEngineeringKafkaConfigKeySchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonSchemaInput`<sup>Optional</sup> <a name="jsonSchemaInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchemaInput"></a>

```typescript
public readonly jsonSchemaInput: string;
```

- *Type:* string

---

##### `jsonSchema`<sup>Required</sup> <a name="jsonSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchema"></a>

```typescript
public readonly jsonSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringKafkaConfigKeySchema;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchema">DataDatabricksFeatureEngineeringKafkaConfigKeySchema</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigProviderConfig</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetAssign">resetAssign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribe">resetSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribePattern">resetSubscribePattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssign` <a name="resetAssign" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetAssign"></a>

```typescript
public resetAssign(): void
```

##### `resetSubscribe` <a name="resetSubscribe" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribe"></a>

```typescript
public resetSubscribe(): void
```

##### `resetSubscribePattern` <a name="resetSubscribePattern" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribePattern"></a>

```typescript
public resetSubscribePattern(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assignInput">assignInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribeInput">subscribeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePatternInput">subscribePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assign">assign</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribe">subscribe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePattern">subscribePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode">DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignInput`<sup>Optional</sup> <a name="assignInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assignInput"></a>

```typescript
public readonly assignInput: string;
```

- *Type:* string

---

##### `subscribeInput`<sup>Optional</sup> <a name="subscribeInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribeInput"></a>

```typescript
public readonly subscribeInput: string;
```

- *Type:* string

---

##### `subscribePatternInput`<sup>Optional</sup> <a name="subscribePatternInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePatternInput"></a>

```typescript
public readonly subscribePatternInput: string;
```

- *Type:* string

---

##### `assign`<sup>Required</sup> <a name="assign" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assign"></a>

```typescript
public readonly assign: string;
```

- *Type:* string

---

##### `subscribe`<sup>Required</sup> <a name="subscribe" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribe"></a>

```typescript
public readonly subscribe: string;
```

- *Type:* string

---

##### `subscribePattern`<sup>Required</sup> <a name="subscribePattern" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePattern"></a>

```typescript
public readonly subscribePattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode">DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.resetJsonSchema">resetJsonSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJsonSchema` <a name="resetJsonSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.resetJsonSchema"></a>

```typescript
public resetJsonSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchemaInput">jsonSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchema">jsonSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchema">DataDatabricksFeatureEngineeringKafkaConfigValueSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonSchemaInput`<sup>Optional</sup> <a name="jsonSchemaInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchemaInput"></a>

```typescript
public readonly jsonSchemaInput: string;
```

- *Type:* string

---

##### `jsonSchema`<sup>Required</sup> <a name="jsonSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchema"></a>

```typescript
public readonly jsonSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringKafkaConfigValueSchema;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchema">DataDatabricksFeatureEngineeringKafkaConfigValueSchema</a>

---



