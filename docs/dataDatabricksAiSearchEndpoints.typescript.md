# `dataDatabricksAiSearchEndpoints` Submodule <a name="`dataDatabricksAiSearchEndpoints` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiSearchEndpoints <a name="DataDatabricksAiSearchEndpoints" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints databricks_ai_search_endpoints}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints(scope: Construct, id: string, config: DataDatabricksAiSearchEndpointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig">DataDatabricksAiSearchEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig">DataDatabricksAiSearchEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAiSearchEndpointsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig">DataDatabricksAiSearchEndpointsProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAiSearchEndpoints resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isConstruct"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isTerraformElement"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.generateConfigForImport"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksAiSearchEndpoints resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAiSearchEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAiSearchEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiSearchEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList">DataDatabricksAiSearchEndpointsEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference">DataDatabricksAiSearchEndpointsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig">DataDatabricksAiSearchEndpointsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.endpoints"></a>

```typescript
public readonly endpoints: DataDatabricksAiSearchEndpointsEndpointsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList">DataDatabricksAiSearchEndpointsEndpointsList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiSearchEndpointsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference">DataDatabricksAiSearchEndpointsProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAiSearchEndpointsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig">DataDatabricksAiSearchEndpointsProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiSearchEndpointsConfig <a name="DataDatabricksAiSearchEndpointsConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchEndpointsConfig: dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#parent DataDatabricksAiSearchEndpoints#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#page_size DataDatabricksAiSearchEndpoints#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig">DataDatabricksAiSearchEndpointsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#provider_config DataDatabricksAiSearchEndpoints#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#parent DataDatabricksAiSearchEndpoints#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#page_size DataDatabricksAiSearchEndpoints#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiSearchEndpointsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig">DataDatabricksAiSearchEndpointsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#provider_config DataDatabricksAiSearchEndpoints#provider_config}.

---

### DataDatabricksAiSearchEndpointsEndpoints <a name="DataDatabricksAiSearchEndpointsEndpoints" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchEndpointsEndpoints: dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#name DataDatabricksAiSearchEndpoints#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig">DataDatabricksAiSearchEndpointsEndpointsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#provider_config DataDatabricksAiSearchEndpoints#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#name DataDatabricksAiSearchEndpoints#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiSearchEndpointsEndpointsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig">DataDatabricksAiSearchEndpointsEndpointsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#provider_config DataDatabricksAiSearchEndpoints#provider_config}.

---

### DataDatabricksAiSearchEndpointsEndpointsCustomTags <a name="DataDatabricksAiSearchEndpointsEndpointsCustomTags" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchEndpointsEndpointsCustomTags: dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#key DataDatabricksAiSearchEndpoints#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#value DataDatabricksAiSearchEndpoints#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#key DataDatabricksAiSearchEndpoints#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#value DataDatabricksAiSearchEndpoints#value}.

---

### DataDatabricksAiSearchEndpointsEndpointsEndpointStatus <a name="DataDatabricksAiSearchEndpointsEndpointsEndpointStatus" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatus.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchEndpointsEndpointsEndpointStatus: dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatus = { ... }
```


### DataDatabricksAiSearchEndpointsEndpointsProviderConfig <a name="DataDatabricksAiSearchEndpointsEndpointsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchEndpointsEndpointsProviderConfig: dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#workspace_id DataDatabricksAiSearchEndpoints#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#workspace_id DataDatabricksAiSearchEndpoints#workspace_id}.

---

### DataDatabricksAiSearchEndpointsEndpointsScalingInfo <a name="DataDatabricksAiSearchEndpointsEndpointsScalingInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfo.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchEndpointsEndpointsScalingInfo: dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfo.property.requestedTargetQps">requestedTargetQps</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#requested_target_qps DataDatabricksAiSearchEndpoints#requested_target_qps}. |

---

##### `requestedTargetQps`<sup>Optional</sup> <a name="requestedTargetQps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfo.property.requestedTargetQps"></a>

