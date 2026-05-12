# `dataDatabricksDisasterRecoveryStableUrls` Submodule <a name="`dataDatabricksDisasterRecoveryStableUrls` Submodule" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDisasterRecoveryStableUrls <a name="DataDatabricksDisasterRecoveryStableUrls" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/disaster_recovery_stable_urls databricks_disaster_recovery_stable_urls}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryStableUrls } from '@cdktn/provider-databricks'

new dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls(scope: Construct, id: string, config: DataDatabricksDisasterRecoveryStableUrlsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig">DataDatabricksDisasterRecoveryStableUrlsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig">DataDatabricksDisasterRecoveryStableUrlsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.resetPageSize">resetPageSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksDisasterRecoveryStableUrls resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isConstruct"></a>

```typescript
import { dataDatabricksDisasterRecoveryStableUrls } from '@cdktn/provider-databricks'

dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformElement"></a>

```typescript
import { dataDatabricksDisasterRecoveryStableUrls } from '@cdktn/provider-databricks'

dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformDataSource"></a>

```typescript
import { dataDatabricksDisasterRecoveryStableUrls } from '@cdktn/provider-databricks'

dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport"></a>

```typescript
import { dataDatabricksDisasterRecoveryStableUrls } from '@cdktn/provider-databricks'

dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksDisasterRecoveryStableUrls resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDisasterRecoveryStableUrls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDisasterRecoveryStableUrls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/disaster_recovery_stable_urls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDisasterRecoveryStableUrls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.stableUrls">stableUrls</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList">DataDatabricksDisasterRecoveryStableUrlsStableUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `stableUrls`<sup>Required</sup> <a name="stableUrls" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.stableUrls"></a>

```typescript
public readonly stableUrls: DataDatabricksDisasterRecoveryStableUrlsStableUrlsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList">DataDatabricksDisasterRecoveryStableUrlsStableUrlsList</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDisasterRecoveryStableUrlsConfig <a name="DataDatabricksDisasterRecoveryStableUrlsConfig" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryStableUrls } from '@cdktn/provider-databricks'

const dataDatabricksDisasterRecoveryStableUrlsConfig: dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/disaster_recovery_stable_urls#parent DataDatabricksDisasterRecoveryStableUrls#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/disaster_recovery_stable_urls#page_size DataDatabricksDisasterRecoveryStableUrls#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/disaster_recovery_stable_urls#parent DataDatabricksDisasterRecoveryStableUrls#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/disaster_recovery_stable_urls#page_size DataDatabricksDisasterRecoveryStableUrls#page_size}.

---

### DataDatabricksDisasterRecoveryStableUrlsStableUrls <a name="DataDatabricksDisasterRecoveryStableUrlsStableUrls" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryStableUrls } from '@cdktn/provider-databricks'

const dataDatabricksDisasterRecoveryStableUrlsStableUrls: dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/disaster_recovery_stable_urls#name DataDatabricksDisasterRecoveryStableUrls#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/disaster_recovery_stable_urls#name DataDatabricksDisasterRecoveryStableUrls#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDisasterRecoveryStableUrlsStableUrlsList <a name="DataDatabricksDisasterRecoveryStableUrlsStableUrlsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryStableUrls } from '@cdktn/provider-databricks'

new dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.get"></a>

```typescript
public get(index: number): DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls">DataDatabricksDisasterRecoveryStableUrlsStableUrls</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDisasterRecoveryStableUrlsStableUrls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls">DataDatabricksDisasterRecoveryStableUrlsStableUrls</a>[]

---


### DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference <a name="DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryStableUrls } from '@cdktn/provider-databricks'

new dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.initialWorkspaceId">initialWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls">DataDatabricksDisasterRecoveryStableUrlsStableUrls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `initialWorkspaceId`<sup>Required</sup> <a name="initialWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.initialWorkspaceId"></a>

```typescript
public readonly initialWorkspaceId: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDisasterRecoveryStableUrlsStableUrls;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls">DataDatabricksDisasterRecoveryStableUrlsStableUrls</a>

---



