# `dataDatabricksGenieAgents` Submodule <a name="`dataDatabricksGenieAgents` Submodule" id="@cdktn/provider-databricks.dataDatabricksGenieAgents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksGenieAgents <a name="DataDatabricksGenieAgents" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents databricks_genie_agents}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgents(scope: Construct, id: string, config?: DataDatabricksGenieAgentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig">DataDatabricksGenieAgentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig">DataDatabricksGenieAgentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetView">resetView</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksGenieAgentsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetView` <a name="resetView" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetView"></a>

```typescript
public resetView(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksGenieAgents resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isConstruct"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

dataDatabricksGenieAgents.DataDatabricksGenieAgents.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformElement"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformDataSource"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksGenieAgents resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksGenieAgents to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksGenieAgents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksGenieAgents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.genieAgents">genieAgents</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList">DataDatabricksGenieAgentsGenieAgentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference">DataDatabricksGenieAgentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.viewInput">viewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.view">view</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `genieAgents`<sup>Required</sup> <a name="genieAgents" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.genieAgents"></a>

```typescript
public readonly genieAgents: DataDatabricksGenieAgentsGenieAgentsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList">DataDatabricksGenieAgentsGenieAgentsList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksGenieAgentsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference">DataDatabricksGenieAgentsProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksGenieAgentsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a>

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.viewInput"></a>

```typescript
public readonly viewInput: string;
```

- *Type:* string

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.view"></a>

```typescript
public readonly view: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksGenieAgentsConfig <a name="DataDatabricksGenieAgentsConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsConfig: dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#page_size DataDatabricksGenieAgents#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.view">view</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#view DataDatabricksGenieAgents#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#page_size DataDatabricksGenieAgents#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksGenieAgentsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.view"></a>

```typescript
public readonly view: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#view DataDatabricksGenieAgents#view}.

---

### DataDatabricksGenieAgentsGenieAgents <a name="DataDatabricksGenieAgentsGenieAgents" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgents: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksGenieAgentsGenieAgentsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinition <a name="DataDatabricksGenieAgentsGenieAgentsDefinition" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinition: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.benchmarks">benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#benchmarks DataDatabricksGenieAgents#benchmarks}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#config DataDatabricksGenieAgents#config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#data_sources DataDatabricksGenieAgents#data_sources}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.instructions">instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instructions DataDatabricksGenieAgents#instructions}. |

---

##### `benchmarks`<sup>Optional</sup> <a name="benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.benchmarks"></a>

```typescript
public readonly benchmarks: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#benchmarks DataDatabricksGenieAgents#benchmarks}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.config"></a>

```typescript
public readonly config: DataDatabricksGenieAgentsGenieAgentsDefinitionConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#config DataDatabricksGenieAgents#config}.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.dataSources"></a>

```typescript
public readonly dataSources: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#data_sources DataDatabricksGenieAgents#data_sources}.

---

##### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.instructions"></a>

```typescript
public readonly instructions: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instructions DataDatabricksGenieAgents#instructions}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks.property.questions">questions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#questions DataDatabricksGenieAgents#questions}. |

---

##### `questions`<sup>Optional</sup> <a name="questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks.property.questions"></a>

```typescript
public readonly questions: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#questions DataDatabricksGenieAgents#questions}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.question">question</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.answer">answer</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#answer DataDatabricksGenieAgents#answer}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.evaluationNote">evaluationNote</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#evaluation_note DataDatabricksGenieAgents#evaluation_note}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}.

---

##### `answer`<sup>Optional</sup> <a name="answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.answer"></a>

```typescript
public readonly answer: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#answer DataDatabricksGenieAgents#answer}.

---

##### `evaluationNote`<sup>Optional</sup> <a name="evaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.evaluationNote"></a>

