# `dataDatabricksAiSearchEndpoint` Submodule <a name="`dataDatabricksAiSearchEndpoint` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiSearchEndpoint <a name="DataDatabricksAiSearchEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint databricks_ai_search_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint(scope: Construct, id: string, config: DataDatabricksAiSearchEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig">DataDatabricksAiSearchEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig">DataDatabricksAiSearchEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAiSearchEndpointProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAiSearchEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isConstruct"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformElement"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksAiSearchEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAiSearchEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAiSearchEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiSearchEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.customTags">customTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList">DataDatabricksAiSearchEndpointCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.effectiveBudgetPolicyId">effectiveBudgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.endpointStatus">endpointStatus</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference">DataDatabricksAiSearchEndpointEndpointStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.indexCount">indexCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.lastUpdatedUser">lastUpdatedUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference">DataDatabricksAiSearchEndpointProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.replicaCount">replicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.scalingInfo">scalingInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference">DataDatabricksAiSearchEndpointScalingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.targetQps">targetQps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.throughputInfo">throughputInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference">DataDatabricksAiSearchEndpointThroughputInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.usagePolicyId">usagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.customTags"></a>

```typescript
public readonly customTags: DataDatabricksAiSearchEndpointCustomTagsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList">DataDatabricksAiSearchEndpointCustomTagsList</a>

---

##### `effectiveBudgetPolicyId`<sup>Required</sup> <a name="effectiveBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.effectiveBudgetPolicyId"></a>

```typescript
public readonly effectiveBudgetPolicyId: string;
```

- *Type:* string

---

##### `endpointStatus`<sup>Required</sup> <a name="endpointStatus" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.endpointStatus"></a>

```typescript
public readonly endpointStatus: DataDatabricksAiSearchEndpointEndpointStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference">DataDatabricksAiSearchEndpointEndpointStatusOutputReference</a>

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexCount`<sup>Required</sup> <a name="indexCount" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.indexCount"></a>

```typescript
public readonly indexCount: number;
```

- *Type:* number

---

##### `lastUpdatedUser`<sup>Required</sup> <a name="lastUpdatedUser" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.lastUpdatedUser"></a>

```typescript
public readonly lastUpdatedUser: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiSearchEndpointProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference">DataDatabricksAiSearchEndpointProviderConfigOutputReference</a>

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

---

##### `scalingInfo`<sup>Required</sup> <a name="scalingInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.scalingInfo"></a>

```typescript
public readonly scalingInfo: DataDatabricksAiSearchEndpointScalingInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference">DataDatabricksAiSearchEndpointScalingInfoOutputReference</a>

---

##### `targetQps`<sup>Required</sup> <a name="targetQps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.targetQps"></a>

```typescript
public readonly targetQps: number;
```

- *Type:* number

---

##### `throughputInfo`<sup>Required</sup> <a name="throughputInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.throughputInfo"></a>

```typescript
public readonly throughputInfo: DataDatabricksAiSearchEndpointThroughputInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference">DataDatabricksAiSearchEndpointThroughputInfoOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `usagePolicyId`<sup>Required</sup> <a name="usagePolicyId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.usagePolicyId"></a>

```typescript
public readonly usagePolicyId: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAiSearchEndpointProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiSearchEndpointConfig <a name="DataDatabricksAiSearchEndpointConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchEndpointConfig: dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#name DataDatabricksAiSearchEndpoint#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#provider_config DataDatabricksAiSearchEndpoint#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#name DataDatabricksAiSearchEndpoint#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiSearchEndpointProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#provider_config DataDatabricksAiSearchEndpoint#provider_config}.

---

### DataDatabricksAiSearchEndpointCustomTags <a name="DataDatabricksAiSearchEndpointCustomTags" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchEndpointCustomTags: dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#key DataDatabricksAiSearchEndpoint#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#value DataDatabricksAiSearchEndpoint#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#key DataDatabricksAiSearchEndpoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#value DataDatabricksAiSearchEndpoint#value}.

---

### DataDatabricksAiSearchEndpointEndpointStatus <a name="DataDatabricksAiSearchEndpointEndpointStatus" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatus.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchEndpointEndpointStatus: dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatus = { ... }
```


### DataDatabricksAiSearchEndpointProviderConfig <a name="DataDatabricksAiSearchEndpointProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchEndpointProviderConfig: dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#workspace_id DataDatabricksAiSearchEndpoint#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#workspace_id DataDatabricksAiSearchEndpoint#workspace_id}.

---

