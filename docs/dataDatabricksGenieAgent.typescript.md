# `dataDatabricksGenieAgent` Submodule <a name="`dataDatabricksGenieAgent` Submodule" id="@cdktn/provider-databricks.dataDatabricksGenieAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksGenieAgent <a name="DataDatabricksGenieAgent" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent databricks_genie_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgent(scope: Construct, id: string, config: DataDatabricksGenieAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig">DataDatabricksGenieAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig">DataDatabricksGenieAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksGenieAgentProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksGenieAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isConstruct"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

dataDatabricksGenieAgent.DataDatabricksGenieAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformElement"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformDataSource"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksGenieAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksGenieAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksGenieAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksGenieAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference">DataDatabricksGenieAgentDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.effectiveParentPath">effectiveParentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.parentPath">parentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference">DataDatabricksGenieAgentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.definition"></a>

```typescript
public readonly definition: DataDatabricksGenieAgentDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference">DataDatabricksGenieAgentDefinitionOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `effectiveParentPath`<sup>Required</sup> <a name="effectiveParentPath" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.effectiveParentPath"></a>

```typescript
public readonly effectiveParentPath: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `parentPath`<sup>Required</sup> <a name="parentPath" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.parentPath"></a>

```typescript
public readonly parentPath: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksGenieAgentProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference">DataDatabricksGenieAgentProviderConfigOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksGenieAgentProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksGenieAgentConfig <a name="DataDatabricksGenieAgentConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentConfig: dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#provider_config DataDatabricksGenieAgent#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksGenieAgentProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#provider_config DataDatabricksGenieAgent#provider_config}.

---

### DataDatabricksGenieAgentDefinition <a name="DataDatabricksGenieAgentDefinition" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinition: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.benchmarks">benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#benchmarks DataDatabricksGenieAgent#benchmarks}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#config DataDatabricksGenieAgent#config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#data_sources DataDatabricksGenieAgent#data_sources}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.instructions">instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instructions DataDatabricksGenieAgent#instructions}. |

---

##### `benchmarks`<sup>Optional</sup> <a name="benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.benchmarks"></a>

```typescript
public readonly benchmarks: DataDatabricksGenieAgentDefinitionBenchmarks;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#benchmarks DataDatabricksGenieAgent#benchmarks}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.config"></a>

```typescript
public readonly config: DataDatabricksGenieAgentDefinitionConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#config DataDatabricksGenieAgent#config}.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.dataSources"></a>

```typescript
public readonly dataSources: DataDatabricksGenieAgentDefinitionDataSources;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#data_sources DataDatabricksGenieAgent#data_sources}.

---

##### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.instructions"></a>

```typescript
public readonly instructions: DataDatabricksGenieAgentDefinitionInstructions;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instructions DataDatabricksGenieAgent#instructions}.

---

### DataDatabricksGenieAgentDefinitionBenchmarks <a name="DataDatabricksGenieAgentDefinitionBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionBenchmarks: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks.property.questions">questions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#questions DataDatabricksGenieAgent#questions}. |

---

##### `questions`<sup>Optional</sup> <a name="questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks.property.questions"></a>

```typescript
public readonly questions: IResolvable | DataDatabricksGenieAgentDefinitionBenchmarksQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#questions DataDatabricksGenieAgent#questions}.

---

### DataDatabricksGenieAgentDefinitionBenchmarksQuestions <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionBenchmarksQuestions: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.question">question</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.answer">answer</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#answer DataDatabricksGenieAgent#answer}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.evaluationNote">evaluationNote</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#evaluation_note DataDatabricksGenieAgent#evaluation_note}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}.

---

##### `answer`<sup>Optional</sup> <a name="answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.answer"></a>

```typescript
public readonly answer: IResolvable | DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#answer DataDatabricksGenieAgent#answer}.

---

##### `evaluationNote`<sup>Optional</sup> <a name="evaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.evaluationNote"></a>

```typescript
public readonly evaluationNote: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#evaluation_note DataDatabricksGenieAgent#evaluation_note}.

---

### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#format DataDatabricksGenieAgent#format}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#format DataDatabricksGenieAgent#format}.

---

