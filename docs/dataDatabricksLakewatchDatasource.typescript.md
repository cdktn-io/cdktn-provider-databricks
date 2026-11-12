# `dataDatabricksLakewatchDatasource` Submodule <a name="`dataDatabricksLakewatchDatasource` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchDatasource <a name="DataDatabricksLakewatchDatasource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource databricks_lakewatch_datasource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource(scope: Construct, id: string, config: DataDatabricksLakewatchDatasourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig">DataDatabricksLakewatchDatasourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig">DataDatabricksLakewatchDatasourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksLakewatchDatasourceProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchDatasource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isConstruct"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformElement"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformDataSource"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksLakewatchDatasource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksLakewatchDatasource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksLakewatchDatasource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchDatasource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.annotations">annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.autoloader">autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference">DataDatabricksLakewatchDatasourceAutoloaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.computeMode">computeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.computeWorkspaceId">computeWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.createdBy">createdBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference">DataDatabricksLakewatchDatasourceCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.datasourceId">datasourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.datasourceName">datasourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveCatalogName">effectiveCatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveDatasourceName">effectiveDatasourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveRunAsPrincipal">effectiveRunAsPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveSchemaName">effectiveSchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.existingTable">existingTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference">DataDatabricksLakewatchDatasourceExistingTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.owner">owner</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference">DataDatabricksLakewatchDatasourceOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.parsers">parsers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList">DataDatabricksLakewatchDatasourceParsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference">DataDatabricksLakewatchDatasourceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.runAsPrincipal">runAsPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference">DataDatabricksLakewatchDatasourceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference">DataDatabricksLakewatchDatasourceStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.unityCatalogConnection">unityCatalogConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference">DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.updatedBy">updatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference">DataDatabricksLakewatchDatasourceUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.annotations"></a>

```typescript
public readonly annotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `autoloader`<sup>Required</sup> <a name="autoloader" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.autoloader"></a>

```typescript
public readonly autoloader: DataDatabricksLakewatchDatasourceAutoloaderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference">DataDatabricksLakewatchDatasourceAutoloaderOutputReference</a>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `computeMode`<sup>Required</sup> <a name="computeMode" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.computeMode"></a>

```typescript
public readonly computeMode: string;
```

- *Type:* string

---

##### `computeWorkspaceId`<sup>Required</sup> <a name="computeWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.computeWorkspaceId"></a>

```typescript
public readonly computeWorkspaceId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.createdBy"></a>

```typescript
public readonly createdBy: DataDatabricksLakewatchDatasourceCreatedByOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference">DataDatabricksLakewatchDatasourceCreatedByOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `datasourceId`<sup>Required</sup> <a name="datasourceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.datasourceId"></a>

```typescript
public readonly datasourceId: string;
```

- *Type:* string

---

##### `datasourceName`<sup>Required</sup> <a name="datasourceName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.datasourceName"></a>

```typescript
public readonly datasourceName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `effectiveCatalogName`<sup>Required</sup> <a name="effectiveCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveCatalogName"></a>

```typescript
public readonly effectiveCatalogName: string;
```

- *Type:* string

---

##### `effectiveDatasourceName`<sup>Required</sup> <a name="effectiveDatasourceName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveDatasourceName"></a>

```typescript
public readonly effectiveDatasourceName: string;
```

- *Type:* string

---

##### `effectiveRunAsPrincipal`<sup>Required</sup> <a name="effectiveRunAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveRunAsPrincipal"></a>

```typescript
public readonly effectiveRunAsPrincipal: string;
```

- *Type:* string

---

##### `effectiveSchemaName`<sup>Required</sup> <a name="effectiveSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveSchemaName"></a>

```typescript
public readonly effectiveSchemaName: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `existingTable`<sup>Required</sup> <a name="existingTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.existingTable"></a>

```typescript
public readonly existingTable: DataDatabricksLakewatchDatasourceExistingTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference">DataDatabricksLakewatchDatasourceExistingTableOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.owner"></a>

```typescript
public readonly owner: DataDatabricksLakewatchDatasourceOwnerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference">DataDatabricksLakewatchDatasourceOwnerOutputReference</a>