```typescript
public readonly requestedTargetQps: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#requested_target_qps DataDatabricksAiSearchEndpoints#requested_target_qps}.

---

### DataDatabricksAiSearchEndpointsEndpointsThroughputInfo <a name="DataDatabricksAiSearchEndpointsEndpointsThroughputInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchEndpointsEndpointsThroughputInfo: dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.property.maximumConcurrencyAllowed">maximumConcurrencyAllowed</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#maximum_concurrency_allowed DataDatabricksAiSearchEndpoints#maximum_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.property.minimalConcurrencyAllowed">minimalConcurrencyAllowed</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#minimal_concurrency_allowed DataDatabricksAiSearchEndpoints#minimal_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.property.requestedConcurrency">requestedConcurrency</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#requested_concurrency DataDatabricksAiSearchEndpoints#requested_concurrency}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.property.requestedNumReplicas">requestedNumReplicas</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#requested_num_replicas DataDatabricksAiSearchEndpoints#requested_num_replicas}. |

---

##### `maximumConcurrencyAllowed`<sup>Optional</sup> <a name="maximumConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.property.maximumConcurrencyAllowed"></a>

```typescript
public readonly maximumConcurrencyAllowed: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#maximum_concurrency_allowed DataDatabricksAiSearchEndpoints#maximum_concurrency_allowed}.

---

##### `minimalConcurrencyAllowed`<sup>Optional</sup> <a name="minimalConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.property.minimalConcurrencyAllowed"></a>

```typescript
public readonly minimalConcurrencyAllowed: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#minimal_concurrency_allowed DataDatabricksAiSearchEndpoints#minimal_concurrency_allowed}.

---

##### `requestedConcurrency`<sup>Optional</sup> <a name="requestedConcurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.property.requestedConcurrency"></a>

```typescript
public readonly requestedConcurrency: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#requested_concurrency DataDatabricksAiSearchEndpoints#requested_concurrency}.

---

##### `requestedNumReplicas`<sup>Optional</sup> <a name="requestedNumReplicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.property.requestedNumReplicas"></a>

```typescript
public readonly requestedNumReplicas: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#requested_num_replicas DataDatabricksAiSearchEndpoints#requested_num_replicas}.

---

### DataDatabricksAiSearchEndpointsProviderConfig <a name="DataDatabricksAiSearchEndpointsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchEndpointsProviderConfig: dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#workspace_id DataDatabricksAiSearchEndpoints#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#workspace_id DataDatabricksAiSearchEndpoints#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiSearchEndpointsEndpointsCustomTagsList <a name="DataDatabricksAiSearchEndpointsEndpointsCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.get"></a>

```typescript
public get(index: number): DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags">DataDatabricksAiSearchEndpointsEndpointsCustomTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchEndpointsEndpointsCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags">DataDatabricksAiSearchEndpointsEndpointsCustomTags</a>[]

---


### DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference <a name="DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags">DataDatabricksAiSearchEndpointsEndpointsCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiSearchEndpointsEndpointsCustomTags;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags">DataDatabricksAiSearchEndpointsEndpointsCustomTags</a>

---


### DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference <a name="DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatus">DataDatabricksAiSearchEndpointsEndpointsEndpointStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiSearchEndpointsEndpointsEndpointStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatus">DataDatabricksAiSearchEndpointsEndpointsEndpointStatus</a>

---


### DataDatabricksAiSearchEndpointsEndpointsList <a name="DataDatabricksAiSearchEndpointsEndpointsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.get"></a>

```typescript
public get(index: number): DataDatabricksAiSearchEndpointsEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints">DataDatabricksAiSearchEndpointsEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchEndpointsEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints">DataDatabricksAiSearchEndpointsEndpoints</a>[]

---


### DataDatabricksAiSearchEndpointsEndpointsOutputReference <a name="DataDatabricksAiSearchEndpointsEndpointsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAiSearchEndpointsEndpointsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig">DataDatabricksAiSearchEndpointsEndpointsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.customTags">customTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList">DataDatabricksAiSearchEndpointsEndpointsCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.effectiveBudgetPolicyId">effectiveBudgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.endpointStatus">endpointStatus</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference">DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.indexCount">indexCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.lastUpdatedUser">lastUpdatedUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference">DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.replicaCount">replicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.scalingInfo">scalingInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference">DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.targetQps">targetQps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.throughputInfo">throughputInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference">DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.usagePolicyId">usagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig">DataDatabricksAiSearchEndpointsEndpointsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints">DataDatabricksAiSearchEndpointsEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.customTags"></a>

```typescript
public readonly customTags: DataDatabricksAiSearchEndpointsEndpointsCustomTagsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList">DataDatabricksAiSearchEndpointsEndpointsCustomTagsList</a>