### DataDatabricksGenieAgentDefinitionConfig <a name="DataDatabricksGenieAgentDefinitionConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionConfig: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig.property.sampleQuestions">sampleQuestions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sample_questions DataDatabricksGenieAgent#sample_questions}. |

---

##### `sampleQuestions`<sup>Optional</sup> <a name="sampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig.property.sampleQuestions"></a>

```typescript
public readonly sampleQuestions: IResolvable | DataDatabricksGenieAgentDefinitionConfigSampleQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sample_questions DataDatabricksGenieAgent#sample_questions}.

---

### DataDatabricksGenieAgentDefinitionConfigSampleQuestions <a name="DataDatabricksGenieAgentDefinitionConfigSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionConfigSampleQuestions: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.property.question">question</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}.

---

### DataDatabricksGenieAgentDefinitionDataSources <a name="DataDatabricksGenieAgentDefinitionDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionDataSources: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.mcpConnections">mcpConnections</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connections DataDatabricksGenieAgent#mcp_connections}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.tables">tables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#tables DataDatabricksGenieAgent#tables}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.volumes">volumes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#volumes DataDatabricksGenieAgent#volumes}. |

---

##### `mcpConnections`<sup>Optional</sup> <a name="mcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.mcpConnections"></a>

```typescript
public readonly mcpConnections: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connections DataDatabricksGenieAgent#mcp_connections}.

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.tables"></a>

```typescript
public readonly tables: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesTables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#tables DataDatabricksGenieAgent#tables}.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.volumes"></a>

```typescript
public readonly volumes: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#volumes DataDatabricksGenieAgent#volumes}.

---

### DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections <a name="DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionDataSourcesMcpConnections: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections.property.mcpConnection">mcpConnection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connection DataDatabricksGenieAgent#mcp_connection}. |

---

##### `mcpConnection`<sup>Required</sup> <a name="mcpConnection" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections.property.mcpConnection"></a>

```typescript
public readonly mcpConnection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connection DataDatabricksGenieAgent#mcp_connection}.

---

### DataDatabricksGenieAgentDefinitionDataSourcesTables <a name="DataDatabricksGenieAgentDefinitionDataSourcesTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionDataSourcesTables: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.columnConfigs">columnConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column_configs DataDatabricksGenieAgent#column_configs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

##### `columnConfigs`<sup>Optional</sup> <a name="columnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.columnConfigs"></a>

```typescript
public readonly columnConfigs: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column_configs DataDatabricksGenieAgent#column_configs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}.

---

### DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.column">column</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column DataDatabricksGenieAgent#column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching">enableEntityMatching</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_entity_matching DataDatabricksGenieAgent#enable_entity_matching}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance">enableFormatAssistance</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_format_assistance DataDatabricksGenieAgent#enable_format_assistance}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.exclude">exclude</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#exclude DataDatabricksGenieAgent#exclude}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.synonyms">synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column DataDatabricksGenieAgent#column}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}.

---

##### `enableEntityMatching`<sup>Optional</sup> <a name="enableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching"></a>

```typescript
public readonly enableEntityMatching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_entity_matching DataDatabricksGenieAgent#enable_entity_matching}.

---

##### `enableFormatAssistance`<sup>Optional</sup> <a name="enableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance"></a>

```typescript
public readonly enableFormatAssistance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_format_assistance DataDatabricksGenieAgent#enable_format_assistance}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.exclude"></a>

```typescript
public readonly exclude: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#exclude DataDatabricksGenieAgent#exclude}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}.

---

### DataDatabricksGenieAgentDefinitionDataSourcesVolumes <a name="DataDatabricksGenieAgentDefinitionDataSourcesVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionDataSourcesVolumes: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#path DataDatabricksGenieAgent#path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#path DataDatabricksGenieAgent#path}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}.

---

### DataDatabricksGenieAgentDefinitionInstructions <a name="DataDatabricksGenieAgentDefinitionInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionInstructions: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.exampleQuestionSqls">exampleQuestionSqls</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#example_question_sqls DataDatabricksGenieAgent#example_question_sqls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.joinSpecs">joinSpecs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#join_specs DataDatabricksGenieAgent#join_specs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.sqlFunctions">sqlFunctions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_functions DataDatabricksGenieAgent#sql_functions}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.sqlSnippets">sqlSnippets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_snippets DataDatabricksGenieAgent#sql_snippets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.textInstructions">textInstructions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#text_instructions DataDatabricksGenieAgent#text_instructions}. |

---

##### `exampleQuestionSqls`<sup>Optional</sup> <a name="exampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.exampleQuestionSqls"></a>

```typescript
public readonly exampleQuestionSqls: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#example_question_sqls DataDatabricksGenieAgent#example_question_sqls}.

