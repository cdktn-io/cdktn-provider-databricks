# `dataDatabricksAiSearchIndex` Submodule <a name="`dataDatabricksAiSearchIndex` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiSearchIndex <a name="DataDatabricksAiSearchIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index databricks_ai_search_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex(scope: Construct, id: string, config: DataDatabricksAiSearchIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig">DataDatabricksAiSearchIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig">DataDatabricksAiSearchIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAiSearchIndexProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAiSearchIndex resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isConstruct"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformElement"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksAiSearchIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAiSearchIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAiSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.deltaSyncIndexSpec">deltaSyncIndexSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference">DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.directAccessIndexSpec">directAccessIndexSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference">DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.indexSubtype">indexSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.indexType">indexType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference">DataDatabricksAiSearchIndexProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference">DataDatabricksAiSearchIndexStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `deltaSyncIndexSpec`<sup>Required</sup> <a name="deltaSyncIndexSpec" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.deltaSyncIndexSpec"></a>

```typescript
public readonly deltaSyncIndexSpec: DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference">DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference</a>

---

##### `directAccessIndexSpec`<sup>Required</sup> <a name="directAccessIndexSpec" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.directAccessIndexSpec"></a>

```typescript
public readonly directAccessIndexSpec: DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference">DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `indexSubtype`<sup>Required</sup> <a name="indexSubtype" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.indexSubtype"></a>

```typescript
public readonly indexSubtype: string;
```

- *Type:* string

---

##### `indexType`<sup>Required</sup> <a name="indexType" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.indexType"></a>

```typescript
public readonly indexType: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiSearchIndexProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference">DataDatabricksAiSearchIndexProviderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.status"></a>

```typescript
public readonly status: DataDatabricksAiSearchIndexStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference">DataDatabricksAiSearchIndexStatusOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAiSearchIndexProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiSearchIndexConfig <a name="DataDatabricksAiSearchIndexConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexConfig: dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#provider_config DataDatabricksAiSearchIndex#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiSearchIndexProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#provider_config DataDatabricksAiSearchIndex#provider_config}.

---

### DataDatabricksAiSearchIndexDeltaSyncIndexSpec <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpec" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexDeltaSyncIndexSpec: dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.pipelineType">pipelineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#pipeline_type DataDatabricksAiSearchIndex#pipeline_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.columnsToSync">columnsToSync</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#columns_to_sync DataDatabricksAiSearchIndex#columns_to_sync}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_source_columns DataDatabricksAiSearchIndex#embedding_source_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_vector_columns DataDatabricksAiSearchIndex#embedding_vector_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable">embeddingWritebackTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_writeback_table DataDatabricksAiSearchIndex#embedding_writeback_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.sourceTable">sourceTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#source_table DataDatabricksAiSearchIndex#source_table}. |

---

##### `pipelineType`<sup>Required</sup> <a name="pipelineType" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.pipelineType"></a>

```typescript
public readonly pipelineType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#pipeline_type DataDatabricksAiSearchIndex#pipeline_type}.

---

##### `columnsToSync`<sup>Optional</sup> <a name="columnsToSync" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.columnsToSync"></a>

```typescript
public readonly columnsToSync: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#columns_to_sync DataDatabricksAiSearchIndex#columns_to_sync}.

---

##### `embeddingSourceColumns`<sup>Optional</sup> <a name="embeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns"></a>

```typescript
public readonly embeddingSourceColumns: IResolvable | DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_source_columns DataDatabricksAiSearchIndex#embedding_source_columns}.

---

##### `embeddingVectorColumns`<sup>Optional</sup> <a name="embeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns"></a>

```typescript
public readonly embeddingVectorColumns: IResolvable | DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_vector_columns DataDatabricksAiSearchIndex#embedding_vector_columns}.

---

##### `embeddingWritebackTable`<sup>Optional</sup> <a name="embeddingWritebackTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable"></a>

```typescript
public readonly embeddingWritebackTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_writeback_table DataDatabricksAiSearchIndex#embedding_writeback_table}.

---

##### `sourceTable`<sup>Optional</sup> <a name="sourceTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.sourceTable"></a>

```typescript
public readonly sourceTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#source_table DataDatabricksAiSearchIndex#source_table}.

---

### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns: dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint">embeddingModelEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_model_endpoint DataDatabricksAiSearchIndex#embedding_model_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery">modelEndpointNameForQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#model_endpoint_name_for_query DataDatabricksAiSearchIndex#model_endpoint_name_for_query}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}. |