---

##### `parsers`<sup>Required</sup> <a name="parsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.parsers"></a>

```typescript
public readonly parsers: DataDatabricksLakewatchDatasourceParsersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList">DataDatabricksLakewatchDatasourceParsersList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksLakewatchDatasourceProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference">DataDatabricksLakewatchDatasourceProviderConfigOutputReference</a>

---

##### `runAsPrincipal`<sup>Required</sup> <a name="runAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.runAsPrincipal"></a>

```typescript
public readonly runAsPrincipal: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.schedule"></a>

```typescript
public readonly schedule: DataDatabricksLakewatchDatasourceScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference">DataDatabricksLakewatchDatasourceScheduleOutputReference</a>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.status"></a>

```typescript
public readonly status: DataDatabricksLakewatchDatasourceStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference">DataDatabricksLakewatchDatasourceStatusOutputReference</a>

---

##### `unityCatalogConnection`<sup>Required</sup> <a name="unityCatalogConnection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.unityCatalogConnection"></a>

```typescript
public readonly unityCatalogConnection: DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference">DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.updatedBy"></a>

```typescript
public readonly updatedBy: DataDatabricksLakewatchDatasourceUpdatedByOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference">DataDatabricksLakewatchDatasourceUpdatedByOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksLakewatchDatasourceProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchDatasourceAutoloader <a name="DataDatabricksLakewatchDatasourceAutoloader" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceAutoloader: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#format DataDatabricksLakewatchDatasource#format}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#location DataDatabricksLakewatchDatasource#location}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.rawTable">rawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#raw_table DataDatabricksLakewatchDatasource#raw_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.awsSecretScope">awsSecretScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#aws_secret_scope DataDatabricksLakewatchDatasource#aws_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#envelope DataDatabricksLakewatchDatasource#envelope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.formatOptions">formatOptions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#format_options DataDatabricksLakewatchDatasource#format_options}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.includeExistingFiles">includeExistingFiles</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#include_existing_files DataDatabricksLakewatchDatasource#include_existing_files}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.overridePartitionColumns">overridePartitionColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#override_partition_columns DataDatabricksLakewatchDatasource#override_partition_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.queueUrl">queueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#queue_url DataDatabricksLakewatchDatasource#queue_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.serviceCredentials">serviceCredentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#service_credentials DataDatabricksLakewatchDatasource#service_credentials}. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#format DataDatabricksLakewatchDatasource#format}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#location DataDatabricksLakewatchDatasource#location}.

---

##### `rawTable`<sup>Required</sup> <a name="rawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.rawTable"></a>

```typescript
public readonly rawTable: DataDatabricksLakewatchDatasourceAutoloaderRawTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#raw_table DataDatabricksLakewatchDatasource#raw_table}.

---

##### `awsSecretScope`<sup>Optional</sup> <a name="awsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.awsSecretScope"></a>

```typescript
public readonly awsSecretScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#aws_secret_scope DataDatabricksLakewatchDatasource#aws_secret_scope}.

---

##### `envelope`<sup>Optional</sup> <a name="envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.envelope"></a>

```typescript
public readonly envelope: DataDatabricksLakewatchDatasourceAutoloaderEnvelope;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#envelope DataDatabricksLakewatchDatasource#envelope}.

---

##### `formatOptions`<sup>Optional</sup> <a name="formatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.formatOptions"></a>

```typescript
public readonly formatOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#format_options DataDatabricksLakewatchDatasource#format_options}.

---

##### `includeExistingFiles`<sup>Optional</sup> <a name="includeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.includeExistingFiles"></a>

```typescript
public readonly includeExistingFiles: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#include_existing_files DataDatabricksLakewatchDatasource#include_existing_files}.

---

##### `overridePartitionColumns`<sup>Optional</sup> <a name="overridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.overridePartitionColumns"></a>

```typescript
public readonly overridePartitionColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#override_partition_columns DataDatabricksLakewatchDatasource#override_partition_columns}.

---

##### `queueUrl`<sup>Optional</sup> <a name="queueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#queue_url DataDatabricksLakewatchDatasource#queue_url}.