---

##### `joinSpecs`<sup>Optional</sup> <a name="joinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.joinSpecs"></a>

```typescript
public readonly joinSpecs: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#join_specs DataDatabricksGenieAgent#join_specs}.

---

##### `sqlFunctions`<sup>Optional</sup> <a name="sqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.sqlFunctions"></a>

```typescript
public readonly sqlFunctions: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_functions DataDatabricksGenieAgent#sql_functions}.

---

##### `sqlSnippets`<sup>Optional</sup> <a name="sqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.sqlSnippets"></a>

```typescript
public readonly sqlSnippets: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_snippets DataDatabricksGenieAgent#sql_snippets}.

---

##### `textInstructions`<sup>Optional</sup> <a name="textInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.textInstructions"></a>

```typescript
public readonly textInstructions: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsTextInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#text_instructions DataDatabricksGenieAgent#text_instructions}.

---

### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.question">question</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#parameters DataDatabricksGenieAgent#parameters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.usageGuidance">usageGuidance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#usage_guidance DataDatabricksGenieAgent#usage_guidance}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#parameters DataDatabricksGenieAgent#parameters}.

---

##### `usageGuidance`<sup>Optional</sup> <a name="usageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.usageGuidance"></a>

```typescript
public readonly usageGuidance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#usage_guidance DataDatabricksGenieAgent#usage_guidance}.

---

### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#default_value DataDatabricksGenieAgent#default_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint">typeHint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#type_hint DataDatabricksGenieAgent#type_hint}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue"></a>

```typescript
public readonly defaultValue: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#default_value DataDatabricksGenieAgent#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}.

---

##### `typeHint`<sup>Optional</sup> <a name="typeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint"></a>

```typescript
public readonly typeHint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#type_hint DataDatabricksGenieAgent#type_hint}.

---

### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange">valueRange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#value_range DataDatabricksGenieAgent#value_range}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#values DataDatabricksGenieAgent#values}. |

---

##### `valueRange`<sup>Optional</sup> <a name="valueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange"></a>

```typescript
public readonly valueRange: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#value_range DataDatabricksGenieAgent#value_range}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#values DataDatabricksGenieAgent#values}.

---

### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max">max</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#max DataDatabricksGenieAgent#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min">min</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#min DataDatabricksGenieAgent#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max"></a>

```typescript
public readonly max: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#max DataDatabricksGenieAgent#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min"></a>

```typescript
public readonly min: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#min DataDatabricksGenieAgent#min}.

---

### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionInstructionsJoinSpecs: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.left">left</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#left DataDatabricksGenieAgent#left}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.right">right</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#right DataDatabricksGenieAgent#right}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#comment DataDatabricksGenieAgent#comment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.instruction">instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.relationshipType">relationshipType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#relationship_type DataDatabricksGenieAgent#relationship_type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.left"></a>

```typescript
public readonly left: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#left DataDatabricksGenieAgent#left}.

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.right"></a>

```typescript
public readonly right: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#right DataDatabricksGenieAgent#right}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#comment DataDatabricksGenieAgent#comment}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}.

---

##### `relationshipType`<sup>Optional</sup> <a name="relationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.relationshipType"></a>

```typescript
public readonly relationshipType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#relationship_type DataDatabricksGenieAgent#relationship_type}.

---

### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionInstructionsSqlFunctions: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionInstructionsSqlSnippets: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.expressions">expressions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#expressions DataDatabricksGenieAgent#expressions}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.filters">filters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#filters DataDatabricksGenieAgent#filters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.measures">measures</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#measures DataDatabricksGenieAgent#measures}. |

---

##### `expressions`<sup>Optional</sup> <a name="expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.expressions"></a>

```typescript
public readonly expressions: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#expressions DataDatabricksGenieAgent#expressions}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.filters"></a>

