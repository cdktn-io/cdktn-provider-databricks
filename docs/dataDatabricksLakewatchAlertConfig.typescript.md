# `dataDatabricksLakewatchAlertConfig` Submodule <a name="`dataDatabricksLakewatchAlertConfig` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchAlertConfig <a name="DataDatabricksLakewatchAlertConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config databricks_lakewatch_alert_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig(scope: Construct, id: string, config: DataDatabricksLakewatchAlertConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig">DataDatabricksLakewatchAlertConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig">DataDatabricksLakewatchAlertConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksLakewatchAlertConfigProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchAlertConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isConstruct"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformElement"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformDataSource"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksLakewatchAlertConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksLakewatchAlertConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksLakewatchAlertConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchAlertConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.defaultSecurityAlertCollationWindow">defaultSecurityAlertCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.defaultSystemAlertCollationWindow">defaultSystemAlertCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.effectiveDefaultSecurityAlertCollationWindow">effectiveDefaultSecurityAlertCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.effectiveDefaultSystemAlertCollationWindow">effectiveDefaultSystemAlertCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference">DataDatabricksLakewatchAlertConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.securityAlertExportConfig">securityAlertExportConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.systemAlertExportConfig">systemAlertExportConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.updatedBy">updatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference">DataDatabricksLakewatchAlertConfigUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `defaultSecurityAlertCollationWindow`<sup>Required</sup> <a name="defaultSecurityAlertCollationWindow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.defaultSecurityAlertCollationWindow"></a>

```typescript
public readonly defaultSecurityAlertCollationWindow: string;
```

- *Type:* string

---

##### `defaultSystemAlertCollationWindow`<sup>Required</sup> <a name="defaultSystemAlertCollationWindow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.defaultSystemAlertCollationWindow"></a>

```typescript
public readonly defaultSystemAlertCollationWindow: string;
```

- *Type:* string

---

##### `effectiveDefaultSecurityAlertCollationWindow`<sup>Required</sup> <a name="effectiveDefaultSecurityAlertCollationWindow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.effectiveDefaultSecurityAlertCollationWindow"></a>

```typescript
public readonly effectiveDefaultSecurityAlertCollationWindow: string;
```

- *Type:* string

---

##### `effectiveDefaultSystemAlertCollationWindow`<sup>Required</sup> <a name="effectiveDefaultSystemAlertCollationWindow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.effectiveDefaultSystemAlertCollationWindow"></a>

```typescript
public readonly effectiveDefaultSystemAlertCollationWindow: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksLakewatchAlertConfigProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference">DataDatabricksLakewatchAlertConfigProviderConfigOutputReference</a>

---

##### `securityAlertExportConfig`<sup>Required</sup> <a name="securityAlertExportConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.securityAlertExportConfig"></a>

```typescript
public readonly securityAlertExportConfig: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference</a>

---

##### `systemAlertExportConfig`<sup>Required</sup> <a name="systemAlertExportConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.systemAlertExportConfig"></a>

```typescript
public readonly systemAlertExportConfig: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.updatedBy"></a>

```typescript
public readonly updatedBy: DataDatabricksLakewatchAlertConfigUpdatedByOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference">DataDatabricksLakewatchAlertConfigUpdatedByOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksLakewatchAlertConfigProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchAlertConfigConfig <a name="DataDatabricksLakewatchAlertConfigConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchAlertConfigConfig: dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#name DataDatabricksLakewatchAlertConfig#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#provider_config DataDatabricksLakewatchAlertConfig#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#name DataDatabricksLakewatchAlertConfig#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksLakewatchAlertConfigProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#provider_config DataDatabricksLakewatchAlertConfig#provider_config}.

---

### DataDatabricksLakewatchAlertConfigProviderConfig <a name="DataDatabricksLakewatchAlertConfigProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchAlertConfigProviderConfig: dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchAlertConfigSecurityAlertExportConfig: dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.jira">jira</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.tines">tines</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.webhook">webhook</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}.

---

##### `jira`<sup>Optional</sup> <a name="jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.jira"></a>

```typescript
public readonly jira: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}.

---

##### `serviceNow`<sup>Optional</sup> <a name="serviceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.serviceNow"></a>

```typescript
public readonly serviceNow: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}.

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.slack"></a>

```typescript
public readonly slack: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}.

---

##### `tines`<sup>Optional</sup> <a name="tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.tines"></a>

```typescript
public readonly tines: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.webhook"></a>