```typescript
public readonly evaluationNote: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#evaluation_note DataDatabricksGenieAgents#evaluation_note}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#format DataDatabricksGenieAgents#format}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#format DataDatabricksGenieAgents#format}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionConfig <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionConfig: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig.property.sampleQuestions">sampleQuestions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sample_questions DataDatabricksGenieAgents#sample_questions}. |

---

##### `sampleQuestions`<sup>Optional</sup> <a name="sampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig.property.sampleQuestions"></a>

```typescript
public readonly sampleQuestions: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sample_questions DataDatabricksGenieAgents#sample_questions}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.property.question">question</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionDataSources: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.mcpConnections">mcpConnections</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connections DataDatabricksGenieAgents#mcp_connections}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.tables">tables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#tables DataDatabricksGenieAgents#tables}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.volumes">volumes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#volumes DataDatabricksGenieAgents#volumes}. |

---

##### `mcpConnections`<sup>Optional</sup> <a name="mcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.mcpConnections"></a>

```typescript
public readonly mcpConnections: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connections DataDatabricksGenieAgents#mcp_connections}.

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.tables"></a>

```typescript
public readonly tables: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#tables DataDatabricksGenieAgents#tables}.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.volumes"></a>

```typescript
public readonly volumes: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#volumes DataDatabricksGenieAgents#volumes}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections.property.mcpConnection">mcpConnection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connection DataDatabricksGenieAgents#mcp_connection}. |

---

##### `mcpConnection`<sup>Required</sup> <a name="mcpConnection" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections.property.mcpConnection"></a>

```typescript
public readonly mcpConnection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connection DataDatabricksGenieAgents#mcp_connection}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.columnConfigs">columnConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column_configs DataDatabricksGenieAgents#column_configs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

##### `columnConfigs`<sup>Optional</sup> <a name="columnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.columnConfigs"></a>

```typescript
public readonly columnConfigs: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column_configs DataDatabricksGenieAgents#column_configs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.column">column</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column DataDatabricksGenieAgents#column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching">enableEntityMatching</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_entity_matching DataDatabricksGenieAgents#enable_entity_matching}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance">enableFormatAssistance</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_format_assistance DataDatabricksGenieAgents#enable_format_assistance}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.exclude">exclude</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#exclude DataDatabricksGenieAgents#exclude}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.synonyms">synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column DataDatabricksGenieAgents#column}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}.

---

##### `enableEntityMatching`<sup>Optional</sup> <a name="enableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching"></a>

```typescript
public readonly enableEntityMatching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_entity_matching DataDatabricksGenieAgents#enable_entity_matching}.

---

##### `enableFormatAssistance`<sup>Optional</sup> <a name="enableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance"></a>

```typescript
public readonly enableFormatAssistance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_format_assistance DataDatabricksGenieAgents#enable_format_assistance}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.exclude"></a>

```typescript
public readonly exclude: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#exclude DataDatabricksGenieAgents#exclude}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#path DataDatabricksGenieAgents#path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#path DataDatabricksGenieAgents#path}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionInstructions: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.exampleQuestionSqls">exampleQuestionSqls</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#example_question_sqls DataDatabricksGenieAgents#example_question_sqls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.joinSpecs">joinSpecs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#join_specs DataDatabricksGenieAgents#join_specs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.sqlFunctions">sqlFunctions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_functions DataDatabricksGenieAgents#sql_functions}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.sqlSnippets">sqlSnippets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_snippets DataDatabricksGenieAgents#sql_snippets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.textInstructions">textInstructions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#text_instructions DataDatabricksGenieAgents#text_instructions}. |

---

##### `exampleQuestionSqls`<sup>Optional</sup> <a name="exampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.exampleQuestionSqls"></a>

```typescript
public readonly exampleQuestionSqls: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#example_question_sqls DataDatabricksGenieAgents#example_question_sqls}.

---

##### `joinSpecs`<sup>Optional</sup> <a name="joinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.joinSpecs"></a>

```typescript
public readonly joinSpecs: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#join_specs DataDatabricksGenieAgents#join_specs}.