```typescript
public readonly filters: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#filters DataDatabricksGenieAgent#filters}.

---

##### `measures`<sup>Optional</sup> <a name="measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.measures"></a>

```typescript
public readonly measures: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#measures DataDatabricksGenieAgent#measures}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.instruction">instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.synonyms">synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.instruction">instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.synonyms">synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.instruction">instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.synonyms">synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}.

---

### DataDatabricksGenieAgentDefinitionInstructionsTextInstructions <a name="DataDatabricksGenieAgentDefinitionInstructionsTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentDefinitionInstructionsTextInstructions: dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksGenieAgentProviderConfig <a name="DataDatabricksGenieAgentProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentProviderConfig: dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#workspace_id DataDatabricksGenieAgent#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#workspace_id DataDatabricksGenieAgent#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksGenieAgentDefinitionBenchmarksOutputReference <a name="DataDatabricksGenieAgentDefinitionBenchmarksOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.putQuestions">putQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resetQuestions">resetQuestions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQuestions` <a name="putQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.putQuestions"></a>

```typescript
public putQuestions(value: IResolvable | DataDatabricksGenieAgentDefinitionBenchmarksQuestions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.putQuestions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>[]

---

##### `resetQuestions` <a name="resetQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resetQuestions"></a>

```typescript
public resetQuestions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.questions">questions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.questionsInput">questionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `questions`<sup>Required</sup> <a name="questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.questions"></a>

```typescript
public readonly questions: DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList</a>

---

##### `questionsInput`<sup>Optional</sup> <a name="questionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.questionsInput"></a>

```typescript
public readonly questionsInput: IResolvable | DataDatabricksGenieAgentDefinitionBenchmarksQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionBenchmarks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a>

---


### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]

---


### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>

---


### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionBenchmarksQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>[]

---


### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer">putAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resetAnswer">resetAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote">resetEvaluationNote</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnswer` <a name="putAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer"></a>

```typescript
public putAnswer(value: IResolvable | DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]

---

##### `resetAnswer` <a name="resetAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resetAnswer"></a>

```typescript
public resetAnswer(): void
```

##### `resetEvaluationNote` <a name="resetEvaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote"></a>

```typescript
public resetEvaluationNote(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answer">answer</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answerInput">answerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput">evaluationNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.questionInput">questionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote">evaluationNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.question">question</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `answer`<sup>Required</sup> <a name="answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answer"></a>

```typescript
public readonly answer: DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList</a>

---

##### `answerInput`<sup>Optional</sup> <a name="answerInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answerInput"></a>

```typescript
public readonly answerInput: IResolvable | DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]

---

##### `evaluationNoteInput`<sup>Optional</sup> <a name="evaluationNoteInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput"></a>

```typescript
public readonly evaluationNoteInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `questionInput`<sup>Optional</sup> <a name="questionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.questionInput"></a>

```typescript
public readonly questionInput: string;
```

- *Type:* string

---

##### `evaluationNote`<sup>Required</sup> <a name="evaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote"></a>

```typescript
public readonly evaluationNote: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionBenchmarksQuestions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>

---


### DataDatabricksGenieAgentDefinitionConfigOutputReference <a name="DataDatabricksGenieAgentDefinitionConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.putSampleQuestions">putSampleQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resetSampleQuestions">resetSampleQuestions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSampleQuestions` <a name="putSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.putSampleQuestions"></a>

```typescript
public putSampleQuestions(value: IResolvable | DataDatabricksGenieAgentDefinitionConfigSampleQuestions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.putSampleQuestions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>[]

---

##### `resetSampleQuestions` <a name="resetSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resetSampleQuestions"></a>

```typescript
public resetSampleQuestions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.sampleQuestions">sampleQuestions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList">DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.sampleQuestionsInput">sampleQuestionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sampleQuestions`<sup>Required</sup> <a name="sampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.sampleQuestions"></a>

```typescript
public readonly sampleQuestions: DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList">DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList</a>

---

##### `sampleQuestionsInput`<sup>Optional</sup> <a name="sampleQuestionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.sampleQuestionsInput"></a>

```typescript
public readonly sampleQuestionsInput: IResolvable | DataDatabricksGenieAgentDefinitionConfigSampleQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a>

---


### DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList <a name="DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionConfigSampleQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>[]

---


### DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference <a name="DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.questionInput">questionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.question">question</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `questionInput`<sup>Optional</sup> <a name="questionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.questionInput"></a>