---

##### `serviceCredentials`<sup>Optional</sup> <a name="serviceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.serviceCredentials"></a>

```typescript
public readonly serviceCredentials: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#service_credentials DataDatabricksLakewatchDatasource#service_credentials}.

---

### DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable <a name="DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

### DataDatabricksLakewatchDatasourceAutoloaderEnvelope <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceAutoloaderEnvelope: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.property.cloudWatchLogs">cloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cloud_watch_logs DataDatabricksLakewatchDatasource#cloud_watch_logs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.property.jsonArray">jsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#json_array DataDatabricksLakewatchDatasource#json_array}. |

---

##### `cloudWatchLogs`<sup>Optional</sup> <a name="cloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.property.cloudWatchLogs"></a>

```typescript
public readonly cloudWatchLogs: DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cloud_watch_logs DataDatabricksLakewatchDatasource#cloud_watch_logs}.

---

##### `jsonArray`<sup>Optional</sup> <a name="jsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.property.jsonArray"></a>

```typescript
public readonly jsonArray: DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#json_array DataDatabricksLakewatchDatasource#json_array}.

---

### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.property.headerRetention">headerRetention</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#header_retention DataDatabricksLakewatchDatasource#header_retention}. |

---

##### `headerRetention`<sup>Optional</sup> <a name="headerRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.property.headerRetention"></a>

```typescript
public readonly headerRetention: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#header_retention DataDatabricksLakewatchDatasource#header_retention}.

---

### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#path DataDatabricksLakewatchDatasource#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#path DataDatabricksLakewatchDatasource#path}.

---

### DataDatabricksLakewatchDatasourceAutoloaderRawTable <a name="DataDatabricksLakewatchDatasourceAutoloaderRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceAutoloaderRawTable: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

### DataDatabricksLakewatchDatasourceConfig <a name="DataDatabricksLakewatchDatasourceConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceConfig: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#provider_config DataDatabricksLakewatchDatasource#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksLakewatchDatasourceProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#provider_config DataDatabricksLakewatchDatasource#provider_config}.

---

### DataDatabricksLakewatchDatasourceCreatedBy <a name="DataDatabricksLakewatchDatasourceCreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceCreatedBy: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}.

---

### DataDatabricksLakewatchDatasourceExistingTable <a name="DataDatabricksLakewatchDatasourceExistingTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceExistingTable: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.catalog">catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog DataDatabricksLakewatchDatasource#catalog}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.includeExistingRows">includeExistingRows</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#include_existing_rows DataDatabricksLakewatchDatasource#include_existing_rows}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.schema">schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema DataDatabricksLakewatchDatasource#schema}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog DataDatabricksLakewatchDatasource#catalog}.

---

##### `includeExistingRows`<sup>Optional</sup> <a name="includeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.includeExistingRows"></a>

```typescript
public readonly includeExistingRows: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#include_existing_rows DataDatabricksLakewatchDatasource#include_existing_rows}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema DataDatabricksLakewatchDatasource#schema}.

---

### DataDatabricksLakewatchDatasourceOwner <a name="DataDatabricksLakewatchDatasourceOwner" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceOwner: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}.

---

### DataDatabricksLakewatchDatasourceParsers <a name="DataDatabricksLakewatchDatasourceParsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceParsers: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#version DataDatabricksLakewatchDatasource#version}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#target_table DataDatabricksLakewatchDatasource#target_table}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#version DataDatabricksLakewatchDatasource#version}.

---

##### `targetTable`<sup>Optional</sup> <a name="targetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.targetTable"></a>

```typescript
public readonly targetTable: DataDatabricksLakewatchDatasourceParsersTargetTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#target_table DataDatabricksLakewatchDatasource#target_table}.

---

### DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable <a name="DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceParsersEffectiveTargetTable: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

### DataDatabricksLakewatchDatasourceParsersTargetTable <a name="DataDatabricksLakewatchDatasourceParsersTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceParsersTargetTable: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

### DataDatabricksLakewatchDatasourceProviderConfig <a name="DataDatabricksLakewatchDatasourceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceProviderConfig: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#workspace_id DataDatabricksLakewatchDatasource#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#workspace_id DataDatabricksLakewatchDatasource#workspace_id}.