---

##### `sqlFunctions`<sup>Optional</sup> <a name="sqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.sqlFunctions"></a>

```typescript
public readonly sqlFunctions: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_functions DataDatabricksGenieAgents#sql_functions}.

---

##### `sqlSnippets`<sup>Optional</sup> <a name="sqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.sqlSnippets"></a>

```typescript
public readonly sqlSnippets: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_snippets DataDatabricksGenieAgents#sql_snippets}.

---

##### `textInstructions`<sup>Optional</sup> <a name="textInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.textInstructions"></a>

```typescript
public readonly textInstructions: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#text_instructions DataDatabricksGenieAgents#text_instructions}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.question">question</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#parameters DataDatabricksGenieAgents#parameters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.usageGuidance">usageGuidance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#usage_guidance DataDatabricksGenieAgents#usage_guidance}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#parameters DataDatabricksGenieAgents#parameters}.

---

##### `usageGuidance`<sup>Optional</sup> <a name="usageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.usageGuidance"></a>

```typescript
public readonly usageGuidance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#usage_guidance DataDatabricksGenieAgents#usage_guidance}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#default_value DataDatabricksGenieAgents#default_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint">typeHint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#type_hint DataDatabricksGenieAgents#type_hint}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue"></a>

```typescript
public readonly defaultValue: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#default_value DataDatabricksGenieAgents#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}.

---

##### `typeHint`<sup>Optional</sup> <a name="typeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint"></a>

```typescript
public readonly typeHint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#type_hint DataDatabricksGenieAgents#type_hint}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange">valueRange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#value_range DataDatabricksGenieAgents#value_range}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#values DataDatabricksGenieAgents#values}. |

---

##### `valueRange`<sup>Optional</sup> <a name="valueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange"></a>

```typescript
public readonly valueRange: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#value_range DataDatabricksGenieAgents#value_range}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#values DataDatabricksGenieAgents#values}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max">max</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#max DataDatabricksGenieAgents#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min">min</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#min DataDatabricksGenieAgents#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max"></a>

```typescript
public readonly max: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#max DataDatabricksGenieAgents#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min"></a>

```typescript
public readonly min: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#min DataDatabricksGenieAgents#min}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.left">left</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#left DataDatabricksGenieAgents#left}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.right">right</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#right DataDatabricksGenieAgents#right}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#comment DataDatabricksGenieAgents#comment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.instruction">instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.relationshipType">relationshipType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#relationship_type DataDatabricksGenieAgents#relationship_type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.left"></a>

```typescript
public readonly left: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#left DataDatabricksGenieAgents#left}.

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.right"></a>

```typescript
public readonly right: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#right DataDatabricksGenieAgents#right}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#comment DataDatabricksGenieAgents#comment}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}.

---

##### `relationshipType`<sup>Optional</sup> <a name="relationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.relationshipType"></a>

```typescript
public readonly relationshipType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#relationship_type DataDatabricksGenieAgents#relationship_type}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.expressions">expressions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#expressions DataDatabricksGenieAgents#expressions}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.filters">filters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#filters DataDatabricksGenieAgents#filters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.measures">measures</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#measures DataDatabricksGenieAgents#measures}. |

---

##### `expressions`<sup>Optional</sup> <a name="expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.expressions"></a>

```typescript
public readonly expressions: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#expressions DataDatabricksGenieAgents#expressions}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.filters"></a>

```typescript
public readonly filters: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#filters DataDatabricksGenieAgents#filters}.

---

##### `measures`<sup>Optional</sup> <a name="measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.measures"></a>