```typescript
public readonly questionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionConfigSampleQuestions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>

---


### DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList <a name="DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>[]

---


### DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput">mcpConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection">mcpConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mcpConnectionInput`<sup>Optional</sup> <a name="mcpConnectionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput"></a>

```typescript
public readonly mcpConnectionInput: string;
```

- *Type:* string

---

##### `mcpConnection`<sup>Required</sup> <a name="mcpConnection" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection"></a>

```typescript
public readonly mcpConnection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>

---


### DataDatabricksGenieAgentDefinitionDataSourcesOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putMcpConnections">putMcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putTables">putTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetMcpConnections">resetMcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetTables">resetTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMcpConnections` <a name="putMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putMcpConnections"></a>

```typescript
public putMcpConnections(value: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putMcpConnections.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>[]

---

##### `putTables` <a name="putTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putTables"></a>

```typescript
public putTables(value: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesTables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putTables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>[]

---

##### `putVolumes` <a name="putVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putVolumes"></a>

```typescript
public putVolumes(value: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>[]

---

##### `resetMcpConnections` <a name="resetMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetMcpConnections"></a>

```typescript
public resetMcpConnections(): void
```

##### `resetTables` <a name="resetTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetTables"></a>

```typescript
public resetTables(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetVolumes"></a>

```typescript
public resetVolumes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.mcpConnections">mcpConnections</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.tables">tables</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList">DataDatabricksGenieAgentDefinitionDataSourcesTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList">DataDatabricksGenieAgentDefinitionDataSourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.mcpConnectionsInput">mcpConnectionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.tablesInput">tablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.volumesInput">volumesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mcpConnections`<sup>Required</sup> <a name="mcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.mcpConnections"></a>

```typescript
public readonly mcpConnections: DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList</a>

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.tables"></a>

```typescript
public readonly tables: DataDatabricksGenieAgentDefinitionDataSourcesTablesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList">DataDatabricksGenieAgentDefinitionDataSourcesTablesList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.volumes"></a>

```typescript
public readonly volumes: DataDatabricksGenieAgentDefinitionDataSourcesVolumesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList">DataDatabricksGenieAgentDefinitionDataSourcesVolumesList</a>

---

##### `mcpConnectionsInput`<sup>Optional</sup> <a name="mcpConnectionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.mcpConnectionsInput"></a>

```typescript
public readonly mcpConnectionsInput: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>[]

---

##### `tablesInput`<sup>Optional</sup> <a name="tablesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.tablesInput"></a>

```typescript
public readonly tablesInput: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesTables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>[]

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.volumesInput"></a>

```typescript
public readonly volumesInput: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionDataSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a>

---


### DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]

---


### DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching">resetEnableEntityMatching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance">resetEnableFormatAssistance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnableEntityMatching` <a name="resetEnableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching"></a>

```typescript
public resetEnableEntityMatching(): void
```

##### `resetEnableFormatAssistance` <a name="resetEnableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance"></a>

```typescript
public resetEnableFormatAssistance(): void
```

##### `resetExclude` <a name="resetExclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude"></a>

```typescript
public resetExclude(): void
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput">columnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput">enableEntityMatchingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput">enableFormatAssistanceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput">excludeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column">column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching">enableEntityMatching</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance">enableFormatAssistance</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude">exclude</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableEntityMatchingInput`<sup>Optional</sup> <a name="enableEntityMatchingInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput"></a>

```typescript
public readonly enableEntityMatchingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableFormatAssistanceInput`<sup>Optional</sup> <a name="enableFormatAssistanceInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput"></a>

```typescript
public readonly enableFormatAssistanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: string[];
```

- *Type:* string[]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableEntityMatching`<sup>Required</sup> <a name="enableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching"></a>

```typescript
public readonly enableEntityMatching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableFormatAssistance`<sup>Required</sup> <a name="enableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance"></a>

```typescript
public readonly enableFormatAssistance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude"></a>

```typescript
public readonly exclude: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>

---


### DataDatabricksGenieAgentDefinitionDataSourcesTablesList <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesTables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>[]

---


### DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs">putColumnConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resetColumnConfigs">resetColumnConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnConfigs` <a name="putColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs"></a>

```typescript
public putColumnConfigs(value: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]

---

##### `resetColumnConfigs` <a name="resetColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resetColumnConfigs"></a>

```typescript
public resetColumnConfigs(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigs">columnConfigs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput">columnConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnConfigs`<sup>Required</sup> <a name="columnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigs"></a>

```typescript
public readonly columnConfigs: DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList</a>

---

##### `columnConfigsInput`<sup>Optional</sup> <a name="columnConfigsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput"></a>

```typescript
public readonly columnConfigsInput: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesTables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>

---


### DataDatabricksGenieAgentDefinitionDataSourcesVolumesList <a name="DataDatabricksGenieAgentDefinitionDataSourcesVolumesList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>[]

---


### DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesVolumes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance">resetUsageGuidance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

---

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetUsageGuidance` <a name="resetUsageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance"></a>

```typescript
public resetUsageGuidance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput">questionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput">usageGuidanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question">question</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance">usageGuidance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

---

##### `questionInput`<sup>Optional</sup> <a name="questionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput"></a>

```typescript
public readonly questionInput: string;
```

- *Type:* string

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `usageGuidanceInput`<sup>Optional</sup> <a name="usageGuidanceInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput"></a>

```typescript
public readonly usageGuidanceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `usageGuidance`<sup>Required</sup> <a name="usageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance"></a>

```typescript
public readonly usageGuidance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange">putValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange">resetValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueRange` <a name="putValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange"></a>

```typescript
public putValueRange(value: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `resetValueRange` <a name="resetValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange"></a>

```typescript
public resetValueRange(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange">valueRange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput">valueRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueRange`<sup>Required</sup> <a name="valueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange"></a>

```typescript
public readonly valueRange: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a>

---

##### `valueRangeInput`<sup>Optional</sup> <a name="valueRangeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput"></a>

```typescript
public readonly valueRangeInput: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax"></a>

```typescript
public resetMax(): void
```

##### `resetMin` <a name="resetMin" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin"></a>

```typescript
public resetMin(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput">maxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput">minInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max">max</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min">min</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: string;
```

- *Type:* string

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max"></a>

```typescript
public readonly max: string;
```

- *Type:* string

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min"></a>

```typescript
public readonly min: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue">putDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint">resetTypeHint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultValue` <a name="putDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue"></a>

```typescript
public putDefaultValue(value: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTypeHint` <a name="resetTypeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint"></a>

```typescript
public resetTypeHint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput">typeHintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint">typeHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeHintInput`<sup>Optional</sup> <a name="typeHintInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput"></a>

```typescript
public readonly typeHintInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `typeHint`<sup>Required</sup> <a name="typeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint"></a>

```typescript
public readonly typeHint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias">resetAlias</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>[]

---


### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft">putLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight">putRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType">resetRelationshipType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLeft` <a name="putLeft" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft"></a>

```typescript
public putLeft(value: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---

##### `putRight` <a name="putRight" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight"></a>

```typescript
public putRight(value: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetRelationshipType` <a name="resetRelationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType"></a>

```typescript
public resetRelationshipType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.left">left</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.right">right</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.leftInput">leftInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput">relationshipTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.rightInput">rightInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType">relationshipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.left"></a>

```typescript
public readonly left: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference</a>

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.right"></a>

```typescript
public readonly right: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `leftInput`<sup>Optional</sup> <a name="leftInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.leftInput"></a>

```typescript
public readonly leftInput: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---

##### `relationshipTypeInput`<sup>Optional</sup> <a name="relationshipTypeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput"></a>

```typescript
public readonly relationshipTypeInput: string;
```

- *Type:* string

---

##### `rightInput`<sup>Optional</sup> <a name="rightInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.rightInput"></a>

```typescript
public readonly rightInput: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a>

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `relationshipType`<sup>Required</sup> <a name="relationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType"></a>

```typescript
public readonly relationshipType: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias">resetAlias</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls">putExampleQuestionSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putJoinSpecs">putJoinSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlFunctions">putSqlFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlSnippets">putSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putTextInstructions">putTextInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetExampleQuestionSqls">resetExampleQuestionSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetJoinSpecs">resetJoinSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetSqlFunctions">resetSqlFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetSqlSnippets">resetSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetTextInstructions">resetTextInstructions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExampleQuestionSqls` <a name="putExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls"></a>

```typescript
public putExampleQuestionSqls(value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]

---

##### `putJoinSpecs` <a name="putJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putJoinSpecs"></a>

```typescript
public putJoinSpecs(value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putJoinSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>[]

---

##### `putSqlFunctions` <a name="putSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlFunctions"></a>

```typescript
public putSqlFunctions(value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlFunctions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>[]

---

##### `putSqlSnippets` <a name="putSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlSnippets"></a>

```typescript
public putSqlSnippets(value: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlSnippets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a>

---

##### `putTextInstructions` <a name="putTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putTextInstructions"></a>

```typescript
public putTextInstructions(value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsTextInstructions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putTextInstructions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>[]

---

##### `resetExampleQuestionSqls` <a name="resetExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetExampleQuestionSqls"></a>

```typescript
public resetExampleQuestionSqls(): void
```

##### `resetJoinSpecs` <a name="resetJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetJoinSpecs"></a>

```typescript
public resetJoinSpecs(): void
```

##### `resetSqlFunctions` <a name="resetSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetSqlFunctions"></a>

```typescript
public resetSqlFunctions(): void
```

##### `resetSqlSnippets` <a name="resetSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetSqlSnippets"></a>

```typescript
public resetSqlSnippets(): void
```

##### `resetTextInstructions` <a name="resetTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetTextInstructions"></a>

```typescript
public resetTextInstructions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqls">exampleQuestionSqls</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.joinSpecs">joinSpecs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlFunctions">sqlFunctions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlSnippets">sqlSnippets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.textInstructions">textInstructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList">DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput">exampleQuestionSqlsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.joinSpecsInput">joinSpecsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlFunctionsInput">sqlFunctionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlSnippetsInput">sqlSnippetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.textInstructionsInput">textInstructionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exampleQuestionSqls`<sup>Required</sup> <a name="exampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqls"></a>

```typescript
public readonly exampleQuestionSqls: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList</a>

---

##### `joinSpecs`<sup>Required</sup> <a name="joinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.joinSpecs"></a>

```typescript
public readonly joinSpecs: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList</a>

---

##### `sqlFunctions`<sup>Required</sup> <a name="sqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlFunctions"></a>

```typescript
public readonly sqlFunctions: DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList</a>

---

##### `sqlSnippets`<sup>Required</sup> <a name="sqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlSnippets"></a>

```typescript
public readonly sqlSnippets: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference</a>

---

##### `textInstructions`<sup>Required</sup> <a name="textInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.textInstructions"></a>

```typescript
public readonly textInstructions: DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList">DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList</a>

---

##### `exampleQuestionSqlsInput`<sup>Optional</sup> <a name="exampleQuestionSqlsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput"></a>

```typescript
public readonly exampleQuestionSqlsInput: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]

---

##### `joinSpecsInput`<sup>Optional</sup> <a name="joinSpecsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.joinSpecsInput"></a>

```typescript
public readonly joinSpecsInput: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>[]

---

##### `sqlFunctionsInput`<sup>Optional</sup> <a name="sqlFunctionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlFunctionsInput"></a>

```typescript
public readonly sqlFunctionsInput: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>[]

---

##### `sqlSnippetsInput`<sup>Optional</sup> <a name="sqlSnippetsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlSnippetsInput"></a>

```typescript
public readonly sqlSnippetsInput: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a>

---

##### `textInstructionsInput`<sup>Optional</sup> <a name="textInstructionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.textInstructionsInput"></a>

```typescript
public readonly textInstructionsInput: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsTextInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>[]

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: string[];
```

- *Type:* string[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: string[];
```

- *Type:* string[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions">putExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures">putMeasures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions">resetExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures">resetMeasures</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpressions` <a name="putExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions"></a>

```typescript
public putExpressions(value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]

---

##### `putFilters` <a name="putFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters"></a>

```typescript
public putFilters(value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]

---

##### `putMeasures` <a name="putMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures"></a>

```typescript
public putMeasures(value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]

---

##### `resetExpressions` <a name="resetExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions"></a>

```typescript
public resetExpressions(): void
```

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetMeasures` <a name="resetMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures"></a>

```typescript
public resetMeasures(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressions">expressions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measures">measures</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput">expressionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput">filtersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput">measuresInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressions`<sup>Required</sup> <a name="expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressions"></a>

```typescript
public readonly expressions: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filters"></a>

```typescript
public readonly filters: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList</a>

---

##### `measures`<sup>Required</sup> <a name="measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measures"></a>

```typescript
public readonly measures: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList</a>

---

##### `expressionsInput`<sup>Optional</sup> <a name="expressionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput"></a>

```typescript
public readonly expressionsInput: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput"></a>

```typescript
public readonly filtersInput: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]

---

##### `measuresInput`<sup>Optional</sup> <a name="measuresInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput"></a>

```typescript
public readonly measuresInput: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList <a name="DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsTextInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>[]

---


### DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsTextInstructions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>

---


### DataDatabricksGenieAgentDefinitionOutputReference <a name="DataDatabricksGenieAgentDefinitionOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putBenchmarks">putBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putDataSources">putDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putInstructions">putInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetBenchmarks">resetBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetDataSources">resetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetInstructions">resetInstructions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBenchmarks` <a name="putBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putBenchmarks"></a>

```typescript
public putBenchmarks(value: DataDatabricksGenieAgentDefinitionBenchmarks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putBenchmarks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a>

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putConfig"></a>

```typescript
public putConfig(value: DataDatabricksGenieAgentDefinitionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a>

---

##### `putDataSources` <a name="putDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putDataSources"></a>

```typescript
public putDataSources(value: DataDatabricksGenieAgentDefinitionDataSources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a>

---

##### `putInstructions` <a name="putInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putInstructions"></a>

```typescript
public putInstructions(value: DataDatabricksGenieAgentDefinitionInstructions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putInstructions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a>

---

##### `resetBenchmarks` <a name="resetBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetBenchmarks"></a>

```typescript
public resetBenchmarks(): void
```

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetDataSources` <a name="resetDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetDataSources"></a>

```typescript
public resetDataSources(): void
```

##### `resetInstructions` <a name="resetInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetInstructions"></a>

```typescript
public resetInstructions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.benchmarks">benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference">DataDatabricksGenieAgentDefinitionBenchmarksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference">DataDatabricksGenieAgentDefinitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference">DataDatabricksGenieAgentDefinitionDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.instructions">instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference">DataDatabricksGenieAgentDefinitionInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.benchmarksInput">benchmarksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.configInput">configInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.dataSourcesInput">dataSourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.instructionsInput">instructionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition">DataDatabricksGenieAgentDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `benchmarks`<sup>Required</sup> <a name="benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.benchmarks"></a>

```typescript
public readonly benchmarks: DataDatabricksGenieAgentDefinitionBenchmarksOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference">DataDatabricksGenieAgentDefinitionBenchmarksOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.config"></a>

```typescript
public readonly config: DataDatabricksGenieAgentDefinitionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference">DataDatabricksGenieAgentDefinitionConfigOutputReference</a>

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.dataSources"></a>

```typescript
public readonly dataSources: DataDatabricksGenieAgentDefinitionDataSourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference">DataDatabricksGenieAgentDefinitionDataSourcesOutputReference</a>

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.instructions"></a>

```typescript
public readonly instructions: DataDatabricksGenieAgentDefinitionInstructionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference">DataDatabricksGenieAgentDefinitionInstructionsOutputReference</a>

---

##### `benchmarksInput`<sup>Optional</sup> <a name="benchmarksInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.benchmarksInput"></a>

```typescript
public readonly benchmarksInput: IResolvable | DataDatabricksGenieAgentDefinitionBenchmarks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | DataDatabricksGenieAgentDefinitionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a>

---

##### `dataSourcesInput`<sup>Optional</sup> <a name="dataSourcesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.dataSourcesInput"></a>

```typescript
public readonly dataSourcesInput: IResolvable | DataDatabricksGenieAgentDefinitionDataSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a>

---

##### `instructionsInput`<sup>Optional</sup> <a name="instructionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.instructionsInput"></a>

```typescript
public readonly instructionsInput: IResolvable | DataDatabricksGenieAgentDefinitionInstructions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksGenieAgentDefinition;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition">DataDatabricksGenieAgentDefinition</a>

---


### DataDatabricksGenieAgentProviderConfigOutputReference <a name="DataDatabricksGenieAgentProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgent } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a>

---