### DataDatabricksAiSearchEndpointScalingInfo <a name="DataDatabricksAiSearchEndpointScalingInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchEndpointScalingInfo: dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo.property.requestedTargetQps">requestedTargetQps</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#requested_target_qps DataDatabricksAiSearchEndpoint#requested_target_qps}. |

---

##### `requestedTargetQps`<sup>Optional</sup> <a name="requestedTargetQps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo.property.requestedTargetQps"></a>

```typescript
public readonly requestedTargetQps: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#requested_target_qps DataDatabricksAiSearchEndpoint#requested_target_qps}.

---

### DataDatabricksAiSearchEndpointThroughputInfo <a name="DataDatabricksAiSearchEndpointThroughputInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

const dataDatabricksAiSearchEndpointThroughputInfo: dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.maximumConcurrencyAllowed">maximumConcurrencyAllowed</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#maximum_concurrency_allowed DataDatabricksAiSearchEndpoint#maximum_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.minimalConcurrencyAllowed">minimalConcurrencyAllowed</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#minimal_concurrency_allowed DataDatabricksAiSearchEndpoint#minimal_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.requestedConcurrency">requestedConcurrency</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#requested_concurrency DataDatabricksAiSearchEndpoint#requested_concurrency}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.requestedNumReplicas">requestedNumReplicas</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#requested_num_replicas DataDatabricksAiSearchEndpoint#requested_num_replicas}. |

---

##### `maximumConcurrencyAllowed`<sup>Optional</sup> <a name="maximumConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.maximumConcurrencyAllowed"></a>

```typescript
public readonly maximumConcurrencyAllowed: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#maximum_concurrency_allowed DataDatabricksAiSearchEndpoint#maximum_concurrency_allowed}.

---

##### `minimalConcurrencyAllowed`<sup>Optional</sup> <a name="minimalConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.minimalConcurrencyAllowed"></a>

```typescript
public readonly minimalConcurrencyAllowed: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#minimal_concurrency_allowed DataDatabricksAiSearchEndpoint#minimal_concurrency_allowed}.

---

##### `requestedConcurrency`<sup>Optional</sup> <a name="requestedConcurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.requestedConcurrency"></a>

```typescript
public readonly requestedConcurrency: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#requested_concurrency DataDatabricksAiSearchEndpoint#requested_concurrency}.

---

##### `requestedNumReplicas`<sup>Optional</sup> <a name="requestedNumReplicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.requestedNumReplicas"></a>

```typescript
public readonly requestedNumReplicas: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_search_endpoint#requested_num_replicas DataDatabricksAiSearchEndpoint#requested_num_replicas}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiSearchEndpointCustomTagsList <a name="DataDatabricksAiSearchEndpointCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.get"></a>

```typescript
public get(index: number): DataDatabricksAiSearchEndpointCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags">DataDatabricksAiSearchEndpointCustomTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchEndpointCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags">DataDatabricksAiSearchEndpointCustomTags</a>[]

---


### DataDatabricksAiSearchEndpointCustomTagsOutputReference <a name="DataDatabricksAiSearchEndpointCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags">DataDatabricksAiSearchEndpointCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiSearchEndpointCustomTags;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags">DataDatabricksAiSearchEndpointCustomTags</a>

---


### DataDatabricksAiSearchEndpointEndpointStatusOutputReference <a name="DataDatabricksAiSearchEndpointEndpointStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatus">DataDatabricksAiSearchEndpointEndpointStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiSearchEndpointEndpointStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatus">DataDatabricksAiSearchEndpointEndpointStatus</a>

---


### DataDatabricksAiSearchEndpointProviderConfigOutputReference <a name="DataDatabricksAiSearchEndpointProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiSearchEndpointProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a>

---


### DataDatabricksAiSearchEndpointScalingInfoOutputReference <a name="DataDatabricksAiSearchEndpointScalingInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps">resetRequestedTargetQps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequestedTargetQps` <a name="resetRequestedTargetQps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps"></a>

```typescript
public resetRequestedTargetQps(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput">requestedTargetQpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.requestedTargetQps">requestedTargetQps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo">DataDatabricksAiSearchEndpointScalingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `requestedTargetQpsInput`<sup>Optional</sup> <a name="requestedTargetQpsInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput"></a>

```typescript
public readonly requestedTargetQpsInput: number;
```

- *Type:* number

---

##### `requestedTargetQps`<sup>Required</sup> <a name="requestedTargetQps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.requestedTargetQps"></a>

```typescript
public readonly requestedTargetQps: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiSearchEndpointScalingInfo;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo">DataDatabricksAiSearchEndpointScalingInfo</a>

