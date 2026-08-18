# `dataDatabricksAiSearchIndexes` Submodule <a name="`dataDatabricksAiSearchIndexes` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiSearchIndexes <a name="DataDatabricksAiSearchIndexes" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes databricks_ai_search_indexes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes(scope: Construct, id: string, config: DataDatabricksAiSearchIndexesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig">DataDatabricksAiSearchIndexesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig">DataDatabricksAiSearchIndexesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAiSearchIndexesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig">DataDatabricksAiSearchIndexesProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAiSearchIndexes resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isConstruct"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isTerraformElement"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.generateConfigForImport"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksAiSearchIndexes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAiSearchIndexes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAiSearchIndexes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiSearchIndexes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.indexes">indexes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList">DataDatabricksAiSearchIndexesIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference">DataDatabricksAiSearchIndexesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig">DataDatabricksAiSearchIndexesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `indexes`<sup>Required</sup> <a name="indexes" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.indexes"></a>

```typescript
public readonly indexes: DataDatabricksAiSearchIndexesIndexesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList">DataDatabricksAiSearchIndexesIndexesList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiSearchIndexesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference">DataDatabricksAiSearchIndexesProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAiSearchIndexesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig">DataDatabricksAiSearchIndexesProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiSearchIndexesConfig <a name="DataDatabricksAiSearchIndexesConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexesConfig: dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#parent DataDatabricksAiSearchIndexes#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#page_size DataDatabricksAiSearchIndexes#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig">DataDatabricksAiSearchIndexesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#provider_config DataDatabricksAiSearchIndexes#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#parent DataDatabricksAiSearchIndexes#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#page_size DataDatabricksAiSearchIndexes#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiSearchIndexesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig">DataDatabricksAiSearchIndexesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#provider_config DataDatabricksAiSearchIndexes#provider_config}.

---

### DataDatabricksAiSearchIndexesIndexes <a name="DataDatabricksAiSearchIndexesIndexes" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexesIndexes: dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig">DataDatabricksAiSearchIndexesIndexesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#provider_config DataDatabricksAiSearchIndexes#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiSearchIndexesIndexesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig">DataDatabricksAiSearchIndexesIndexesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#provider_config DataDatabricksAiSearchIndexes#provider_config}.

---

### DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec <a name="DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec: dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.pipelineType">pipelineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#pipeline_type DataDatabricksAiSearchIndexes#pipeline_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.columnsToSync">columnsToSync</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#columns_to_sync DataDatabricksAiSearchIndexes#columns_to_sync}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_source_columns DataDatabricksAiSearchIndexes#embedding_source_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_vector_columns DataDatabricksAiSearchIndexes#embedding_vector_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.embeddingWritebackTable">embeddingWritebackTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_writeback_table DataDatabricksAiSearchIndexes#embedding_writeback_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.sourceTable">sourceTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#source_table DataDatabricksAiSearchIndexes#source_table}. |

---

##### `pipelineType`<sup>Required</sup> <a name="pipelineType" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.pipelineType"></a>

```typescript
public readonly pipelineType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#pipeline_type DataDatabricksAiSearchIndexes#pipeline_type}.

---

##### `columnsToSync`<sup>Optional</sup> <a name="columnsToSync" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.columnsToSync"></a>

```typescript
public readonly columnsToSync: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#columns_to_sync DataDatabricksAiSearchIndexes#columns_to_sync}.

---

##### `embeddingSourceColumns`<sup>Optional</sup> <a name="embeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.embeddingSourceColumns"></a>

```typescript
public readonly embeddingSourceColumns: IResolvable | DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_source_columns DataDatabricksAiSearchIndexes#embedding_source_columns}.

---

##### `embeddingVectorColumns`<sup>Optional</sup> <a name="embeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.embeddingVectorColumns"></a>

```typescript
public readonly embeddingVectorColumns: IResolvable | DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_vector_columns DataDatabricksAiSearchIndexes#embedding_vector_columns}.

---

##### `embeddingWritebackTable`<sup>Optional</sup> <a name="embeddingWritebackTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.embeddingWritebackTable"></a>

```typescript
public readonly embeddingWritebackTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_writeback_table DataDatabricksAiSearchIndexes#embedding_writeback_table}.