```typescript
public readonly webhook: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira: dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.apiTokenUcSecret">apiTokenUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.defaultIssueType">defaultIssueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.projectKey">projectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.userEmail">userEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}. |

---

##### `apiTokenUcSecret`<sup>Required</sup> <a name="apiTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.apiTokenUcSecret"></a>

```typescript
public readonly apiTokenUcSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}.

---

##### `defaultIssueType`<sup>Required</sup> <a name="defaultIssueType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.defaultIssueType"></a>

```typescript
public readonly defaultIssueType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}.

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}.

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}.

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow: dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientSecretUcSecret">clientSecretUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}.

---

##### `clientSecretUcSecret`<sup>Required</sup> <a name="clientSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientSecretUcSecret"></a>

```typescript
public readonly clientSecretUcSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack: dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.property.botTokenUcSecret">botTokenUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.property.channel">channel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}. |

---

##### `botTokenUcSecret`<sup>Required</sup> <a name="botTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.property.botTokenUcSecret"></a>

```typescript
public readonly botTokenUcSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}.

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines: dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookSecretUcSecret">webhookSecretUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookUri">webhookUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.exportUpdates">exportUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}. |

---

##### `webhookSecretUcSecret`<sup>Required</sup> <a name="webhookSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookSecretUcSecret"></a>

```typescript
public readonly webhookSecretUcSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}.

---

##### `webhookUri`<sup>Required</sup> <a name="webhookUri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookUri"></a>

```typescript
public readonly webhookUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}.

---

##### `exportUpdates`<sup>Optional</sup> <a name="exportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.exportUpdates"></a>

```typescript
public readonly exportUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook: dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.property.exportUpdates">exportUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}. |

---

##### `exportUpdates`<sup>Optional</sup> <a name="exportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.property.exportUpdates"></a>

```typescript
public readonly exportUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfig <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchAlertConfigSystemAlertExportConfig: dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.jira">jira</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.tines">tines</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.webhook">webhook</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}.

---

##### `jira`<sup>Optional</sup> <a name="jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.jira"></a>

```typescript
public readonly jira: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}.

---

##### `serviceNow`<sup>Optional</sup> <a name="serviceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.serviceNow"></a>

```typescript
public readonly serviceNow: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}.

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.slack"></a>

```typescript
public readonly slack: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}.

---

##### `tines`<sup>Optional</sup> <a name="tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.tines"></a>

```typescript
public readonly tines: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.webhook"></a>

```typescript
public readonly webhook: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira: dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.apiTokenUcSecret">apiTokenUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.defaultIssueType">defaultIssueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.projectKey">projectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.userEmail">userEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}. |

---

##### `apiTokenUcSecret`<sup>Required</sup> <a name="apiTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.apiTokenUcSecret"></a>

```typescript
public readonly apiTokenUcSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}.

---

##### `defaultIssueType`<sup>Required</sup> <a name="defaultIssueType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.defaultIssueType"></a>

```typescript
public readonly defaultIssueType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}.

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}.

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}.

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow: dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientSecretUcSecret">clientSecretUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}.

---

##### `clientSecretUcSecret`<sup>Required</sup> <a name="clientSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientSecretUcSecret"></a>

```typescript
public readonly clientSecretUcSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack: dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.property.botTokenUcSecret">botTokenUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.property.channel">channel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}. |

---

##### `botTokenUcSecret`<sup>Required</sup> <a name="botTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.property.botTokenUcSecret"></a>

```typescript
public readonly botTokenUcSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}.

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines: dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.webhookSecretUcSecret">webhookSecretUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.webhookUri">webhookUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.exportUpdates">exportUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}. |

---

##### `webhookSecretUcSecret`<sup>Required</sup> <a name="webhookSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.webhookSecretUcSecret"></a>

```typescript
public readonly webhookSecretUcSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}.

---

##### `webhookUri`<sup>Required</sup> <a name="webhookUri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.webhookUri"></a>

```typescript
public readonly webhookUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}.

---

##### `exportUpdates`<sup>Optional</sup> <a name="exportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.exportUpdates"></a>

```typescript
public readonly exportUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook: dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.property.exportUpdates">exportUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}. |

---

##### `exportUpdates`<sup>Optional</sup> <a name="exportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.property.exportUpdates"></a>

```typescript
public readonly exportUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}.

---