---

### DataDatabricksLakewatchDatasourceSchedule <a name="DataDatabricksLakewatchDatasourceSchedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceSchedule: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.atLeastEvery">atLeastEvery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#at_least_every DataDatabricksLakewatchDatasource#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.computeGroup">computeGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#compute_group DataDatabricksLakewatchDatasource#compute_group}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.continuous">continuous</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#continuous DataDatabricksLakewatchDatasource#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.cronExpression">cronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cron_expression DataDatabricksLakewatchDatasource#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#enabled DataDatabricksLakewatchDatasource#enabled}. |

---

##### `atLeastEvery`<sup>Optional</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.atLeastEvery"></a>

```typescript
public readonly atLeastEvery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#at_least_every DataDatabricksLakewatchDatasource#at_least_every}.

---

##### `computeGroup`<sup>Optional</sup> <a name="computeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.computeGroup"></a>

```typescript
public readonly computeGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#compute_group DataDatabricksLakewatchDatasource#compute_group}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.continuous"></a>

```typescript
public readonly continuous: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#continuous DataDatabricksLakewatchDatasource#continuous}.

---

##### `cronExpression`<sup>Optional</sup> <a name="cronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cron_expression DataDatabricksLakewatchDatasource#cron_expression}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#enabled DataDatabricksLakewatchDatasource#enabled}.

---

### DataDatabricksLakewatchDatasourceStatus <a name="DataDatabricksLakewatchDatasourceStatus" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceStatus: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus = { ... }
```


### DataDatabricksLakewatchDatasourceStatusIngestionJob <a name="DataDatabricksLakewatchDatasourceStatusIngestionJob" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceStatusIngestionJob: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob = { ... }
```


### DataDatabricksLakewatchDatasourceStatusIngestionPipeline <a name="DataDatabricksLakewatchDatasourceStatusIngestionPipeline" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceStatusIngestionPipeline: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline = { ... }
```


### DataDatabricksLakewatchDatasourceUnityCatalogConnection <a name="DataDatabricksLakewatchDatasourceUnityCatalogConnection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceUnityCatalogConnection: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.connectionName">connectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#connection_name DataDatabricksLakewatchDatasource#connection_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.configuration">configuration</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#configuration DataDatabricksLakewatchDatasource#configuration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#start_time DataDatabricksLakewatchDatasource#start_time}. |

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#connection_name DataDatabricksLakewatchDatasource#connection_name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.configuration"></a>

```typescript
public readonly configuration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#configuration DataDatabricksLakewatchDatasource#configuration}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#start_time DataDatabricksLakewatchDatasource#start_time}.

---

### DataDatabricksLakewatchDatasourceUpdatedBy <a name="DataDatabricksLakewatchDatasourceUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchDatasourceUpdatedBy: dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable">DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable">DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention">resetHeaderRetention</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderRetention` <a name="resetHeaderRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention"></a>

```typescript
public resetHeaderRetention(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput">headerRetentionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention">headerRetention</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerRetentionInput`<sup>Optional</sup> <a name="headerRetentionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput"></a>