---

##### `sourceTable`<sup>Optional</sup> <a name="sourceTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.sourceTable"></a>

```typescript
public readonly sourceTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#source_table DataDatabricksAiSearchIndexes#source_table}.

---

### DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns <a name="DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns: dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint">embeddingModelEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_model_endpoint DataDatabricksAiSearchIndexes#embedding_model_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery">modelEndpointNameForQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#model_endpoint_name_for_query DataDatabricksAiSearchIndexes#model_endpoint_name_for_query}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}. |

---

##### `embeddingModelEndpoint`<sup>Optional</sup> <a name="embeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint"></a>

```typescript
public readonly embeddingModelEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_model_endpoint DataDatabricksAiSearchIndexes#embedding_model_endpoint}.

---

##### `modelEndpointNameForQuery`<sup>Optional</sup> <a name="modelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery"></a>

```typescript
public readonly modelEndpointNameForQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#model_endpoint_name_for_query DataDatabricksAiSearchIndexes#model_endpoint_name_for_query}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}.

---

### DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns <a name="DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns: dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_dimension DataDatabricksAiSearchIndexes#embedding_dimension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}. |

---

##### `embeddingDimension`<sup>Optional</sup> <a name="embeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_dimension DataDatabricksAiSearchIndexes#embedding_dimension}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}.

---

### DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec <a name="DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec: dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_source_columns DataDatabricksAiSearchIndexes#embedding_source_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_vector_columns DataDatabricksAiSearchIndexes#embedding_vector_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec.property.schemaJson">schemaJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#schema_json DataDatabricksAiSearchIndexes#schema_json}. |

---

##### `embeddingSourceColumns`<sup>Optional</sup> <a name="embeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec.property.embeddingSourceColumns"></a>

```typescript
public readonly embeddingSourceColumns: IResolvable | DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_source_columns DataDatabricksAiSearchIndexes#embedding_source_columns}.

---

##### `embeddingVectorColumns`<sup>Optional</sup> <a name="embeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec.property.embeddingVectorColumns"></a>

```typescript
public readonly embeddingVectorColumns: IResolvable | DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_vector_columns DataDatabricksAiSearchIndexes#embedding_vector_columns}.

---

##### `schemaJson`<sup>Optional</sup> <a name="schemaJson" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec.property.schemaJson"></a>

```typescript
public readonly schemaJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#schema_json DataDatabricksAiSearchIndexes#schema_json}.

---

### DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns <a name="DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns: dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint">embeddingModelEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_model_endpoint DataDatabricksAiSearchIndexes#embedding_model_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery">modelEndpointNameForQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#model_endpoint_name_for_query DataDatabricksAiSearchIndexes#model_endpoint_name_for_query}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}. |

---

##### `embeddingModelEndpoint`<sup>Optional</sup> <a name="embeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint"></a>

```typescript
public readonly embeddingModelEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_model_endpoint DataDatabricksAiSearchIndexes#embedding_model_endpoint}.

---

##### `modelEndpointNameForQuery`<sup>Optional</sup> <a name="modelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery"></a>

```typescript
public readonly modelEndpointNameForQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#model_endpoint_name_for_query DataDatabricksAiSearchIndexes#model_endpoint_name_for_query}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}.

---

### DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns <a name="DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns: dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_dimension DataDatabricksAiSearchIndexes#embedding_dimension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}. |

---

##### `embeddingDimension`<sup>Optional</sup> <a name="embeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#embedding_dimension DataDatabricksAiSearchIndexes#embedding_dimension}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}.

---

### DataDatabricksAiSearchIndexesIndexesProviderConfig <a name="DataDatabricksAiSearchIndexesIndexesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexesIndexesProviderConfig: dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#workspace_id DataDatabricksAiSearchIndexes#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#workspace_id DataDatabricksAiSearchIndexes#workspace_id}.

---

### DataDatabricksAiSearchIndexesIndexesStatus <a name="DataDatabricksAiSearchIndexesIndexesStatus" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatus.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexesIndexesStatus: dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatus = { ... }
```


### DataDatabricksAiSearchIndexesProviderConfig <a name="DataDatabricksAiSearchIndexesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexesProviderConfig: dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#workspace_id DataDatabricksAiSearchIndexes#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_indexes#workspace_id DataDatabricksAiSearchIndexes#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList <a name="DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.get"></a>

```typescript
public get(index: number): DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---


### DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference <a name="DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint">resetEmbeddingModelEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery">resetModelEndpointNameForQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingModelEndpoint` <a name="resetEmbeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint"></a>

```typescript
public resetEmbeddingModelEndpoint(): void
```

##### `resetModelEndpointNameForQuery` <a name="resetModelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery"></a>

```typescript
public resetModelEndpointNameForQuery(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput">embeddingModelEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput">modelEndpointNameForQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint">embeddingModelEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery">modelEndpointNameForQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingModelEndpointInput`<sup>Optional</sup> <a name="embeddingModelEndpointInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput"></a>

```typescript
public readonly embeddingModelEndpointInput: string;
```

- *Type:* string

---

##### `modelEndpointNameForQueryInput`<sup>Optional</sup> <a name="modelEndpointNameForQueryInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput"></a>

```typescript
public readonly modelEndpointNameForQueryInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `embeddingModelEndpoint`<sup>Required</sup> <a name="embeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint"></a>

```typescript
public readonly embeddingModelEndpoint: string;
```

- *Type:* string

---

##### `modelEndpointNameForQuery`<sup>Required</sup> <a name="modelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery"></a>

```typescript
public readonly modelEndpointNameForQuery: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a>

---


### DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList <a name="DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.get"></a>