### DataDatabricksLakewatchAlertConfigUpdatedBy <a name="DataDatabricksLakewatchAlertConfigUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchAlertConfigUpdatedBy: dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#display_name DataDatabricksLakewatchAlertConfig#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#email DataDatabricksLakewatchAlertConfig#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#id DataDatabricksLakewatchAlertConfig#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#principal_type DataDatabricksLakewatchAlertConfig#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#display_name DataDatabricksLakewatchAlertConfig#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#email DataDatabricksLakewatchAlertConfig#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#id DataDatabricksLakewatchAlertConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#principal_type DataDatabricksLakewatchAlertConfig#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchAlertConfigProviderConfigOutputReference <a name="DataDatabricksLakewatchAlertConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchAlertConfigProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput">apiTokenUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput">defaultIssueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrlInput">instanceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKeyInput">projectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmailInput">userEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecret">apiTokenUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueType">defaultIssueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKey">projectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmail">userEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiTokenUcSecretInput`<sup>Optional</sup> <a name="apiTokenUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput"></a>

```typescript
public readonly apiTokenUcSecretInput: string;
```

- *Type:* string

---

##### `defaultIssueTypeInput`<sup>Optional</sup> <a name="defaultIssueTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput"></a>

```typescript
public readonly defaultIssueTypeInput: string;
```

- *Type:* string

---

##### `instanceUrlInput`<sup>Optional</sup> <a name="instanceUrlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrlInput"></a>

```typescript
public readonly instanceUrlInput: string;
```

- *Type:* string

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKeyInput"></a>

```typescript
public readonly projectKeyInput: string;
```

- *Type:* string

---

##### `userEmailInput`<sup>Optional</sup> <a name="userEmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmailInput"></a>

```typescript
public readonly userEmailInput: string;
```

- *Type:* string

---

##### `apiTokenUcSecret`<sup>Required</sup> <a name="apiTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecret"></a>

```typescript
public readonly apiTokenUcSecret: string;
```

- *Type:* string

---

##### `defaultIssueType`<sup>Required</sup> <a name="defaultIssueType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueType"></a>

```typescript
public readonly defaultIssueType: string;
```

- *Type:* string

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira">putJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow">putServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines">putTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook">putWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetJira">resetJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetServiceNow">resetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetSlack">resetSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetTines">resetTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWebhook">resetWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJira` <a name="putJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira"></a>