---

##### `effectiveBudgetPolicyId`<sup>Required</sup> <a name="effectiveBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.effectiveBudgetPolicyId"></a>

```typescript
public readonly effectiveBudgetPolicyId: string;
```

- *Type:* string

---

##### `endpointStatus`<sup>Required</sup> <a name="endpointStatus" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.endpointStatus"></a>

```typescript
public readonly endpointStatus: DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference">DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference</a>

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexCount`<sup>Required</sup> <a name="indexCount" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.indexCount"></a>

```typescript
public readonly indexCount: number;
```

- *Type:* number

---

##### `lastUpdatedUser`<sup>Required</sup> <a name="lastUpdatedUser" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.lastUpdatedUser"></a>

```typescript
public readonly lastUpdatedUser: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference">DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference</a>

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

---

##### `scalingInfo`<sup>Required</sup> <a name="scalingInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.scalingInfo"></a>

```typescript
public readonly scalingInfo: DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference">DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference</a>

---

##### `targetQps`<sup>Required</sup> <a name="targetQps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.targetQps"></a>

```typescript
public readonly targetQps: number;
```

- *Type:* number

---

##### `throughputInfo`<sup>Required</sup> <a name="throughputInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.throughputInfo"></a>

```typescript
public readonly throughputInfo: DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference">DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `usagePolicyId`<sup>Required</sup> <a name="usagePolicyId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.usagePolicyId"></a>

```typescript
public readonly usagePolicyId: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAiSearchEndpointsEndpointsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig">DataDatabricksAiSearchEndpointsEndpointsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiSearchEndpointsEndpoints;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints">DataDatabricksAiSearchEndpointsEndpoints</a>

---


### DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference <a name="DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig">DataDatabricksAiSearchEndpointsEndpointsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchEndpointsEndpointsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig">DataDatabricksAiSearchEndpointsEndpointsProviderConfig</a>

---


### DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference <a name="DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.resetRequestedTargetQps">resetRequestedTargetQps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequestedTargetQps` <a name="resetRequestedTargetQps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.resetRequestedTargetQps"></a>

```typescript
public resetRequestedTargetQps(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.requestedTargetQpsInput">requestedTargetQpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.requestedTargetQps">requestedTargetQps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfo">DataDatabricksAiSearchEndpointsEndpointsScalingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `requestedTargetQpsInput`<sup>Optional</sup> <a name="requestedTargetQpsInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.requestedTargetQpsInput"></a>

```typescript
public readonly requestedTargetQpsInput: number;
```

- *Type:* number

---

##### `requestedTargetQps`<sup>Required</sup> <a name="requestedTargetQps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.requestedTargetQps"></a>

```typescript
public readonly requestedTargetQps: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiSearchEndpointsEndpointsScalingInfo;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfo">DataDatabricksAiSearchEndpointsEndpointsScalingInfo</a>

---


### DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference <a name="DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resetMaximumConcurrencyAllowed">resetMaximumConcurrencyAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resetMinimalConcurrencyAllowed">resetMinimalConcurrencyAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resetRequestedConcurrency">resetRequestedConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resetRequestedNumReplicas">resetRequestedNumReplicas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumConcurrencyAllowed` <a name="resetMaximumConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resetMaximumConcurrencyAllowed"></a>

```typescript
public resetMaximumConcurrencyAllowed(): void
```

##### `resetMinimalConcurrencyAllowed` <a name="resetMinimalConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resetMinimalConcurrencyAllowed"></a>

```typescript
public resetMinimalConcurrencyAllowed(): void
```

##### `resetRequestedConcurrency` <a name="resetRequestedConcurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resetRequestedConcurrency"></a>

```typescript
public resetRequestedConcurrency(): void
```