```typescript
public get(index: number): DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---


### DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference <a name="DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">resetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingDimension` <a name="resetEmbeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```typescript
public resetEmbeddingDimension(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">embeddingDimensionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingDimensionInput`<sup>Optional</sup> <a name="embeddingDimensionInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```typescript
public readonly embeddingDimensionInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `embeddingDimension`<sup>Required</sup> <a name="embeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a>

---


### DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference <a name="DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns">putEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns">putEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetColumnsToSync">resetColumnsToSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns">resetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns">resetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable">resetEmbeddingWritebackTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetSourceTable">resetSourceTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmbeddingSourceColumns` <a name="putEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```typescript
public putEmbeddingSourceColumns(value: IResolvable | DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---

##### `putEmbeddingVectorColumns` <a name="putEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```typescript
public putEmbeddingVectorColumns(value: IResolvable | DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---

##### `resetColumnsToSync` <a name="resetColumnsToSync" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetColumnsToSync"></a>

```typescript
public resetColumnsToSync(): void
```

##### `resetEmbeddingSourceColumns` <a name="resetEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```typescript
public resetEmbeddingSourceColumns(): void
```

##### `resetEmbeddingVectorColumns` <a name="resetEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```typescript
public resetEmbeddingVectorColumns(): void
```

##### `resetEmbeddingWritebackTable` <a name="resetEmbeddingWritebackTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable"></a>

```typescript
public resetEmbeddingWritebackTable(): void
```

##### `resetSourceTable` <a name="resetSourceTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetSourceTable"></a>

```typescript
public resetSourceTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.columnsToSyncInput">columnsToSyncInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput">embeddingSourceColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput">embeddingVectorColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput">embeddingWritebackTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput">pipelineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.sourceTableInput">sourceTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.columnsToSync">columnsToSync</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable">embeddingWritebackTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.pipelineType">pipelineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.sourceTable">sourceTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingSourceColumns`<sup>Required</sup> <a name="embeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```typescript
public readonly embeddingSourceColumns: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList</a>

---

##### `embeddingVectorColumns`<sup>Required</sup> <a name="embeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```typescript
public readonly embeddingVectorColumns: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList</a>

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `columnsToSyncInput`<sup>Optional</sup> <a name="columnsToSyncInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.columnsToSyncInput"></a>

```typescript
public readonly columnsToSyncInput: string[];
```

- *Type:* string[]

---

##### `embeddingSourceColumnsInput`<sup>Optional</sup> <a name="embeddingSourceColumnsInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```typescript
public readonly embeddingSourceColumnsInput: IResolvable | DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---

##### `embeddingVectorColumnsInput`<sup>Optional</sup> <a name="embeddingVectorColumnsInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```typescript
public readonly embeddingVectorColumnsInput: IResolvable | DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---

##### `embeddingWritebackTableInput`<sup>Optional</sup> <a name="embeddingWritebackTableInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput"></a>

```typescript
public readonly embeddingWritebackTableInput: string;
```

- *Type:* string

---

##### `pipelineTypeInput`<sup>Optional</sup> <a name="pipelineTypeInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput"></a>

```typescript
public readonly pipelineTypeInput: string;
```

- *Type:* string

---

##### `sourceTableInput`<sup>Optional</sup> <a name="sourceTableInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.sourceTableInput"></a>

```typescript
public readonly sourceTableInput: string;
```

- *Type:* string

---

##### `columnsToSync`<sup>Required</sup> <a name="columnsToSync" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.columnsToSync"></a>

```typescript
public readonly columnsToSync: string[];
```

- *Type:* string[]

---

##### `embeddingWritebackTable`<sup>Required</sup> <a name="embeddingWritebackTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable"></a>

```typescript
public readonly embeddingWritebackTable: string;
```

- *Type:* string

---

##### `pipelineType`<sup>Required</sup> <a name="pipelineType" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.pipelineType"></a>

```typescript
public readonly pipelineType: string;
```

- *Type:* string

---

##### `sourceTable`<sup>Required</sup> <a name="sourceTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.sourceTable"></a>

```typescript
public readonly sourceTable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec</a>

---


### DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList <a name="DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.get"></a>

```typescript
public get(index: number): DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---


### DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference <a name="DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint">resetEmbeddingModelEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery">resetModelEndpointNameForQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingModelEndpoint` <a name="resetEmbeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint"></a>

```typescript
public resetEmbeddingModelEndpoint(): void
```

##### `resetModelEndpointNameForQuery` <a name="resetModelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery"></a>

```typescript
public resetModelEndpointNameForQuery(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput">embeddingModelEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput">modelEndpointNameForQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint">embeddingModelEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery">modelEndpointNameForQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingModelEndpointInput`<sup>Optional</sup> <a name="embeddingModelEndpointInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput"></a>

```typescript
public readonly embeddingModelEndpointInput: string;
```

- *Type:* string

---

##### `modelEndpointNameForQueryInput`<sup>Optional</sup> <a name="modelEndpointNameForQueryInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput"></a>

```typescript
public readonly modelEndpointNameForQueryInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `embeddingModelEndpoint`<sup>Required</sup> <a name="embeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint"></a>

```typescript
public readonly embeddingModelEndpoint: string;
```

- *Type:* string

---

##### `modelEndpointNameForQuery`<sup>Required</sup> <a name="modelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery"></a>

```typescript
public readonly modelEndpointNameForQuery: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a>

---


### DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList <a name="DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.get"></a>

```typescript
public get(index: number): DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---


### DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference <a name="DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">resetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingDimension` <a name="resetEmbeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```typescript
public resetEmbeddingDimension(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">embeddingDimensionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingDimensionInput`<sup>Optional</sup> <a name="embeddingDimensionInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```typescript
public readonly embeddingDimensionInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `embeddingDimension`<sup>Required</sup> <a name="embeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a>

---


### DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference <a name="DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns">putEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns">putEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns">resetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns">resetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resetSchemaJson">resetSchemaJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmbeddingSourceColumns` <a name="putEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```typescript
public putEmbeddingSourceColumns(value: IResolvable | DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---

##### `putEmbeddingVectorColumns` <a name="putEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```typescript
public putEmbeddingVectorColumns(value: IResolvable | DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---

##### `resetEmbeddingSourceColumns` <a name="resetEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```typescript
public resetEmbeddingSourceColumns(): void
```

##### `resetEmbeddingVectorColumns` <a name="resetEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```typescript
public resetEmbeddingVectorColumns(): void
```

##### `resetSchemaJson` <a name="resetSchemaJson" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resetSchemaJson"></a>

```typescript
public resetSchemaJson(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput">embeddingSourceColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput">embeddingVectorColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.schemaJsonInput">schemaJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.schemaJson">schemaJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingSourceColumns`<sup>Required</sup> <a name="embeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```typescript
public readonly embeddingSourceColumns: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList</a>

---

##### `embeddingVectorColumns`<sup>Required</sup> <a name="embeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```typescript
public readonly embeddingVectorColumns: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList</a>

---

##### `embeddingSourceColumnsInput`<sup>Optional</sup> <a name="embeddingSourceColumnsInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```typescript
public readonly embeddingSourceColumnsInput: IResolvable | DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---

##### `embeddingVectorColumnsInput`<sup>Optional</sup> <a name="embeddingVectorColumnsInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```typescript
public readonly embeddingVectorColumnsInput: IResolvable | DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---

##### `schemaJsonInput`<sup>Optional</sup> <a name="schemaJsonInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.schemaJsonInput"></a>

```typescript
public readonly schemaJsonInput: string;
```

- *Type:* string

---

##### `schemaJson`<sup>Required</sup> <a name="schemaJson" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.schemaJson"></a>

```typescript
public readonly schemaJson: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec</a>

---


### DataDatabricksAiSearchIndexesIndexesList <a name="DataDatabricksAiSearchIndexesIndexesList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.get"></a>

```typescript
public get(index: number): DataDatabricksAiSearchIndexesIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes">DataDatabricksAiSearchIndexesIndexes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexesIndexes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes">DataDatabricksAiSearchIndexesIndexes</a>[]

---


### DataDatabricksAiSearchIndexesIndexesOutputReference <a name="DataDatabricksAiSearchIndexesIndexesOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAiSearchIndexesIndexesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig">DataDatabricksAiSearchIndexesIndexesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.deltaSyncIndexSpec">deltaSyncIndexSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.directAccessIndexSpec">directAccessIndexSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.indexSubtype">indexSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.indexType">indexType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference">DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference">DataDatabricksAiSearchIndexesIndexesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig">DataDatabricksAiSearchIndexesIndexesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes">DataDatabricksAiSearchIndexesIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `deltaSyncIndexSpec`<sup>Required</sup> <a name="deltaSyncIndexSpec" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.deltaSyncIndexSpec"></a>

```typescript
public readonly deltaSyncIndexSpec: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference</a>

---

##### `directAccessIndexSpec`<sup>Required</sup> <a name="directAccessIndexSpec" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.directAccessIndexSpec"></a>

```typescript
public readonly directAccessIndexSpec: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `indexSubtype`<sup>Required</sup> <a name="indexSubtype" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.indexSubtype"></a>

```typescript
public readonly indexSubtype: string;
```

- *Type:* string

---

##### `indexType`<sup>Required</sup> <a name="indexType" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.indexType"></a>

```typescript
public readonly indexType: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference">DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.status"></a>

```typescript
public readonly status: DataDatabricksAiSearchIndexesIndexesStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference">DataDatabricksAiSearchIndexesIndexesStatusOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAiSearchIndexesIndexesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig">DataDatabricksAiSearchIndexesIndexesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiSearchIndexesIndexes;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes">DataDatabricksAiSearchIndexesIndexes</a>

---


### DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference <a name="DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig">DataDatabricksAiSearchIndexesIndexesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexesIndexesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig">DataDatabricksAiSearchIndexesIndexesProviderConfig</a>

---


### DataDatabricksAiSearchIndexesIndexesStatusOutputReference <a name="DataDatabricksAiSearchIndexesIndexesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.indexedRowCount">indexedRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.indexUrl">indexUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.ready">ready</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatus">DataDatabricksAiSearchIndexesIndexesStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexedRowCount`<sup>Required</sup> <a name="indexedRowCount" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.indexedRowCount"></a>

```typescript
public readonly indexedRowCount: number;
```

- *Type:* number

---

##### `indexUrl`<sup>Required</sup> <a name="indexUrl" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.indexUrl"></a>

```typescript
public readonly indexUrl: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.ready"></a>

```typescript
public readonly ready: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiSearchIndexesIndexesStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatus">DataDatabricksAiSearchIndexesIndexesStatus</a>

---


### DataDatabricksAiSearchIndexesProviderConfigOutputReference <a name="DataDatabricksAiSearchIndexesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndexes } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig">DataDatabricksAiSearchIndexesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig">DataDatabricksAiSearchIndexesProviderConfig</a>

---