---


### DataDatabricksAiSearchEndpointThroughputInfoOutputReference <a name="DataDatabricksAiSearchEndpointThroughputInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiSearchEndpoint } from '@cdktn/provider-databricks'

new dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetMaximumConcurrencyAllowed">resetMaximumConcurrencyAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetMinimalConcurrencyAllowed">resetMinimalConcurrencyAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetRequestedConcurrency">resetRequestedConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetRequestedNumReplicas">resetRequestedNumReplicas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumConcurrencyAllowed` <a name="resetMaximumConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetMaximumConcurrencyAllowed"></a>

```typescript
public resetMaximumConcurrencyAllowed(): void
```

##### `resetMinimalConcurrencyAllowed` <a name="resetMinimalConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetMinimalConcurrencyAllowed"></a>

```typescript
public resetMinimalConcurrencyAllowed(): void
```

##### `resetRequestedConcurrency` <a name="resetRequestedConcurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetRequestedConcurrency"></a>

```typescript
public resetRequestedConcurrency(): void
```

##### `resetRequestedNumReplicas` <a name="resetRequestedNumReplicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetRequestedNumReplicas"></a>

```typescript
public resetRequestedNumReplicas(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.changeRequestMessage">changeRequestMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.changeRequestState">changeRequestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentConcurrency">currentConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage">currentConcurrencyUtilizationPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentNumReplicas">currentNumReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput">maximumConcurrencyAllowedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput">minimalConcurrencyAllowedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrencyInput">requestedConcurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicasInput">requestedNumReplicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowed">maximumConcurrencyAllowed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowed">minimalConcurrencyAllowed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrency">requestedConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicas">requestedNumReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo">DataDatabricksAiSearchEndpointThroughputInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changeRequestMessage`<sup>Required</sup> <a name="changeRequestMessage" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.changeRequestMessage"></a>

```typescript
public readonly changeRequestMessage: string;
```

- *Type:* string

---

##### `changeRequestState`<sup>Required</sup> <a name="changeRequestState" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.changeRequestState"></a>

```typescript
public readonly changeRequestState: string;
```

- *Type:* string

---

##### `currentConcurrency`<sup>Required</sup> <a name="currentConcurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentConcurrency"></a>

```typescript
public readonly currentConcurrency: number;
```

- *Type:* number

---

##### `currentConcurrencyUtilizationPercentage`<sup>Required</sup> <a name="currentConcurrencyUtilizationPercentage" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage"></a>

```typescript
public readonly currentConcurrencyUtilizationPercentage: number;
```

- *Type:* number

---

##### `currentNumReplicas`<sup>Required</sup> <a name="currentNumReplicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentNumReplicas"></a>

```typescript
public readonly currentNumReplicas: number;
```

- *Type:* number

---

##### `maximumConcurrencyAllowedInput`<sup>Optional</sup> <a name="maximumConcurrencyAllowedInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput"></a>

```typescript
public readonly maximumConcurrencyAllowedInput: number;
```

- *Type:* number

---

##### `minimalConcurrencyAllowedInput`<sup>Optional</sup> <a name="minimalConcurrencyAllowedInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput"></a>

```typescript
public readonly minimalConcurrencyAllowedInput: number;
```

- *Type:* number

---

##### `requestedConcurrencyInput`<sup>Optional</sup> <a name="requestedConcurrencyInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrencyInput"></a>

```typescript
public readonly requestedConcurrencyInput: number;
```

- *Type:* number

---

##### `requestedNumReplicasInput`<sup>Optional</sup> <a name="requestedNumReplicasInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicasInput"></a>

```typescript
public readonly requestedNumReplicasInput: number;
```

- *Type:* number

---

##### `maximumConcurrencyAllowed`<sup>Required</sup> <a name="maximumConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowed"></a>

```typescript
public readonly maximumConcurrencyAllowed: number;
```

- *Type:* number

---

##### `minimalConcurrencyAllowed`<sup>Required</sup> <a name="minimalConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowed"></a>

```typescript
public readonly minimalConcurrencyAllowed: number;
```

- *Type:* number

---

##### `requestedConcurrency`<sup>Required</sup> <a name="requestedConcurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrency"></a>

```typescript
public readonly requestedConcurrency: number;
```

- *Type:* number

---

##### `requestedNumReplicas`<sup>Required</sup> <a name="requestedNumReplicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicas"></a>

```typescript
public readonly requestedNumReplicas: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiSearchEndpointThroughputInfo;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo">DataDatabricksAiSearchEndpointThroughputInfo</a>

---



