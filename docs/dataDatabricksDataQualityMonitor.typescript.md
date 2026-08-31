# `dataDatabricksDataQualityMonitor` Submodule <a name="`dataDatabricksDataQualityMonitor` Submodule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDataQualityMonitor <a name="DataDatabricksDataQualityMonitor" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor databricks_data_quality_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

new dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor(scope: Construct, id: string, config: DataDatabricksDataQualityMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig">DataDatabricksDataQualityMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig">DataDatabricksDataQualityMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksDataQualityMonitorProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig">DataDatabricksDataQualityMonitorProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksDataQualityMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isConstruct"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformElement"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformDataSource"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksDataQualityMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDataQualityMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDataQualityMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDataQualityMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.anomalyDetectionConfig">anomalyDetectionConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference">DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.dataProfilingConfig">dataProfilingConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference">DataDatabricksDataQualityMonitorProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig">DataDatabricksDataQualityMonitorProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `anomalyDetectionConfig`<sup>Required</sup> <a name="anomalyDetectionConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.anomalyDetectionConfig"></a>

```typescript
public readonly anomalyDetectionConfig: DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference">DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference</a>

---

##### `dataProfilingConfig`<sup>Required</sup> <a name="dataProfilingConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.dataProfilingConfig"></a>

```typescript
public readonly dataProfilingConfig: DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksDataQualityMonitorProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference">DataDatabricksDataQualityMonitorProviderConfigOutputReference</a>

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksDataQualityMonitorProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig">DataDatabricksDataQualityMonitorProviderConfig</a>

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDataQualityMonitorAnomalyDetectionConfig <a name="DataDatabricksDataQualityMonitorAnomalyDetectionConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

const dataDatabricksDataQualityMonitorAnomalyDetectionConfig: dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig.property.excludedTableFullNames">excludedTableFullNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#excluded_table_full_names DataDatabricksDataQualityMonitor#excluded_table_full_names}. |

---

##### `excludedTableFullNames`<sup>Optional</sup> <a name="excludedTableFullNames" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig.property.excludedTableFullNames"></a>

```typescript
public readonly excludedTableFullNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#excluded_table_full_names DataDatabricksDataQualityMonitor#excluded_table_full_names}.

---

### DataDatabricksDataQualityMonitorConfig <a name="DataDatabricksDataQualityMonitorConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

const dataDatabricksDataQualityMonitorConfig: dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#object_id DataDatabricksDataQualityMonitor#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.objectType">objectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#object_type DataDatabricksDataQualityMonitor#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig">DataDatabricksDataQualityMonitorProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#provider_config DataDatabricksDataQualityMonitor#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#object_id DataDatabricksDataQualityMonitor#object_id}.

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#object_type DataDatabricksDataQualityMonitor#object_type}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksDataQualityMonitorProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig">DataDatabricksDataQualityMonitorProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#provider_config DataDatabricksDataQualityMonitor#provider_config}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfig <a name="DataDatabricksDataQualityMonitorDataProfilingConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

const dataDatabricksDataQualityMonitorDataProfilingConfig: dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.outputSchemaId">outputSchemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#output_schema_id DataDatabricksDataQualityMonitor#output_schema_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.assetsDir">assetsDir</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#assets_dir DataDatabricksDataQualityMonitor#assets_dir}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.baselineTableName">baselineTableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#baseline_table_name DataDatabricksDataQualityMonitor#baseline_table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.customMetrics">customMetrics</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#custom_metrics DataDatabricksDataQualityMonitor#custom_metrics}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.inferenceLog">inferenceLog</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#inference_log DataDatabricksDataQualityMonitor#inference_log}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#notification_settings DataDatabricksDataQualityMonitor#notification_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#schedule DataDatabricksDataQualityMonitor#schedule}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.skipBuiltinDashboard">skipBuiltinDashboard</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#skip_builtin_dashboard DataDatabricksDataQualityMonitor#skip_builtin_dashboard}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.slicingExprs">slicingExprs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#slicing_exprs DataDatabricksDataQualityMonitor#slicing_exprs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.snapshot">snapshot</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#snapshot DataDatabricksDataQualityMonitor#snapshot}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.timeSeries">timeSeries</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#time_series DataDatabricksDataQualityMonitor#time_series}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.warehouseId">warehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#warehouse_id DataDatabricksDataQualityMonitor#warehouse_id}. |

---

##### `outputSchemaId`<sup>Required</sup> <a name="outputSchemaId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.outputSchemaId"></a>

```typescript
public readonly outputSchemaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#output_schema_id DataDatabricksDataQualityMonitor#output_schema_id}.

---

##### `assetsDir`<sup>Optional</sup> <a name="assetsDir" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.assetsDir"></a>

```typescript
public readonly assetsDir: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#assets_dir DataDatabricksDataQualityMonitor#assets_dir}.

---

##### `baselineTableName`<sup>Optional</sup> <a name="baselineTableName" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.baselineTableName"></a>

```typescript
public readonly baselineTableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#baseline_table_name DataDatabricksDataQualityMonitor#baseline_table_name}.

---

##### `customMetrics`<sup>Optional</sup> <a name="customMetrics" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.customMetrics"></a>

```typescript
public readonly customMetrics: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#custom_metrics DataDatabricksDataQualityMonitor#custom_metrics}.

---

##### `inferenceLog`<sup>Optional</sup> <a name="inferenceLog" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.inferenceLog"></a>

```typescript
public readonly inferenceLog: DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#inference_log DataDatabricksDataQualityMonitor#inference_log}.

---

##### `notificationSettings`<sup>Optional</sup> <a name="notificationSettings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#notification_settings DataDatabricksDataQualityMonitor#notification_settings}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.schedule"></a>

```typescript
public readonly schedule: DataDatabricksDataQualityMonitorDataProfilingConfigSchedule;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#schedule DataDatabricksDataQualityMonitor#schedule}.

---

##### `skipBuiltinDashboard`<sup>Optional</sup> <a name="skipBuiltinDashboard" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.skipBuiltinDashboard"></a>

```typescript
public readonly skipBuiltinDashboard: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#skip_builtin_dashboard DataDatabricksDataQualityMonitor#skip_builtin_dashboard}.

---

##### `slicingExprs`<sup>Optional</sup> <a name="slicingExprs" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.slicingExprs"></a>

```typescript
public readonly slicingExprs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#slicing_exprs DataDatabricksDataQualityMonitor#slicing_exprs}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.snapshot"></a>

```typescript
public readonly snapshot: DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#snapshot DataDatabricksDataQualityMonitor#snapshot}.

---

##### `timeSeries`<sup>Optional</sup> <a name="timeSeries" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.timeSeries"></a>

```typescript
public readonly timeSeries: DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#time_series DataDatabricksDataQualityMonitor#time_series}.

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#warehouse_id DataDatabricksDataQualityMonitor#warehouse_id}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics <a name="DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

const dataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics: dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.definition">definition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#definition DataDatabricksDataQualityMonitor#definition}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.inputColumns">inputColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#input_columns DataDatabricksDataQualityMonitor#input_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#name DataDatabricksDataQualityMonitor#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.outputDataType">outputDataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#output_data_type DataDatabricksDataQualityMonitor#output_data_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#type DataDatabricksDataQualityMonitor#type}. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#definition DataDatabricksDataQualityMonitor#definition}.

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.inputColumns"></a>

```typescript
public readonly inputColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#input_columns DataDatabricksDataQualityMonitor#input_columns}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#name DataDatabricksDataQualityMonitor#name}.

---

##### `outputDataType`<sup>Required</sup> <a name="outputDataType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.outputDataType"></a>

```typescript
public readonly outputDataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#output_data_type DataDatabricksDataQualityMonitor#output_data_type}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#type DataDatabricksDataQualityMonitor#type}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog <a name="DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

const dataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog: dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.granularities">granularities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#granularities DataDatabricksDataQualityMonitor#granularities}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.modelIdColumn">modelIdColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#model_id_column DataDatabricksDataQualityMonitor#model_id_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.predictionColumn">predictionColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#prediction_column DataDatabricksDataQualityMonitor#prediction_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.problemType">problemType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#problem_type DataDatabricksDataQualityMonitor#problem_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.timestampColumn">timestampColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#timestamp_column DataDatabricksDataQualityMonitor#timestamp_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.labelColumn">labelColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#label_column DataDatabricksDataQualityMonitor#label_column}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.granularities"></a>

```typescript
public readonly granularities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#granularities DataDatabricksDataQualityMonitor#granularities}.

---

##### `modelIdColumn`<sup>Required</sup> <a name="modelIdColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.modelIdColumn"></a>

```typescript
public readonly modelIdColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#model_id_column DataDatabricksDataQualityMonitor#model_id_column}.

---

##### `predictionColumn`<sup>Required</sup> <a name="predictionColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.predictionColumn"></a>

```typescript
public readonly predictionColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#prediction_column DataDatabricksDataQualityMonitor#prediction_column}.

---

##### `problemType`<sup>Required</sup> <a name="problemType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.problemType"></a>

```typescript
public readonly problemType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#problem_type DataDatabricksDataQualityMonitor#problem_type}.

---

##### `timestampColumn`<sup>Required</sup> <a name="timestampColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.timestampColumn"></a>

```typescript
public readonly timestampColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#timestamp_column DataDatabricksDataQualityMonitor#timestamp_column}.

---

##### `labelColumn`<sup>Optional</sup> <a name="labelColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.labelColumn"></a>

```typescript
public readonly labelColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#label_column DataDatabricksDataQualityMonitor#label_column}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings <a name="DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

const dataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings: dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings.property.onFailure">onFailure</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#on_failure DataDatabricksDataQualityMonitor#on_failure}. |

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings.property.onFailure"></a>

```typescript
public readonly onFailure: DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#on_failure DataDatabricksDataQualityMonitor#on_failure}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure <a name="DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

const dataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure: dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#email_addresses DataDatabricksDataQualityMonitor#email_addresses}. |

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#email_addresses DataDatabricksDataQualityMonitor#email_addresses}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigSchedule <a name="DataDatabricksDataQualityMonitorDataProfilingConfigSchedule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

const dataDatabricksDataQualityMonitorDataProfilingConfigSchedule: dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule.property.quartzCronExpression">quartzCronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#quartz_cron_expression DataDatabricksDataQualityMonitor#quartz_cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule.property.timezoneId">timezoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#timezone_id DataDatabricksDataQualityMonitor#timezone_id}. |

---

##### `quartzCronExpression`<sup>Required</sup> <a name="quartzCronExpression" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule.property.quartzCronExpression"></a>

```typescript
public readonly quartzCronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#quartz_cron_expression DataDatabricksDataQualityMonitor#quartz_cron_expression}.

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#timezone_id DataDatabricksDataQualityMonitor#timezone_id}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot <a name="DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

const dataDatabricksDataQualityMonitorDataProfilingConfigSnapshot: dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot = { ... }
```


### DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries <a name="DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

const dataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries: dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries.property.granularities">granularities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#granularities DataDatabricksDataQualityMonitor#granularities}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries.property.timestampColumn">timestampColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#timestamp_column DataDatabricksDataQualityMonitor#timestamp_column}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries.property.granularities"></a>

```typescript
public readonly granularities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#granularities DataDatabricksDataQualityMonitor#granularities}.

---

##### `timestampColumn`<sup>Required</sup> <a name="timestampColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries.property.timestampColumn"></a>

```typescript
public readonly timestampColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#timestamp_column DataDatabricksDataQualityMonitor#timestamp_column}.

---

### DataDatabricksDataQualityMonitorProviderConfig <a name="DataDatabricksDataQualityMonitorProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

const dataDatabricksDataQualityMonitorProviderConfig: dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#workspace_id DataDatabricksDataQualityMonitor#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_quality_monitor#workspace_id DataDatabricksDataQualityMonitor#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference <a name="DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

new dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.resetExcludedTableFullNames">resetExcludedTableFullNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedTableFullNames` <a name="resetExcludedTableFullNames" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.resetExcludedTableFullNames"></a>

```typescript
public resetExcludedTableFullNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput">excludedTableFullNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.excludedTableFullNames">excludedTableFullNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig">DataDatabricksDataQualityMonitorAnomalyDetectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedTableFullNamesInput`<sup>Optional</sup> <a name="excludedTableFullNamesInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput"></a>

```typescript
public readonly excludedTableFullNamesInput: string[];
```

- *Type:* string[]

---

##### `excludedTableFullNames`<sup>Required</sup> <a name="excludedTableFullNames" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.excludedTableFullNames"></a>

```typescript
public readonly excludedTableFullNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDataQualityMonitorAnomalyDetectionConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig">DataDatabricksDataQualityMonitorAnomalyDetectionConfig</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList <a name="DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

new dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.get"></a>

```typescript
public get(index: number): DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>[]

---


### DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

new dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definitionInput">definitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumnsInput">inputColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataTypeInput">outputDataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definition">definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumns">inputColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataType">outputDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definitionInput"></a>

```typescript
public readonly definitionInput: string;
```

- *Type:* string

---

##### `inputColumnsInput`<sup>Optional</sup> <a name="inputColumnsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumnsInput"></a>

```typescript
public readonly inputColumnsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputDataTypeInput`<sup>Optional</sup> <a name="outputDataTypeInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```typescript
public readonly outputDataTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumns"></a>

```typescript
public readonly inputColumns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputDataType`<sup>Required</sup> <a name="outputDataType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataType"></a>

```typescript
public readonly outputDataType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

new dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resetLabelColumn">resetLabelColumn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabelColumn` <a name="resetLabelColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resetLabelColumn"></a>

```typescript
public resetLabelColumn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularitiesInput">granularitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumnInput">labelColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumnInput">modelIdColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumnInput">predictionColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemTypeInput">problemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumnInput">timestampColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularities">granularities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumn">labelColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumn">modelIdColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumn">predictionColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemType">problemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumn">timestampColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `granularitiesInput`<sup>Optional</sup> <a name="granularitiesInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularitiesInput"></a>

```typescript
public readonly granularitiesInput: string[];
```

- *Type:* string[]

---

##### `labelColumnInput`<sup>Optional</sup> <a name="labelColumnInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumnInput"></a>

```typescript
public readonly labelColumnInput: string;
```

- *Type:* string

---

##### `modelIdColumnInput`<sup>Optional</sup> <a name="modelIdColumnInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumnInput"></a>

```typescript
public readonly modelIdColumnInput: string;
```

- *Type:* string

---

##### `predictionColumnInput`<sup>Optional</sup> <a name="predictionColumnInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumnInput"></a>

```typescript
public readonly predictionColumnInput: string;
```

- *Type:* string

---

##### `problemTypeInput`<sup>Optional</sup> <a name="problemTypeInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemTypeInput"></a>

```typescript
public readonly problemTypeInput: string;
```

- *Type:* string

---

##### `timestampColumnInput`<sup>Optional</sup> <a name="timestampColumnInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumnInput"></a>

```typescript
public readonly timestampColumnInput: string;
```

- *Type:* string

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularities"></a>

```typescript
public readonly granularities: string[];
```

- *Type:* string[]

---

##### `labelColumn`<sup>Required</sup> <a name="labelColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumn"></a>

```typescript
public readonly labelColumn: string;
```

- *Type:* string

---

##### `modelIdColumn`<sup>Required</sup> <a name="modelIdColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumn"></a>

```typescript
public readonly modelIdColumn: string;
```

- *Type:* string

---

##### `predictionColumn`<sup>Required</sup> <a name="predictionColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumn"></a>

```typescript
public readonly predictionColumn: string;
```

- *Type:* string

---

##### `problemType`<sup>Required</sup> <a name="problemType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemType"></a>

```typescript
public readonly problemType: string;
```

- *Type:* string

---

##### `timestampColumn`<sup>Required</sup> <a name="timestampColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumn"></a>

```typescript
public readonly timestampColumn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

new dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses"></a>

```typescript
public resetEmailAddresses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput"></a>

```typescript
public readonly emailAddressesInput: string[];
```

- *Type:* string[]

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

new dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.putOnFailure">putOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resetOnFailure">resetOnFailure</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnFailure` <a name="putOnFailure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.putOnFailure"></a>

```typescript
public putOnFailure(value: DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

---

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resetOnFailure"></a>

```typescript
public resetOnFailure(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailure">onFailure</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailureInput">onFailureInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailure"></a>

```typescript
public readonly onFailure: DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference</a>

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailureInput"></a>

```typescript
public readonly onFailureInput: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

new dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putCustomMetrics">putCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog">putInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putNotificationSettings">putNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSnapshot">putSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putTimeSeries">putTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetAssetsDir">resetAssetsDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetBaselineTableName">resetBaselineTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetCustomMetrics">resetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetInferenceLog">resetInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetNotificationSettings">resetNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSkipBuiltinDashboard">resetSkipBuiltinDashboard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSlicingExprs">resetSlicingExprs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSnapshot">resetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetTimeSeries">resetTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetWarehouseId">resetWarehouseId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomMetrics` <a name="putCustomMetrics" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putCustomMetrics"></a>

```typescript
public putCustomMetrics(value: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putCustomMetrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>[]

---

##### `putInferenceLog` <a name="putInferenceLog" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog"></a>

```typescript
public putInferenceLog(value: DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a>

---

##### `putNotificationSettings` <a name="putNotificationSettings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putNotificationSettings"></a>

```typescript
public putNotificationSettings(value: DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSchedule"></a>

```typescript
public putSchedule(value: DataDatabricksDataQualityMonitorDataProfilingConfigSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a>

---

##### `putSnapshot` <a name="putSnapshot" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSnapshot"></a>

```typescript
public putSnapshot(value: DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a>

---

##### `putTimeSeries` <a name="putTimeSeries" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putTimeSeries"></a>

```typescript
public putTimeSeries(value: DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putTimeSeries.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a>

---

##### `resetAssetsDir` <a name="resetAssetsDir" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetAssetsDir"></a>

```typescript
public resetAssetsDir(): void
```

##### `resetBaselineTableName` <a name="resetBaselineTableName" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetBaselineTableName"></a>

```typescript
public resetBaselineTableName(): void
```

##### `resetCustomMetrics` <a name="resetCustomMetrics" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetCustomMetrics"></a>

```typescript
public resetCustomMetrics(): void
```

##### `resetInferenceLog` <a name="resetInferenceLog" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetInferenceLog"></a>

```typescript
public resetInferenceLog(): void
```

##### `resetNotificationSettings` <a name="resetNotificationSettings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetNotificationSettings"></a>

```typescript
public resetNotificationSettings(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetSkipBuiltinDashboard` <a name="resetSkipBuiltinDashboard" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSkipBuiltinDashboard"></a>

```typescript
public resetSkipBuiltinDashboard(): void
```

##### `resetSlicingExprs` <a name="resetSlicingExprs" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSlicingExprs"></a>

```typescript
public resetSlicingExprs(): void
```

##### `resetSnapshot` <a name="resetSnapshot" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSnapshot"></a>

```typescript
public resetSnapshot(): void
```

##### `resetTimeSeries` <a name="resetTimeSeries" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetTimeSeries"></a>

```typescript
public resetTimeSeries(): void
```

##### `resetWarehouseId` <a name="resetWarehouseId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetWarehouseId"></a>

```typescript
public resetWarehouseId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.customMetrics">customMetrics</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.dashboardId">dashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.driftMetricsTableName">driftMetricsTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.effectiveWarehouseId">effectiveWarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLog">inferenceLog</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.latestMonitorFailureMessage">latestMonitorFailureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.monitoredTableName">monitoredTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.monitorVersion">monitorVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.profileMetricsTableName">profileMetricsTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.snapshot">snapshot</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.timeSeries">timeSeries</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.assetsDirInput">assetsDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableNameInput">baselineTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.customMetricsInput">customMetricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLogInput">inferenceLogInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettingsInput">notificationSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaIdInput">outputSchemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboardInput">skipBuiltinDashboardInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprsInput">slicingExprsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.snapshotInput">snapshotInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.timeSeriesInput">timeSeriesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.warehouseIdInput">warehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.assetsDir">assetsDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableName">baselineTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaId">outputSchemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboard">skipBuiltinDashboard</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprs">slicingExprs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig">DataDatabricksDataQualityMonitorDataProfilingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customMetrics`<sup>Required</sup> <a name="customMetrics" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.customMetrics"></a>

```typescript
public readonly customMetrics: DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList</a>

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

---

##### `driftMetricsTableName`<sup>Required</sup> <a name="driftMetricsTableName" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.driftMetricsTableName"></a>

```typescript
public readonly driftMetricsTableName: string;
```

- *Type:* string

---

##### `effectiveWarehouseId`<sup>Required</sup> <a name="effectiveWarehouseId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.effectiveWarehouseId"></a>

```typescript
public readonly effectiveWarehouseId: string;
```

- *Type:* string

---

##### `inferenceLog`<sup>Required</sup> <a name="inferenceLog" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLog"></a>

```typescript
public readonly inferenceLog: DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference</a>

---

##### `latestMonitorFailureMessage`<sup>Required</sup> <a name="latestMonitorFailureMessage" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.latestMonitorFailureMessage"></a>

```typescript
public readonly latestMonitorFailureMessage: string;
```

- *Type:* string

---

##### `monitoredTableName`<sup>Required</sup> <a name="monitoredTableName" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.monitoredTableName"></a>

```typescript
public readonly monitoredTableName: string;
```

- *Type:* string

---

##### `monitorVersion`<sup>Required</sup> <a name="monitorVersion" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.monitorVersion"></a>

```typescript
public readonly monitorVersion: number;
```

- *Type:* number

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference</a>

---

##### `profileMetricsTableName`<sup>Required</sup> <a name="profileMetricsTableName" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.profileMetricsTableName"></a>

```typescript
public readonly profileMetricsTableName: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.schedule"></a>

```typescript
public readonly schedule: DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference</a>

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.snapshot"></a>

```typescript
public readonly snapshot: DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeSeries`<sup>Required</sup> <a name="timeSeries" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.timeSeries"></a>

```typescript
public readonly timeSeries: DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference</a>

---

##### `assetsDirInput`<sup>Optional</sup> <a name="assetsDirInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.assetsDirInput"></a>

```typescript
public readonly assetsDirInput: string;
```

- *Type:* string

---

##### `baselineTableNameInput`<sup>Optional</sup> <a name="baselineTableNameInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableNameInput"></a>

```typescript
public readonly baselineTableNameInput: string;
```

- *Type:* string

---

##### `customMetricsInput`<sup>Optional</sup> <a name="customMetricsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.customMetricsInput"></a>

```typescript
public readonly customMetricsInput: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>[]

---

##### `inferenceLogInput`<sup>Optional</sup> <a name="inferenceLogInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLogInput"></a>

```typescript
public readonly inferenceLogInput: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a>

---

##### `notificationSettingsInput`<sup>Optional</sup> <a name="notificationSettingsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettingsInput"></a>

```typescript
public readonly notificationSettingsInput: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a>

---

##### `outputSchemaIdInput`<sup>Optional</sup> <a name="outputSchemaIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaIdInput"></a>

```typescript
public readonly outputSchemaIdInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a>

---

##### `skipBuiltinDashboardInput`<sup>Optional</sup> <a name="skipBuiltinDashboardInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboardInput"></a>

```typescript
public readonly skipBuiltinDashboardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `slicingExprsInput`<sup>Optional</sup> <a name="slicingExprsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprsInput"></a>

```typescript
public readonly slicingExprsInput: string[];
```

- *Type:* string[]

---

##### `snapshotInput`<sup>Optional</sup> <a name="snapshotInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.snapshotInput"></a>

```typescript
public readonly snapshotInput: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a>

---

##### `timeSeriesInput`<sup>Optional</sup> <a name="timeSeriesInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.timeSeriesInput"></a>

```typescript
public readonly timeSeriesInput: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a>

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.warehouseIdInput"></a>

```typescript
public readonly warehouseIdInput: string;
```

- *Type:* string

---

##### `assetsDir`<sup>Required</sup> <a name="assetsDir" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.assetsDir"></a>

```typescript
public readonly assetsDir: string;
```

- *Type:* string

---

##### `baselineTableName`<sup>Required</sup> <a name="baselineTableName" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableName"></a>

```typescript
public readonly baselineTableName: string;
```

- *Type:* string

---

##### `outputSchemaId`<sup>Required</sup> <a name="outputSchemaId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaId"></a>

```typescript
public readonly outputSchemaId: string;
```

- *Type:* string

---

##### `skipBuiltinDashboard`<sup>Required</sup> <a name="skipBuiltinDashboard" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboard"></a>

```typescript
public readonly skipBuiltinDashboard: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `slicingExprs`<sup>Required</sup> <a name="slicingExprs" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprs"></a>

```typescript
public readonly slicingExprs: string[];
```

- *Type:* string[]

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDataQualityMonitorDataProfilingConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig">DataDatabricksDataQualityMonitorDataProfilingConfig</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

new dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.pauseStatus">pauseStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpressionInput">quartzCronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneIdInput">timezoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpression">quartzCronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneId">timezoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pauseStatus`<sup>Required</sup> <a name="pauseStatus" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.pauseStatus"></a>

```typescript
public readonly pauseStatus: string;
```

- *Type:* string

---

##### `quartzCronExpressionInput`<sup>Optional</sup> <a name="quartzCronExpressionInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpressionInput"></a>

```typescript
public readonly quartzCronExpressionInput: string;
```

- *Type:* string

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneIdInput"></a>

```typescript
public readonly timezoneIdInput: string;
```

- *Type:* string

---

##### `quartzCronExpression`<sup>Required</sup> <a name="quartzCronExpression" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpression"></a>

```typescript
public readonly quartzCronExpression: string;
```

- *Type:* string

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

new dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

new dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularitiesInput">granularitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumnInput">timestampColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularities">granularities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumn">timestampColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `granularitiesInput`<sup>Optional</sup> <a name="granularitiesInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularitiesInput"></a>

```typescript
public readonly granularitiesInput: string[];
```

- *Type:* string[]

---

##### `timestampColumnInput`<sup>Optional</sup> <a name="timestampColumnInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumnInput"></a>

```typescript
public readonly timestampColumnInput: string;
```

- *Type:* string

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularities"></a>

```typescript
public readonly granularities: string[];
```

- *Type:* string[]

---

##### `timestampColumn`<sup>Required</sup> <a name="timestampColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumn"></a>

```typescript
public readonly timestampColumn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a>

---


### DataDatabricksDataQualityMonitorProviderConfigOutputReference <a name="DataDatabricksDataQualityMonitorProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDataQualityMonitor } from '@cdktn/provider-databricks'

new dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig">DataDatabricksDataQualityMonitorProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDataQualityMonitorProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig">DataDatabricksDataQualityMonitorProviderConfig</a>

---



