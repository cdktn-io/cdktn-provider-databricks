# `dataDatabricksMlflowExperiment` Submodule <a name="`dataDatabricksMlflowExperiment` Submodule" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMlflowExperiment <a name="DataDatabricksMlflowExperiment" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment databricks_mlflow_experiment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer"></a>

```typescript
import { dataDatabricksMlflowExperiment } from '@cdktn/provider-databricks'

new dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment(scope: Construct, id: string, config?: DataDatabricksMlflowExperimentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig">DataDatabricksMlflowExperimentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig">DataDatabricksMlflowExperimentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTraceLocation">putTraceLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetArtifactLocation">resetArtifactLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetExperimentId">resetExperimentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetLastUpdateTime">resetLastUpdateTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetLifecycleStage">resetLifecycleStage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetTraceLocation">resetTraceLocation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksMlflowExperimentProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig">DataDatabricksMlflowExperimentProviderConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTags"></a>

```typescript
public putTags(value: IResolvable | DataDatabricksMlflowExperimentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>[]

---

##### `putTraceLocation` <a name="putTraceLocation" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTraceLocation"></a>

```typescript
public putTraceLocation(value: DataDatabricksMlflowExperimentTraceLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTraceLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation">DataDatabricksMlflowExperimentTraceLocation</a>

---

##### `resetArtifactLocation` <a name="resetArtifactLocation" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetArtifactLocation"></a>

```typescript
public resetArtifactLocation(): void
```

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetCreationTime"></a>

```typescript
public resetCreationTime(): void
```

##### `resetExperimentId` <a name="resetExperimentId" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetExperimentId"></a>

```typescript
public resetExperimentId(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLastUpdateTime` <a name="resetLastUpdateTime" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetLastUpdateTime"></a>

```typescript
public resetLastUpdateTime(): void
```

##### `resetLifecycleStage` <a name="resetLifecycleStage" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetLifecycleStage"></a>

```typescript
public resetLifecycleStage(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTraceLocation` <a name="resetTraceLocation" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetTraceLocation"></a>

```typescript
public resetTraceLocation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMlflowExperiment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isConstruct"></a>

```typescript
import { dataDatabricksMlflowExperiment } from '@cdktn/provider-databricks'

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformElement"></a>

```typescript
import { dataDatabricksMlflowExperiment } from '@cdktn/provider-databricks'

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformDataSource"></a>

```typescript
import { dataDatabricksMlflowExperiment } from '@cdktn/provider-databricks'

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport"></a>

```typescript
import { dataDatabricksMlflowExperiment } from '@cdktn/provider-databricks'

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksMlflowExperiment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMlflowExperiment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMlflowExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMlflowExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference">DataDatabricksMlflowExperimentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList">DataDatabricksMlflowExperimentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.traceLocation">traceLocation</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference">DataDatabricksMlflowExperimentTraceLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.artifactLocationInput">artifactLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.creationTimeInput">creationTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.experimentIdInput">experimentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lastUpdateTimeInput">lastUpdateTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycleStageInput">lifecycleStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig">DataDatabricksMlflowExperimentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.traceLocationInput">traceLocationInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation">DataDatabricksMlflowExperimentTraceLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.artifactLocation">artifactLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.creationTime">creationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.experimentId">experimentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lastUpdateTime">lastUpdateTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycleStage">lifecycleStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMlflowExperimentProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference">DataDatabricksMlflowExperimentProviderConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tags"></a>

```typescript
public readonly tags: DataDatabricksMlflowExperimentTagsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList">DataDatabricksMlflowExperimentTagsList</a>

---

##### `traceLocation`<sup>Required</sup> <a name="traceLocation" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.traceLocation"></a>

```typescript
public readonly traceLocation: DataDatabricksMlflowExperimentTraceLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference">DataDatabricksMlflowExperimentTraceLocationOutputReference</a>

---

##### `artifactLocationInput`<sup>Optional</sup> <a name="artifactLocationInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.artifactLocationInput"></a>

```typescript
public readonly artifactLocationInput: string;
```

- *Type:* string

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.creationTimeInput"></a>

```typescript
public readonly creationTimeInput: number;
```

- *Type:* number

---

##### `experimentIdInput`<sup>Optional</sup> <a name="experimentIdInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.experimentIdInput"></a>

```typescript
public readonly experimentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lastUpdateTimeInput`<sup>Optional</sup> <a name="lastUpdateTimeInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lastUpdateTimeInput"></a>

```typescript
public readonly lastUpdateTimeInput: number;
```

- *Type:* number

---

##### `lifecycleStageInput`<sup>Optional</sup> <a name="lifecycleStageInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycleStageInput"></a>

```typescript
public readonly lifecycleStageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: DataDatabricksMlflowExperimentProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig">DataDatabricksMlflowExperimentProviderConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DataDatabricksMlflowExperimentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>[]

---

##### `traceLocationInput`<sup>Optional</sup> <a name="traceLocationInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.traceLocationInput"></a>

```typescript
public readonly traceLocationInput: DataDatabricksMlflowExperimentTraceLocation;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation">DataDatabricksMlflowExperimentTraceLocation</a>

---

##### `artifactLocation`<sup>Required</sup> <a name="artifactLocation" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.artifactLocation"></a>

```typescript
public readonly artifactLocation: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

---

##### `experimentId`<sup>Required</sup> <a name="experimentId" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.experimentId"></a>

```typescript
public readonly experimentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lastUpdateTime"></a>

```typescript
public readonly lastUpdateTime: number;
```

- *Type:* number

---

##### `lifecycleStage`<sup>Required</sup> <a name="lifecycleStage" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycleStage"></a>

```typescript
public readonly lifecycleStage: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMlflowExperimentConfig <a name="DataDatabricksMlflowExperimentConfig" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.Initializer"></a>

```typescript
import { dataDatabricksMlflowExperiment } from '@cdktn/provider-databricks'

const dataDatabricksMlflowExperimentConfig: dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.artifactLocation">artifactLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#artifact_location DataDatabricksMlflowExperiment#artifact_location}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.creationTime">creationTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#creation_time DataDatabricksMlflowExperiment#creation_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.experimentId">experimentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#experiment_id DataDatabricksMlflowExperiment#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#id DataDatabricksMlflowExperiment#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lastUpdateTime">lastUpdateTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#last_update_time DataDatabricksMlflowExperiment#last_update_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lifecycleStage">lifecycleStage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#lifecycle_stage DataDatabricksMlflowExperiment#lifecycle_stage}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#name DataDatabricksMlflowExperiment#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig">DataDatabricksMlflowExperimentProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>[]</code> | tags block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.traceLocation">traceLocation</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation">DataDatabricksMlflowExperimentTraceLocation</a></code> | trace_location block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `artifactLocation`<sup>Optional</sup> <a name="artifactLocation" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.artifactLocation"></a>

```typescript
public readonly artifactLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#artifact_location DataDatabricksMlflowExperiment#artifact_location}.

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#creation_time DataDatabricksMlflowExperiment#creation_time}.

---

##### `experimentId`<sup>Optional</sup> <a name="experimentId" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.experimentId"></a>

```typescript
public readonly experimentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#experiment_id DataDatabricksMlflowExperiment#experiment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#id DataDatabricksMlflowExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="lastUpdateTime" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lastUpdateTime"></a>

```typescript
public readonly lastUpdateTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#last_update_time DataDatabricksMlflowExperiment#last_update_time}.

---

##### `lifecycleStage`<sup>Optional</sup> <a name="lifecycleStage" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lifecycleStage"></a>

```typescript
public readonly lifecycleStage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#lifecycle_stage DataDatabricksMlflowExperiment#lifecycle_stage}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#name DataDatabricksMlflowExperiment#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMlflowExperimentProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig">DataDatabricksMlflowExperimentProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#provider_config DataDatabricksMlflowExperiment#provider_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DataDatabricksMlflowExperimentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#tags DataDatabricksMlflowExperiment#tags}

---

##### `traceLocation`<sup>Optional</sup> <a name="traceLocation" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.traceLocation"></a>

```typescript
public readonly traceLocation: DataDatabricksMlflowExperimentTraceLocation;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation">DataDatabricksMlflowExperimentTraceLocation</a>

trace_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#trace_location DataDatabricksMlflowExperiment#trace_location}

---

### DataDatabricksMlflowExperimentProviderConfig <a name="DataDatabricksMlflowExperimentProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksMlflowExperiment } from '@cdktn/provider-databricks'

const dataDatabricksMlflowExperimentProviderConfig: dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#workspace_id DataDatabricksMlflowExperiment#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#workspace_id DataDatabricksMlflowExperiment#workspace_id}.

---

### DataDatabricksMlflowExperimentTags <a name="DataDatabricksMlflowExperimentTags" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.Initializer"></a>

```typescript
import { dataDatabricksMlflowExperiment } from '@cdktn/provider-databricks'

const dataDatabricksMlflowExperimentTags: dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#key DataDatabricksMlflowExperiment#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#value DataDatabricksMlflowExperiment#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#key DataDatabricksMlflowExperiment#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#value DataDatabricksMlflowExperiment#value}.

---

### DataDatabricksMlflowExperimentTraceLocation <a name="DataDatabricksMlflowExperimentTraceLocation" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation.Initializer"></a>

```typescript
import { dataDatabricksMlflowExperiment } from '@cdktn/provider-databricks'

const dataDatabricksMlflowExperimentTraceLocation: dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation.property.ucTraceLocation">ucTraceLocation</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation">DataDatabricksMlflowExperimentTraceLocationUcTraceLocation</a></code> | uc_trace_location block. |

---

##### `ucTraceLocation`<sup>Optional</sup> <a name="ucTraceLocation" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation.property.ucTraceLocation"></a>

```typescript
public readonly ucTraceLocation: DataDatabricksMlflowExperimentTraceLocationUcTraceLocation;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation">DataDatabricksMlflowExperimentTraceLocationUcTraceLocation</a>

uc_trace_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#uc_trace_location DataDatabricksMlflowExperiment#uc_trace_location}

---

### DataDatabricksMlflowExperimentTraceLocationUcTraceLocation <a name="DataDatabricksMlflowExperimentTraceLocationUcTraceLocation" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.Initializer"></a>

```typescript
import { dataDatabricksMlflowExperiment } from '@cdktn/provider-databricks'

const dataDatabricksMlflowExperimentTraceLocationUcTraceLocation: dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.property.catalog">catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#catalog DataDatabricksMlflowExperiment#catalog}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.property.schema">schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#schema DataDatabricksMlflowExperiment#schema}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.property.effectiveTablePrefix">effectiveTablePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#effective_table_prefix DataDatabricksMlflowExperiment#effective_table_prefix}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.property.tablePrefix">tablePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#table_prefix DataDatabricksMlflowExperiment#table_prefix}. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#catalog DataDatabricksMlflowExperiment#catalog}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#schema DataDatabricksMlflowExperiment#schema}.

---

##### `effectiveTablePrefix`<sup>Optional</sup> <a name="effectiveTablePrefix" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.property.effectiveTablePrefix"></a>

```typescript
public readonly effectiveTablePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#effective_table_prefix DataDatabricksMlflowExperiment#effective_table_prefix}.

---

##### `tablePrefix`<sup>Optional</sup> <a name="tablePrefix" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.property.tablePrefix"></a>

```typescript
public readonly tablePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/mlflow_experiment#table_prefix DataDatabricksMlflowExperiment#table_prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMlflowExperimentProviderConfigOutputReference <a name="DataDatabricksMlflowExperimentProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMlflowExperiment } from '@cdktn/provider-databricks'

new dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig">DataDatabricksMlflowExperimentProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksMlflowExperimentProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig">DataDatabricksMlflowExperimentProviderConfig</a>

---


### DataDatabricksMlflowExperimentTagsList <a name="DataDatabricksMlflowExperimentTagsList" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer"></a>

```typescript
import { dataDatabricksMlflowExperiment } from '@cdktn/provider-databricks'

new dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.get"></a>

```typescript
public get(index: number): DataDatabricksMlflowExperimentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksMlflowExperimentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>[]

---


### DataDatabricksMlflowExperimentTagsOutputReference <a name="DataDatabricksMlflowExperimentTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMlflowExperiment } from '@cdktn/provider-databricks'

new dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksMlflowExperimentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>

---


### DataDatabricksMlflowExperimentTraceLocationOutputReference <a name="DataDatabricksMlflowExperimentTraceLocationOutputReference" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMlflowExperiment } from '@cdktn/provider-databricks'

new dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.putUcTraceLocation">putUcTraceLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.resetUcTraceLocation">resetUcTraceLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUcTraceLocation` <a name="putUcTraceLocation" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.putUcTraceLocation"></a>

```typescript
public putUcTraceLocation(value: DataDatabricksMlflowExperimentTraceLocationUcTraceLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.putUcTraceLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation">DataDatabricksMlflowExperimentTraceLocationUcTraceLocation</a>

---

##### `resetUcTraceLocation` <a name="resetUcTraceLocation" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.resetUcTraceLocation"></a>

```typescript
public resetUcTraceLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.ucTraceLocation">ucTraceLocation</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference">DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.ucTraceLocationInput">ucTraceLocationInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation">DataDatabricksMlflowExperimentTraceLocationUcTraceLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation">DataDatabricksMlflowExperimentTraceLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ucTraceLocation`<sup>Required</sup> <a name="ucTraceLocation" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.ucTraceLocation"></a>

```typescript
public readonly ucTraceLocation: DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference">DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference</a>

---

##### `ucTraceLocationInput`<sup>Optional</sup> <a name="ucTraceLocationInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.ucTraceLocationInput"></a>

```typescript
public readonly ucTraceLocationInput: DataDatabricksMlflowExperimentTraceLocationUcTraceLocation;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation">DataDatabricksMlflowExperimentTraceLocationUcTraceLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksMlflowExperimentTraceLocation;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation">DataDatabricksMlflowExperimentTraceLocation</a>

---


### DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference <a name="DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMlflowExperiment } from '@cdktn/provider-databricks'

new dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.resetEffectiveTablePrefix">resetEffectiveTablePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.resetTablePrefix">resetTablePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffectiveTablePrefix` <a name="resetEffectiveTablePrefix" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.resetEffectiveTablePrefix"></a>

```typescript
public resetEffectiveTablePrefix(): void
```

##### `resetTablePrefix` <a name="resetTablePrefix" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.resetTablePrefix"></a>

```typescript
public resetTablePrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.effectiveTablePrefixInput">effectiveTablePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.tablePrefixInput">tablePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.effectiveTablePrefix">effectiveTablePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.tablePrefix">tablePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation">DataDatabricksMlflowExperimentTraceLocationUcTraceLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `effectiveTablePrefixInput`<sup>Optional</sup> <a name="effectiveTablePrefixInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.effectiveTablePrefixInput"></a>

```typescript
public readonly effectiveTablePrefixInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `tablePrefixInput`<sup>Optional</sup> <a name="tablePrefixInput" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.tablePrefixInput"></a>

```typescript
public readonly tablePrefixInput: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `effectiveTablePrefix`<sup>Required</sup> <a name="effectiveTablePrefix" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.effectiveTablePrefix"></a>

```typescript
public readonly effectiveTablePrefix: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `tablePrefix`<sup>Required</sup> <a name="tablePrefix" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.tablePrefix"></a>

```typescript
public readonly tablePrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksMlflowExperimentTraceLocationUcTraceLocation;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation">DataDatabricksMlflowExperimentTraceLocationUcTraceLocation</a>

---