```typescript
public readonly measures: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#measures DataDatabricksGenieAgents#measures}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.instruction">instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.synonyms">synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.instruction">instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.synonyms">synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.instruction">instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.synonyms">synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksGenieAgentsGenieAgentsProviderConfig <a name="DataDatabricksGenieAgentsGenieAgentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsGenieAgentsProviderConfig: dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}.

---

### DataDatabricksGenieAgentsProviderConfig <a name="DataDatabricksGenieAgentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

const dataDatabricksGenieAgentsProviderConfig: dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.putQuestions">putQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resetQuestions">resetQuestions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQuestions` <a name="putQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.putQuestions"></a>

```typescript
public putQuestions(value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.putQuestions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>[]

---

##### `resetQuestions` <a name="resetQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resetQuestions"></a>

```typescript
public resetQuestions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.questions">questions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.questionsInput">questionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `questions`<sup>Required</sup> <a name="questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.questions"></a>

```typescript
public readonly questions: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList</a>

---

##### `questionsInput`<sup>Optional</sup> <a name="questionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.questionsInput"></a>

```typescript
public readonly questionsInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>[]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>[]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.putAnswer">putAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resetAnswer">resetAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote">resetEvaluationNote</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnswer` <a name="putAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.putAnswer"></a>

