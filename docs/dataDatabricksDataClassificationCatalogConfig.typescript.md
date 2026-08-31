# `dataDatabricksDataClassificationCatalogConfig` Submodule <a name="`dataDatabricksDataClassificationCatalogConfig` Submodule" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDataClassificationCatalogConfig <a name="DataDatabricksDataClassificationCatalogConfig" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config databricks_data_classification_catalog_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer"></a>

```typescript
import { dataDatabricksDataClassificationCatalogConfig } from '@cdktn/provider-databricks'

new dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig(scope: Construct, id: string, config: DataDatabricksDataClassificationCatalogConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig">DataDatabricksDataClassificationCatalogConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig">DataDatabricksDataClassificationCatalogConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksDataClassificationCatalogConfigProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksDataClassificationCatalogConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isConstruct"></a>

```typescript
import { dataDatabricksDataClassificationCatalogConfig } from '@cdktn/provider-databricks'

dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformElement"></a>

```typescript
import { dataDatabricksDataClassificationCatalogConfig } from '@cdktn/provider-databricks'

dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformDataSource"></a>

```typescript
import { dataDatabricksDataClassificationCatalogConfig } from '@cdktn/provider-databricks'

dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport"></a>

```typescript
import { dataDatabricksDataClassificationCatalogConfig } from '@cdktn/provider-databricks'

dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksDataClassificationCatalogConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDataClassificationCatalogConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDataClassificationCatalogConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDataClassificationCatalogConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.autoTagConfigs">autoTagConfigs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList">DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.excludedSchemas">excludedSchemas</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference">DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.includedSchemas">includedSchemas</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference">DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference">DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `autoTagConfigs`<sup>Required</sup> <a name="autoTagConfigs" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.autoTagConfigs"></a>

```typescript
public readonly autoTagConfigs: DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList">DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList</a>

---

##### `excludedSchemas`<sup>Required</sup> <a name="excludedSchemas" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.excludedSchemas"></a>

```typescript
public readonly excludedSchemas: DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference">DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference</a>

---

##### `includedSchemas`<sup>Required</sup> <a name="includedSchemas" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.includedSchemas"></a>

```typescript
public readonly includedSchemas: DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference">DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference">DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksDataClassificationCatalogConfigProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDataClassificationCatalogConfigAutoTagConfigs <a name="DataDatabricksDataClassificationCatalogConfigAutoTagConfigs" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs.Initializer"></a>

```typescript
import { dataDatabricksDataClassificationCatalogConfig } from '@cdktn/provider-databricks'

const dataDatabricksDataClassificationCatalogConfigAutoTagConfigs: dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs.property.autoTaggingMode">autoTaggingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#auto_tagging_mode DataDatabricksDataClassificationCatalogConfig#auto_tagging_mode}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs.property.classificationTag">classificationTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#classification_tag DataDatabricksDataClassificationCatalogConfig#classification_tag}. |

---

##### `autoTaggingMode`<sup>Required</sup> <a name="autoTaggingMode" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs.property.autoTaggingMode"></a>

```typescript
public readonly autoTaggingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#auto_tagging_mode DataDatabricksDataClassificationCatalogConfig#auto_tagging_mode}.

---

##### `classificationTag`<sup>Required</sup> <a name="classificationTag" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs.property.classificationTag"></a>

```typescript
public readonly classificationTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#classification_tag DataDatabricksDataClassificationCatalogConfig#classification_tag}.

---

### DataDatabricksDataClassificationCatalogConfigConfig <a name="DataDatabricksDataClassificationCatalogConfigConfig" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.Initializer"></a>

```typescript
import { dataDatabricksDataClassificationCatalogConfig } from '@cdktn/provider-databricks'

const dataDatabricksDataClassificationCatalogConfigConfig: dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#name DataDatabricksDataClassificationCatalogConfig#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#provider_config DataDatabricksDataClassificationCatalogConfig#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#name DataDatabricksDataClassificationCatalogConfig#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksDataClassificationCatalogConfigProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#provider_config DataDatabricksDataClassificationCatalogConfig#provider_config}.

---

### DataDatabricksDataClassificationCatalogConfigExcludedSchemas <a name="DataDatabricksDataClassificationCatalogConfigExcludedSchemas" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas.Initializer"></a>