##### `resetRequestedNumReplicas` <a name="resetRequestedNumReplicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resetRequestedNumReplicas"></a>

```typescript
public resetRequestedNumReplicas(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.changeRequestMessage">changeRequestMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.changeRequestState">changeRequestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.currentConcurrency">currentConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage">currentConcurrencyUtilizationPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.currentNumReplicas">currentNumReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput">maximumConcurrencyAllowedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput">minimalConcurrencyAllowedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.requestedConcurrencyInput">requestedConcurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.requestedNumReplicasInput">requestedNumReplicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.maximumConcurrencyAllowed">maximumConcurrencyAllowed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.minimalConcurrencyAllowed">minimalConcurrencyAllowed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.requestedConcurrency">requestedConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.requestedNumReplicas">requestedNumReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo">DataDatabricksAiSearchEndpointsEndpointsThroughputInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changeRequestMessage`<sup>Required</sup> <a name="changeRequestMessage" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.changeRequestMessage"></a>

```typescript
public readonly changeRequestMessage: string;
```

- *Type:* string

---

##### `changeRequestState`<sup>Required</sup> <a name="changeRequestState" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.changeRequestState"></a>

```typescript
public readonly changeRequestState: string;
```

- *Type:* string

---

##### `currentConcurrency`<sup>Required</sup> <a name="currentConcurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.currentConcurrency"></a>

```typescript
public readonly currentConcurrency: number;
```

- *Type:* number

---

##### `currentConcurrencyUtilizationPercentage`<sup>Required</sup> <a name="currentConcurrencyUtilizationPercentage" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage"></a>

```typescript
public readonly currentConcurrencyUtilizationPercentage: number;
```

- *Type:* number

---

##### `currentNumReplicas`<sup>Required</sup> <a name="currentNumReplicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.currentNumReplicas"></a>

```typescript
public readonly currentNumReplicas: number;
```

- *Type:* number

---

##### `maximumConcurrencyAllowedInput`<sup>Optional</sup> <a name="maximumConcurrencyAllowedInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput"></a>

```typescript
public readonly maximumConcurrencyAllowedInput: number;
```

- *Type:* number

---

##### `minimalConcurrencyAllowedInput`<sup>Optional</sup> <a name="minimalConcurrencyAllowedInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput"></a>

```typescript
public readonly minimalConcurrencyAllowedInput: number;
```

- *Type:* number

---

##### `requestedConcurrencyInput`<sup>Optional</sup> <a name="requestedConcurrencyInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.requestedConcurrencyInput"></a>

```typescript
public readonly requestedConcurrencyInput: number;
```

- *Type:* number

---

##### `requestedNumReplicasInput`<sup>Optional</sup> <a name="requestedNumReplicasInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.requestedNumReplicasInput"></a>

```typescript
public readonly requestedNumReplicasInput: number;
```

- *Type:* number

---

##### `maximumConcurrencyAllowed`<sup>Required</sup> <a name="maximumConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.maximumConcurrencyAllowed"></a>

```typescript
public readonly maximumConcurrencyAllowed: number;
```

- *Type:* number

---

##### `minimalConcurrencyAllowed`<sup>Required</sup> <a name="minimalConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.minimalConcurrencyAllowed"></a>

```typescript
public readonly minimalConcurrencyAllowed: number;
```

- *Type:* number

---

##### `requestedConcurrency`<sup>Required</sup> <a name="requestedConcurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.requestedConcurrency"></a>

```typescript
public readonly requestedConcurrency: number;
```

- *Type:* number

---

##### `requestedNumReplicas`<sup>Required</sup> <a name="requestedNumReplicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.requestedNumReplicas"></a>

```typescript
public readonly requestedNumReplicas: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiSearchEndpointsEndpointsThroughputInfo;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo">DataDatabricksAiSearchEndpointsEndpointsThroughputInfo</a>

---


### DataDatabricksAiSearchEndpointsProviderConfigOutputReference <a name="DataDatabricksAiSearchEndpointsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig">DataDatabricksAiSearchEndpointsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchEndpointsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig">DataDatabricksAiSearchEndpointsProviderConfig</a>

---