```typescript
public putJira(value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a>

---

##### `putServiceNow` <a name="putServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow"></a>

```typescript
public putServiceNow(value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---

##### `putSlack` <a name="putSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack"></a>

```typescript
public putSlack(value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---

##### `putTines` <a name="putTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines"></a>

```typescript
public putTines(value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a>

---

##### `putWebhook` <a name="putWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook"></a>

```typescript
public putWebhook(value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetJira` <a name="resetJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetJira"></a>

```typescript
public resetJira(): void
```

##### `resetServiceNow` <a name="resetServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetServiceNow"></a>

```typescript
public resetServiceNow(): void
```

##### `resetSlack` <a name="resetSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetSlack"></a>

```typescript
public resetSlack(): void
```

##### `resetTines` <a name="resetTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetTines"></a>

```typescript
public resetTines(): void
```

##### `resetWebhook` <a name="resetWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWebhook"></a>

```typescript
public resetWebhook(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jira">jira</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tines">tines</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhook">webhook</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jiraInput">jiraInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNowInput">serviceNowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slackInput">slackInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tinesInput">tinesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhookInput">webhookInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jira`<sup>Required</sup> <a name="jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jira"></a>

```typescript
public readonly jira: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNow"></a>

```typescript
public readonly serviceNow: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slack"></a>

```typescript
public readonly slack: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference</a>

---

##### `tines`<sup>Required</sup> <a name="tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tines"></a>

```typescript
public readonly tines: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhook"></a>

```typescript
public readonly webhook: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jiraInput`<sup>Optional</sup> <a name="jiraInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jiraInput"></a>

```typescript
public readonly jiraInput: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a>

---

##### `serviceNowInput`<sup>Optional</sup> <a name="serviceNowInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNowInput"></a>

```typescript
public readonly serviceNowInput: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slackInput"></a>

```typescript
public readonly slackInput: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---

##### `tinesInput`<sup>Optional</sup> <a name="tinesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tinesInput"></a>

```typescript
public readonly tinesInput: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a>

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhookInput"></a>

```typescript
public readonly webhookInput: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput">clientSecretUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret">clientSecretUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretUcSecretInput`<sup>Optional</sup> <a name="clientSecretUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput"></a>

```typescript
public readonly clientSecretUcSecretInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretUcSecret`<sup>Required</sup> <a name="clientSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret"></a>

```typescript
public readonly clientSecretUcSecret: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput">botTokenUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecret">botTokenUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `botTokenUcSecretInput`<sup>Optional</sup> <a name="botTokenUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput"></a>

```typescript
public readonly botTokenUcSecretInput: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `botTokenUcSecret`<sup>Required</sup> <a name="botTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecret"></a>

```typescript
public readonly botTokenUcSecret: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resetExportUpdates">resetExportUpdates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExportUpdates` <a name="resetExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resetExportUpdates"></a>

```typescript
public resetExportUpdates(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdatesInput">exportUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput">webhookSecretUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUriInput">webhookUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdates">exportUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret">webhookSecretUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUri">webhookUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportUpdatesInput`<sup>Optional</sup> <a name="exportUpdatesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdatesInput"></a>

```typescript
public readonly exportUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `webhookSecretUcSecretInput`<sup>Optional</sup> <a name="webhookSecretUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput"></a>

```typescript
public readonly webhookSecretUcSecretInput: string;
```

- *Type:* string

---

##### `webhookUriInput`<sup>Optional</sup> <a name="webhookUriInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUriInput"></a>

```typescript
public readonly webhookUriInput: string;
```

- *Type:* string

---

##### `exportUpdates`<sup>Required</sup> <a name="exportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdates"></a>

```typescript
public readonly exportUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `webhookSecretUcSecret`<sup>Required</sup> <a name="webhookSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret"></a>

```typescript
public readonly webhookSecretUcSecret: string;
```

- *Type:* string

---

##### `webhookUri`<sup>Required</sup> <a name="webhookUri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUri"></a>

```typescript
public readonly webhookUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetExportUpdates">resetExportUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExportUpdates` <a name="resetExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetExportUpdates"></a>

```typescript
public resetExportUpdates(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdatesInput">exportUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdates">exportUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportUpdatesInput`<sup>Optional</sup> <a name="exportUpdatesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdatesInput"></a>

```typescript
public readonly exportUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `exportUpdates`<sup>Required</sup> <a name="exportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdates"></a>

```typescript
public readonly exportUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput">apiTokenUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput">defaultIssueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrlInput">instanceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKeyInput">projectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmailInput">userEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecret">apiTokenUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueType">defaultIssueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKey">projectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmail">userEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiTokenUcSecretInput`<sup>Optional</sup> <a name="apiTokenUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput"></a>

```typescript
public readonly apiTokenUcSecretInput: string;
```

- *Type:* string

---

##### `defaultIssueTypeInput`<sup>Optional</sup> <a name="defaultIssueTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput"></a>

```typescript
public readonly defaultIssueTypeInput: string;
```

- *Type:* string

---

##### `instanceUrlInput`<sup>Optional</sup> <a name="instanceUrlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrlInput"></a>

```typescript
public readonly instanceUrlInput: string;
```

- *Type:* string

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKeyInput"></a>

```typescript
public readonly projectKeyInput: string;
```

- *Type:* string

---

##### `userEmailInput`<sup>Optional</sup> <a name="userEmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmailInput"></a>

```typescript
public readonly userEmailInput: string;
```

- *Type:* string

---

##### `apiTokenUcSecret`<sup>Required</sup> <a name="apiTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecret"></a>

```typescript
public readonly apiTokenUcSecret: string;
```

- *Type:* string

---

##### `defaultIssueType`<sup>Required</sup> <a name="defaultIssueType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueType"></a>

```typescript
public readonly defaultIssueType: string;
```

- *Type:* string

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira">putJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow">putServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines">putTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook">putWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetJira">resetJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetServiceNow">resetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetSlack">resetSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetTines">resetTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWebhook">resetWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJira` <a name="putJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira"></a>

```typescript
public putJira(value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a>

---

##### `putServiceNow` <a name="putServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow"></a>

```typescript
public putServiceNow(value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---

##### `putSlack` <a name="putSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack"></a>

```typescript
public putSlack(value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a>

---

##### `putTines` <a name="putTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines"></a>

```typescript
public putTines(value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a>

---

##### `putWebhook` <a name="putWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook"></a>

```typescript
public putWebhook(value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetJira` <a name="resetJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetJira"></a>

```typescript
public resetJira(): void
```

##### `resetServiceNow` <a name="resetServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetServiceNow"></a>

```typescript
public resetServiceNow(): void
```

##### `resetSlack` <a name="resetSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetSlack"></a>

```typescript
public resetSlack(): void
```

##### `resetTines` <a name="resetTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetTines"></a>

```typescript
public resetTines(): void
```

##### `resetWebhook` <a name="resetWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWebhook"></a>

```typescript
public resetWebhook(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jira">jira</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tines">tines</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhook">webhook</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jiraInput">jiraInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNowInput">serviceNowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slackInput">slackInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tinesInput">tinesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhookInput">webhookInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig">DataDatabricksLakewatchAlertConfigSystemAlertExportConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jira`<sup>Required</sup> <a name="jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jira"></a>

```typescript
public readonly jira: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNow"></a>

```typescript
public readonly serviceNow: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slack"></a>

```typescript
public readonly slack: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference</a>

---

##### `tines`<sup>Required</sup> <a name="tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tines"></a>

```typescript
public readonly tines: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhook"></a>

```typescript
public readonly webhook: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jiraInput`<sup>Optional</sup> <a name="jiraInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jiraInput"></a>

```typescript
public readonly jiraInput: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a>

---

##### `serviceNowInput`<sup>Optional</sup> <a name="serviceNowInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNowInput"></a>

```typescript
public readonly serviceNowInput: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slackInput"></a>

```typescript
public readonly slackInput: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a>

---

##### `tinesInput`<sup>Optional</sup> <a name="tinesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tinesInput"></a>

```typescript
public readonly tinesInput: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a>

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhookInput"></a>

```typescript
public readonly webhookInput: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchAlertConfigSystemAlertExportConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig">DataDatabricksLakewatchAlertConfigSystemAlertExportConfig</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput">clientSecretUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret">clientSecretUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretUcSecretInput`<sup>Optional</sup> <a name="clientSecretUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput"></a>

```typescript
public readonly clientSecretUcSecretInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretUcSecret`<sup>Required</sup> <a name="clientSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret"></a>

```typescript
public readonly clientSecretUcSecret: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput">botTokenUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecret">botTokenUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `botTokenUcSecretInput`<sup>Optional</sup> <a name="botTokenUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput"></a>

```typescript
public readonly botTokenUcSecretInput: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `botTokenUcSecret`<sup>Required</sup> <a name="botTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecret"></a>

```typescript
public readonly botTokenUcSecret: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resetExportUpdates">resetExportUpdates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExportUpdates` <a name="resetExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resetExportUpdates"></a>

```typescript
public resetExportUpdates(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdatesInput">exportUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput">webhookSecretUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUriInput">webhookUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdates">exportUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret">webhookSecretUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUri">webhookUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportUpdatesInput`<sup>Optional</sup> <a name="exportUpdatesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdatesInput"></a>

```typescript
public readonly exportUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `webhookSecretUcSecretInput`<sup>Optional</sup> <a name="webhookSecretUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput"></a>

```typescript
public readonly webhookSecretUcSecretInput: string;
```

- *Type:* string

---

##### `webhookUriInput`<sup>Optional</sup> <a name="webhookUriInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUriInput"></a>

```typescript
public readonly webhookUriInput: string;
```

- *Type:* string

---

##### `exportUpdates`<sup>Required</sup> <a name="exportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdates"></a>

```typescript
public readonly exportUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `webhookSecretUcSecret`<sup>Required</sup> <a name="webhookSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret"></a>

```typescript
public readonly webhookSecretUcSecret: string;
```

- *Type:* string

---

##### `webhookUri`<sup>Required</sup> <a name="webhookUri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUri"></a>

```typescript
public readonly webhookUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetExportUpdates">resetExportUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExportUpdates` <a name="resetExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetExportUpdates"></a>

```typescript
public resetExportUpdates(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdatesInput">exportUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdates">exportUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportUpdatesInput`<sup>Optional</sup> <a name="exportUpdatesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdatesInput"></a>

```typescript
public readonly exportUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `exportUpdates`<sup>Required</sup> <a name="exportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdates"></a>

```typescript
public readonly exportUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---


### DataDatabricksLakewatchAlertConfigUpdatedByOutputReference <a name="DataDatabricksLakewatchAlertConfigUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchAlertConfig } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetPrincipalType"></a>

```typescript
public resetPrincipalType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy">DataDatabricksLakewatchAlertConfigUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchAlertConfigUpdatedBy;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy">DataDatabricksLakewatchAlertConfigUpdatedBy</a>

---