```typescript
public readonly headerRetentionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `headerRetention`<sup>Required</sup> <a name="headerRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention"></a>

```typescript
public readonly headerRetention: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs">putCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray">putJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resetCloudWatchLogs">resetCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resetJsonArray">resetJsonArray</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudWatchLogs` <a name="putCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs"></a>

```typescript
public putCloudWatchLogs(value: DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `putJsonArray` <a name="putJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray"></a>

```typescript
public putJsonArray(value: DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---

##### `resetCloudWatchLogs` <a name="resetCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resetCloudWatchLogs"></a>

```typescript
public resetCloudWatchLogs(): void
```

##### `resetJsonArray` <a name="resetJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resetJsonArray"></a>

```typescript
public resetJsonArray(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogs">cloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArray">jsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput">cloudWatchLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArrayInput">jsonArrayInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudWatchLogs`<sup>Required</sup> <a name="cloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogs"></a>

```typescript
public readonly cloudWatchLogs: DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference</a>

---

##### `jsonArray`<sup>Required</sup> <a name="jsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArray"></a>

```typescript
public readonly jsonArray: DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference</a>

---

##### `cloudWatchLogsInput`<sup>Optional</sup> <a name="cloudWatchLogsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput"></a>

```typescript
public readonly cloudWatchLogsInput: IResolvable | DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `jsonArrayInput`<sup>Optional</sup> <a name="jsonArrayInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArrayInput"></a>

```typescript
public readonly jsonArrayInput: IResolvable | DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchDatasourceAutoloaderEnvelope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putEnvelope">putEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putRawTable">putRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetAwsSecretScope">resetAwsSecretScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetEnvelope">resetEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetFormatOptions">resetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetIncludeExistingFiles">resetIncludeExistingFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetOverridePartitionColumns">resetOverridePartitionColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetQueueUrl">resetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetServiceCredentials">resetServiceCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvelope` <a name="putEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putEnvelope"></a>

```typescript
public putEnvelope(value: DataDatabricksLakewatchDatasourceAutoloaderEnvelope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putEnvelope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a>

---

##### `putRawTable` <a name="putRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putRawTable"></a>

```typescript
public putRawTable(value: DataDatabricksLakewatchDatasourceAutoloaderRawTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putRawTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a>

---

##### `resetAwsSecretScope` <a name="resetAwsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetAwsSecretScope"></a>

```typescript
public resetAwsSecretScope(): void
```

##### `resetEnvelope` <a name="resetEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetEnvelope"></a>

```typescript
public resetEnvelope(): void
```

##### `resetFormatOptions` <a name="resetFormatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetFormatOptions"></a>

```typescript
public resetFormatOptions(): void
```

##### `resetIncludeExistingFiles` <a name="resetIncludeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetIncludeExistingFiles"></a>

```typescript
public resetIncludeExistingFiles(): void
```

##### `resetOverridePartitionColumns` <a name="resetOverridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetOverridePartitionColumns"></a>

```typescript
public resetOverridePartitionColumns(): void
```

##### `resetQueueUrl` <a name="resetQueueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetQueueUrl"></a>

```typescript
public resetQueueUrl(): void
```

##### `resetServiceCredentials` <a name="resetServiceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetServiceCredentials"></a>

```typescript
public resetServiceCredentials(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.effectiveIncludeExistingFiles">effectiveIncludeExistingFiles</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.effectiveRawTable">effectiveRawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.rawTable">rawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference">DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.awsSecretScopeInput">awsSecretScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.envelopeInput">envelopeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatOptionsInput">formatOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.includeExistingFilesInput">includeExistingFilesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumnsInput">overridePartitionColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.rawTableInput">rawTableInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.serviceCredentialsInput">serviceCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.awsSecretScope">awsSecretScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatOptions">formatOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.includeExistingFiles">includeExistingFiles</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumns">overridePartitionColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.queueUrl">queueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.serviceCredentials">serviceCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader">DataDatabricksLakewatchDatasourceAutoloader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveIncludeExistingFiles`<sup>Required</sup> <a name="effectiveIncludeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.effectiveIncludeExistingFiles"></a>

```typescript
public readonly effectiveIncludeExistingFiles: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `effectiveRawTable`<sup>Required</sup> <a name="effectiveRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.effectiveRawTable"></a>

```typescript
public readonly effectiveRawTable: DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference</a>

---

##### `envelope`<sup>Required</sup> <a name="envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.envelope"></a>

```typescript
public readonly envelope: DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference</a>

---

##### `rawTable`<sup>Required</sup> <a name="rawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.rawTable"></a>

```typescript
public readonly rawTable: DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference">DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference</a>

---

##### `awsSecretScopeInput`<sup>Optional</sup> <a name="awsSecretScopeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.awsSecretScopeInput"></a>

```typescript
public readonly awsSecretScopeInput: string;
```

- *Type:* string

---

##### `envelopeInput`<sup>Optional</sup> <a name="envelopeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.envelopeInput"></a>

```typescript
public readonly envelopeInput: IResolvable | DataDatabricksLakewatchDatasourceAutoloaderEnvelope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `formatOptionsInput`<sup>Optional</sup> <a name="formatOptionsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatOptionsInput"></a>

```typescript
public readonly formatOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `includeExistingFilesInput`<sup>Optional</sup> <a name="includeExistingFilesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.includeExistingFilesInput"></a>

```typescript
public readonly includeExistingFilesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `overridePartitionColumnsInput`<sup>Optional</sup> <a name="overridePartitionColumnsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumnsInput"></a>

```typescript
public readonly overridePartitionColumnsInput: string[];
```

- *Type:* string[]

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.queueUrlInput"></a>

```typescript
public readonly queueUrlInput: string;
```

- *Type:* string

---

##### `rawTableInput`<sup>Optional</sup> <a name="rawTableInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.rawTableInput"></a>

```typescript
public readonly rawTableInput: DataDatabricksLakewatchDatasourceAutoloaderRawTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a>

---

##### `serviceCredentialsInput`<sup>Optional</sup> <a name="serviceCredentialsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.serviceCredentialsInput"></a>

```typescript
public readonly serviceCredentialsInput: string;
```

- *Type:* string

---

##### `awsSecretScope`<sup>Required</sup> <a name="awsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.awsSecretScope"></a>

```typescript
public readonly awsSecretScope: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatOptions"></a>

```typescript
public readonly formatOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `includeExistingFiles`<sup>Required</sup> <a name="includeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.includeExistingFiles"></a>

```typescript
public readonly includeExistingFiles: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `overridePartitionColumns`<sup>Required</sup> <a name="overridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumns"></a>

```typescript
public readonly overridePartitionColumns: string[];
```

- *Type:* string[]

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

---

##### `serviceCredentials`<sup>Required</sup> <a name="serviceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.serviceCredentials"></a>

```typescript
public readonly serviceCredentials: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourceAutoloader;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader">DataDatabricksLakewatchDatasourceAutoloader</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourceAutoloaderRawTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a>

---


### DataDatabricksLakewatchDatasourceCreatedByOutputReference <a name="DataDatabricksLakewatchDatasourceCreatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetPrincipalType"></a>

```typescript
public resetPrincipalType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy">DataDatabricksLakewatchDatasourceCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourceCreatedBy;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy">DataDatabricksLakewatchDatasourceCreatedBy</a>

---


### DataDatabricksLakewatchDatasourceExistingTableOutputReference <a name="DataDatabricksLakewatchDatasourceExistingTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetIncludeExistingRows">resetIncludeExistingRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetIncludeExistingRows` <a name="resetIncludeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetIncludeExistingRows"></a>

```typescript
public resetIncludeExistingRows(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveCatalog">effectiveCatalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveName">effectiveName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveSchema">effectiveSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.includeExistingRowsInput">includeExistingRowsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.includeExistingRows">includeExistingRows</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable">DataDatabricksLakewatchDatasourceExistingTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveCatalog`<sup>Required</sup> <a name="effectiveCatalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveCatalog"></a>

```typescript
public readonly effectiveCatalog: string;
```

- *Type:* string

---

##### `effectiveName`<sup>Required</sup> <a name="effectiveName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveName"></a>

```typescript
public readonly effectiveName: string;
```

- *Type:* string

---

##### `effectiveSchema`<sup>Required</sup> <a name="effectiveSchema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveSchema"></a>

```typescript
public readonly effectiveSchema: string;
```

- *Type:* string

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `includeExistingRowsInput`<sup>Optional</sup> <a name="includeExistingRowsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.includeExistingRowsInput"></a>

```typescript
public readonly includeExistingRowsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `includeExistingRows`<sup>Required</sup> <a name="includeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.includeExistingRows"></a>

```typescript
public readonly includeExistingRows: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourceExistingTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable">DataDatabricksLakewatchDatasourceExistingTable</a>

---


### DataDatabricksLakewatchDatasourceOwnerOutputReference <a name="DataDatabricksLakewatchDatasourceOwnerOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetPrincipalType"></a>

```typescript
public resetPrincipalType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner">DataDatabricksLakewatchDatasourceOwner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourceOwner;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner">DataDatabricksLakewatchDatasourceOwner</a>

---


### DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference <a name="DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable">DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable">DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable</a>

---


### DataDatabricksLakewatchDatasourceParsersList <a name="DataDatabricksLakewatchDatasourceParsersList" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.get"></a>

```typescript
public get(index: number): DataDatabricksLakewatchDatasourceParsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers">DataDatabricksLakewatchDatasourceParsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchDatasourceParsers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers">DataDatabricksLakewatchDatasourceParsers</a>[]

---


### DataDatabricksLakewatchDatasourceParsersOutputReference <a name="DataDatabricksLakewatchDatasourceParsersOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.putTargetTable">putTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resetTargetTable">resetTargetTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetTable` <a name="putTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.putTargetTable"></a>

```typescript
public putTargetTable(value: DataDatabricksLakewatchDatasourceParsersTargetTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a>

---

##### `resetTargetTable` <a name="resetTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resetTargetTable"></a>

```typescript
public resetTargetTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.effectiveTargetTable">effectiveTargetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference">DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference">DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.targetTableInput">targetTableInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers">DataDatabricksLakewatchDatasourceParsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveTargetTable`<sup>Required</sup> <a name="effectiveTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.effectiveTargetTable"></a>

```typescript
public readonly effectiveTargetTable: DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference">DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference</a>

---

##### `targetTable`<sup>Required</sup> <a name="targetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.targetTable"></a>

```typescript
public readonly targetTable: DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference">DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `targetTableInput`<sup>Optional</sup> <a name="targetTableInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.targetTableInput"></a>

```typescript
public readonly targetTableInput: IResolvable | DataDatabricksLakewatchDatasourceParsersTargetTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourceParsers;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers">DataDatabricksLakewatchDatasourceParsers</a>

---


### DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference <a name="DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchDatasourceParsersTargetTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a>

---


### DataDatabricksLakewatchDatasourceProviderConfigOutputReference <a name="DataDatabricksLakewatchDatasourceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchDatasourceProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a>

---


### DataDatabricksLakewatchDatasourceScheduleOutputReference <a name="DataDatabricksLakewatchDatasourceScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetAtLeastEvery">resetAtLeastEvery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetComputeGroup">resetComputeGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetCronExpression">resetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAtLeastEvery` <a name="resetAtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetAtLeastEvery"></a>

```typescript
public resetAtLeastEvery(): void
```

##### `resetComputeGroup` <a name="resetComputeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetComputeGroup"></a>

```typescript
public resetComputeGroup(): void
```

##### `resetContinuous` <a name="resetContinuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetContinuous"></a>

```typescript
public resetContinuous(): void
```

##### `resetCronExpression` <a name="resetCronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetCronExpression"></a>

```typescript
public resetCronExpression(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.atLeastEveryInput">atLeastEveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.computeGroupInput">computeGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.continuousInput">continuousInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.atLeastEvery">atLeastEvery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.computeGroup">computeGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.continuous">continuous</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule">DataDatabricksLakewatchDatasourceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `atLeastEveryInput`<sup>Optional</sup> <a name="atLeastEveryInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.atLeastEveryInput"></a>

```typescript
public readonly atLeastEveryInput: string;
```

- *Type:* string

---

##### `computeGroupInput`<sup>Optional</sup> <a name="computeGroupInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.computeGroupInput"></a>

```typescript
public readonly computeGroupInput: string;
```

- *Type:* string

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.continuousInput"></a>

```typescript
public readonly continuousInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.cronExpressionInput"></a>

```typescript
public readonly cronExpressionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `atLeastEvery`<sup>Required</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.atLeastEvery"></a>

```typescript
public readonly atLeastEvery: string;
```

- *Type:* string

---

##### `computeGroup`<sup>Required</sup> <a name="computeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.computeGroup"></a>

```typescript
public readonly computeGroup: string;
```

- *Type:* string

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.continuous"></a>

```typescript
public readonly continuous: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourceSchedule;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule">DataDatabricksLakewatchDatasourceSchedule</a>

---


### DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference <a name="DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastCompleteTime">lastCompleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastErrorMessage">lastErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastStartTime">lastStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastStatusChangeTime">lastStatusChangeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.runState">runState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob">DataDatabricksLakewatchDatasourceStatusIngestionJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `lastCompleteTime`<sup>Required</sup> <a name="lastCompleteTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastCompleteTime"></a>

```typescript
public readonly lastCompleteTime: string;
```

- *Type:* string

---

##### `lastErrorMessage`<sup>Required</sup> <a name="lastErrorMessage" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastErrorMessage"></a>

```typescript
public readonly lastErrorMessage: string;
```

- *Type:* string

---

##### `lastStartTime`<sup>Required</sup> <a name="lastStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastStartTime"></a>

```typescript
public readonly lastStartTime: string;
```

- *Type:* string

---

##### `lastStatusChangeTime`<sup>Required</sup> <a name="lastStatusChangeTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastStatusChangeTime"></a>

```typescript
public readonly lastStatusChangeTime: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `runState`<sup>Required</sup> <a name="runState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.runState"></a>

```typescript
public readonly runState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourceStatusIngestionJob;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob">DataDatabricksLakewatchDatasourceStatusIngestionJob</a>

---


### DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference <a name="DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastCompleteTime">lastCompleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastErrorMessage">lastErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStartTime">lastStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStatusChangeTime">lastStatusChangeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.runState">runState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline">DataDatabricksLakewatchDatasourceStatusIngestionPipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `lastCompleteTime`<sup>Required</sup> <a name="lastCompleteTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastCompleteTime"></a>

```typescript
public readonly lastCompleteTime: string;
```

- *Type:* string

---

##### `lastErrorMessage`<sup>Required</sup> <a name="lastErrorMessage" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastErrorMessage"></a>

```typescript
public readonly lastErrorMessage: string;
```

- *Type:* string

---

##### `lastStartTime`<sup>Required</sup> <a name="lastStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStartTime"></a>

```typescript
public readonly lastStartTime: string;
```

- *Type:* string

---

##### `lastStatusChangeTime`<sup>Required</sup> <a name="lastStatusChangeTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStatusChangeTime"></a>

```typescript
public readonly lastStatusChangeTime: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `runState`<sup>Required</sup> <a name="runState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.runState"></a>

```typescript
public readonly runState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourceStatusIngestionPipeline;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline">DataDatabricksLakewatchDatasourceStatusIngestionPipeline</a>

---


### DataDatabricksLakewatchDatasourceStatusOutputReference <a name="DataDatabricksLakewatchDatasourceStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.ingestionJob">ingestionJob</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference">DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.ingestionPipeline">ingestionPipeline</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference">DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus">DataDatabricksLakewatchDatasourceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingestionJob`<sup>Required</sup> <a name="ingestionJob" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.ingestionJob"></a>

```typescript
public readonly ingestionJob: DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference">DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference</a>

---

##### `ingestionPipeline`<sup>Required</sup> <a name="ingestionPipeline" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.ingestionPipeline"></a>

```typescript
public readonly ingestionPipeline: DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference">DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourceStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus">DataDatabricksLakewatchDatasourceStatus</a>

---


### DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference <a name="DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connector">connector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.effectiveStartTime">effectiveStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.configurationInput">configurationInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.configuration">configuration</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection">DataDatabricksLakewatchDatasourceUnityCatalogConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connector"></a>

```typescript
public readonly connector: string;
```

- *Type:* string

---

##### `effectiveStartTime`<sup>Required</sup> <a name="effectiveStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.effectiveStartTime"></a>

```typescript
public readonly effectiveStartTime: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.configurationInput"></a>

```typescript
public readonly configurationInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.configuration"></a>

```typescript
public readonly configuration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourceUnityCatalogConnection;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection">DataDatabricksLakewatchDatasourceUnityCatalogConnection</a>

---


### DataDatabricksLakewatchDatasourceUpdatedByOutputReference <a name="DataDatabricksLakewatchDatasourceUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchDatasource } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetPrincipalType"></a>

```typescript
public resetPrincipalType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy">DataDatabricksLakewatchDatasourceUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchDatasourceUpdatedBy;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy">DataDatabricksLakewatchDatasourceUpdatedBy</a>

---