---

##### `embeddingModelEndpoint`<sup>Optional</sup> <a name="embeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint"></a>

```typescript
public readonly embeddingModelEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_model_endpoint DataDatabricksAiSearchIndex#embedding_model_endpoint}.

---

##### `modelEndpointNameForQuery`<sup>Optional</sup> <a name="modelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery"></a>

```typescript
public readonly modelEndpointNameForQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#model_endpoint_name_for_query DataDatabricksAiSearchIndex#model_endpoint_name_for_query}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}.

---

### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns: dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_dimension DataDatabricksAiSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}. |

---

##### `embeddingDimension`<sup>Optional</sup> <a name="embeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_dimension DataDatabricksAiSearchIndex#embedding_dimension}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}.

---

### DataDatabricksAiSearchIndexDirectAccessIndexSpec <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpec" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexDirectAccessIndexSpec: dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_source_columns DataDatabricksAiSearchIndex#embedding_source_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_vector_columns DataDatabricksAiSearchIndex#embedding_vector_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.schemaJson">schemaJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#schema_json DataDatabricksAiSearchIndex#schema_json}. |

---

##### `embeddingSourceColumns`<sup>Optional</sup> <a name="embeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns"></a>

```typescript
public readonly embeddingSourceColumns: IResolvable | DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_source_columns DataDatabricksAiSearchIndex#embedding_source_columns}.

---

##### `embeddingVectorColumns`<sup>Optional</sup> <a name="embeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns"></a>

```typescript
public readonly embeddingVectorColumns: IResolvable | DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_vector_columns DataDatabricksAiSearchIndex#embedding_vector_columns}.

---

##### `schemaJson`<sup>Optional</sup> <a name="schemaJson" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.schemaJson"></a>

```typescript
public readonly schemaJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#schema_json DataDatabricksAiSearchIndex#schema_json}.

---

### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns: dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint">embeddingModelEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_model_endpoint DataDatabricksAiSearchIndex#embedding_model_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery">modelEndpointNameForQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#model_endpoint_name_for_query DataDatabricksAiSearchIndex#model_endpoint_name_for_query}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}. |

---

##### `embeddingModelEndpoint`<sup>Optional</sup> <a name="embeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint"></a>

```typescript
public readonly embeddingModelEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_model_endpoint DataDatabricksAiSearchIndex#embedding_model_endpoint}.

---

##### `modelEndpointNameForQuery`<sup>Optional</sup> <a name="modelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery"></a>

```typescript
public readonly modelEndpointNameForQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#model_endpoint_name_for_query DataDatabricksAiSearchIndex#model_endpoint_name_for_query}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}.

---

### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns: dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_dimension DataDatabricksAiSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}. |

---

##### `embeddingDimension`<sup>Optional</sup> <a name="embeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_dimension DataDatabricksAiSearchIndex#embedding_dimension}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}.

---

### DataDatabricksAiSearchIndexProviderConfig <a name="DataDatabricksAiSearchIndexProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexProviderConfig: dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#workspace_id DataDatabricksAiSearchIndex#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#workspace_id DataDatabricksAiSearchIndex#workspace_id}.

---

### DataDatabricksAiSearchIndexStatus <a name="DataDatabricksAiSearchIndexStatus" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatus.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchIndexStatus: dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatus = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get"></a>

```typescript
public get(index: number): DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---


### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint">resetEmbeddingModelEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery">resetModelEndpointNameForQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingModelEndpoint` <a name="resetEmbeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint"></a>

```typescript
public resetEmbeddingModelEndpoint(): void
```

##### `resetModelEndpointNameForQuery` <a name="resetModelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery"></a>

```typescript
public resetModelEndpointNameForQuery(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput">embeddingModelEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput">modelEndpointNameForQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint">embeddingModelEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery">modelEndpointNameForQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingModelEndpointInput`<sup>Optional</sup> <a name="embeddingModelEndpointInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput"></a>

```typescript
public readonly embeddingModelEndpointInput: string;
```

- *Type:* string

---

##### `modelEndpointNameForQueryInput`<sup>Optional</sup> <a name="modelEndpointNameForQueryInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput"></a>

```typescript
public readonly modelEndpointNameForQueryInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `embeddingModelEndpoint`<sup>Required</sup> <a name="embeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint"></a>

```typescript
public readonly embeddingModelEndpoint: string;
```

- *Type:* string

---

##### `modelEndpointNameForQuery`<sup>Required</sup> <a name="modelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery"></a>

```typescript
public readonly modelEndpointNameForQuery: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>

