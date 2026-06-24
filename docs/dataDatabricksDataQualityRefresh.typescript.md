# `dataDatabricksDataQualityRefresh` Submodule <a name="`dataDatabricksDataQualityRefresh` Submodule" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDataQualityRefresh <a name="DataDatabricksDataQualityRefresh" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/data_quality_refresh databricks_data_quality_refresh}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer"></a>

```typescript
import { dataDatabricksDataQualityRefresh } from '@cdktn/provider-databricks'

new dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh(scope: Construct, id: string, config: DataDatabricksDataQualityRefreshConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig">DataDatabricksDataQualityRefreshConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig">DataDatabricksDataQualityRefreshConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksDataQualityRefreshProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksDataQualityRefresh resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isConstruct"></a>

```typescript
import { dataDatabricksDataQualityRefresh } from '@cdktn/provider-databricks'

dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformElement"></a>

```typescript
import { dataDatabricksDataQualityRefresh } from '@cdktn/provider-databricks'

dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformDataSource"></a>

```typescript
import { dataDatabricksDataQualityRefresh } from '@cdktn/provider-databricks'

dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport"></a>

```typescript
import { dataDatabricksDataQualityRefresh } from '@cdktn/provider-databricks'

dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksDataQualityRefresh resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDataQualityRefresh to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDataQualityRefresh that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/data_quality_refresh#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDataQualityRefresh to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.endTimeMs">endTimeMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference">DataDatabricksDataQualityRefreshProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.startTimeMs">startTimeMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.trigger">trigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.refreshIdInput">refreshIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.refreshId">refreshId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `endTimeMs`<sup>Required</sup> <a name="endTimeMs" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.endTimeMs"></a>

```typescript
public readonly endTimeMs: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksDataQualityRefreshProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference">DataDatabricksDataQualityRefreshProviderConfigOutputReference</a>

---

##### `startTimeMs`<sup>Required</sup> <a name="startTimeMs" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.startTimeMs"></a>

```typescript
public readonly startTimeMs: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.trigger"></a>

```typescript
public readonly trigger: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksDataQualityRefreshProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a>

---

##### `refreshIdInput`<sup>Optional</sup> <a name="refreshIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.refreshIdInput"></a>

```typescript
public readonly refreshIdInput: number;
```

- *Type:* number

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `refreshId`<sup>Required</sup> <a name="refreshId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.refreshId"></a>

```typescript
public readonly refreshId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDataQualityRefreshConfig <a name="DataDatabricksDataQualityRefreshConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.Initializer"></a>

```typescript
import { dataDatabricksDataQualityRefresh } from '@cdktn/provider-databricks'

const dataDatabricksDataQualityRefreshConfig: dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/data_quality_refresh#object_id DataDatabricksDataQualityRefresh#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.objectType">objectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/data_quality_refresh#object_type DataDatabricksDataQualityRefresh#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.refreshId">refreshId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/data_quality_refresh#refresh_id DataDatabricksDataQualityRefresh#refresh_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/data_quality_refresh#provider_config DataDatabricksDataQualityRefresh#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/data_quality_refresh#object_id DataDatabricksDataQualityRefresh#object_id}.

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/data_quality_refresh#object_type DataDatabricksDataQualityRefresh#object_type}.

---

##### `refreshId`<sup>Required</sup> <a name="refreshId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.refreshId"></a>

```typescript
public readonly refreshId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/data_quality_refresh#refresh_id DataDatabricksDataQualityRefresh#refresh_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksDataQualityRefreshProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/data_quality_refresh#provider_config DataDatabricksDataQualityRefresh#provider_config}.

---

### DataDatabricksDataQualityRefreshProviderConfig <a name="DataDatabricksDataQualityRefreshProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksDataQualityRefresh } from '@cdktn/provider-databricks'

const dataDatabricksDataQualityRefreshProviderConfig: dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/data_quality_refresh#workspace_id DataDatabricksDataQualityRefresh#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/data_quality_refresh#workspace_id DataDatabricksDataQualityRefresh#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDataQualityRefreshProviderConfigOutputReference <a name="DataDatabricksDataQualityRefreshProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDataQualityRefresh } from '@cdktn/provider-databricks'

new dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDataQualityRefreshProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a>

---