```typescript
import { dataDatabricksDataClassificationCatalogConfig } from '@cdktn/provider-databricks'

const dataDatabricksDataClassificationCatalogConfigExcludedSchemas: dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas.property.names">names</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#names DataDatabricksDataClassificationCatalogConfig#names}. |

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#names DataDatabricksDataClassificationCatalogConfig#names}.

---

### DataDatabricksDataClassificationCatalogConfigIncludedSchemas <a name="DataDatabricksDataClassificationCatalogConfigIncludedSchemas" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas.Initializer"></a>

```typescript
import { dataDatabricksDataClassificationCatalogConfig } from '@cdktn/provider-databricks'

const dataDatabricksDataClassificationCatalogConfigIncludedSchemas: dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas.property.names">names</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#names DataDatabricksDataClassificationCatalogConfig#names}. |

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#names DataDatabricksDataClassificationCatalogConfig#names}.

---

### DataDatabricksDataClassificationCatalogConfigProviderConfig <a name="DataDatabricksDataClassificationCatalogConfigProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksDataClassificationCatalogConfig } from '@cdktn/provider-databricks'

const dataDatabricksDataClassificationCatalogConfigProviderConfig: dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#workspace_id DataDatabricksDataClassificationCatalogConfig#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#workspace_id DataDatabricksDataClassificationCatalogConfig#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList <a name="DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer"></a>

```typescript
import { dataDatabricksDataClassificationCatalogConfig } from '@cdktn/provider-databricks'

new dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.get"></a>

```typescript
public get(index: number): DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs">DataDatabricksDataClassificationCatalogConfigAutoTagConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDataClassificationCatalogConfigAutoTagConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs">DataDatabricksDataClassificationCatalogConfigAutoTagConfigs</a>[]

---


### DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference <a name="DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDataClassificationCatalogConfig } from '@cdktn/provider-databricks'

new dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingModeInput">autoTaggingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTagInput">classificationTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingMode">autoTaggingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTag">classificationTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs">DataDatabricksDataClassificationCatalogConfigAutoTagConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoTaggingModeInput`<sup>Optional</sup> <a name="autoTaggingModeInput" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingModeInput"></a>

```typescript
public readonly autoTaggingModeInput: string;
```

- *Type:* string

---

##### `classificationTagInput`<sup>Optional</sup> <a name="classificationTagInput" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTagInput"></a>

```typescript
public readonly classificationTagInput: string;
```

- *Type:* string

---

##### `autoTaggingMode`<sup>Required</sup> <a name="autoTaggingMode" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingMode"></a>

```typescript
public readonly autoTaggingMode: string;
```

- *Type:* string

---

##### `classificationTag`<sup>Required</sup> <a name="classificationTag" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTag"></a>

```typescript
public readonly classificationTag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDataClassificationCatalogConfigAutoTagConfigs;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs">DataDatabricksDataClassificationCatalogConfigAutoTagConfigs</a>

---


### DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference <a name="DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDataClassificationCatalogConfig } from '@cdktn/provider-databricks'

new dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.namesInput">namesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.names">names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas">DataDatabricksDataClassificationCatalogConfigExcludedSchemas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namesInput`<sup>Optional</sup> <a name="namesInput" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.namesInput"></a>

```typescript
public readonly namesInput: string[];
```

- *Type:* string[]

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDataClassificationCatalogConfigExcludedSchemas;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas">DataDatabricksDataClassificationCatalogConfigExcludedSchemas</a>

---


### DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference <a name="DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDataClassificationCatalogConfig } from '@cdktn/provider-databricks'

new dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.namesInput">namesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.names">names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas">DataDatabricksDataClassificationCatalogConfigIncludedSchemas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namesInput`<sup>Optional</sup> <a name="namesInput" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.namesInput"></a>

```typescript
public readonly namesInput: string[];
```

- *Type:* string[]

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDataClassificationCatalogConfigIncludedSchemas;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas">DataDatabricksDataClassificationCatalogConfigIncludedSchemas</a>

---


### DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference <a name="DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDataClassificationCatalogConfig } from '@cdktn/provider-databricks'

new dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDataClassificationCatalogConfigProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a>

---