---


### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get"></a>

```typescript
public get(index: number): DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---


### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">resetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingDimension` <a name="resetEmbeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```typescript
public resetEmbeddingDimension(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">embeddingDimensionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingDimensionInput`<sup>Optional</sup> <a name="embeddingDimensionInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```typescript
public readonly embeddingDimensionInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `embeddingDimension`<sup>Required</sup> <a name="embeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>

---


### DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns">putEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns">putEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetColumnsToSync">resetColumnsToSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns">resetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns">resetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable">resetEmbeddingWritebackTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable">resetSourceTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmbeddingSourceColumns` <a name="putEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```typescript
public putEmbeddingSourceColumns(value: IResolvable | DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---

##### `putEmbeddingVectorColumns` <a name="putEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```typescript
public putEmbeddingVectorColumns(value: IResolvable | DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---

##### `resetColumnsToSync` <a name="resetColumnsToSync" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetColumnsToSync"></a>

```typescript
public resetColumnsToSync(): void
```

##### `resetEmbeddingSourceColumns` <a name="resetEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```typescript
public resetEmbeddingSourceColumns(): void
```

##### `resetEmbeddingVectorColumns` <a name="resetEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```typescript
public resetEmbeddingVectorColumns(): void
```

##### `resetEmbeddingWritebackTable` <a name="resetEmbeddingWritebackTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable"></a>

```typescript
public resetEmbeddingWritebackTable(): void
```

##### `resetSourceTable` <a name="resetSourceTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable"></a>

```typescript
public resetSourceTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSyncInput">columnsToSyncInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput">embeddingSourceColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput">embeddingVectorColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput">embeddingWritebackTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput">pipelineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput">sourceTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSync">columnsToSync</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable">embeddingWritebackTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType">pipelineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable">sourceTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec">DataDatabricksAiSearchIndexDeltaSyncIndexSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingSourceColumns`<sup>Required</sup> <a name="embeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```typescript
public readonly embeddingSourceColumns: DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a>

---

##### `embeddingVectorColumns`<sup>Required</sup> <a name="embeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```typescript
public readonly embeddingVectorColumns: DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a>

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `columnsToSyncInput`<sup>Optional</sup> <a name="columnsToSyncInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSyncInput"></a>

```typescript
public readonly columnsToSyncInput: string[];
```

- *Type:* string[]

---

##### `embeddingSourceColumnsInput`<sup>Optional</sup> <a name="embeddingSourceColumnsInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```typescript
public readonly embeddingSourceColumnsInput: IResolvable | DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---

##### `embeddingVectorColumnsInput`<sup>Optional</sup> <a name="embeddingVectorColumnsInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```typescript
public readonly embeddingVectorColumnsInput: IResolvable | DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---

##### `embeddingWritebackTableInput`<sup>Optional</sup> <a name="embeddingWritebackTableInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput"></a>

```typescript
public readonly embeddingWritebackTableInput: string;
```

- *Type:* string

---

##### `pipelineTypeInput`<sup>Optional</sup> <a name="pipelineTypeInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput"></a>

```typescript
public readonly pipelineTypeInput: string;
```

- *Type:* string

---

##### `sourceTableInput`<sup>Optional</sup> <a name="sourceTableInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput"></a>

```typescript
public readonly sourceTableInput: string;
```

- *Type:* string

---

##### `columnsToSync`<sup>Required</sup> <a name="columnsToSync" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSync"></a>

```typescript
public readonly columnsToSync: string[];
```

- *Type:* string[]

---

##### `embeddingWritebackTable`<sup>Required</sup> <a name="embeddingWritebackTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable"></a>

```typescript
public readonly embeddingWritebackTable: string;
```

- *Type:* string

---

##### `pipelineType`<sup>Required</sup> <a name="pipelineType" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType"></a>

```typescript
public readonly pipelineType: string;
```

- *Type:* string

---

##### `sourceTable`<sup>Required</sup> <a name="sourceTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable"></a>

```typescript
public readonly sourceTable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiSearchIndexDeltaSyncIndexSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec">DataDatabricksAiSearchIndexDeltaSyncIndexSpec</a>

---


### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get"></a>

```typescript
public get(index: number): DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---


### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint">resetEmbeddingModelEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery">resetModelEndpointNameForQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingModelEndpoint` <a name="resetEmbeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint"></a>

```typescript
public resetEmbeddingModelEndpoint(): void
```

##### `resetModelEndpointNameForQuery` <a name="resetModelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery"></a>

```typescript
public resetModelEndpointNameForQuery(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput">embeddingModelEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput">modelEndpointNameForQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint">embeddingModelEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery">modelEndpointNameForQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingModelEndpointInput`<sup>Optional</sup> <a name="embeddingModelEndpointInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput"></a>

```typescript
public readonly embeddingModelEndpointInput: string;
```

- *Type:* string

---

##### `modelEndpointNameForQueryInput`<sup>Optional</sup> <a name="modelEndpointNameForQueryInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput"></a>

```typescript
public readonly modelEndpointNameForQueryInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `embeddingModelEndpoint`<sup>Required</sup> <a name="embeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint"></a>

```typescript
public readonly embeddingModelEndpoint: string;
```

- *Type:* string

---

##### `modelEndpointNameForQuery`<sup>Required</sup> <a name="modelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery"></a>

```typescript
public readonly modelEndpointNameForQuery: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>

---


### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get"></a>

```typescript
public get(index: number): DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---


### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">resetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingDimension` <a name="resetEmbeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```typescript
public resetEmbeddingDimension(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">embeddingDimensionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingDimensionInput`<sup>Optional</sup> <a name="embeddingDimensionInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```typescript
public readonly embeddingDimensionInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `embeddingDimension`<sup>Required</sup> <a name="embeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>

---


### DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns">putEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns">putEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns">resetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns">resetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson">resetSchemaJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmbeddingSourceColumns` <a name="putEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```typescript
public putEmbeddingSourceColumns(value: IResolvable | DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---

##### `putEmbeddingVectorColumns` <a name="putEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```typescript
public putEmbeddingVectorColumns(value: IResolvable | DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---

##### `resetEmbeddingSourceColumns` <a name="resetEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```typescript
public resetEmbeddingSourceColumns(): void
```

##### `resetEmbeddingVectorColumns` <a name="resetEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```typescript
public resetEmbeddingVectorColumns(): void
```

##### `resetSchemaJson` <a name="resetSchemaJson" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson"></a>

```typescript
public resetSchemaJson(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput">embeddingSourceColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput">embeddingVectorColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput">schemaJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson">schemaJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec">DataDatabricksAiSearchIndexDirectAccessIndexSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingSourceColumns`<sup>Required</sup> <a name="embeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```typescript
public readonly embeddingSourceColumns: DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a>

---

##### `embeddingVectorColumns`<sup>Required</sup> <a name="embeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```typescript
public readonly embeddingVectorColumns: DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a>

---

##### `embeddingSourceColumnsInput`<sup>Optional</sup> <a name="embeddingSourceColumnsInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```typescript
public readonly embeddingSourceColumnsInput: IResolvable | DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---

##### `embeddingVectorColumnsInput`<sup>Optional</sup> <a name="embeddingVectorColumnsInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```typescript
public readonly embeddingVectorColumnsInput: IResolvable | DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---

##### `schemaJsonInput`<sup>Optional</sup> <a name="schemaJsonInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput"></a>

```typescript
public readonly schemaJsonInput: string;
```

- *Type:* string

---

##### `schemaJson`<sup>Required</sup> <a name="schemaJson" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson"></a>

```typescript
public readonly schemaJson: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiSearchIndexDirectAccessIndexSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec">DataDatabricksAiSearchIndexDirectAccessIndexSpec</a>

---


### DataDatabricksAiSearchIndexProviderConfigOutputReference <a name="DataDatabricksAiSearchIndexProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchIndexProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a>

---


### DataDatabricksAiSearchIndexStatusOutputReference <a name="DataDatabricksAiSearchIndexStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchIndex } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.indexedRowCount">indexedRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.indexUrl">indexUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.ready">ready</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatus">DataDatabricksAiSearchIndexStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexedRowCount`<sup>Required</sup> <a name="indexedRowCount" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.indexedRowCount"></a>

```typescript
public readonly indexedRowCount: number;
```

- *Type:* number

---

##### `indexUrl`<sup>Required</sup> <a name="indexUrl" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.indexUrl"></a>

```typescript
public readonly indexUrl: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.ready"></a>

```typescript
public readonly ready: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiSearchIndexStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatus">DataDatabricksAiSearchIndexStatus</a>

---