```typescript
public putAnswer(value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.putAnswer.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>[]

---

##### `resetAnswer` <a name="resetAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resetAnswer"></a>

```typescript
public resetAnswer(): void
```

##### `resetEvaluationNote` <a name="resetEvaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote"></a>

```typescript
public resetEvaluationNote(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.answer">answer</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.answerInput">answerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput">evaluationNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.questionInput">questionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote">evaluationNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.question">question</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `answer`<sup>Required</sup> <a name="answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.answer"></a>

```typescript
public readonly answer: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList</a>

---

##### `answerInput`<sup>Optional</sup> <a name="answerInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.answerInput"></a>

```typescript
public readonly answerInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>[]

---

##### `evaluationNoteInput`<sup>Optional</sup> <a name="evaluationNoteInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput"></a>

```typescript
public readonly evaluationNoteInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `questionInput`<sup>Optional</sup> <a name="questionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.questionInput"></a>

```typescript
public readonly questionInput: string;
```

- *Type:* string

---

##### `evaluationNote`<sup>Required</sup> <a name="evaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote"></a>

```typescript
public readonly evaluationNote: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.putSampleQuestions">putSampleQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resetSampleQuestions">resetSampleQuestions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSampleQuestions` <a name="putSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.putSampleQuestions"></a>

```typescript
public putSampleQuestions(value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.putSampleQuestions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>[]

---

##### `resetSampleQuestions` <a name="resetSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resetSampleQuestions"></a>

```typescript
public resetSampleQuestions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.sampleQuestions">sampleQuestions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.sampleQuestionsInput">sampleQuestionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sampleQuestions`<sup>Required</sup> <a name="sampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.sampleQuestions"></a>

```typescript
public readonly sampleQuestions: DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList</a>

---

##### `sampleQuestionsInput`<sup>Optional</sup> <a name="sampleQuestionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.sampleQuestionsInput"></a>

```typescript
public readonly sampleQuestionsInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>[]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.questionInput">questionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.question">question</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `questionInput`<sup>Optional</sup> <a name="questionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.questionInput"></a>

```typescript
public readonly questionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>[]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput">mcpConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection">mcpConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mcpConnectionInput`<sup>Optional</sup> <a name="mcpConnectionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput"></a>

```typescript
public readonly mcpConnectionInput: string;
```

- *Type:* string

---

##### `mcpConnection`<sup>Required</sup> <a name="mcpConnection" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection"></a>

```typescript
public readonly mcpConnection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putMcpConnections">putMcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putTables">putTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetMcpConnections">resetMcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetTables">resetTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMcpConnections` <a name="putMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putMcpConnections"></a>

```typescript
public putMcpConnections(value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putMcpConnections.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>[]

---

##### `putTables` <a name="putTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putTables"></a>

```typescript
public putTables(value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putTables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>[]

---

##### `putVolumes` <a name="putVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putVolumes"></a>

```typescript
public putVolumes(value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>[]

---

##### `resetMcpConnections` <a name="resetMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetMcpConnections"></a>

```typescript
public resetMcpConnections(): void
```

##### `resetTables` <a name="resetTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetTables"></a>

```typescript
public resetTables(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetVolumes"></a>

```typescript
public resetVolumes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.mcpConnections">mcpConnections</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.tables">tables</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.mcpConnectionsInput">mcpConnectionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.tablesInput">tablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.volumesInput">volumesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mcpConnections`<sup>Required</sup> <a name="mcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.mcpConnections"></a>

```typescript
public readonly mcpConnections: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList</a>

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.tables"></a>

```typescript
public readonly tables: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.volumes"></a>

```typescript
public readonly volumes: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList</a>

---

##### `mcpConnectionsInput`<sup>Optional</sup> <a name="mcpConnectionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.mcpConnectionsInput"></a>

```typescript
public readonly mcpConnectionsInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>[]

---

##### `tablesInput`<sup>Optional</sup> <a name="tablesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.tablesInput"></a>

```typescript
public readonly tablesInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>[]

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.volumesInput"></a>

```typescript
public readonly volumesInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>[]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching">resetEnableEntityMatching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance">resetEnableFormatAssistance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnableEntityMatching` <a name="resetEnableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching"></a>

```typescript
public resetEnableEntityMatching(): void
```

##### `resetEnableFormatAssistance` <a name="resetEnableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance"></a>

```typescript
public resetEnableFormatAssistance(): void
```

##### `resetExclude` <a name="resetExclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude"></a>

```typescript
public resetExclude(): void
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput">columnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput">enableEntityMatchingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput">enableFormatAssistanceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput">excludeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column">column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching">enableEntityMatching</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance">enableFormatAssistance</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude">exclude</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableEntityMatchingInput`<sup>Optional</sup> <a name="enableEntityMatchingInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput"></a>

```typescript
public readonly enableEntityMatchingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableFormatAssistanceInput`<sup>Optional</sup> <a name="enableFormatAssistanceInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput"></a>

```typescript
public readonly enableFormatAssistanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: string[];
```

- *Type:* string[]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableEntityMatching`<sup>Required</sup> <a name="enableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching"></a>

```typescript
public readonly enableEntityMatching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableFormatAssistance`<sup>Required</sup> <a name="enableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance"></a>

```typescript
public readonly enableFormatAssistance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude"></a>

```typescript
public readonly exclude: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>[]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.putColumnConfigs">putColumnConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resetColumnConfigs">resetColumnConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnConfigs` <a name="putColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.putColumnConfigs"></a>

```typescript
public putColumnConfigs(value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.putColumnConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>[]

---

##### `resetColumnConfigs` <a name="resetColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resetColumnConfigs"></a>

```typescript
public resetColumnConfigs(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.columnConfigs">columnConfigs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput">columnConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnConfigs`<sup>Required</sup> <a name="columnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.columnConfigs"></a>

```typescript
public readonly columnConfigs: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList</a>

---

##### `columnConfigsInput`<sup>Optional</sup> <a name="columnConfigsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput"></a>

```typescript
public readonly columnConfigsInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>[]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>[]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance">resetUsageGuidance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

---

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetUsageGuidance` <a name="resetUsageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance"></a>

```typescript
public resetUsageGuidance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput">questionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput">usageGuidanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question">question</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance">usageGuidance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

---

##### `questionInput`<sup>Optional</sup> <a name="questionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput"></a>

```typescript
public readonly questionInput: string;
```

- *Type:* string

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `usageGuidanceInput`<sup>Optional</sup> <a name="usageGuidanceInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput"></a>

```typescript
public readonly usageGuidanceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question"></a>

```typescript
public readonly question: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `usageGuidance`<sup>Required</sup> <a name="usageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance"></a>

```typescript
public readonly usageGuidance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange">putValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange">resetValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueRange` <a name="putValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange"></a>

```typescript
public putValueRange(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `resetValueRange` <a name="resetValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange"></a>

```typescript
public resetValueRange(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange">valueRange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput">valueRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueRange`<sup>Required</sup> <a name="valueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange"></a>

```typescript
public readonly valueRange: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a>

---

##### `valueRangeInput`<sup>Optional</sup> <a name="valueRangeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput"></a>

```typescript
public readonly valueRangeInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax"></a>

```typescript
public resetMax(): void
```

##### `resetMin` <a name="resetMin" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin"></a>

```typescript
public resetMin(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput">maxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput">minInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max">max</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min">min</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: string;
```

- *Type:* string

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max"></a>

```typescript
public readonly max: string;
```

- *Type:* string

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min"></a>

```typescript
public readonly min: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue">putDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint">resetTypeHint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultValue` <a name="putDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue"></a>

```typescript
public putDefaultValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTypeHint` <a name="resetTypeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint"></a>

```typescript
public resetTypeHint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput">typeHintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint">typeHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeHintInput`<sup>Optional</sup> <a name="typeHintInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput"></a>

```typescript
public readonly typeHintInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `typeHint`<sup>Required</sup> <a name="typeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint"></a>

```typescript
public readonly typeHint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias">resetAlias</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>[]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putLeft">putLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putRight">putRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType">resetRelationshipType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLeft` <a name="putLeft" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putLeft"></a>

```typescript
public putLeft(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putLeft.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a>

---

##### `putRight` <a name="putRight" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putRight"></a>

```typescript
public putRight(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putRight.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetRelationshipType` <a name="resetRelationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType"></a>

```typescript
public resetRelationshipType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.left">left</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.right">right</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.leftInput">leftInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput">relationshipTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.rightInput">rightInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType">relationshipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.left"></a>

```typescript
public readonly left: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference</a>

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.right"></a>

```typescript
public readonly right: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `leftInput`<sup>Optional</sup> <a name="leftInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.leftInput"></a>

```typescript
public readonly leftInput: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a>

---

##### `relationshipTypeInput`<sup>Optional</sup> <a name="relationshipTypeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput"></a>

```typescript
public readonly relationshipTypeInput: string;
```

- *Type:* string

---

##### `rightInput`<sup>Optional</sup> <a name="rightInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.rightInput"></a>

```typescript
public readonly rightInput: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a>

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `relationshipType`<sup>Required</sup> <a name="relationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType"></a>

```typescript
public readonly relationshipType: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias">resetAlias</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putExampleQuestionSqls">putExampleQuestionSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putJoinSpecs">putJoinSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlFunctions">putSqlFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlSnippets">putSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putTextInstructions">putTextInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetExampleQuestionSqls">resetExampleQuestionSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetJoinSpecs">resetJoinSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetSqlFunctions">resetSqlFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetSqlSnippets">resetSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetTextInstructions">resetTextInstructions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExampleQuestionSqls` <a name="putExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putExampleQuestionSqls"></a>

```typescript
public putExampleQuestionSqls(value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putExampleQuestionSqls.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>[]

---

##### `putJoinSpecs` <a name="putJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putJoinSpecs"></a>

```typescript
public putJoinSpecs(value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putJoinSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>[]

---

##### `putSqlFunctions` <a name="putSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlFunctions"></a>

```typescript
public putSqlFunctions(value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlFunctions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>[]

---

##### `putSqlSnippets` <a name="putSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlSnippets"></a>

```typescript
public putSqlSnippets(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlSnippets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a>

---

##### `putTextInstructions` <a name="putTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putTextInstructions"></a>

```typescript
public putTextInstructions(value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putTextInstructions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>[]

---

##### `resetExampleQuestionSqls` <a name="resetExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetExampleQuestionSqls"></a>

```typescript
public resetExampleQuestionSqls(): void
```

##### `resetJoinSpecs` <a name="resetJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetJoinSpecs"></a>

```typescript
public resetJoinSpecs(): void
```

##### `resetSqlFunctions` <a name="resetSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetSqlFunctions"></a>

```typescript
public resetSqlFunctions(): void
```

##### `resetSqlSnippets` <a name="resetSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetSqlSnippets"></a>

```typescript
public resetSqlSnippets(): void
```

##### `resetTextInstructions` <a name="resetTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetTextInstructions"></a>

```typescript
public resetTextInstructions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.exampleQuestionSqls">exampleQuestionSqls</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.joinSpecs">joinSpecs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlFunctions">sqlFunctions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlSnippets">sqlSnippets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.textInstructions">textInstructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput">exampleQuestionSqlsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.joinSpecsInput">joinSpecsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlFunctionsInput">sqlFunctionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlSnippetsInput">sqlSnippetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.textInstructionsInput">textInstructionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exampleQuestionSqls`<sup>Required</sup> <a name="exampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.exampleQuestionSqls"></a>

```typescript
public readonly exampleQuestionSqls: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList</a>

---

##### `joinSpecs`<sup>Required</sup> <a name="joinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.joinSpecs"></a>

```typescript
public readonly joinSpecs: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList</a>

---

##### `sqlFunctions`<sup>Required</sup> <a name="sqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlFunctions"></a>

```typescript
public readonly sqlFunctions: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList</a>

---

##### `sqlSnippets`<sup>Required</sup> <a name="sqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlSnippets"></a>

```typescript
public readonly sqlSnippets: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference</a>

---

##### `textInstructions`<sup>Required</sup> <a name="textInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.textInstructions"></a>

```typescript
public readonly textInstructions: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList</a>

---

##### `exampleQuestionSqlsInput`<sup>Optional</sup> <a name="exampleQuestionSqlsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput"></a>

```typescript
public readonly exampleQuestionSqlsInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>[]

---

##### `joinSpecsInput`<sup>Optional</sup> <a name="joinSpecsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.joinSpecsInput"></a>

```typescript
public readonly joinSpecsInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>[]

---

##### `sqlFunctionsInput`<sup>Optional</sup> <a name="sqlFunctionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlFunctionsInput"></a>

```typescript
public readonly sqlFunctionsInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>[]

---

##### `sqlSnippetsInput`<sup>Optional</sup> <a name="sqlSnippetsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlSnippetsInput"></a>

```typescript
public readonly sqlSnippetsInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a>

---

##### `textInstructionsInput`<sup>Optional</sup> <a name="textInstructionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.textInstructionsInput"></a>

```typescript
public readonly textInstructionsInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>[]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>[]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: string[];
```

- *Type:* string[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>[]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>[]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: string[];
```

- *Type:* string[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putExpressions">putExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putMeasures">putMeasures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions">resetExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures">resetMeasures</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpressions` <a name="putExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putExpressions"></a>

```typescript
public putExpressions(value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putExpressions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>[]

---

##### `putFilters` <a name="putFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putFilters"></a>

```typescript
public putFilters(value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>[]

---

##### `putMeasures` <a name="putMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putMeasures"></a>

```typescript
public putMeasures(value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putMeasures.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>[]

---

##### `resetExpressions` <a name="resetExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions"></a>

```typescript
public resetExpressions(): void
```

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetMeasures` <a name="resetMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures"></a>

```typescript
public resetMeasures(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.expressions">expressions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.measures">measures</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput">expressionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput">filtersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput">measuresInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressions`<sup>Required</sup> <a name="expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.expressions"></a>

```typescript
public readonly expressions: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.filters"></a>

```typescript
public readonly filters: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList</a>

---

##### `measures`<sup>Required</sup> <a name="measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.measures"></a>

```typescript
public readonly measures: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList</a>

---

##### `expressionsInput`<sup>Optional</sup> <a name="expressionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput"></a>

```typescript
public readonly expressionsInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>[]

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput"></a>

```typescript
public readonly filtersInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>[]

---

##### `measuresInput`<sup>Optional</sup> <a name="measuresInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput"></a>

```typescript
public readonly measuresInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>[]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putBenchmarks">putBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putDataSources">putDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putInstructions">putInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetBenchmarks">resetBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetDataSources">resetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetInstructions">resetInstructions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBenchmarks` <a name="putBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putBenchmarks"></a>

```typescript
public putBenchmarks(value: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putBenchmarks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a>

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putConfig"></a>

```typescript
public putConfig(value: DataDatabricksGenieAgentsGenieAgentsDefinitionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a>

---

##### `putDataSources` <a name="putDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putDataSources"></a>

```typescript
public putDataSources(value: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a>

---

##### `putInstructions` <a name="putInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putInstructions"></a>

```typescript
public putInstructions(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putInstructions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a>

---

##### `resetBenchmarks` <a name="resetBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetBenchmarks"></a>

```typescript
public resetBenchmarks(): void
```

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetDataSources` <a name="resetDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetDataSources"></a>

```typescript
public resetDataSources(): void
```

##### `resetInstructions` <a name="resetInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetInstructions"></a>

```typescript
public resetInstructions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.benchmarks">benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.instructions">instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.benchmarksInput">benchmarksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.configInput">configInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.dataSourcesInput">dataSourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.instructionsInput">instructionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition">DataDatabricksGenieAgentsGenieAgentsDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `benchmarks`<sup>Required</sup> <a name="benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.benchmarks"></a>

```typescript
public readonly benchmarks: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.config"></a>

```typescript
public readonly config: DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference</a>

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.dataSources"></a>

```typescript
public readonly dataSources: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference</a>

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.instructions"></a>

```typescript
public readonly instructions: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference</a>

---

##### `benchmarksInput`<sup>Optional</sup> <a name="benchmarksInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.benchmarksInput"></a>

```typescript
public readonly benchmarksInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a>

---

##### `dataSourcesInput`<sup>Optional</sup> <a name="dataSourcesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.dataSourcesInput"></a>

```typescript
public readonly dataSourcesInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a>

---

##### `instructionsInput`<sup>Optional</sup> <a name="instructionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.instructionsInput"></a>

```typescript
public readonly instructionsInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksGenieAgentsGenieAgentsDefinition;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition">DataDatabricksGenieAgentsGenieAgentsDefinition</a>

---


### DataDatabricksGenieAgentsGenieAgentsList <a name="DataDatabricksGenieAgentsGenieAgentsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.get"></a>

```typescript
public get(index: number): DataDatabricksGenieAgentsGenieAgentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents">DataDatabricksGenieAgentsGenieAgents</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgents[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents">DataDatabricksGenieAgentsGenieAgents</a>[]

---


### DataDatabricksGenieAgentsGenieAgentsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksGenieAgentsGenieAgentsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.effectiveParentPath">effectiveParentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.parentPath">parentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference">DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents">DataDatabricksGenieAgentsGenieAgents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.definition"></a>

```typescript
public readonly definition: DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `effectiveParentPath`<sup>Required</sup> <a name="effectiveParentPath" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.effectiveParentPath"></a>

```typescript
public readonly effectiveParentPath: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `parentPath`<sup>Required</sup> <a name="parentPath" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.parentPath"></a>

```typescript
public readonly parentPath: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference">DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksGenieAgentsGenieAgentsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksGenieAgentsGenieAgents;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents">DataDatabricksGenieAgentsGenieAgents</a>

---


### DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsGenieAgentsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a>

---


### DataDatabricksGenieAgentsProviderConfigOutputReference <a name="DataDatabricksGenieAgentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksGenieAgents } from '@cdktn/provider-databricks'

new dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksGenieAgentsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a>

---



